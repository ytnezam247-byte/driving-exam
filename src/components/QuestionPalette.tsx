import React, { useState } from 'react';
import { Bookmark, Check, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Question } from '../data/examQuestions';

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestions: number[];
  onFinishExam: () => void;
  mode: 'exam' | 'study';
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentIndex,
  onSelectIndex,
  userAnswers,
  flaggedQuestions,
  onFinishExam,
  mode,
}) => {
  const [filter, setFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');

  const answeredCount = Object.keys(userAnswers).length;
  const flaggedCount = flaggedQuestions.length;
  const unansweredCount = questions.length - answeredCount;

  const filteredQuestions = questions.filter((q, idx) => {
    const isAnswered = userAnswers[q.id] !== undefined;
    const isFlagged = flaggedQuestions.includes(q.id);

    if (filter === 'unanswered') return !isAnswered;
    if (filter === 'flagged') return isFlagged;
    return true;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-5">
      {/* Title & Quick Stats */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-slate-900 text-sm tracking-tight">Grelha de Respostas</h3>
          <div className="text-xs text-slate-500 mt-0.5">
            <span>{answeredCount} de {questions.length} respondidas</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {Math.round((answeredCount / questions.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Filter Segmented Control (Zero-pill compliant) */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
        <button
          onClick={() => setFilter('all')}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors text-center ${
            filter === 'all'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Todas ({questions.length})
        </button>
        <button
          onClick={() => setFilter('unanswered')}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors text-center ${
            filter === 'unanswered'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Faltam ({unansweredCount})
        </button>
        <button
          onClick={() => setFilter('flagged')}
          className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors text-center ${
            filter === 'flagged'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Marcadas ({flaggedCount})
        </button>
      </div>

      {/* 76-Question Grid */}
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-6 lg:grid-cols-8 gap-1.5 max-h-[360px] overflow-y-auto pr-1">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = userAnswers[q.id] !== undefined;
          const isFlagged = flaggedQuestions.includes(q.id);
          const isCorrectInStudy = mode === 'study' && isAnswered && userAnswers[q.id] === q.correctAnswer;
          const isWrongInStudy = mode === 'study' && isAnswered && userAnswers[q.id] !== q.correctAnswer;

          // Compute style
          let buttonClass = "border text-slate-700 bg-white hover:border-slate-300";

          if (isCurrent) {
            buttonClass = "border-2 border-emerald-600 ring-2 ring-emerald-600/20 font-bold bg-white text-emerald-950";
          } else if (mode === 'study' && isAnswered) {
            if (isCorrectInStudy) {
              buttonClass = "bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold";
            } else if (isWrongInStudy) {
              buttonClass = "bg-red-50 border-red-400 text-red-800 font-semibold";
            }
          } else if (isAnswered) {
            buttonClass = "bg-slate-800 border-slate-800 text-white font-semibold";
          }

          if (isFlagged && !isCurrent) {
            buttonClass += " border-amber-400 bg-amber-50/60";
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
              className={`relative h-10 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer font-mono text-xs ${buttonClass}`}
            >
              <span>{q.id}</span>

              {/* Status micro-indicators */}
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-1 ring-white" />
              )}

              {isAnswered && mode === 'exam' && !isCurrent && (
                <span className="text-[10px] text-slate-300 font-sans">
                  {userAnswers[q.id]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-slate-800 inline-block" />
          <span>Respondida</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded border border-slate-300 bg-white inline-block" />
          <span>Por responder</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded border-2 border-emerald-600 bg-white inline-block" />
          <span>Atual</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-amber-400 inline-block" />
          <span>Sinalizada</span>
        </div>
      </div>

      {/* Submit / Finish Button */}
      <div className="pt-2">
        <button
          onClick={onFinishExam}
          className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Entregar Exame</span>
        </button>
        {unansweredCount > 0 && (
          <p className="text-center text-[11px] text-slate-400 mt-2">
            Ainda restam {unansweredCount} perguntas sem resposta
          </p>
        )}
      </div>
    </div>
  );
};
