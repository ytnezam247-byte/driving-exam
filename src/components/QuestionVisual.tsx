import React from 'react';
import { Question } from '../data/examQuestions';

interface QuestionVisualProps {
  type?: Question['visualType'];
  questionId: number;
}

export const QuestionVisual: React.FC<QuestionVisualProps> = ({ type, questionId }) => {
  if (!type) return null;

  switch (type) {
    case 'yield_sign':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-amber-400">Sinalização de Cedência de Passagem (Sinal B1)</span>
            <span className="font-mono text-slate-400">Art. 31.º Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <div className="relative flex flex-col items-center">
              <svg viewBox="0 0 160 160" className="w-32 h-32 select-none" xmlns="http://www.w3.org/2000/svg">
                {/* Triangular Yield Sign (inverted triangle) */}
                <polygon points="10,20 150,20 80,145" fill="#ef4444" stroke="#dc2626" strokeWidth="4" />
                <polygon points="26,30 134,30 80,125" fill="#ffffff" />
              </svg>
              <span className="mt-2 text-xs font-bold text-slate-300">Sinal B1: Cedência de Passagem</span>
            </div>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">O que determina este sinal?</p>
              <p className="text-slate-400 leading-relaxed">
                O condutor deve <strong>ceder a passagem a todos os veículos</strong> que transitem na via a que se aproxima, devendo abrandar ou parar se necessário.
              </p>
            </div>
          </div>
        </div>
      );

    case 'stop_sign':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-rose-400">Sinal de Paragem Obrigatória no Cruzamento (Sinal B2)</span>
            <span className="font-mono text-slate-400">Art. 32.º Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <div className="relative flex flex-col items-center">
              <svg viewBox="0 0 160 160" className="w-32 h-32 select-none" xmlns="http://www.w3.org/2000/svg">
                {/* Octagonal STOP Sign */}
                <polygon points="48,12 112,12 148,48 148,112 112,148 48,148 12,112 12,48" fill="#dc2626" stroke="#ffffff" strokeWidth="4" />
                <text x="80" y="93" fill="#ffffff" fontSize="34" fontWeight="900" fontStretch="condensed" textAnchor="middle" fontFamily="sans-serif">STOP</text>
              </svg>
              <span className="mt-2 text-xs font-bold text-slate-300">Sinal B2: STOP</span>
            </div>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">Paragem Obrigatória</p>
              <p className="text-slate-400 leading-relaxed">
                Obrigação de <strong>parar obrigatoriamente antes de avançar</strong> para a interseção e ceder a passagem a todos os veículos que circulem na via principal.
              </p>
            </div>
          </div>
        </div>
      );

    case 'speed_40':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-amber-400">Sinalização de Limitação de Velocidade (Sinal C4a)</span>
            <span className="font-mono text-slate-400">Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-white border-8 border-red-600 flex items-center justify-center shadow-lg">
                <span className="text-4xl font-black text-slate-900 font-mono tracking-tighter">40</span>
              </div>
              <span className="mt-2 text-xs font-bold text-slate-300">Sinal C4a: Proibição &gt; 40 km/h</span>
            </div>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">Velocidade no Local</p>
              <p className="text-slate-400 leading-relaxed">
                Situação rodoviária da prova oficial de avaliação TVDE do IMT.
              </p>
            </div>
          </div>
        </div>
      );

    case 'tunnel':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-blue-400">Sinal de Informação de Túnel (Sinal H1a)</span>
            <span className="font-mono text-slate-400">Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-lg bg-blue-600 border-2 border-white flex flex-col items-center justify-center shadow-lg p-2">
                <svg viewBox="0 0 60 60" className="w-16 h-16" fill="none" stroke="#ffffff" strokeWidth="3">
                  <path d="M 10 50 L 10 30 Q 30 5 50 30 L 50 50 Z" fill="#1e293b" />
                  <line x1="20" y1="50" x2="25" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="40" y1="50" x2="35" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              </div>
              <span className="mt-2 text-xs font-bold text-slate-300">Sinal H1a: Túnel</span>
            </div>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">Indica a existência de um túnel</p>
              <p className="text-slate-400 leading-relaxed">
                Obrigatório acender as luzes de cruzamento (médios), proibido parar, estacionar, fazer marcha-atrás ou inversão do sentido de marcha.
              </p>
            </div>
          </div>
        </div>
      );

    case 'parking':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-blue-400">Sinal de Estacionamento Autorizado (Sinal H1a / P)</span>
            <span className="font-mono text-slate-400">Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-lg bg-blue-600 border-2 border-white flex items-center justify-center shadow-lg">
                <span className="text-5xl font-black text-white font-sans">P</span>
              </div>
              <span className="mt-2 text-xs font-bold text-slate-300">Sinal: Parque / Estacionamento</span>
            </div>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">Estacionamento Autorizado</p>
              <p className="text-slate-400 leading-relaxed">
                Indica um local onde os condutores podem estacionar os seus veículos de acordo com as regras aplicáveis.
              </p>
            </div>
          </div>
        </div>
      );

    case 'flashing_yellow':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-amber-400">Semáforo com Luz Amarela Intermitente</span>
            <span className="font-mono text-slate-400">Art. 69.º Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <div className="flex flex-col items-center">
              <div className="w-16 h-40 rounded-xl bg-slate-900 border-2 border-slate-700 flex flex-col items-center justify-around py-3 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-slate-800" />
                <div className="w-8 h-8 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50 animate-pulse" />
                <div className="w-8 h-8 rounded-full bg-slate-800" />
              </div>
              <span className="mt-2 text-xs font-bold text-amber-400">Amarelo Intermitente</span>
            </div>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">Pode passar, mas com cuidado</p>
              <p className="text-slate-400 leading-relaxed">
                Autoriza a passagem, mas obriga os condutores a moderar a velocidade e a redobrar a atenção, cumprindo a regra de prioridade.
              </p>
            </div>
          </div>
        </div>
      );

    case 'crosswalk':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-emerald-400">Passagem para Peões (Passadeira)</span>
            <span className="font-mono text-slate-400">Art. 103.º Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <svg viewBox="0 0 200 120" className="w-48 h-auto select-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="200" height="120" fill="#1e293b" />
              {/* Zebra stripes */}
              <rect x="20" y="20" width="16" height="80" fill="#ffffff" />
              <rect x="50" y="20" width="16" height="80" fill="#ffffff" />
              <rect x="80" y="20" width="16" height="80" fill="#ffffff" />
              <rect x="110" y="20" width="16" height="80" fill="#ffffff" />
              <rect x="140" y="20" width="16" height="80" fill="#ffffff" />
              <rect x="170" y="20" width="16" height="80" fill="#ffffff" />
              {/* Pedestrian crossing */}
              <circle cx="100" cy="50" r="8" fill="#38bdf8" />
              <line x1="100" y1="58" x2="100" y2="80" stroke="#38bdf8" strokeWidth="4" />
            </svg>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">Parar e Deixar o Peão Atravessar</p>
              <p className="text-slate-400 leading-relaxed">
                Ao aproximar-se de uma passagem para peões com pessoas a atravessar ou prestes a fazê-lo, o condutor deve parar e dar passagem.
              </p>
            </div>
          </div>
        </div>
      );

    case 'priority_crossing':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-emerald-400">Cruzamento sem Sinalização: Prioridade à Direita</span>
            <span className="font-mono text-slate-400">Art. 30.º Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <svg viewBox="0 0 200 160" className="w-48 h-auto select-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="200" height="160" fill="#0f172a" />
              {/* Road cross */}
              <rect x="70" y="0" width="60" height="160" fill="#1e293b" />
              <rect x="0" y="50" width="200" height="60" fill="#1e293b" />
              {/* Center dashes */}
              <line x1="100" y1="0" x2="100" y2="160" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="0" y1="80" x2="200" y2="80" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6" />
              {/* Vehicle from the right */}
              <rect x="140" y="55" width="40" height="20" rx="4" fill="#10b981" />
              <text x="160" y="69" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">1.º</text>
            </svg>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">O veículo que circula pela direita avança primeiro</p>
              <p className="text-slate-400 leading-relaxed">
                Salvo sinalização regulamentar em contrário, tem prioridade o condutor que se apresente pela direita.
              </p>
            </div>
          </div>
        </div>
      );

    case 'priority_road':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-amber-400">Entroncamento com Via Secundária (Sinal A22)</span>
            <span className="font-mono text-slate-400">Código da Estrada</span>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950">
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 160 160" className="w-32 h-32 select-none" xmlns="http://www.w3.org/2000/svg">
                {/* Triangular Danger Sign */}
                <polygon points="80,15 150,140 10,140" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
                {/* Priority branch symbol: thick line with side road */}
                <line x1="80" y1="60" x2="80" y2="125" stroke="#0f172a" strokeWidth="12" />
                <line x1="80" y1="95" x2="115" y2="95" stroke="#0f172a" strokeWidth="6" />
              </svg>
              <span className="mt-2 text-xs font-bold text-slate-300">Sinal A22: Via com Prioridade</span>
            </div>
            <div className="max-w-xs text-xs text-slate-300 space-y-1.5 border-l border-slate-800 pl-4">
              <p className="font-bold text-white text-sm">Não deve ceder a passagem</p>
              <p className="text-slate-400 leading-relaxed">
                O motorista na via principal assinalada tem prioridade de passagem sobre os veículos que entrem pelo entroncamento.
              </p>
            </div>
          </div>
        </div>
      );

    case 'private_road':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-amber-400">Situação Rodoviária: Saída de Prédio Particular</span>
            <span className="font-mono text-slate-400">Art. 31.º Código da Estrada</span>
          </div>
          <div className="p-4 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800/90 to-slate-900">
            <svg viewBox="0 0 540 240" className="w-full max-w-lg h-auto select-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="540" height="80" fill="#334155" />
              <rect x="210" y="0" width="120" height="80" fill="#1e293b" />
              <text x="270" y="25" fill="#fde68a" fontSize="10" textAnchor="middle" fontWeight="bold">Caminho Particular</text>
              <rect x="245" y="35" width="50" height="35" rx="5" fill="#3b82f6" />
              <rect x="0" y="80" width="540" height="25" fill="#64748b" />
              <text x="60" y="97" fill="#f1f5f9" fontSize="10" fontWeight="bold">Passeio de Peões</text>
              <rect x="0" y="105" width="540" height="135" fill="#0f172a" />
              <line x1="0" y1="170" x2="540" y2="170" stroke="#ffffff" strokeWidth="3" strokeDasharray="25 15" />
              <rect x="180" y="185" width="180" height="40" rx="8" fill="#b91c1c" />
              <text x="270" y="205" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">OBRIGAÇÃO:</text>
              <text x="270" y="219" fill="#fecaca" fontSize="9" textAnchor="middle">CEDER PASSAGEM A TODOS</text>
            </svg>
          </div>
        </div>
      );

    case 'roundabout':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-emerald-400">Circulação e Sinalização em Rotundas</span>
            <span className="font-mono text-slate-400">Art. 14.º-A Código da Estrada</span>
          </div>
          <div className="p-4 flex flex-col items-center justify-center bg-slate-950">
            <div className="flex items-center gap-4 text-xs text-slate-300 max-w-md">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                ↺
              </div>
              <div>
                <p className="font-semibold text-white">Via mais à direita apenas para sair na 1.ª saída:</p>
                <p className="text-slate-400 mt-1">Se pretender sair noutras saídas, deve ocupar a via interior correspondente e sinalizar atempadamente com o pisca ao aproximar-se da saída.</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'triangle':
      return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <div className="p-3 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-amber-400">Pré-Sinalização de Perigo (Avaria ou Acidente)</span>
            <span className="font-mono text-slate-400">Art. 88.º Código da Estrada</span>
          </div>
          <div className="p-4 flex items-center justify-around bg-slate-950">
            <div className="text-center">
              <span className="text-3xl font-black text-sky-400 font-mono">≥ 30 m</span>
              <p className="text-xs text-slate-400 mt-1">Distância do Triângulo ao Carro</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-black text-emerald-400 font-mono">≥ 100 m</span>
              <p className="text-xs text-slate-400 mt-1">Visibilidade Mínima Exigida</p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
