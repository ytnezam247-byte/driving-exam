/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS_DATA, Question, EXAM_TITLE, EXAM_SUBTITLE, ExamSessionResult } from './data/examQuestions';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { QuestionPalette } from './components/QuestionPalette';
import { ExamResults } from './components/ExamResults';
import { ReviewList } from './components/ReviewList';
import { ManualTvde } from './components/ManualTvde';
import { BloggerExportModal } from './components/BloggerExportModal';
import { soundManager } from './utils/audio';
import { Clock, Play, Pause, AlertCircle, Sparkles, BookOpen, CheckCircle, RotateCcw } from 'lucide-react';

const INITIAL_EXAM_DURATION_SECONDS = 60 * 60; // 60 minutes official exam timer

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'study' | 'review' | 'manual'>('simulator');
  const [mode, setMode] = useState<'exam' | 'study'>('exam');
  
  // Active questions dataset (allows subset for "Treinar Erradas")
  const [questions, setQuestions] = useState<Question[]>(QUESTIONS_DATA);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  
  // Timer states
  const [timeRemaining, setTimeRemaining] = useState<number>(INITIAL_EXAM_DURATION_SECONDS);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  
  // Sound & Modals
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [isBloggerModalOpen, setIsBloggerModalOpen] = useState<boolean>(false);

  // Sync sound manager
  useEffect(() => {
    soundManager.enabled = isSoundEnabled;
  }, [isSoundEnabled]);

  // Sync mode with tab if clicked from header
  const handleSelectTab = (tab: 'simulator' | 'study' | 'review' | 'manual') => {
    setActiveTab(tab);
    if (tab === 'study') {
      setMode('study');
    } else if (tab === 'simulator') {
      setMode('exam');
    }
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && !isCompleted && activeTab === 'simulator') {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // Auto complete on timeout
            setIsCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, isCompleted, activeTab]);

  const currentQuestion = questions[currentIndex] || questions[0];

  const handleSelectAnswer = (letter: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: letter,
    }));
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions(prev =>
      prev.includes(currentQuestion.id)
        ? prev.filter(id => id !== currentQuestion.id)
        : [...prev, currentQuestion.id]
    );
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleTriggerFinishExam = () => {
    const unanswered = questions.length - Object.keys(userAnswers).length;
    if (unanswered > 0 && mode === 'exam') {
      setShowConfirmModal(true);
    } else {
      finalizeExam();
    }
  };

  const finalizeExam = () => {
    setShowConfirmModal(false);
    setIsCompleted(true);
    setIsTimerRunning(false);

    // Check if passed
    const correctCount = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
    const isPassed = (correctCount / questions.length) >= 0.75;
    if (isPassed) {
      soundManager.playFanfare();
    }
  };

  const handleRestartFullExam = () => {
    setQuestions(QUESTIONS_DATA);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions([]);
    setIsCompleted(false);
    setTimeRemaining(INITIAL_EXAM_DURATION_SECONDS);
    setTimeElapsed(0);
    setIsTimerRunning(true);
    setActiveTab(mode === 'study' ? 'study' : 'simulator');
  };

  const handlePracticeMistakes = () => {
    const wrong = QUESTIONS_DATA.filter(q => userAnswers[q.id] !== q.correctAnswer);
    if (wrong.length === 0) return;
    setQuestions(wrong);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions([]);
    setIsCompleted(false);
    setMode('study');
    setActiveTab('study');
    setTimeRemaining(INITIAL_EXAM_DURATION_SECONDS);
    setTimeElapsed(0);
    setIsTimerRunning(true);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header
        currentTab={activeTab}
        onSelectTab={handleSelectTab}
        onResetExam={handleRestartFullExam}
        isSoundEnabled={isSoundEnabled}
        onToggleSound={() => setIsSoundEnabled(!isSoundEnabled)}
        onOpenBloggerModal={() => setIsBloggerModalOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* TAB 1 & 2: SIMULATOR OR STUDY */}
        {(activeTab === 'simulator' || activeTab === 'study') && (
          <div className="space-y-6">
            {!isCompleted ? (
              <>
                {/* Control & Mode Switcher Bar */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 md:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                    {/* Exam Mode Toggle Segmented Control */}
                    <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
                      <button
                        onClick={() => {
                          setMode('exam');
                          setActiveTab('simulator');
                        }}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                          mode === 'exam'
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Modo Exame Oficial
                      </button>
                      <button
                        onClick={() => {
                          setMode('study');
                          setActiveTab('study');
                        }}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                          mode === 'study'
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Modo Estudo / Treino
                      </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500">
                      <span>Prova Oficial TVDE · 76 Questões (60 Minutos)</span>
                      <span aria-hidden="true">·</span>
                      <span>Mínimo 75% para Aprovação</span>
                    </div>
                  </div>

                  {/* Timer & Stats Area */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm tabular-nums ${
                          timeRemaining < 300 && mode === 'exam'
                            ? 'bg-rose-50 border-rose-200 text-rose-700 animate-pulse'
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span>{mode === 'exam' ? formatTimer(timeRemaining) : formatTimer(timeElapsed)}</span>
                      </div>

                      <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        title={isTimerRunning ? "Pausar cronómetro" : "Continuar cronómetro"}
                        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
                      >
                        {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="text-xs text-slate-600 font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      Respondidas: <span className="font-mono text-slate-900 font-bold">{answeredCount}</span>/{questions.length}
                    </div>
                  </div>
                </div>

                {/* Main Exam Grid: Left Question, Right Palette */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 order-1">
                    <QuestionCard
                      question={currentQuestion}
                      questionIndex={currentIndex}
                      totalQuestions={questions.length}
                      selectedAnswer={userAnswers[currentQuestion.id]}
                      onSelectAnswer={handleSelectAnswer}
                      isFlagged={flaggedQuestions.includes(currentQuestion.id)}
                      onToggleFlag={handleToggleFlag}
                      mode={mode}
                      onPrev={handlePrev}
                      onNext={handleNext}
                      hasPrev={currentIndex > 0}
                      hasNext={currentIndex < questions.length - 1}
                      onFinishExam={handleTriggerFinishExam}
                    />
                  </div>

                  <div className="lg:col-span-4 order-2 lg:sticky lg:top-20 space-y-4">
                    <QuestionPalette
                      questions={questions}
                      currentIndex={currentIndex}
                      onSelectIndex={(idx) => setCurrentIndex(idx)}
                      userAnswers={userAnswers}
                      flaggedQuestions={flaggedQuestions}
                      onFinishExam={handleTriggerFinishExam}
                      mode={mode}
                    />

                    {/* Helpful Exam Tip Box */}
                    <div className="bg-slate-100/80 rounded-xl p-4 border border-slate-200/60 text-xs text-slate-600 space-y-1">
                      <div className="font-bold text-slate-800 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Dica de Exame IMT</span>
                      </div>
                      <p className="leading-relaxed">
                        Pode rever e alterar as suas respostas livremente na grelha antes de clicar em <strong>Entregar Exame</strong>. Utilize a opção "Sinalizar" para voltar às perguntas com mais dúvida.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* RESULTS / SCORECARD SCREEN */
              <ExamResults
                questions={questions}
                userAnswers={userAnswers}
                timeSpentSeconds={timeElapsed}
                onRestart={handleRestartFullExam}
                onPracticeMistakes={handlePracticeMistakes}
              />
            )}
          </div>
        )}

        {/* TAB 3: REVIEW LIST (PDF QUESTION BANK) */}
        {activeTab === 'review' && (
          <ReviewList
            questions={QUESTIONS_DATA}
            onOpenBloggerModal={() => setIsBloggerModalOpen(true)}
          />
        )}

        {/* TAB 4: MANUAL & LEGISLATION */}
        {activeTab === 'manual' && (
          <ManualTvde />
        )}
      </main>

      {/* Confirmation Modal before submitting with unanswered questions */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Ainda tem perguntas por responder!
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Deixou <strong className="text-amber-700 font-bold">{unansweredCount} de {questions.length}</strong> perguntas sem resposta. As perguntas não respondidas serão contabilizadas como erradas.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl border border-slate-300 font-semibold text-sm text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Voltar ao Exame
              </button>
              <button
                onClick={finalizeExam}
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 font-bold text-sm text-white shadow-sm transition-colors"
              >
                Entregar Mesmo Assim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clean quiet footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">TVDE Teste</span>
            <span aria-hidden="true">·</span>
            <span>Simulador Baseado no Código da Estrada e Lei n.º 45/2018</span>
          </div>
          <div>
            <span>76 Questões Oficiais · Provas de Avaliação de Conhecimentos TVDE</span>
          </div>
        </div>
      </footer>

      {/* Blogger Export Modal */}
      <BloggerExportModal
        isOpen={isBloggerModalOpen}
        onClose={() => setIsBloggerModalOpen(false)}
      />
    </div>
  );
}
