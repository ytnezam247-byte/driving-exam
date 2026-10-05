import React, { useState } from 'react';
import { X, Download, Copy, Check, FileCode, ExternalLink, HelpCircle, FileText } from 'lucide-react';
import { generateBloggerAtomXml, generateBloggerExamHtml } from '../utils/bloggerXmlGenerator';
import { QUESTIONS_DATA } from '../data/examQuestions';

interface BloggerExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BloggerExportModal: React.FC<BloggerExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<'xml' | 'html' | null>(null);
  const [activeTab, setActiveTab] = useState<'xml' | 'html' | 'guide'>('xml');

  if (!isOpen) return null;

  const xmlContent = generateBloggerAtomXml(QUESTIONS_DATA);
  const htmlContent = generateBloggerExamHtml(QUESTIONS_DATA);

  const handleDownloadXml = () => {
    const blob = new Blob([xmlContent], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blogger-tvde-exame-completo.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = (type: 'xml' | 'html') => {
    const textToCopy = type === 'xml' ? xmlContent : htmlContent;
    navigator.clipboard.writeText(textToCopy);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Exportar Ficheiro XML para Blogger</h2>
              <p className="text-xs text-slate-500">Compatível com Google Blogger / Blogspot (Formato Atom XML)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Highlights */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleDownloadXml}
              className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-between shadow-sm transition-all group"
            >
              <div className="text-left">
                <div className="text-sm">Descarregar Ficheiro .XML</div>
                <div className="text-xs text-emerald-100 font-normal">blogger-tvde-exame-completo.xml</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Download className="w-5 h-5" />
              </div>
            </button>

            <button
              onClick={() => handleCopy('xml')}
              className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center justify-between shadow-sm transition-all"
            >
              <div className="text-left">
                <div className="text-sm">
                  {copiedType === 'xml' ? 'Código XML Copiado!' : 'Copiar Todo o Código XML'}
                </div>
                <div className="text-xs text-slate-300 font-normal">Para colar ou editar</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                {copiedType === 'xml' ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </div>
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveTab('xml')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors text-center ${
                activeTab === 'xml' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pré-visualização do XML Blogger
            </button>
            <button
              onClick={() => setActiveTab('html')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors text-center ${
                activeTab === 'html' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Código HTML Alternativo (Post Único)
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors text-center ${
                activeTab === 'guide' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Como Importar no Blogger (Guia)
            </button>
          </div>

          {/* Tab 1: XML Preview */}
          {activeTab === 'xml' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Ficheiro de importação contendo o Artigo Geral + 18 Postagens individuais das questões:</span>
                <span className="font-mono">{xmlContent.length.toLocaleString()} caracteres</span>
              </div>
              <div className="bg-slate-900 text-slate-300 font-mono text-[11px] p-4 rounded-xl max-h-72 overflow-y-auto leading-relaxed border border-slate-800">
                <pre className="whitespace-pre-wrap">{xmlContent.slice(0, 2000)} ... [conteúdo completo no download]</pre>
              </div>
            </div>
          )}

          {/* Tab 2: HTML Alternative */}
          {activeTab === 'html' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Pode colar este HTML diretamente numa nova postagem no Blogger (em modo "Vista HTML"):</span>
                <button
                  onClick={() => handleCopy('html')}
                  className="flex items-center gap-1 text-emerald-700 font-bold hover:underline"
                >
                  {copiedType === 'html' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'html' ? 'HTML Copiado!' : 'Copiar Código HTML'}</span>
                </button>
              </div>
              <div className="bg-slate-900 text-slate-300 font-mono text-[11px] p-4 rounded-xl max-h-72 overflow-y-auto leading-relaxed border border-slate-800">
                <pre className="whitespace-pre-wrap">{htmlContent}</pre>
              </div>
            </div>
          )}

          {/* Tab 3: Guide */}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs text-slate-700">
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                <h4 className="font-bold text-orange-950 text-sm mb-1">Método 1: Importar o ficheiro XML (Recomendado)</h4>
                <ol className="list-decimal list-inside space-y-1.5 mt-2 text-slate-700 leading-relaxed">
                  <li>Clique no botão verde acima <strong>"Descarregar Ficheiro .XML"</strong> para guardar no seu computador.</li>
                  <li>Aceda ao seu painel em <a href="https://www.blogger.com" target="_blank" rel="noopener noreferrer" className="text-orange-700 font-semibold underline">blogger.com</a>.</li>
                  <li>No menu lateral esquerdo, clique em <strong>Definições (Settings)</strong>.</li>
                  <li>Desça até à secção <strong>Gerir blogue (Manage blog)</strong>.</li>
                  <li>Clique em <strong>Importar conteúdo (Import content)</strong> e selecione o ficheiro descarregado <code>blogger-tvde-exame-completo.xml</code>.</li>
                  <li>O Blogger importará automaticamente o exame e as postagens com formatação elegante e gabarito interativo!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Método 2: Criar um Post Único em HTML</h4>
                <ol className="list-decimal list-inside space-y-1.5 mt-2 text-slate-700 leading-relaxed">
                  <li>Vá à aba <strong>"Código HTML Alternativo"</strong> e clique em <strong>"Copiar Código HTML"</strong>.</li>
                  <li>No Blogger, clique em <strong>Nova Postagem (New Post)</strong>.</li>
                  <li>No canto superior esquerdo do editor (ao lado do botão de desfazer), clique no ícone do lápis e selecione <strong>Vista HTML</strong>.</li>
                  <li>Cole o código copiado e clique em <strong>Publicar</strong>.</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Formato padrão Atom 1.0 XML do Google Blogger
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
