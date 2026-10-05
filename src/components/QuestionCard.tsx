import React from 'react';
import { Question } from '../data/examQuestions';
import { QuestionVisual } from './QuestionVisual';
import { Bookmark, BookmarkCheck, CheckCircle2, XCircle, AlertCircle, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D';
  onSelectAnswer: (letter: 'A' | 'B' | 'C' | 'D') => void;
  isFlagged: boolean;
  onToggleFlag: () => void;
  mode: 'exam' | 'study';
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onFinishExam: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  isFlagged,
  onToggleFlag,
  mode,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onFinishExam,
}) => {
  const hasAnswered = selectedAnswer !== undefined;
  const isStudy = mode === 'study';

  const handleOptionClick = (letter: 'A' | 'B' | 'C' | 'D') => {
    onSelectAnswer(letter);
    if (isStudy) {
      if (letter === question.correctAnswer) {
        soundManager.playCorrect();
      } else {
        soundManager.playWrong();
      }
    } else {
      soundManager.playSelect();
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col">
      {/* Top Meta Bar */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="font-bold text-slate-900 text-sm">Pergunta {questionIndex + 1} de {totalQuestions}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{question.categoryLabel}</span>
          {isStudy && (
            <>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-semibold">Modo Estudo Ativo</span>
            </>
          )}
        </div>

        <button
          onClick={onToggleFlag}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
            isFlagged
              ? 'bg-amber-100 text-amber-800 border border-amber-300'
              : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-transparent'
          }`}
          title="Marcar questão para rever mais tarde"
        >
          {isFlagged ? (
            <>
              <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Sinalizada para Revisão</span>
            </>
          ) : (
            <>
              <Bookmark className="w-3.5 h-3.5 text-slate-400" />
              <span>Sinalizar Questão</span>
            </>
          )}
        </button>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Question Statement */}
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
          <span className="text-emerald-700 font-extrabold mr-2">{question.id}.</span>
          {question.question}
        </h2>

        {/* Visual / Driving Situation (if available) */}
        {question.visualType && (
          <div className="my-4">
            <QuestionVisual type={question.visualType} questionId={question.id} />
          </div>
        )}

        {/* Answer Options */}
        <div className="space-y-3 pt-2">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.letter;
            const isCorrect = option.letter === question.correctAnswer;
            
            // Dynamic styling based on mode and selection
            let containerStyle = "border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 text-slate-800 bg-white";
            let badgeStyle = "bg-slate-100 text-slate-700 border-slate-300";

            if (mode === 'exam') {
              if (isSelected) {
                containerStyle = "border-emerald-600 bg-emerald-50/40 text-emerald-950 ring-2 ring-emerald-500/20";
                badgeStyle = "bg-emerald-600 text-white border-emerald-600 font-bold";
              }
            } else {
              // Study mode
              if (hasAnswered) {
                if (isCorrect) {
                  containerStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-medium";
                  badgeStyle = "bg-emerald-600 text-white border-emerald-600 font-bold";
                } else if (isSelected && !isCorrect) {
                  containerStyle = "border-red-400 bg-red-50/70 text-red-950";
                  badgeStyle = "bg-red-600 text-white border-red-600 font-bold";
                } else {
                  containerStyle = "border-slate-200 opacity-60 bg-white text-slate-600";
                  badgeStyle = "bg-slate-100 text-slate-500 border-slate-200";
                }
              } else if (isSelected) {
                containerStyle = "border-slate-400 bg-slate-50";
              }
            }

            return (
              <button
                key={option.letter}
                onClick={() => handleOptionClick(option.letter)}
                className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all flex items-start gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${containerStyle}`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 border ${badgeStyle}`}
                >
                  {option.letter}
                </span>

                <div className="flex-1 pt-0.5">
                  <span className="text-base md:text-lg leading-relaxed">{option.text}</span>
                </div>

                {/* Feedback icon in study mode */}
                {isStudy && hasAnswered && (
                  <div className="shrink-0 pt-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-red-500" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Explanation in Study Mode */}
        {isStudy && hasAnswered && (
          <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Explicação Oficial & Base Jurídica
              </h4>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed">
              {question.explanation}
            </p>

            {question.legalReference && (
              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Referência:</span>
                <span>{question.legalReference}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="px-6 py-4 bg-slate-50/90 border-t border-slate-200 flex items-center justify-between mt-auto">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
            hasPrev
              ? 'text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              : 'text-slate-300 border border-transparent cursor-not-allowed'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        <div className="flex items-center gap-3">
          {hasNext ? (
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors"
            >
              <span>Próxima</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onFinishExam}
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finalizar Exame</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
