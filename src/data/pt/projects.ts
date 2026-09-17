// src/data/pt/projects.ts

import { type Lang, t } from '../../i18n/translations';

import _churn1   from '../../assets/images/Churn-Analysis.png';
import _churn2   from '../../assets/images/Churn-Analysis2.png';
import _churn3   from '../../assets/images/Churn-Analysis3.png';
import _churn4   from '../../assets/images/Churn-Analysis4.png';
import _churn5   from '../../assets/images/Churn-Analysis5.png';
import _churn6   from '../../assets/images/Churn-Analysis6.png';
import _churn7   from '../../assets/images/Churn-Analysis7.png';
import _fraud1   from '../../assets/images/fraud-detection-system.png';
import _fraud2   from '../../assets/images/fraud-detection-system2.png';
import _fraud3   from '../../assets/images/fraud-detection-system3.png';
import _fraud4   from '../../assets/images/fraud-detection-system4.png';
import _realEstate from '../../assets/images/real_estate.png';
import _chatcfo1 from '../../assets/images/chatcfo.png';
import _chatcfo2 from '../../assets/images/chatcfo2.png';
import _chatcfo3 from '../../assets/images/chatcfo3.png';
import _macro    from '../../assets/images/macro.png';
import _equity1  from '../../assets/images/equity_research.png';
import _equity2  from '../../assets/images/equity_research2.png';
import _banker   from '../../assets/images/banker_ai.png';
import _warehouse  from '../../assets/images/warehouse.png';
import _reporting  from '../../assets/images/reporting.png';
import _ecom1    from '../../assets/images/ecommerce.png';
import _ecom2    from '../../assets/images/ecommerce2.png';
import _ecom3    from '../../assets/images/ecommerce3.png';
import _ecom4    from '../../assets/images/ecommerce4.png';
import _forecast from '../../assets/images/forecast.png';
import _fraudapi  from '../../assets/images/fraudapi.png';
import _fraudapi2  from '../../assets/images/fraudapi2.png';
import _fraudapi3  from '../../assets/images/fraudapi3.png';
import _fraudapi4  from '../../assets/images/fraudapi4.png';
import _auditai  from '../../assets/images/auditai.png';
import _auditai2  from '../../assets/images/auditai2.png';



export interface Project {
  id: string;
  titleKey: string;
  typeKey: string;
  desc: string;
  stack: string[];
  linkRepo: string;
  linkDemo: string;
  caseStudy: string;
  images: string[];
  imageAlts: string[];
  complexity: 'intermediate' | 'advanced';
  businessImpact: 'medium' | 'high';
  featured: boolean;
  category: ProjectCategory | ProjectCategory[];
}

