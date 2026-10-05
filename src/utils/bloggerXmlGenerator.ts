import { QUESTIONS_DATA, Question, EXAM_TITLE, EXAM_SUBTITLE } from '../data/examQuestions';

export function generateBloggerExamHtml(questions: Question[]): string {
  const questionsHtml = questions.map((q) => {
    return `
<div class="tvde-question-box" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:24px; box-shadow:0 1px 3px rgba(0,0,0,0.05); font-family:system-ui, -apple-system, sans-serif;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:#0f172a; font-size:14px;">Questão ${q.id} de ${questions.length}</span>
    <span style="color:#64748b; font-size:12px; background:#f1f5f9; padding:3px 8px; border-radius:6px;">${q.categoryLabel}</span>
  </div>
  
  <h3 style="font-size:18px; font-weight:700; color:#0f172a; margin:0 0 16px 0; line-height:1.4;">
    ${q.id}. ${q.question}
  </h3>

  <div class="tvde-options" style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
    ${q.options.map(opt => `
      <div class="tvde-option" style="display:flex; align-items:flex-start; gap:12px; padding:12px 14px; border:1px solid #cbd5e1; border-radius:8px; background:#f8fafc; font-size:15px; color:#1e293b;">
        <span style="display:inline-flex; align-items:center; justify-content:center; width:26px; height:26px; border-radius:6px; background:#e2e8f0; font-weight:700; font-size:13px; color:#334155; flex-shrink:0;">
          ${opt.letter}
        </span>
        <span style="padding-top:2px; flex:1;">${opt.text}</span>
      </div>
    `).join('')}
  </div>

  <details style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:12px 16px; cursor:pointer;">
    <summary style="font-weight:700; color:#15803d; font-size:14px; user-select:none; outline:none;">
      👉 Ver Resposta Correta e Explicação Oficial
    </summary>
    <div style="margin-top:12px; padding-top:12px; border-top:1px dashed #86efac; font-size:14px; color:#166534; line-height:1.5;">
      <p style="margin:0 0 8px 0;"><strong>Resposta Correta:</strong> Opção <strong>${q.correctAnswer}</strong></p>
      <p style="margin:0 0 8px 0; color:#334155;"><strong>Fundamentação:</strong> ${q.explanation}</p>
      ${q.legalReference ? `<p style="margin:0; font-size:12px; color:#64748b; font-family:monospace;">${q.legalReference}</p>` : ''}
    </div>
  </details>
</div>
`;
  }).join('\n');

  return `
<div class="tvde-exam-container" style="max-width:850px; margin:0 auto; font-family:system-ui, -apple-system, sans-serif; color:#0f172a;">
  <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color:#ffffff; padding:28px 24px; border-radius:16px; margin-bottom:28px; text-align:center;">
    <div style="font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1px; color:#34d399; margin-bottom:8px;">
      Simulador de Exame Oficial TVDE
    </div>
    <h1 style="font-size:26px; font-weight:800; margin:0 0 10px 0; color:#ffffff;">
      ${EXAM_TITLE}
    </h1>
    <p style="font-size:15px; color:#cbd5e1; margin:0; max-width:600px; margin:0 auto;">
      ${EXAM_SUBTITLE} · 76 Questões com gabarito oficial e fundamentação legal pelo Código da Estrada e Lei n.º 45/2018.
    </p>
  </div>

  <div class="tvde-questions-list">
    ${questionsHtml}
  </div>

  <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; text-align:center; margin-top:30px; font-size:13px; color:#64748b;">
    <p style="margin:0 0 6px 0; font-weight:700; color:#0f172a;">Simulador TVDE Teste · Certificação IMT Portugal</p>
    <p style="margin:0;">Para aprovação oficial no exame de motorista TVDE é necessária a taxa mínima de 75% de respostas certas.</p>
  </div>
</div>
`;
}

