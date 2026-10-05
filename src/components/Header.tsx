import React from 'react';
import { Volume2, VolumeX, RotateCcw, FileCode } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HeaderProps {
  currentTab: 'simulator' | 'study' | 'review' | 'manual';
  onSelectTab: (tab: 'simulator' | 'study' | 'review' | 'manual') => void;
  onResetExam: () => void;
  isSoundEnabled: boolean;
  onToggleSound: () => void;
  onOpenBloggerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onResetExam,
  isSoundEnabled,
  onToggleSound,
  onOpenBloggerModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('simulator')}
          className="text-left font-black tracking-tight text-xl text-slate-900 flex items-center gap-1.5 focus:outline-none cursor-pointer"
        >
          <span>TVDE</span>
          <span className="text-emerald-600">TESTE</span>
        </button>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => onSelectTab('simulator')}
            className={`transition-colors pb-1 border-b-2 cursor-pointer ${
              currentTab === 'simulator'
                ? 'border-emerald-600 text-slate-900 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Simulador de Exame
          </button>
          <button
            onClick={() => onSelectTab('study')}
            className={`transition-colors pb-1 border-b-2 cursor-pointer ${
              currentTab === 'study'
                ? 'border-emerald-600 text-slate-900 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Modo Estudo
          </button>
          <button
            onClick={() => onSelectTab('review')}
            className={`transition-colors pb-1 border-b-2 cursor-pointer ${
              currentTab === 'review'
                ? 'border-emerald-600 text-slate-900 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Revisão Geral (PDF)
          </button>
          <button
            onClick={() => onSelectTab('manual')}
            className={`transition-colors pb-1 border-b-2 cursor-pointer ${
              currentTab === 'manual'
                ? 'border-emerald-600 text-slate-900 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Resumo & Legislação
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBloggerModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            title="Descarregar ficheiro XML para importar no Blogger / Blogspot"
          >
            <FileCode className="w-3.5 h-3.5 text-orange-600" />
            <span>XML Blogger</span>
          </button>

          <button
            onClick={onToggleSound}
            title={isSoundEnabled ? "Desativar som" : "Ativar som"}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Som"
          >
            {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={onResetExam}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar row */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-100 px-2 py-2 bg-slate-50/90 text-xs font-medium">
        <button
          onClick={() => onSelectTab('simulator')}
          className={`px-2 py-1 rounded ${currentTab === 'simulator' ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-600'}`}
        >
          Exame
        </button>
        <button
          onClick={() => onSelectTab('study')}
          className={`px-2 py-1 rounded ${currentTab === 'study' ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-600'}`}
        >
          Estudo
        </button>
        <button
          onClick={() => onSelectTab('review')}
          className={`px-2 py-1 rounded ${currentTab === 'review' ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-600'}`}
        >
          Perguntas
        </button>
        <button
          onClick={() => onSelectTab('manual')}
          className={`px-2 py-1 rounded ${currentTab === 'manual' ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-600'}`}
        >
          Legislação
        </button>
        <button
          onClick={onOpenBloggerModal}
          className="px-2 py-1 rounded font-bold text-orange-700 bg-orange-50 border border-orange-200"
        >
          XML
        </button>
      </div>
    </header>
  );
};