export function getProjectsData(baseUrl: string): Project[] {
  return [
    {
      id: 'churn-analysis',
      titleKey: 'project.churn.title',
      typeKey: 'project.churn.type',
      desc: "<b>🔴 Problema:</b> Os relatórios estáticos de churn só reagem depois de o cliente já ter saído.<br><b>🟢 Solução:</b> Projeto de estudo pessoal sobre um dataset público de telecomunicações, integrando Análise de Sobrevivência (Kaplan-Meier) e ML (Gradient Boosting) para prever o 'quando' e o 'porquê' do churn.<br><b>🚀 Impacto:</b> O modelo sinalizou segmentos de alto risco representando ~30% da receita do dataset — uma ilustração da abordagem, não um resultado de negócio real.",
      stack: ["Python", "Machine Learning", "Lifelines", "Pandas"],
      linkRepo: "https://github.com/jose-galvao13/churn-analysis",
      linkDemo: "#",
      caseStudy: `churn-analysis`,
      images: [_churn1.src, _churn2.src, _churn3.src, _churn4.src, _churn5.src, _churn6.src, _churn7.src],
      imageAlts: [
        "Curva de sobrevivência Kaplan-Meier mostrando probabilidade de churn ao longo de 12 meses",
        "Gráfico de importância de features do modelo Gradient Boosting para previsão de churn",
        "Matriz de segmentação de clientes por risco de churn e valor de receita",
        "Mapa de calor de retenção por coorte mostrando padrões mensais de churn",
        "Dashboard de previsão de churn com lista de clientes de alto risco",
        "Curva ROC mostrando AUC de 0,91 para o modelo de classificação de churn",
        "Resultados de análise de sobrevivência por segmento de cliente e tipo de contrato",
      ],
      complexity: "advanced",
      businessImpact: "high",
      featured: true,
      category: ['ml', 'bi'],
    },
    {
      id: 'fraud-detection',
      titleKey: 'project.fraud.title',
      typeKey: 'project.fraud.type',
      desc: "<b>🔴 Problema:</b> A deteção de fraude baseada em regras só apanha padrões para os quais foi explicitamente programada, falhando técnicas novas ('zero-day').<br><b>🟢 Solução:</b> Projeto de estudo pessoal construindo um ensemble não supervisionado (Isolation Forest & PCA) para detetar anomalias sem dados rotulados.<br><b>🚀 Impacto:</b> Sinalizou 0,17% das transações como anómalas num dataset público sintético (PaySim) — uma prova de conceito, não um resultado de produção.",
      stack: ["Python", "Machine Learning", "Scikit-Learn", "Matplotlib"],
      linkRepo: "https://github.com/jose-galvao13/fraud-detection-system",
      linkDemo: "#",
      caseStudy: `fraud-detection`,
      images: [_fraud1.src, _fraud2.src, _fraud3.src, _fraud4.src],
      imageAlts: [
        "Diagrama de dispersão PCA isolando transações anómalas em espaço 2D",
        "Histograma da distribuição de pontuações de anomalia do Isolation Forest",
        "Diagrama de arquitetura do pipeline de deteção de fraude",
        "Grafo de rede de transações destacando clusters fraudulentos sinalizados",
      ],
      complexity: "advanced",
      businessImpact: "high",
      featured: false,
      category: ['ml'],
    },
    {
      id: 'real-estate',
      titleKey: 'project.realestate.title',
      typeKey: 'project.realestate.type',
      desc: "<b>🔴 Problema:</b> As estatísticas nacionais de preços escondem grandes diferenças entre municípios vizinhos.<br><b>🟢 Solução:</b> Recolheu e analisou mais de 95k anúncios portugueses com mapeamento geoespacial.<br><b>🚀 Impacto:</b> Revela diferenças de preço/m² até €420/m² entre municípios vizinhos — um padrão a investigar, não uma recomendação de investimento validada.",
      stack: ["Power BI", "Python", "Data Modeling", "Web Scraping"],
      linkRepo: "https://github.com/jose-galvao13/Portugal-Real-Estate",
      linkDemo: "#",
      caseStudy: `real-estate`,
      images: [_realEstate.src],
      imageAlts: ["Dashboard Power BI mostrando preço por m² nos municípios portugueses com mapa geoespacial"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: true,
      category: ['bi'],
    },
    {
      id: 'chatcfo',
      titleKey: 'project.chatcfo.title',
      typeKey: 'project.chatcfo.type',
      desc: "<b>🔴 Problema:</b> Procurar manualmente uma figura específica em PDFs financeiros densos (10-Ks, relatórios de resultados) é lento e fácil de falhar por diferença de palavras.<br><b>🟢 Solução:</b> Projeto de estudo pessoal em RAG (Llama 3) que consulta documentos com citações ao nível da página.<br><b>🚀 Impacto:</b> Respondeu corretamente a 92% de um conjunto de teste de 100 perguntas, numa fração do tempo que a pesquisa manual me levava.",
      stack: ["Python", "Machine Learning", "LangChain", "RAG"],
      linkRepo: "https://github.com/jose-galvao13/ChatCFO",
      linkDemo: "#",
      caseStudy: `chatcfo`,
      images: [_chatcfo1.src, _chatcfo2.src, _chatcfo3.src],
      imageAlts: [
        "Interface do ChatCFO mostrando consulta com IA num PDF financeiro de 200 páginas",
        "Arquitetura do pipeline RAG: ingestão de documentos, embeddings e fluxo de recuperação",
        "Painel de citações do ChatCFO mostrando referências de páginas-fonte para cada resposta",
      ],
      complexity: "advanced",
      businessImpact: "high",
      featured: true,
      category: ['ai', 'finance'],
    },
    {
      id: 'macro-portfolio',
      titleKey: 'project.macro.title',
      typeKey: 'project.macro.type',
      desc: "<b>🔴 Problema:</b> Folhas de cálculo Excel estáticas não captam movimentos de preço em tempo real nem calculam métricas de risco standard.<br><b>🟢 Solução:</b> Dashboard em direto a acompanhar S&P 500, BTC e Ouro via API.<br><b>🚀 Impacto:</b> Automatiza métricas de risco (Sharpe, Drawdown), permitindo verificar o perfil de risco de um portfólio em minutos em vez de o reconstruir numa folha de cálculo.",
      stack: ["Python", "Streamlit", "Plotly", "API"],
      linkRepo: "https://github.com/jose-galvao13/portfolio-macro-analyzer",
      linkDemo: "https://portfolio-macro-analyzer-galvao.streamlit.app/",
      caseStudy: `macro-portfolio`,
      images: [_macro.src],
      imageAlts: ["Dashboard de portfólio em direto a acompanhar S&P 500, BTC e Ouro com métricas de Rácio de Sharpe e Drawdown Máximo"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: false,
      category: ['finance', 'bi'],
    },
    {
      id: 'equity-research',
      titleKey: 'project.equity.title',
      typeKey: 'project.equity.type',
      desc: "<b>🔴 Problema:</b> Construir uma avaliação DCF à mão em Excel é lento e fácil de errar.<br><b>🟢 Solução:</b> Ferramenta de auto-avaliação que obtém dados financeiros em tempo real para calcular WACC e FCF.<br><b>🚀 Impacto:</b> Gera um relatório DCF inicial em ~2 minutos, como ponto de partida para mais análise, não como preço-alvo final.",
      stack: ["Python", "API", "Financial Modeling", "Valuation"],
      linkRepo: "https://github.com/jose-galvao13/Equity-Research-Agent-AI",
      linkDemo: "#",
      caseStudy: `equity-research`,
      images: [_equity1.src, _equity2.src],
      imageAlts: [
        "Resultado da avaliação DCF automática mostrando cálculo do WACC e projeções de fluxo de caixa livre",
        "Relatório de análise de capital gerado em 2 minutos com tabela de análise de sensibilidade",
      ],
      complexity: "intermediate",
      businessImpact: "high",
      featured: false,
      category: ['finance'],
    },
    {
      id: 'banker-ai',
      titleKey: 'project.banker.title',
      typeKey: 'project.banker.type',
      desc: "<b>🔴 Problema:</b> As análises de crédito manuais são lentas e podem aplicar critérios de forma inconsistente.<br><b>🟢 Solução:</b> Modelo ML (Random Forest) sobre o dataset público German Credit, com explicabilidade via SHAP.<br><b>🚀 Impacto:</b> 0,85 AUC-ROC no conjunto de teste vs. ~0,71 de uma baseline de regressão logística — um projeto de estudo pessoal, não um resultado auditado de crédito real.",
      stack: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn"],
      linkRepo: "https://github.com/jose-galvao13/banker-ai",
      linkDemo: "https://credit-risk-scoring-ai-engine-galvao.streamlit.app/",
      caseStudy: `banker-ai`,
      images: [_banker.src],
      imageAlts: ["Interface de scoring de crédito do Banker AI mostrando pontuação de risco do candidato e explicação da decisão"],
      complexity: "advanced",
      businessImpact: "high",
      featured: false,
      category: ['ml', 'finance'],
    },
    {
      id: 'financial-warehouse',
      titleKey: 'project.warehouse.title',
      typeKey: 'project.warehouse.type',
      desc: "<b>🔴 Problema:</b> Dados espalhados por vários sistemas sem fonte única de verdade leva a números conflituantes para a mesma pergunta.<br><b>🟢 Solução:</b> Pipeline ETL que transforma um dataset simulado multi-fonte num esquema em estrela.<br><b>🚀 Impacto:</b> Consultas de reporting visivelmente mais rápidas e um único conjunto consistente de números, num dataset simulado de 1,2M transações.",
      stack: ["SQL", "Python", "Power BI", "Data Architecture"],
      linkRepo: "https://github.com/jose-galvao13/financial-warehouse",
      linkDemo: "#",
      caseStudy: `financial-warehouse`,
      images: [_warehouse.src],
      imageAlts: ["Diagrama de arquitetura de esquema em estrela para armazém de dados financeiros com tabelas de factos e dimensões"],
      complexity: "advanced",
      businessImpact: "high",
      featured: false,
      category: ['engineering', 'finance'],
    },
    {
      id: 'financial-reporting',
      titleKey: 'project.reporting.title',
      typeKey: 'project.reporting.type',
      desc: "<b>🔴 Problema:</b> O fecho manual de fim de mês envolve copiar dados entre templates e verificá-los contra as normas contabilísticas (SNC) à mão.<br><b>🟢 Solução:</b> Script Python que automatiza a validação de Balancetes face às regras SNC.<br><b>🚀 Impacto:</b> Reduz um processo manual de várias horas para segundos, com validação débito=crédito incorporada.",
      stack: ["Python", "Excel Automation", "Financial Reporting"],
      linkRepo: "https://github.com/jose-galvao13/automated-financial-reporting",
      linkDemo: "#",
      caseStudy: `financial-reporting`,
      images: [_reporting.src],
      imageAlts: ["Resultado da automação Python: relatório de validação do Balancete face às regras contabilísticas SNC"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: false,
      category: ['engineering', 'finance'],
    },
    {
      id: 'ecommerce-analytics',
      titleKey: 'project.ecom.title',
      typeKey: 'project.ecom.type',
      desc: "<b>🔴 Problema:</b> A receita agregada pode parecer saudável enquanto esconde churn entre clientes de alto valor.<br><b>🟢 Solução:</b> Modelo de segmentação RFM sobre um dataset público de mais de 100k transações de e-commerce.<br><b>🚀 Impacto:</b> Revelou ~€96k em gasto histórico de um segmento de alto valor inativo e um sinal de venda cruzada de ~€42k — padrões nos dados, não resultados medidos de campanha.",
      stack: ["Power BI", "SQL", "DAX", "RFM Analysis"],
      linkRepo: "https://github.com/jose-galvao13/ecommerce-analytics",
      linkDemo: "#",
      caseStudy: `ecommerce-analytics`,
      images: [_ecom1.src, _ecom2.src, _ecom3.src, _ecom4.src],
      imageAlts: [
        "Dashboard de segmentação RFM em Power BI mostrando clusters de clientes e receita em risco",
        "Gráfico de valor do tempo de vida do cliente segmentado por quintis RFM",
        "Mapa de oportunidades de venda cruzada mostrando potencial de €42k de receita por categoria de produto",
        "Análise de coorte de churn com tendências de retenção mês a mês",
      ],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: false,
      category: ['bi'],
    },
    {
      id: 'sales-forecasting',
      titleKey: 'project.forecast.title',
      typeKey: 'project.forecast.type',
      desc: "<b>🔴 Problema:</b> O orçamento estático não consegue capturar a sazonalidade.<br><b>🟢 Solução:</b> Modelo Facebook Prophet a prever a procura para 6 meses.<br><b>🚀 Impacto:</b> ~12% MAPE (erro de previsão) nos dados de teste, explorando como uma melhor previsão poderia apoiar o planeamento de inventário e fluxo de caixa.",
      stack: ["Python", "Power BI", "Machine Learning", "Time-Series"],
      linkRepo: "https://github.com/jose-galvao13/Ai-Sales-Forecasting-Budgeting",
      linkDemo: "#",
      caseStudy: `sales-forecasting`,
      images: [_forecast.src],
      imageAlts: ["Previsão de vendas a 6 meses com Facebook Prophet com intervalos de confiança e decomposição de sazonalidade"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: false,
      category: ['ml', 'bi'],
    },
    {
      id: 'fraud-api',
      titleKey: 'project.fraudapi.title',
      typeKey: 'project.fraudapi.type',
      desc: "<b>🔴 Problema:</b> Filtros de fraude legados são demasiado lentos para pagamentos em tempo real e não escalam bem.<br><b>🟢 Solução:</b> API ao estilo MLOps (FastAPI) que serve um ensemble não supervisionado com processamento em lote e hot-reloading, sobre um dataset público sintético.<br><b>🚀 Impacto:</b> Latência de inferência inferior a 50ms e 64,6% de recall — a precisão é uma limitação conhecida (8,3%), o que significa que isto precisa de revisão humana, não de automação total, para ser utilizável.",
      stack: ["FastAPI", "MLOps", "Docker", "Python", "Scikit-Learn"],
      linkRepo: "https://github.com/jose-galvao13/fraud-api",
      linkDemo: "#",
      caseStudy: `fraud-api`,
      images: [_fraudapi.src, _fraudapi2.src, _fraudapi3.src, _fraudapi4.src],
      imageAlts: [
        "Dashboard da FraudShield API exibindo resumo executivo e métricas de deteção",
        "Documentação Swagger UI da FastAPI para pontuação de transações em tempo real",
        "Arquitetura do pipeline de MLOps, desde a ingestão de dados até à implementação em contentores (Docker)",
        "Saída de terminal mostrando a resposta JSON de previsões em lote com níveis de risco"
      ],
      complexity: "advanced",
      businessImpact: "high",
      featured: true,
      category: ['ml', 'engineering'],
    },
     {
      id: 'audit-ai',
      titleKey: 'project.auditai.title',
      typeKey: 'project.auditai.type',
      desc: "<b>🔴 Problema:</b> A auditoria manual depende de amostrar uma pequena fração das transações, deixando a maioria dos dados por verificar.<br><b>🟢 Solução:</b> Projeto de estudo pessoal usando um LLM e análise estatística para sinalizar lançamentos contabilísticos de alto risco.<br><b>🚀 Impacto:</b> Analisa 100% das transações em vez de uma amostra de 5%, sobre um livro-razão sintético de teste — uma prova de conceito, não uma ferramenta de auditoria implementada.",
      stack: ["Python", "LLMs", "Pandas", "OpenAI API"],
      linkRepo: "https://github.com/jose-galvao13/audit-ai",
      linkDemo: "#",
      caseStudy: `audit-ai`,
      images: [_auditai.src, _auditai2.src],
      imageAlts: [
        "Dashboard do Audit AI mostrando a análise de risco de lançamentos contábeis",
        "Interface de detecção de anomalias com explicação gerada por IA para cada alerta"
      ],
      complexity: "advanced",
      businessImpact: "high",
      featured: false,
      category: ['ai', 'finance'],
    },
  ];
}

export function getTranslatedProjects(baseUrl: string, lang: Lang = 'pt') {
  const projects = getProjectsData(baseUrl);
  return projects.map(project => ({
    ...project,
    title: t(lang, project.titleKey),
    type: t(lang, project.typeKey),
  }));
}

export function getProjectById(id: string, baseUrl: string, lang: Lang = 'pt') {
  const projects = getTranslatedProjects(baseUrl, lang);
  return projects.find(p => p.id === id);
}

// ✅ CORRIGIDO: era 'en', agora é 'pt'
export const getProjects = (baseUrl: string) => getTranslatedProjects(baseUrl, 'pt');