export function generateBloggerAtomXml(questions: Question[] = QUESTIONS_DATA): string {
  const timestamp = new Date().toISOString();
  const examHtml = generateBloggerExamHtml(questions);

  // XML template conforming to Google Blogger / Blogspot Atom import format
  return `<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns='http://www.w3.org/2005/Atom' 
      xmlns:openSearch='http://a9.com/-/spec/opensearchrss/1.0/' 
      xmlns:georss='http://www.georss.org/georss' 
      xmlns:gd='http://schemas.google.com/g/2005' 
      xmlns:thr='http://purl.org/syndication/thread/1.0'>
  <id>tag:blogger.com,1999:blog-tvde-exam-simulation</id>
  <updated>${timestamp}</updated>
  <title type='text'>Exame Teórico TVDE - Questionário Oficial</title>
  <subtitle type='text'>Questionário de Revisão Geral Módulo 1 para Blogger</subtitle>
  <generator version='7.00' uri='http://www.blogger.com'>Blogger</generator>
  
  <!-- Master Post: Exame Teórico TVDE Completo (76 Questões) -->
  <entry>
    <id>tag:blogger.com,1999:blog-tvde.post-master-exam-1</id>
    <published>${timestamp}</published>
    <updated>${timestamp}</updated>
    <category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/>
    <category scheme='http://www.blogger.com/atom/ns#' term='Exame TVDE'/>
    <category scheme='http://www.blogger.com/atom/ns#' term='Código da Estrada'/>
    <category scheme='http://www.blogger.com/atom/ns#' term='Simulador IMT'/>
    <category scheme='http://www.blogger.com/atom/ns#' term='Legislação TVDE'/>
    <title type='text'>Exame Teórico TVDE: Provas de Avaliação de Conhecimentos (76 Questões com Respostas e Legislação)</title>
    <content type='html'><![CDATA[${examHtml}]]></content>
    <author>
      <name>TVDE Teste</name>
      <email>noreply@blogger.com</email>
    </author>
  </entry>

  ${questions.map((q, idx) => `
  <!-- Post Individual: Pergunta ${q.id} -->
  <entry>
    <id>tag:blogger.com,1999:blog-tvde.post-q${q.id}</id>
    <published>${timestamp}</published>
    <updated>${timestamp}</updated>
    <category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/>
    <category scheme='http://www.blogger.com/atom/ns#' term='${q.categoryLabel}'/>
    <category scheme='http://www.blogger.com/atom/ns#' term='Exame TVDE'/>
    <title type='text'>Pergunta ${q.id} TVDE: ${q.question.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>
    <content type='html'><![CDATA[
<div style="font-family:system-ui, -apple-system, sans-serif; max-width:700px; margin:0 auto; padding:15px; color:#1e293b;">
  <p style="color:#64748b; font-size:13px; margin-bottom:8px;">Módulo: <strong>${q.categoryLabel}</strong> · Pergunta ${q.id} de 18</p>
  <h2 style="font-size:20px; font-weight:700; color:#0f172a; margin-top:0;">${q.question}</h2>
  
  <div style="display:flex; flex-direction:column; gap:8px; margin:16px 0;">
    ${q.options.map(opt => `
      <div style="padding:10px 14px; border:1px solid #cbd5e1; border-radius:8px; background:#f8fafc; font-size:15px;">
        <strong>${opt.letter})</strong> ${opt.text}
      </div>
    `).join('')}
  </div>

  <details style="background:#f0fdf4; border:1px solid #86efac; border-radius:8px; padding:12px; margin-top:16px;">
    <summary style="font-weight:700; color:#15803d; cursor:pointer;">Ver Resposta Correta</summary>
    <div style="margin-top:10px; color:#166534; font-size:14px; line-height:1.5;">
      <p style="margin:0 0 6px 0;"><strong>Resposta Correta: ${q.correctAnswer}</strong></p>
      <p style="margin:0 0 6px 0; color:#334155;">${q.explanation}</p>
      ${q.legalReference ? `<p style="margin:0; font-size:12px; color:#64748b; font-family:monospace;">${q.legalReference}</p>` : ''}
    </div>
  </details>
</div>
    ]]></content>
    <author>
      <name>TVDE Teste</name>
      <email>noreply@blogger.com</email>
    </author>
  </entry>
  `).join('\n')}
</feed>`;
}
