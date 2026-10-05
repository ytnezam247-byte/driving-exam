import React, { useState } from 'react';
import { Question } from '../data/examQuestions';
import { Search, Eye, EyeOff, BookOpen, CheckCircle2, Printer, FileCode } from 'lucide-react';
import { QuestionVisual } from './QuestionVisual';

interface ReviewListProps {
  questions: Question[];
  onStartExamWithFilter?: (category?: string) => void;
  onOpenBloggerModal?: () => void;
}

export const ReviewList: React.FC<ReviewListProps> = ({ questions, onOpenBloggerModal }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [revealedIds, setRevealedIds] = useState<number[]>([]);

  const toggleReveal = (id: number) => {
    setRevealedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredQuestions = questions.filter(q => {
    const matchesSearch =
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.options.some(opt => opt.text.toLowerCase().includes(search.toLowerCase())) ||
      q.explanation.toLowerCase().includes(search.toLowerCase());

    const matchesCat = selectedCategory === 'all' || q.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
              Documento Base: Provas de Avaliação de Conhecimentos — Código da Estrada e Regulamentação
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Banco Completo de Questões (76 Perguntas Oficiais do Exame TVDE)
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Consulte e estude todas as 76 questões do exame oficial TVDE com gabarito, esquemas visuais de trânsito e referências ao Código da Estrada.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {onOpenBloggerModal && (
              <button
                onClick={onOpenBloggerModal}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg transition-colors print:hidden shadow-xs cursor-pointer"
                title="Descarregar ficheiro XML para importar no Blogger"
              >
                <FileCode className="w-3.5 h-3.5 text-orange-600" />
                <span>Exportar XML Blogger</span>
              </button>
            )}

            <button
              onClick={() => setShowAllAnswers(!showAllAnswers)}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {showAllAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showAllAnswers ? 'Ocultar Gabarito' : 'Gabarito Completo'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors print:hidden cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Caderno</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar por palavra (ex: velocidade, ultrapassagem, 112, rotunda...)"
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({questions.length})
            </button>
            <button
              onClick={() => setSelectedCategory('regras')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'regras'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Regras & Sinais
            </button>
            <button
              onClick={() => setSelectedCategory('defensiva')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'defensiva'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Condução Defensiva
            </button>
            <button
              onClick={() => setSelectedCategory('comunicacao')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'comunicacao'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Comunicação
            </button>
            <button
              onClick={() => setSelectedCategory('tvde')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'tvde'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Regime TVDE
            </button>
            <button
              onClick={() => setSelectedCategory('socorrismo')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'socorrismo'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Socorrismo & Emergência
            </button>
          </div>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const isRevealed = showAllAnswers || revealedIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 md:p-8 shadow-sm space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-bold text-slate-900">Questão {q.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{q.categoryLabel}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                    <span className="text-emerald-700 font-extrabold mr-2">{q.id}.</span>
                    {q.question}
                  </h3>
                </div>

                <button
                  onClick={() => toggleReveal(q.id)}
                  className="shrink-0 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors print:hidden"
                  title={isRevealed ? "Ocultar resposta" : "Ver resposta correta"}
                >
                  {isRevealed ? <EyeOff className="w-4 h-4 text-emerald-600" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Graphic visual if applicable */}
              {q.visualType && (
                <div className="py-2">
                  <QuestionVisual type={q.visualType} questionId={q.id} />
                </div>
              )}

              {/* Options */}
              <div className="space-y-2 pt-2">
                {q.options.map(opt => {
                  const isCorrect = opt.letter === q.correctAnswer;
                  let optStyle = "border-slate-200 bg-white text-slate-800";
                  let badgeStyle = "bg-slate-100 text-slate-700 border-slate-300";

                  if (isRevealed && isCorrect) {
                    optStyle = "border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium";
                    badgeStyle = "bg-emerald-600 text-white border-emerald-600";
                  }

                  return (
                    <div
                      key={opt.letter}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 text-sm md:text-base ${optStyle}`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs border shrink-0 ${badgeStyle}`}>
                        {opt.letter}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                      {isRevealed && isCorrect && (
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Correta</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Revealed Explanation */}
              {isRevealed && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-700 space-y-2 mt-4">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>Explicação Pedagógica & Legislação:</span>
                  </div>
                  <p className="leading-relaxed">{q.explanation}</p>
                  {q.legalReference && (
                    <div className="text-slate-500 text-xs font-mono pt-1 border-t border-slate-200">
                      {q.legalReference}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
