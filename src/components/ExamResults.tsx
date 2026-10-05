import React, { useState } from 'react';
import { Question, PASSING_PERCENTAGE } from '../data/examQuestions';
import { CheckCircle2, XCircle, Award, RotateCcw, Printer, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';
import { QuestionVisual } from './QuestionVisual';

interface ExamResultsProps {
  questions: Question[];
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  timeSpentSeconds: number;
  onRestart: () => void;
  onPracticeMistakes: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  questions,
  userAnswers,
  timeSpentSeconds,
  onRestart,
  onPracticeMistakes,
}) => {
  const [filter, setFilter] = useState<'all' | 'wrong' | 'correct'>('all');

  const correctQuestions = questions.filter(q => userAnswers[q.id] === q.correctAnswer);
  const wrongQuestions = questions.filter(q => userAnswers[q.id] !== q.correctAnswer);
  
  const score = correctQuestions.length;
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  const isPassed = percentage >= PASSING_PERCENTAGE;

  // Category breakdown calculation
  const categories = [
    { key: 'regras', name: 'Regras de Trânsito & Sinalização' },
    { key: 'defensiva', name: 'Condução Defensiva & Segurança' },
    { key: 'comunicacao', name: 'Relações Humanas & Comunicação' },
    { key: 'tvde', name: 'Regulamentação TVDE (Lei 45/2018)' },
    { key: 'socorrismo', name: 'Socorrismo & Procedimentos de Emergência' },
  ];

  const categoryStats = categories.map(cat => {
    const catQuestions = questions.filter(q => q.category === cat.key);
    const catCorrect = catQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
    return {
      ...cat,
      total: catQuestions.length,
      correct: catCorrect,
      percent: catQuestions.length > 0 ? Math.round((catCorrect / catQuestions.length) * 100) : 0,
    };
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const displayedQuestions = questions.filter(q => {
    const isCorrect = userAnswers[q.id] === q.correctAnswer;
    if (filter === 'wrong') return !isCorrect;
    if (filter === 'correct') return isCorrect;
    return true;
  });

  return (
    <div className="space-y-8 print:m-0 print:p-0">
      {/* Result Hero Banner */}
      <div
        className={`rounded-3xl border p-8 md:p-10 shadow-sm relative overflow-hidden ${
          isPassed
            ? 'bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 border-emerald-700/60 text-white'
            : 'bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 border-rose-800/60 text-white'
        }`}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm border border-white/20">
              <span>Resultado Oficial de Exame Simulado</span>
              <span>·</span>
              <span>76 Valores TVDE</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              {isPassed ? 'APROVADO NO EXAME' : 'NÃO APROVADO'}
            </h1>

            <p className="text-sm md:text-base text-slate-200 max-w-xl">
              {isPassed
                ? `Parabéns! Obteve a pontuação exigida pelo IMT para a certificação de motorista TVDE (mínimo de ${PASSING_PERCENTAGE}%: pelo menos ${Math.ceil(total * 0.75)} valores).`
                : `Ainda não atingiu o limiar de ${PASSING_PERCENTAGE}% (são necessárias pelo menos ${Math.ceil(total * 0.75)} respostas corretas em ${total}). Reveja as questões em que errou e tente novamente.`}
            </p>
          </div>

          {/* Score Badge */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center min-w-[200px]">
            <span className="text-5xl md:text-6xl font-black font-mono tracking-tighter tabular-nums">
              {percentage}%
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-200 font-semibold mt-1">
              {score} certas de {total}
            </span>
            <div className="mt-3 pt-3 border-t border-white/15 w-full flex justify-between text-xs text-slate-300">
              <span>Tempo:</span>
              <span className="font-mono font-bold">{formatTime(timeSpentSeconds)}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-3">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir Exame Completo</span>
          </button>

          {wrongQuestions.length > 0 && (
            <button
              onClick={onPracticeMistakes}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-sm"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Treinar as {wrongQuestions.length} Perguntas Erradas</span>
            </button>
          )}

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors ml-auto print:hidden"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Relatório</span>
          </button>
        </div>
      </div>

      {/* Module Breakdown Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-4">
          Desempenho por Módulo Temático
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryStats.map(stat => (
            <div key={stat.key} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900 text-sm">{stat.name}</span>
                <span className="font-mono font-bold text-sm text-slate-700">
                  {stat.correct}/{stat.total}
                </span>
              </div>

              <div className="mt-3">
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      stat.percent >= 75 ? 'bg-emerald-600' : 'bg-amber-500'
                    }`}
                    style={{ width: `${stat.percent}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 mt-1.5">
                  <span>{stat.percent >= 75 ? 'Excelente domínio' : 'Necessita reforço'}</span>
                  <span className="font-mono font-semibold">{stat.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Revisão Detalhada das Questões</h3>
            <p className="text-xs text-slate-500 mt-0.5">Analise cada resposta dada e estude a fundamentação jurídica do IMT</p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg print:hidden">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({questions.length})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'wrong' ? 'bg-white text-rose-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Erradas ({wrongQuestions.length})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'correct' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Certas ({correctQuestions.length})
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {displayedQuestions.map((q) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border p-6 shadow-sm transition-all ${
                  isCorrect ? 'border-slate-200' : 'border-rose-300 ring-1 ring-rose-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-bold text-slate-900">Questão {q.id}</span>
                      <span aria-hidden="true">·</span>
                      <span>{q.categoryLabel}</span>
                    </div>

                    <h4 className="text-base md:text-lg font-bold text-slate-900 leading-snug pt-1">
                      {q.question}
                    </h4>
                  </div>

                  <div className="shrink-0">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Correto</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Incorreto</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Road visual if any */}
                {q.visualType && (
                  <div className="my-4">
                    <QuestionVisual type={q.visualType} questionId={q.id} />
                  </div>
                )}

                {/* Options list with highlight */}
                <div className="mt-4 space-y-2">
                  {q.options.map(opt => {
                    const isSelectedByUser = userAnswer === opt.letter;
                    const isCorrectAnswer = opt.letter === q.correctAnswer;

                    let optStyle = "border-slate-200 bg-slate-50/50 text-slate-600";
                    let badgeStyle = "bg-slate-200 text-slate-600 border-slate-300";

                    if (isCorrectAnswer) {
                      optStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                      badgeStyle = "bg-emerald-600 text-white border-emerald-600";
                    } else if (isSelectedByUser && !isCorrectAnswer) {
                      optStyle = "border-rose-400 bg-rose-50 text-rose-950 line-through";
                      badgeStyle = "bg-rose-600 text-white border-rose-600";
                    }

                    return (
                      <div
                        key={opt.letter}
                        className={`p-3 rounded-xl border flex items-center gap-3 text-sm ${optStyle}`}
                      >
                        <span className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs border ${badgeStyle}`}>
                          {opt.letter}
                        </span>
                        <span className="flex-1">{opt.text}</span>
                        {isCorrectAnswer && (
                          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                            (Opção Correta)
                          </span>
                        )}
                        {isSelectedByUser && !isCorrectAnswer && (
                          <span className="text-xs font-bold text-rose-700 uppercase tracking-wide">
                            (A Sua Escolha)
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Official Explanation Box */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Fundamentação Oficial:</span>
                  </div>
                  <p className="leading-relaxed">{q.explanation}</p>
                  {q.legalReference && (
                    <div className="pt-1 text-slate-500 font-mono text-[11px]">
                      {q.legalReference}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
