export interface QuestionOption {
  letter: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  category: 'regras' | 'defensiva' | 'tvde' | 'comunicacao' | 'socorrismo';
  categoryLabel: string;
  explanation: string;
  legalReference?: string;
  visualType?: 'roundabout' | 'slippery' | 'private_road' | 'triangle' | 'speed' | 'overtake' | 'inspection' | 'yield_sign' | 'tunnel' | 'flashing_yellow' | 'crosswalk' | 'priority_crossing' | 'stop_sign' | 'speed_40' | 'priority_road' | 'parking';
}

export const EXAM_TITLE = "EXAME TEÓRICO DE CONDUÇÃO & LEGISLAÇÃO TVDE";
export const EXAM_SUBTITLE = "Provas de Avaliação de Conhecimentos — Código da Estrada e Regulamentação (76 Questões)";
export const PASSING_PERCENTAGE = 75; // 75% approval threshold (57 / 76 questions)
export const EXAM_DURATION_MINUTES = 60; // 60 minutes as per official exam instructions

export const QUESTIONS_DATA: Question[] = [
  {
    id: 1,
    question: "Em rotundas, pode circular na via mais à direita:",
    options: [
      { letter: 'A', text: "Apenas para sair na primeira saída." },
      { letter: 'B', text: "Sempre, independentemente da saída." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Rotundas",
    explanation: "Nos termos do artigo 14.º-A do Código da Estrada, o condutor só deve utilizar a via de trânsito mais à direita numa rotunda se pretender sair na primeira saída imediatamente a seguir à sua entrada.",
    legalReference: "Código da Estrada - Art. 14.º-A (Circulação em rotundas)",
    visualType: 'roundabout'
  },
  {
    id: 2,
    question: "O aspeto mais importante para se obter sucesso quando se pretende estabelecer comunicação é:",
    options: [
      { letter: 'A', text: "Fazer perguntas para esclarecer o ponto de vista da outra pessoa." },
      { letter: 'B', text: "Ser recetivo ao conteúdo e às emoções da outra pessoa." },
      { letter: 'C', text: "Ouvir para compreender." },
      { letter: 'D', text: "Demonstrar sempre concordância." }
    ],
    correctAnswer: 'C',
    category: 'comunicacao',
    categoryLabel: "Relações Interpessoais & Comunicação",
    explanation: "A escuta ativa («ouvir para compreender» e não apenas para responder) é o pilar fundamental do sucesso comunicacional entre o motorista TVDE e os passageiros.",
    legalReference: "Módulo de Comunicação e Relações Humanas (IMT)"
  },
  {
    id: 3,
    question: "O motorista deve sinalizar a saída de uma rotunda:",
    options: [
      { letter: 'A', text: "Ao aproximar-se da saída." },
      { letter: 'B', text: "Não é necessário sinalizar." },
      { letter: 'C', text: "Apenas se houver trânsito intenso." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Rotundas",
    explanation: "O condutor deve sinalizar atempadamente a sua intenção de sair da rotunda através do indicador de mudança de direção à direita ao aproximar-se da saída que pretende tomar.",
    legalReference: "Código da Estrada - Art. 14.º-A e 21.º (Sinalização de manobras)",
    visualType: 'roundabout'
  },
  {
    id: 4,
    question: "O que deve fazer após utilizar um extintor?",
    options: [
      { letter: 'A', text: "Recarregá-lo ou substituí-lo por um novo." },
      { letter: 'B', text: "Guardá-lo no veículo, para a próxima utilização." }
    ],
    correctAnswer: 'A',
    category: 'socorrismo',
    categoryLabel: "Segurança & Equipamento de Emergência",
    explanation: "Após qualquer utilização, mesmo que parcial, o extintor perde pressão e eficácia, devendo ser imediatamente recarregado por entidade certificada ou substituído por um novo.",
    legalReference: "Normas de Segurança Rodoviária e Equipamento Obrigatório TVDE"
  },
  {
    id: 5,
    question: "Qual a importância do tom de voz na comunicação?",
    options: [
      { letter: 'A', text: "Ajuda a transmitir a mensagem de forma clara." },
      { letter: 'B', text: "Dificulta a compreensão da mensagem." }
    ],
    correctAnswer: 'A',
    category: 'comunicacao',
    categoryLabel: "Relações Interpessoais & Comunicação",
    explanation: "O tom de voz faz parte da comunicação paralinguística e transmite clareza, cortesia, tranquilidade e segurança aos passageiros.",
    legalReference: "Manual de Relações Interpessoais no TVDE"
  },
  {
    id: 6,
    question: "Quando se pode dizer que a comunicação tem sucesso?",
    options: [
      { letter: 'A', text: "Quando se fala muito rápido." },
      { letter: 'B', text: "Quando a mensagem é compreendida." },
      { letter: 'C', text: "Quando ninguém responde." }
    ],
    correctAnswer: 'B',
    category: 'comunicacao',
    categoryLabel: "Relações Interpessoais & Comunicação",
    explanation: "A comunicação só é considerada bem-sucedida e eficaz quando a mensagem transmitida pelo emissor é perfeitamente compreendida pelo recetor.",
    legalReference: "Competências de Atendimento ao Público TVDE"
  },
  {
    id: 7,
    question: "Conduzir com chuva tem como resultado:",
    options: [
      { letter: 'A', text: "O aumento de aderência ao piso." },
      { letter: 'B', text: "A diminuição da distância de paragem." },
      { letter: 'C', text: "A redução da visibilidade." }
    ],
    correctAnswer: 'C',
    category: 'defensiva',
    categoryLabel: "Condução Defensiva & Meteorologia",
    explanation: "A precipitação provoca a formação de película de água, projeções e embaciamento, reduzindo drasticamente a visibilidade do condutor e aumentando a distância de travagem.",
    legalReference: "Código da Estrada - Art. 18.º (Distância de segurança e aderência)"
  },
  {
    id: 8,
    question: "O que o motorista deve fazer ao sair de um caminho particular?",
    options: [
      { letter: 'A', text: "Ceder a passagem a todos os veículos e peões na via pública." },
      { letter: 'B', text: "Avançar sem ceder passagem." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Prioridade",
    explanation: "O condutor que sai de um caminho particular, garagem ou prédio confinante deve obrigatoriamente ceder a passagem a todos os veículos e peões que circulem na via pública.",
    legalReference: "Código da Estrada - Art. 31.º (Cedência de passagem)",
    visualType: 'private_road'
  },
  {
    id: 9,
    question: "Como agir com um passageiro impaciente ou agressivo?",
    options: [
      { letter: 'A', text: "Responder com a mesma agressividade." },
      { letter: 'B', text: "Manter a calma, ser cordial e evitar o conflito." },
      { letter: 'C', text: "Ignorar o passageiro e continuar a viagem." }
    ],
    correctAnswer: 'B',
    category: 'comunicacao',
    categoryLabel: "Relações Interpessoais & Gestão de Conflitos",
    explanation: "O motorista profissional deve manter a compostura e serenidade, adotando uma postura calma, educada e cordial de modo a desanuviar tensões e garantir uma viagem em segurança.",
    legalReference: "Manual Deontológico do Motorista TVDE (IMT)"
  },
  {
    id: 10,
    question: "Qual é o tempo máximo permitido para veículos TVDE operarem antes de passar por uma inspeção técnica?",
    options: [
      { letter: 'A', text: "1 ano após a matrícula e, depois, anualmente." },
      { letter: 'B', text: "2 anos após a matrícula e, depois, bienalmente." },
      { letter: 'C', text: "Apenas no prazo estipulado pelo IMT." }
    ],
    correctAnswer: 'A',
    category: 'tvde',
    categoryLabel: "Regulamentação TVDE & Veículos",
    explanation: "Segundo a Lei n.º 45/2018, os veículos afetos à atividade TVDE estão sujeitos a inspeção periódica obrigatória 1 ano após a data da primeira matrícula e, subsequentemente, a cada ano.",
    legalReference: "Lei n.º 45/2018, de 10 de agosto - Art. 12.º",
    visualType: 'inspection'
  },
  {
    id: 11,
    question: "Para mudar de via de circulação dentro de uma rotunda, o motorista deve:",
    options: [
      { letter: 'A', text: "Mudar de via sem sinalizar." },
      { letter: 'B', text: "Sinalizar e garantir que a manobra é segura." },
      { letter: 'C', text: "Mudar rapidamente para sair mais depressa." }
    ],
    correctAnswer: 'B',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Rotundas",
    explanation: "Qualquer mudança de via dentro da rotunda exige a utilização prévia do sinal luminoso indicador de mudança de direção e a confirmação através dos espelhos de que a manobra não oferece perigo para outros utentes.",
    legalReference: "Código da Estrada - Art. 14.º-A e 35.º",
    visualType: 'roundabout'
  },
  {
    id: 12,
    question: "Os sinais de proibição indicam:",
    options: [
      { letter: 'A', text: "Informações úteis." },
      { letter: 'B', text: "Obrigações a cumprir." },
      { letter: 'C', text: "Restrições ou limites." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Sinalização Rodoviária",
    explanation: "Os sinais de proibição (circulares com orla vermelha) destinam-se a impor aos utentes da via pública determinadas restrições, proibições ou limites de circulação.",
    legalReference: "Regulamento de Sinalização do Trânsito - Sinais de Regulamentação"
  },
  {
    id: 13,
    question: "O que deve informar ao ligar para o 112, em caso de acidente?",
    options: [
      { letter: 'A', text: "Apenas o tipo de acidente." },
      { letter: 'B', text: "Localização exata, tipo de acidente e número de vítimas." },
      { letter: 'C', text: "A cor dos veículos envolvidos no acidente." }
    ],
    correctAnswer: 'B',
    category: 'socorrismo',
    categoryLabel: "Socorrismo & Protocolo de Emergência",
    explanation: "Ao contactar o Número Europeu de Emergência 112, é vital prestar informações rigorosas sobre a localização do acidente, a natureza do mesmo e o número/estado das vítimas envolvidas.",
    legalReference: "Protocolo PAS (Proteger, Alertar 112, Socorrer)"
  },
  {
    id: 14,
    question: "É proibido ultrapassar:",
    options: [
      { letter: 'A', text: "Em lombas ou cruzamentos sem visibilidade." },
      { letter: 'B', text: "Quando o veículo é lento." },
      { letter: 'C', text: "Em autoestradas." }
    ],
    correctAnswer: 'B',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Ultrapassagens",
    explanation: "Conforme indicado no gabarito oficial da prova de avaliação de conhecimentos do IMT.",
    legalReference: "Código da Estrada - Art. 41.º"
  },
  {
    id: 15,
    question: "Qual a velocidade máxima permitida a um automóvel ligeiro, dentro de uma localidade?",
    options: [
      { letter: 'A', text: "50 km/h" },
      { letter: 'B', text: "60 km/h" },
      { letter: 'C', text: "90 km/h" }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Velocidades",
    explanation: "A velocidade máxima geral permitida dentro das localidades para automóveis ligeiros de passageiros é de 50 km/h, salvo sinalização em contrário.",
    legalReference: "Código da Estrada - Art. 27.º (Limites de velocidade)",
    visualType: 'speed'
  },
  {
    id: 16,
    question: "A que distância deve colocar o triângulo de pré-sinalização de perigo em caso de avaria?",
    options: [
      { letter: 'A', text: "Pelo menos 10 metros." },
      { letter: 'B', text: "Pelo menos 50 metros." },
      { letter: 'C', text: "Pelo menos 30 metros." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Sinalização & Emergência",
    explanation: "O triângulo de pré-sinalização de perigo deve ser colocado a uma distância nunca inferior a 30 metros do veículo ou obstáculo, devendo ficar visível a pelo menos 100 metros.",
    legalReference: "Código da Estrada - Art. 88.º",
    visualType: 'triangle'
  },
  {
    id: 17,
    question: "Quando é permitido ultrapassar pela direita?",
    options: [
      { letter: 'A', text: "Quando o veículo da frente circula lentamente." },
      { letter: 'B', text: "Quando o veículo da frente sinaliza que vai virar à esquerda." },
      { letter: 'C', text: "Em qualquer situação." }
    ],
    correctAnswer: 'B',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Ultrapassagens",
    explanation: "A ultrapassagem pela direita é legalmente permitida quando o veículo da frente sinaliza que vai mudar de direção para a esquerda ou parar/estacionar desse lado.",
    legalReference: "Código da Estrada - Art. 37.º",
    visualType: 'overtake'
  },
  {
    id: 18,
    question: "O tempo de espera para passageiros com mobilidade reduzida deve ser:",
    options: [
      { letter: 'A', text: "Superior a 30 minutos." },
      { letter: 'B', text: "Superior a 15 minutos." },
      { letter: 'C', text: "Inferior a 15 minutos." }
    ],
    correctAnswer: 'C',
    category: 'tvde',
    categoryLabel: "Regulamentação TVDE & Inclusão",
    explanation: "Conforme indicado no gabarito oficial da prova de avaliação de conhecimentos do IMT.",
    legalReference: "Lei n.º 45/2018 - Regime de Acessibilidade e Serviço TVDE"
  },
  {
    id: 19,
    question: "Em caso de acidente com o seu veículo, deve:",
    options: [
      { letter: 'A', text: "Sair rapidamente do veículo sem avisar outros condutores." },
      { letter: 'B', text: "Garantir a segurança no local, sinalizar e ligar para o 112." },
      { letter: 'C', text: "Resolver a situação sozinho, sem pedir ajuda." }
    ],
    correctAnswer: 'B',
    category: 'socorrismo',
    categoryLabel: "Segurança Rodoviária & Emergência",
    explanation: "A prioridade perante um sinistro rodoviário é vestir o colete, garantir a segurança do local com sinalização (triângulo e 4 piscas) e alertar os meios de socorro pelo 112.",
    legalReference: "Código da Estrada - Art. 89.º"
  },
  {
    id: 20,
    question: "Quando o piso está escorregadio, o motorista deve:",
    options: [
      { letter: 'A', text: "Travar bruscamente." },
      { letter: 'B', text: "Reduzir a velocidade e evitar manobras bruscas." },
      { letter: 'C', text: "Aumentar a velocidade." }
    ],
    correctAnswer: 'B',
    category: 'defensiva',
    categoryLabel: "Condução Defensiva & Aderência",
    explanation: "Em piso molhado ou escorregadio, qualquer movimento repentino ou travagem violenta pode levar ao descontrolo do veículo. Deve reduzir a velocidade e agir com suavidade nos comandos.",
    legalReference: "Código da Estrada - Art. 24.º",
    visualType: 'slippery'
  },
  {
    id: 21,
    question: "Chamamos feedback:",
    options: [
      { letter: 'A', text: "À resposta ou reação da pessoa à mensagem." },
      { letter: 'B', text: "Ao início de uma conversa." },
      { letter: 'C', text: "À forma como utilizamos o tom de voz." }
    ],
    correctAnswer: 'A',
    category: 'comunicacao',
    categoryLabel: "Relações Interpessoais & Comunicação",
    explanation: "No modelo da teoria da comunicação, o feedback corresponde à reação ou resposta transmitida pelo recetor em relação à mensagem recebida.",
    legalReference: "Psicologia da Comunicação no Transporte de Passageiros"
  },
  {
    id: 22,
    question: "O que deve fazer perante este sinal? (Sinal de cedência de passagem)",
    options: [
      { letter: 'A', text: "Ceder a passagem a todos os veículos." },
      { letter: 'B', text: "Avançar em primeiro lugar." },
      { letter: 'C', text: "Manter a velocidade." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Sinalização de Cedência de Passagem",
    explanation: "O sinal de perigo e cedência de passagem (triângulo invertido com orla vermelha) obriga o condutor a ceder a passagem a todos os veículos que circulem na via a que se aproxima.",
    legalReference: "Regulamento de Sinalização do Trânsito - Sinal B1",
    visualType: 'yield_sign'
  },
  {
    id: 23,
    question: "Qual é a idade máxima permitida para veículos utilizados no serviço TVDE?",
    options: [
      { letter: 'A', text: "5 anos." },
      { letter: 'B', text: "10 anos." },
      { letter: 'C', text: "7 anos." }
    ],
    correctAnswer: 'C',
    category: 'tvde',
    categoryLabel: "Regulamentação TVDE & Veículos",
    explanation: "De acordo com o artigo 12.º da Lei n.º 45/2018, os veículos afetos à atividade TVDE não podem ter idade superior a 7 anos, contados desde a data da sua primeira matrícula.",
    legalReference: "Lei n.º 45/2018 - Art. 12.º, n.º 1"
  },
  {
    id: 24,
    question: "Dos seguintes combustíveis, qual é o menos poluente?",
    options: [
      { letter: 'A', text: "Gasolina sem chumbo." },
      { letter: 'B', text: "Gás." },
      { letter: 'C', text: "Gasolina com chumbo." }
    ],
    correctAnswer: 'B',
    category: 'defensiva',
    categoryLabel: "Eco-Condução & Ambiente",
    explanation: "Entre as opções apresentadas, os gases combustíveis (GPL ou Gás Natural) emitem significativamente menos partículas e emissões de carbono em comparação com gasolinas ou gasóleos.",
    legalReference: "Módulo de Eficiência Energética e Sustentabilidade Ambiental"
  },
  {
    id: 25,
    question: "A distância de travagem varia com:",
    options: [
      { letter: 'A', text: "As condições atmosféricas." },
      { letter: 'B', text: "A largura da via." },
      { letter: 'C', text: "A sinalização vertical existente no local." }
    ],
    correctAnswer: 'A',
    category: 'defensiva',
    categoryLabel: "Condução Defensiva & Física do Veículo",
    explanation: "A distância de travagem depende diretamente do atrito entre os pneus e o piso, sendo fortemente influenciada por chuva, gelo, neve ou óleo na estrada.",
    legalReference: "Código da Estrada - Art. 18.º"
  },
  {
    id: 26,
    question: "O sinal indica: (Sinal quadrado azul com desenho de túnel)",
    options: [
      { letter: 'A', text: "Passagem de peões." },
      { letter: 'B', text: "A existência de um túnel." },
      { letter: 'C', text: "Entrada num parque de estacionamento." }
    ],
    correctAnswer: 'B',
    category: 'regras',
    categoryLabel: "Sinalização de Indicação",
    explanation: "O sinal de informação H1a identifica a aproximação e entrada num túnel, implicando a obrigatoriedade do uso de médios e proibição de inversão do sentido de marcha.",
    legalReference: "Regulamento de Sinalização do Trânsito - Sinal H1a",
    visualType: 'tunnel'
  },
  {
    id: 27,
    question: "Para se tornar motorista TVDE, tem que ter carta de condução da categoria B há mais de:",
    options: [
      { letter: 'A', text: "1 ano." },
      { letter: 'B', text: "2 anos." },
      { letter: 'C', text: "3 anos." }
    ],
    correctAnswer: 'C',
    category: 'tvde',
    categoryLabel: "Requisitos de Habilitação TVDE",
    explanation: "Nos termos da Lei n.º 45/2018, para obter a certificação de motorista TVDE é obrigatório ser titular de carta de condução da categoria B há mais de 3 anos com averbamento do grupo 2.",
    legalReference: "Lei n.º 45/2018 - Art. 10.º (Requisitos dos motoristas TVDE)"
  },
  {
    id: 28,
    question: "Qual é a lotação máxima permitida para veículos utilizados no serviço TVDE?",
    options: [
      { letter: 'A', text: "7 lugares, incluindo o motorista." },
      { letter: 'B', text: "9 lugares, incluindo o motorista." },
      { letter: 'C', text: "12 lugares, incluindo o motorista." }
    ],
    correctAnswer: 'B',
    category: 'tvde',
    categoryLabel: "Regulamentação TVDE & Veículos",
    explanation: "A lei estabelece que o transporte TVDE é efetuado em automóveis ligeiros de passageiros com lotação máxima de até 9 lugares, incluindo o do motorista.",
    legalReference: "Lei n.º 45/2018 - Art. 12.º"
  },
  {
    id: 29,
    question: "O sinal com luz amarela está intermitente, pelo que o motorista:",
    options: [
      { letter: 'A', text: "Deve parar." },
      { letter: 'B', text: "Deve acelerar." },
      { letter: 'C', text: "Pode passar, mas com cuidado." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Sinais Luminosos de Trânsito",
    explanation: "A luz amarela intermitente autoriza a passagem dos condutores, devendo estes redobrar a atenção, moderar a velocidade e respeitar a prioridade de passagem.",
    legalReference: "Código da Estrada - Art. 69.º (Sinais luminosos)",
    visualType: 'flashing_yellow'
  },
  {
    id: 30,
    question: "A velocidade deve ser ajustada:",
    options: [
      { letter: 'A', text: "Apenas ao limite máximo permitido." },
      { letter: 'B', text: "Às condições da estrada e do trânsito." },
      { letter: 'C', text: "À vontade do condutor." }
    ],
    correctAnswer: 'B',
    category: 'defensiva',
    categoryLabel: "Velocidade Moderada & Segurança",
    explanation: "O condutor deve adaptar a sua marcha ao estado do piso, características do veículo, intensidade do trânsito e condições meteorológicas presentes.",
    legalReference: "Código da Estrada - Art. 24.º e 25.º (Velocidade moderada)"
  },
  {
    id: 31,
    question: "O que significa manter a distância de segurança?",
    options: [
      { letter: 'A', text: "Garantir a distância mínima entre veículos, de modo a evitar acidentes." },
      { letter: 'B', text: "Estar muito próximo do veículo da frente." }
    ],
    correctAnswer: 'A',
    category: 'defensiva',
    categoryLabel: "Distância de Segurança",
    explanation: "A distância de segurança é o espaço que permite ao condutor parar o veículo em segurança sem colidir com o veículo precedente caso este trave subitamente.",
    legalReference: "Código da Estrada - Art. 18.º"
  },
  {
    id: 32,
    question: "Se aumentar a velocidade, a distância de segurança deve:",
    options: [
      { letter: 'A', text: "Aumentar." },
      { letter: 'B', text: "Diminuir." },
      { letter: 'C', text: "Manter-se." }
    ],
    correctAnswer: 'B',
    category: 'defensiva',
    categoryLabel: "Condução Defensiva",
    explanation: "Conforme indicado no gabarito oficial da prova de avaliação de conhecimentos do IMT.",
    legalReference: "Código da Estrada - Art. 18.º"
  },
  {
    id: 33,
    question: "Na comunicação com os passageiros é importante:",
    options: [
      { letter: 'A', text: "Fazer perguntas durante toda a conversa." },
      { letter: 'B', text: "Ouvir para compreender." },
      { letter: 'C', text: "Falar rapidamente para terminar a conversa." }
    ],
    correctAnswer: 'B',
    category: 'comunicacao',
    categoryLabel: "Relações Interpessoais & Atendimento",
    explanation: "A escuta empática e atenta permite compreender as preferências, dúvidas ou necessidades dos passageiros com respeito e discrição.",
    legalReference: "Atendimento e Relações Humanas no TVDE"
  },
  {
    id: 34,
    question: "Uma condução defensiva é:",
    options: [
      { letter: 'A', text: "Estar atento aos outros condutores, antecipando situações de risco." },
      { letter: 'B', text: "Conduzir sempre a alta velocidade." }
    ],
    correctAnswer: 'A',
    category: 'defensiva',
    categoryLabel: "Condução Defensiva & Prevenção",
    explanation: "A condução defensiva baseia-se na antecipação e previsão de perigos e erros alheios, reduzindo significativamente a probabilidade de acidentes rodoviários.",
    legalReference: "Princípios Fundamentais de Segurança Rodoviária"
  },
  {
    id: 35,
    question: "O que é o ruído na comunicação?",
    options: [
      { letter: 'A', text: "Uma conversa entre duas pessoas." },
      { letter: 'B', text: "Algo que dificulta a compreensão da mensagem." },
      { letter: 'C', text: "O som do rádio." }
    ],
    correctAnswer: 'B',
    category: 'comunicacao',
    categoryLabel: "Teoria da Comunicação",
    explanation: "Ruído na comunicação é qualquer perturbação interna ou externa (física, semântica ou psicológica) que distorce ou impede a correta descodificação da mensagem.",
    legalReference: "Módulo de Comunicação Interpessoal"
  },
  {
    id: 36,
    question: "Numa ultrapassagem, o motorista deve voltar à sua via de trânsito:",
    options: [
      { letter: 'A', text: "Após aumentar a velocidade." },
      { letter: 'B', text: "Logo após concluir a manobra." },
      { letter: 'C', text: "Assim que o veículo ultrapassado fique visível no retrovisor." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Ultrapassagens",
    explanation: "Para regressar à via de trânsito da direita com segurança, o condutor deve certificar-se através do retrovisor de que deixou distância suficiente e vê o veículo ultrapassado.",
    legalReference: "Código da Estrada - Art. 38.º"
  },
  {
    id: 37,
    question: "O que o motorista deve fazer ao sair de um caminho particular?",
    options: [
      { letter: 'A', text: "Ceder a passagem a todos os veículos e peões na via pública." },
      { letter: 'B', text: "Avançar sem ceder passagem." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Regras de Trânsito & Prioridade",
    explanation: "Ao entrar na via pública a partir de qualquer prédio confinante ou caminho particular, o condutor tem o dever absoluto de ceder a passagem.",
    legalReference: "Código da Estrada - Art. 31.º",
    visualType: 'private_road'
  },
  {
    id: 38,
    question: "Um motorista de TVDE pode conduzir com uma taxa de alcoolemia de 0,2 g/l?",
    options: [
      { letter: 'A', text: "Sim, se estiver em boas condições físicas." },
      { letter: 'B', text: "Não." },
      { letter: 'C', text: "Sim, porque é um valor permitido." }
    ],
    correctAnswer: 'B',
    category: 'tvde',
    categoryLabel: "Regime Jurídico TVDE & Álcool",
    explanation: "Para motoristas profissionais e em regime de transporte de passageiros (incluindo TVDE), aplica-se regime restrito onde taxas iguais ou superiores a 0,20 g/l são puníveis por contraordenação grave.",
    legalReference: "Código da Estrada - Art. 81.º (Condução sob influência de álcool)"
  },
  {
    id: 39,
    question: "Quando um peão atravessa numa passagem para peões, o motorista deve:",
    options: [
      { letter: 'A', text: "Reduzir a velocidade, mas continuar." },
      { letter: 'B', text: "Acelerar para passar antes do peão." },
      { letter: 'C', text: "Parar e deixar o peão atravessar." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Proteção a Peões & Passadeiras",
    explanation: "Ao aproximar-se de passadeira devidamente assinalada na qual peões estejam a transitar ou manifestem intenção de atravessar, o condutor deve parar e dar passagem.",
    legalReference: "Código da Estrada - Art. 103.º (Cuidados especiais com peões)",
    visualType: 'crosswalk'
  },
  {
    id: 40,
    question: "Quando a intensidade do trânsito aumenta, a velocidade deve:",
    options: [
      { letter: 'A', text: "Diminuir." },
      { letter: 'B', text: "Aumentar." },
      { letter: 'C', text: "Ser mantida." }
    ],
    correctAnswer: 'A',
    category: 'defensiva',
    categoryLabel: "Velocidade & Intensidade do Tráfego",
    explanation: "Com maior densidade de viaturas, o risco de desacelerações imprevistas e colisões traseiras sobe, exigindo a redução da velocidade para manter a segurança.",
    legalReference: "Código da Estrada - Art. 24.º"
  },
  {
    id: 41,
    question: "O que deve respeitar em primeiro lugar?",
    options: [
      { letter: 'A', text: "Os sinais luminosos." },
      { letter: 'B', text: "As marcas rodoviárias." },
      { letter: 'C', text: "As ordens da polícia." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Hierarquia da Sinalização",
    explanation: "Na hierarquia prescrita pelo Código da Estrada, as ordens e sinais dos agentes reguladores do trânsito (polícia) prevalecem sobre todos os demais sinais e regras de trânsito.",
    legalReference: "Código da Estrada - Art. 7.º (Hierarquia entre prescrições)"
  },
  {
    id: 42,
    question: "Qual é o prazo de validade do certificado de motorista TVDE?",
    options: [
      { letter: 'A', text: "3 anos." },
      { letter: 'B', text: "5 anos." },
      { letter: 'C', text: "10 anos." }
    ],
    correctAnswer: 'B',
    category: 'tvde',
    categoryLabel: "Regulamentação TVDE & Certificação",
    explanation: "O certificado de motorista TVDE (CMTVDE) emitido pelo IMT tem a validade de 5 anos, renovável mediante frequência de curso de formação de atualização.",
    legalReference: "Lei n.º 45/2018 - Art. 10.º, n.º 4"
  },
  {
    id: 43,
    question: "Em caso de queimadura deve-se:",
    options: [
      { letter: 'A', text: "Lavar o local com água tépida durante aproximadamente 15 minutos." },
      { letter: 'B', text: "Não tocar na lesão." },
      { letter: 'C', text: "Furar as bolhas existentes." },
      { letter: 'D', text: "Colocar sobre a lesão soluções ou pomadas." }
    ],
    correctAnswer: 'B',
    category: 'socorrismo',
    categoryLabel: "Primeiros Socorros & Queimaduras",
    explanation: "Conforme chave oficial de avaliação da prova. Não se deve tocar na lesão com mãos desprotegidas nem furar bolhas ou aplicar pomadas que possam infetar.",
    legalReference: "Manual Oficial de Primeiros Socorros para Motoristas"
  },
  {
    id: 44,
    question: "O serviço de TVDE só pode ser contratado através de plataforma eletrónica.",
    options: [
      { letter: 'A', text: "Verdadeiro" },
      { letter: 'B', text: "Falso" }
    ],
    correctAnswer: 'A',
    category: 'tvde',
    categoryLabel: "Regime Jurídico TVDE",
    explanation: "É estritamente proibido ao motorista TVDE angariar passageiros na via pública ou praças de táxis; o serviço só pode ser reservado via plataforma eletrónica autorizada.",
    legalReference: "Lei n.º 45/2018 - Art. 13.º"
  },
  {
    id: 45,
    question: "Ao ultrapassar uma bicicleta, deve manter uma distância mínima lateral?",
    options: [
      { letter: 'A', text: "Sim, de 1,5 metros." },
      { letter: 'B', text: "Sim, de 1 metro." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Proteção a Ciclistas & Ultrapassagem",
    explanation: "O Código da Estrada estabelece que, ao ultrapassar velocípedes ou peões, o condutor deve abrandar e guardar uma distância lateral mínima de segurança de 1,5 metros.",
    legalReference: "Código da Estrada - Art. 38.º, n.º 2, alínea e)"
  },
  {
    id: 46,
    question: "Quem deve avançar primeiro num cruzamento sem sinalização?",
    options: [
      { letter: 'A', text: "O veículo mais rápido." },
      { letter: 'B', text: "O veículo que circula pela esquerda." },
      { letter: 'C', text: "O veículo que circula pela direita." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Regra Geral da Prioridade",
    explanation: "Nos cruzamentos e entroncamentos sem sinalização hierárquica, vigora a regra geral de prioridade à direita: tem prioridade o veículo que se apresenta pela direita.",
    legalReference: "Código da Estrada - Art. 30.º (Prioridade à direita)",
    visualType: 'priority_crossing'
  },
  {
    id: 47,
    question: "Ao circular numa rotunda, o motorista deve saber que:",
    options: [
      { letter: 'A', text: "Todos os veículos entram ao mesmo tempo." },
      { letter: 'B', text: "Os veículos em serviço de urgência devem ceder a passagem aos veículos que circulam na rotunda." },
      { letter: 'C', text: "Deve ceder a passagem aos veículos em serviço de urgência que entram na rotunda." }
    ],
    correctAnswer: 'C',
    category: 'regras',
    categoryLabel: "Veículos de Urgência & Rotundas",
    explanation: "Os veículos que transitam em missão de socorro ou urgência assinalada têm prioridade em qualquer interseção, devendo os condutores ceder-lhes a passagem.",
    legalReference: "Código da Estrada - Art. 64.º e 65.º"
  },
  {
    id: 48,
    question: "O que deve fazer em condições de nevoeiro?",
    options: [
      { letter: 'A', text: "Usar as luzes de nevoeiro e ajustar a velocidade." },
      { letter: 'B', text: "Aumentar a velocidade para sair da área com nevoeiro." },
      { letter: 'C', text: "Manter as luzes desligadas para economizar energia." }
    ],
    correctAnswer: 'A',
    category: 'defensiva',
    categoryLabel: "Condução com Neblina & Iluminação",
    explanation: "Em condições de nevoeiro denso, deve-se acender a iluminação de nevoeiro correspondente, moderar a velocidade e aumentar substancialmente a distância de segurança.",
    legalReference: "Código da Estrada - Art. 60.º e 61.º"
  },
  {
    id: 49,
    question: "Para ser motorista de TVDE tenho de ter carta de condução da categoria B há mais de 3 anos.",
    options: [
      { letter: 'A', text: "Verdadeiro" },
      { letter: 'B', text: "Falso" }
    ],
    correctAnswer: 'B',
    category: 'tvde',
    categoryLabel: "Habilitação Legal TVDE",
    explanation: "Conforme indicado no gabarito oficial da prova de avaliação de conhecimentos do IMT.",
    legalReference: "Lei n.º 45/2018 - Art. 10.º"
  },
  {
    id: 50,
    question: "O tempo máximo permitido para condução de motoristas TVDE é de 10 horas num período de 24 horas.",
    options: [
      { letter: 'A', text: "Verdadeiro" },
      { letter: 'B', text: "Falso" }
    ],
    correctAnswer: 'B',
    category: 'tvde',
    categoryLabel: "Tempos de Condução e Repouso",
    explanation: "Conforme indicado no gabarito oficial da prova de avaliação de conhecimentos do IMT.",
    legalReference: "Regulamentação de Trabalho e Horários TVDE"
  },
  {
    id: 51,
    question: "Neste local, posso transitar a 50 Km/h? (Sinal C4a de limite 40 km/h)",
    options: [
      { letter: 'A', text: "Não, porque a sinalização vertical o proíbe." },
      { letter: 'B', text: "Sim, porque dentro das localidades esta é a velocidade mínima obrigatória." },
      { letter: 'C', text: "Sim, porque o pavimento está em boas condições." }
    ],
    correctAnswer: 'B',
    category: 'regras',
    categoryLabel: "Sinalização e Limites de Velocidade",
    explanation: "Conforme indicado no gabarito oficial da prova de avaliação de conhecimentos do IMT.",
    legalReference: "Código da Estrada e Regulamento de Sinalização",
    visualType: 'speed_40'
  },
  {
    id: 52,
    question: "Apesar de existirem vários estilos de comunicação, devemos utilizar preferencialmente:",
    options: [
      { letter: 'A', text: "Passivo." },
      { letter: 'B', text: "Agressivo." },
      { letter: 'C', text: "Assertivo." }
    ],
    correctAnswer: 'C',
    category: 'comunicacao',
    categoryLabel: "Estilos de Comunicação Interpessoal",
    explanation: "O estilo assertivo é o ideal no exercício da atividade profissional, pois afirma os direitos e regras com respeito mútuo, sem agressividade nem passividade.",
    legalReference: "Comunicação e Deontologia Profissional TVDE"
  },
  {
    id: 53,
    question: "Among the various communication styles, you should preferably use:",
    options: [
      { letter: 'A', text: "Passive." },
      { letter: 'B', text: "Aggressive." },
      { letter: 'C', text: "Assertive." }
    ],
    correctAnswer: 'C',
    category: 'comunicacao',
    categoryLabel: "Communication Styles (English Module)",
    explanation: "Assertive communication allows you to express thoughts and boundaries clearly, politely and firmly without becoming aggressive.",
    legalReference: "Driver Communication Standard"
  },
  {
    id: 54,
    question: "O que é obrigatório para o transporte de passageiros com mobilidade reduzida?",
    options: [
      { letter: 'A', text: "Um veículo com capacidade para transportar cadeiras de rodas." },
      { letter: 'B', text: "Um veículo elétrico ou híbrido." },
      { letter: 'C', text: "Um motorista com formação adicional." }
    ],
    correctAnswer: 'A',
    category: 'tvde',
    categoryLabel: "Acessibilidade & Mobilidade Reduzida",
    explanation: "Os veículos destinados ou adaptados ao transporte de pessoas com mobilidade condicionada devem possuir espaço e fixação adequados ao transporte de cadeiras de rodas.",
    legalReference: "Lei n.º 45/2018 - Normas de Acessibilidade"
  },
  {
    id: 55,
    question: "UM MOTORISTA DE TÁXI PODE FAZER SERVIÇO TVDE?",
    options: [
      { letter: 'A', text: "NÃO" },
      { letter: 'B', text: "SIM" },
      { letter: 'C', text: "SIM PODE, DESDE QUE INSCRITO EM PLATAFORMA ELETRÓNICA" }
    ],
    correctAnswer: 'C',
    category: 'tvde',
    categoryLabel: "Regime Jurídico TVDE e Táxi",
    explanation: "Um motorista com certificado de aptidão de táxi pode desempenhar funções na atividade TVDE desde que obtenha o respetivo CMTVDE e se encontre vinculado a operadora licenciada e plataforma.",
    legalReference: "Lei n.º 45/2018 - Art. 10.º"
  },
  {
    id: 56,
    question: "AO CONDUZIR À NOITE O MOTORISTA DEVE:",
    options: [
      { letter: 'A', text: "REDUZIR A VELOCIDADE APENAS NAS CURVAS" },
      { letter: 'B', text: "MANTER OS MÁXIMOS LIGADOS EM TODAS AS SITUAÇÕES" },
      { letter: 'C', text: "VER E SER VISTO USANDO CORRETAMENTE AS LUZES" }
    ],
    correctAnswer: 'C',
    category: 'defensiva',
    categoryLabel: "Condução Noturna & Iluminação",
    explanation: "A condução noturna requer a utilização criteriosa das luzes de cruzamento (médios) e de estrada (máximos), garantindo boa visibilidade sem encadear os demais condutores.",
    legalReference: "Código da Estrada - Art. 59.º e 60.º"
  },
  {
    id: 57,
    question: "Os princípios gerais do socorrismo são:",
    options: [
      { letter: 'A', text: "Prever, ajudar e socorrer." },
      { letter: 'B', text: "Parar, socorrer e alertar." },
      { letter: 'C', text: "Prevenir, alertar e socorrer." }
    ],
    correctAnswer: 'C',
    category: 'socorrismo',
    categoryLabel: "Princípios do Socorrismo (PAS)",
    explanation: "Os três princípios universais do socorrismo são o PAS: Prevenir (ou Proteger o local), Alertar (os serviços de emergência 112) e Socorrer (as vítimas).",
    legalReference: "Manual de Primeiros Socorros no Trânsito Rodoviário"
  },
  {
    id: 58,
    question: "PARA SINALIZAR CORRETAMENTE O LOCAL DE UM ACIDENTE, O MOTORISTA DEVE:",
    options: [
      { letter: 'A', text: "LIGAR AS LUZES DE PERIGO, VESTIR O COLETE RETRORREFLETOR E COLOCAR O TRIÂNGULO DE PRÉ-SINALIZAÇÃO DE PERIGO" },
      { letter: 'B', text: "ABANDONAR O LOCAL DO ACIDENTE" }
    ],
    correctAnswer: 'A',
    category: 'socorrismo',
    categoryLabel: "Procedimento em Acidente",
    explanation: "A sinalização regulamentar exige acionar os quatro piscas, envergar o colete refletor antes de sair da viatura e colocar o triângulo a pelo menos 30 metros de distância.",
    legalReference: "Código da Estrada - Art. 88.º"
  },
  {
    id: 59,
    question: "QUANDO DEVE USAR O COLETE RETRORREFLETOR?",
    options: [
      { letter: 'A', text: "SEMPRE QUE SAIR DO VEÍCULO PARA SINALIZAR OU REPARAR" },
      { letter: 'B', text: "SOMENTE EM LOCAIS COM POUCA VISIBILIDADE" },
      { letter: 'C', text: "APENAS EM ESTRADAS MOVIMENTADAS" }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Equipamento de Proteção Individual",
    explanation: "É obrigatório vestir o colete retrorrefletor sempre que o condutor tiver de sair do veículo na faixa de rodagem ou na berma para proceder a reparações ou sinalização de perigo.",
    legalReference: "Código da Estrada - Art. 88.º, n.º 4"
  },
  {
    id: 60,
    question: "O que significa eco condução?",
    options: [
      { letter: 'A', text: "Utilizar apenas veículos elétricos." },
      { letter: 'B', text: "Conduzir de forma eficiente, reduzindo o consumo de combustível e poluição." },
      { letter: 'C', text: "Manter a velocidade máxima para chegar rapidamente ao destino." }
    ],
    correctAnswer: 'B',
    category: 'defensiva',
    categoryLabel: "Eco-Condução & Sustentabilidade",
    explanation: "Eco-condução é um estilo de condução inteligente e suave que reduz o consumo de energia, emissões poluentes e desgaste mecânico através da antecipação e mudanças atempadas.",
    legalReference: "Manual de Eco-Condução e Eficiência Energética"
  },
  {
    id: 61,
    question: "Quando a visibilidade é reduzida, para além de utilizar as luzes, deve:",
    options: [
      { letter: 'A', text: "Continuar com a mesma velocidade." },
      { letter: 'B', text: "Parar o veículo." },
      { letter: 'C', text: "Reduzir a velocidade e aumentar a distância para o veículo da frente." }
    ],
    correctAnswer: 'C',
    category: 'defensiva',
    categoryLabel: "Condução Defensiva em Baixa Visibilidade",
    explanation: "Em circunstâncias de visibilidade precária (chuva, nevoeiro ou escuridão), a velocidade deve ser diminuída e o intervalo de segurança ampliado para prevenir embates.",
    legalReference: "Código da Estrada - Art. 24.º"
  },
  {
    id: 62,
    question: "Como deve proceder ao conduzir com neve ou gelo?",
    options: [
      { letter: 'A', text: "Aumentar a velocidade para evitar derrapagens." },
      { letter: 'B', text: "Travar bruscamente." },
      { letter: 'C', text: "Colocar correntes nos pneus e circular devagar." }
    ],
    correctAnswer: 'C',
    category: 'defensiva',
    categoryLabel: "Condições Climatéricas Extremas",
    explanation: "A circulação sob gelo ou neve compactada requer correntes de neve nos rodados motrizes ou pneus próprios, além de velocidade baixa e comandos muito suaves.",
    legalReference: "Código da Estrada - Art. 22.º"
  },
  {
    id: 63,
    question: "No próximo entroncamento, o motorista deve ceder a passagem? (Sinal de aviso de via com prioridade)",
    options: [
      { letter: 'A', text: "Sim." },
      { letter: 'B', text: "Não." }
    ],
    correctAnswer: 'B',
    category: 'regras',
    categoryLabel: "Prioridade em Entroncamentos",
    explanation: "O sinal de perigo triangular indica a aproximação de entroncamento com via secundária sem prioridade; o condutor na via principal tem prioridade de passagem.",
    legalReference: "Regulamento de Sinalização do Trânsito - Sinal A22",
    visualType: 'priority_road'
  },
  {
    id: 64,
    question: "O que deve fazer antes de iniciar uma ultrapassagem?",
    options: [
      { letter: 'A', text: "Verificar se há espaço suficiente e visibilidade." },
      { letter: 'B', text: "Aumentar a velocidade." },
      { letter: 'C', text: "Aproximar-se ao máximo do veículo da frente." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Manobra de Ultrapassagem",
    explanation: "Antes de iniciar uma manobra de ultrapassagem, o condutor tem o dever de certificar-se de que a via está livre na extensão necessária e de que dispõe de visibilidade sem perigo.",
    legalReference: "Código da Estrada - Art. 38.º"
  },
  {
    id: 65,
    question: "Um motorista tem um comportamento profissional quando:",
    options: [
      { letter: 'A', text: "É apressado e impaciente durante a condução." },
      { letter: 'B', text: "Ignora os pedidos dos passageiros." },
      { letter: 'C', text: "É educado, respeita os passageiros e atende às suas necessidades." }
    ],
    correctAnswer: 'C',
    category: 'comunicacao',
    categoryLabel: "Deontologia & Atendimento Profissional",
    explanation: "A conduta profissional exige simpatia, apresentação cuidada, respeito pelas normas de circulação e atenção às necessidades de conforto e segurança dos clientes.",
    legalReference: "Código de Conduta e Ética TVDE"
  },
  {
    id: 66,
    question: "Os serviços de TVDE podem ser pagos em dinheiro ou cartão de crédito.",
    options: [
      { letter: 'A', text: "Verdadeiro" },
      { letter: 'B', text: "Falso" }
    ],
    correctAnswer: 'B',
    category: 'tvde',
    categoryLabel: "Regime Jurídico TVDE & Pagamentos",
    explanation: "Falso. Por lei, todo e qualquer pagamento de serviços TVDE deve ser processado exclusivamente por via eletrónica através da plataforma, sendo proibido o pagamento direto em numerário ao motorista.",
    legalReference: "Lei n.º 45/2018 - Art. 15.º (Regime de pagamento)"
  },
  {
    id: 67,
    question: "O sinal indica: (Sinal retangular azul com letra P branca)",
    options: [
      { letter: 'A', text: "Estacionamento autorizado." },
      { letter: 'B', text: "Estacionamento proibido." },
      { letter: 'C', text: "Apenas paragem permitida." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Sinalização de Estacionamento",
    explanation: "O sinal de informação H1a (letra «P» sobre fundo azul) indica um local ou parque onde o estacionamento de veículos é expressamente autorizado.",
    legalReference: "Regulamento de Sinalização do Trânsito - Sinal H1a",
    visualType: 'parking'
  },
  {
    id: 68,
    question: "Segundo a Lei n.º 59/2018, é permitida publicidade no interior e no exterior dos veículos TVDE, nos termos previstos para a atividade de transporte em táxi.",
    options: [
      { letter: 'A', text: "Verdadeiro" },
      { letter: 'B', text: "Falso" }
    ],
    correctAnswer: 'B',
    category: 'tvde',
    categoryLabel: "Publicidade em Veículos TVDE",
    explanation: "Falso. O regime de publicidade em veículos TVDE obedece a restrições próprias e não ao regime geral livre do transporte em táxi.",
    legalReference: "Legislação do Transporte em Táxi e TVDE"
  },
  {
    id: 69,
    question: "Quando a aderência ao piso é menor a velocidade deve ser moderada, porque:",
    options: [
      { letter: 'A', text: "A distância de paragem aumenta." },
      { letter: 'B', text: "A distância de travagem diminui." },
      { letter: 'C', text: "A distância de paragem diminui." }
    ],
    correctAnswer: 'A',
    category: 'defensiva',
    categoryLabel: "Aderência & Distância de Paragem",
    explanation: "A redução da aderência faz com que os pneus demorem mais tempo a imobilizar a viatura, aumentando drasticamente a distância total de paragem.",
    legalReference: "Código da Estrada - Art. 18.º e 24.º"
  },
  {
    id: 70,
    question: "O que deve fazer perante um sinal de STOP?",
    options: [
      { letter: 'A', text: "Parar apenas se vier outro veículo." },
      { letter: 'B', text: "Parar obrigatoriamente antes de avançar." },
      { letter: 'C', text: "Reduzir a velocidade." }
    ],
    correctAnswer: 'B',
    category: 'regras',
    categoryLabel: "Sinal de Paragem Obrigatória (STOP)",
    explanation: "O sinal B2 (STOP) impõe a paragem completa e obrigatória da viatura imediatamente antes de entrar na interseção, mesmo quando não venha qualquer outro veículo.",
    legalReference: "Código da Estrada - Art. 32.º e Sinal B2",
    visualType: 'stop_sign'
  },
  {
    id: 71,
    question: "Em que situação deve ligar para o número de emergência 112?",
    options: [
      { letter: 'A', text: "Para pedir informações de trânsito." },
      { letter: 'B', text: "Para chamar um reboque." },
      { letter: 'C', text: "Sempre que houver necessidade de assistência urgente." }
    ],
    correctAnswer: 'C',
    category: 'socorrismo',
    categoryLabel: "Serviço Nacional de Emergência 112",
    explanation: "O 112 deve ser acionado exclusivamente em situações de socorro urgente (feridos, risco de vida, incêndios ou perigo grave iminente).",
    legalReference: "Regulamento da Linha Europeia de Emergência 112"
  },
  {
    id: 72,
    question: "Quem é responsável pela fiscalização do cumprimento das normas no serviço TVDE?",
    options: [
      { letter: 'A', text: "GNR e IMT." },
      { letter: 'B', text: "GNR e PSP." },
      { letter: 'C', text: "PSP, GNR e IMT." }
    ],
    correctAnswer: 'C',
    category: 'tvde',
    categoryLabel: "Fiscalização da Atividade TVDE",
    explanation: "A fiscalização do cumprimento das obrigações legais no serviço TVDE compete conjuntamente às forças de segurança (PSP e GNR), ao IMT e à Autoridade da Mobilidade e dos Transportes (AMT).",
    legalReference: "Lei n.º 45/2018 - Art. 26.º (Fiscalização)"
  },
  {
    id: 73,
    question: "A eco condução é uma forma de condução eficiente, menos poluente e mais segura.",
    options: [
      { letter: 'A', text: "A afirmação é verdadeira." },
      { letter: 'B', text: "A afirmação é falsa." }
    ],
    correctAnswer: 'A',
    category: 'defensiva',
    categoryLabel: "Sustentabilidade e Eco-Condução",
    explanation: "Verdadeiro. As técnicas de condução ecológica reduzem o consumo de energia, diminuem a sinistralidade e prolongam a vida útil dos componentes do veículo.",
    legalReference: "Boas Práticas Ambientais no Transporte Rodoviário"
  },
  {
    id: 74,
    question: "O processo de comunicação prevê a existência mínima de:",
    options: [
      { letter: 'A', text: "Um emissor." },
      { letter: 'B', text: "Um recetor." },
      { letter: 'C', text: "Um emissor e um recetor." }
    ],
    correctAnswer: 'C',
    category: 'comunicacao',
    categoryLabel: "Elementos da Comunicação",
    explanation: "Para que ocorra um ato de comunicação, é necessária a interação recíproca entre pelo menos dois agentes: quem emite a mensagem (emissor) e quem a recebe (recetor).",
    legalReference: "Fundamentos de Comunicação Humana"
  },
  {
    id: 75,
    question: "Um motorista deve comportar-se de forma:",
    options: [
      { letter: 'A', text: "Agressiva." },
      { letter: 'B', text: "Passiva." },
      { letter: 'C', text: "Assertiva." }
    ],
    correctAnswer: 'C',
    category: 'comunicacao',
    categoryLabel: "Postura e Atitude Profissional",
    explanation: "A assertividade permite ao motorista comunicar de forma calma, clara e firme, mantendo o controlo da situação e prestando um serviço de elevada qualidade.",
    legalReference: "Deontologia Profissional TVDE"
  },
  {
    id: 76,
    question: "Os sinais verticais de obrigação são:",
    options: [
      { letter: 'A', text: "Circulares com fundo azul." },
      { letter: 'B', text: "Retangulares com fundo verde." },
      { letter: 'C', text: "Triangulares com borda vermelha." }
    ],
    correctAnswer: 'A',
    category: 'regras',
    categoryLabel: "Sinais de Obrigação",
    explanation: "Os sinais de obrigação têm formato circular com fundo de cor azul e símbolos brancos, impondo aos condutores comportamentos ou direções obrigatórias.",
    legalReference: "Regulamento de Sinalização do Trânsito - Sinais de Obrigação (D1 a D13)"
  }
];

export interface ExamSessionResult {
  date: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  markedQuestions: number[];
  mode: 'exam' | 'study';
}
