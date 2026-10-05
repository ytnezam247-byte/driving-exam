import React from 'react';
import { ShieldCheck, Clock, AlertTriangle, Users, Car, PhoneCall, Gauge, CheckCircle2 } from 'lucide-react';

export const ManualTvde: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
          Guia de Estudo Sintético · Certificação IMT
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Resumo Normativo e Regras Essenciais TVDE
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Síntese dos tópicos fundamentais do Módulo 1 (Código da Estrada, Condução Defensiva, Relações Interpessoais e Regime Jurídico TVDE — Lei n.º 45/2018) para aprovação no exame de motorista.
        </p>
      </div>

      {/* Grid of Key Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topic 1: TVDE Vehicle Requirements */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Requisitos do Veículo TVDE</h3>
              <p className="text-xs text-slate-500">Lei n.º 45/2018 (IMT)</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Inspeção Técnica:</strong> Obrigatória 1 ano após a data da primeira matrícula e, subsequentemente, <strong>anualmente</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Idade máxima do veículo:</strong> 7 anos a contar da data da primeira matrícula.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Identificação:</strong> Dístico TVDE visível no canto inferior direito do para-brisas e vidro traseiro.</span>
            </li>
          </ul>
        </div>

        {/* Topic 2: Speed Limits & Overtaking */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Velocidades e Ultrapassagens</h3>
              <p className="text-xs text-slate-500">Código da Estrada Art. 27.º e 37.º</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Dentro das Localidades:</strong> Limite máximo geral de <strong>50 km/h</strong> para veículos ligeiros.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Ultrapassagem pela Direita:</strong> Só é permitida quando o veículo da frente sinalizar que vai virar ou parar à esquerda.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Proibição de Ultrapassar:</strong> Em lombas, curvas sem visibilidade e cruzamentos sem visibilidade.</span>
            </li>
          </ul>
        </div>

        {/* Topic 3: Right of Way & Roundabouts */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Prioridades e Manobras</h3>
              <p className="text-xs text-slate-500">Código da Estrada Art. 14.º-A e 31.º</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Saída de Caminho Particular:</strong> Obrigação absoluta de <strong>ceder a passagem a todos</strong> os veículos e peões na via pública.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Prioridade à Direita:</strong> Salvo sinal em contrário, em cruzamentos sem sinalização deve ceder passagem a qualquer veículo que se apresente pela direita.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Rotundas:</strong> Mudanças de via exigem sinalização atempada (pisca) e verificação prévia de segurança.</span>
            </li>
          </ul>
        </div>

        {/* Topic 4: Adverse Weather & Pre-warning Triangle */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Segurança em Avaria & Chuva</h3>
              <p className="text-xs text-slate-500">Condução Defensiva & Sinalização</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Triângulo de Perigo:</strong> Colocado a <strong>pelo menos 30 metros</strong> do veículo e visível a pelo menos 100 metros.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Piso Escorregadio ou Neve:</strong> Reduzir velocidade, evitar manobras ou travagens bruscas, usar correntes de neve em rodados motrizes se necessário.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Chuva:</strong> Reduz drasticamente a visibilidade e aumenta a distância de travagem.</span>
            </li>
          </ul>
        </div>

        {/* Topic 5: Customer Relations & Reduced Mobility */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Passageiros & Comunicação</h3>
              <p className="text-xs text-slate-500">Relações Interpessoais no TVDE</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Mobilidade Reduzida:</strong> O tempo de espera deve ser <strong>superior a 15 minutos</strong> para permitir embarque seguro e calmo.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Conflitos ou Passageiro Agressivo:</strong> Manter a calma, ser cordial, praticar escuta ativa e evitar responder com agressividade.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Feedback e Tom de Voz:</strong> Feedback é a reação/resposta à mensagem emitida; o tom de voz transmite clareza e empatia.</span>
            </li>
          </ul>
        </div>

        {/* Topic 6: Emergency 112 Protocol */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center font-bold">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Protocolo de Emergência 112</h3>
              <p className="text-xs text-slate-500">Regras de Socorro em Sinistros</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Chamada para o 112:</strong> Informar com rigor a <strong>localização exata</strong>, o <strong>tipo de acidente</strong> e o <strong>número de vítimas</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Princípio PAS:</strong> Proteger o local com colete e sinalização antes de prestar assistência direta.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
