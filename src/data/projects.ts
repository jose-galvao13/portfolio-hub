// src/data/projects-i18n.ts
// ─────────────────────────────────────────────────────────────────────────────
// Enhanced projects data with i18n support
// Uses translation keys instead of hardcoded strings
// ─────────────────────────────────────────────────────────────────────────────

import { type Lang, t } from '../i18n/translations';

import _churn1   from '../assets/images/Churn-Analysis.png';
import _churn2   from '../assets/images/Churn-Analysis2.png';
import _churn3   from '../assets/images/Churn-Analysis3.png';
import _churn4   from '../assets/images/Churn-Analysis4.png';
import _churn5   from '../assets/images/Churn-Analysis5.png';
import _churn6   from '../assets/images/Churn-Analysis6.png';
import _churn7   from '../assets/images/Churn-Analysis7.png';
import _fraud1   from '../assets/images/fraud-detection-system.png';
import _fraud2   from '../assets/images/fraud-detection-system2.png';
import _fraud3   from '../assets/images/fraud-detection-system3.png';
import _fraud4   from '../assets/images/fraud-detection-system4.png';
import _realEstate from '../assets/images/real_estate.png';
import _chatcfo1 from '../assets/images/chatcfo.png';
import _chatcfo2 from '../assets/images/chatcfo2.png';
import _chatcfo3 from '../assets/images/chatcfo3.png';
import _macro    from '../assets/images/macro.png';
import _equity1  from '../assets/images/equity_research.png';
import _equity2  from '../assets/images/equity_research2.png';
import _banker   from '../assets/images/banker_ai.png';
import _warehouse  from '../assets/images/warehouse.png';
import _reporting  from '../assets/images/reporting.png';
import _ecom1    from '../assets/images/ecommerce.png';
import _ecom2    from '../assets/images/ecommerce2.png';
import _ecom3    from '../assets/images/ecommerce3.png';
import _ecom4    from '../assets/images/ecommerce4.png';
import _forecast from '../assets/images/forecast.png';
import _fraudapi  from '../assets/images/fraudapi.png';
import _fraudapi2  from '../assets/images/fraudapi2.png';
import _fraudapi3  from '../assets/images/fraudapi3.png';
import _fraudapi4  from '../assets/images/fraudapi4.png';

export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Translation key for title */
  titleKey: string;
  /** Translation key for type */
  typeKey: string;
  /** Hardcoded description with HTML (contains specific business data) */
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

/**
 * Get the raw project data (with translation keys)
 */
export function getProjectsData(baseUrl: string): Project[] {
  return [
    // ── FEATURED ───────────────────────────────────────────────────────────
    {
      id: 'churn-analysis',
      titleKey: 'project.churn.title',
      typeKey: 'project.churn.type',
      desc: "<b>🔴 Problem:</b> Static churn reports only react after the customer has already left.<br><b>🟢 Solution:</b> Developed a full-cycle system integrating Survival Analysis (Kaplan-Meier) and ML (Gradient Boosting) to predict the 'when' and 'why' of churn.<br><b>🚀 Impact:</b> Identified high-risk segments representing 30% of revenue at risk, enabling proactive retention campaigns.",
      stack: ["Python", "Machine Learning", "Lifelines", "Pandas"],
      linkRepo: "https://github.com/jose-galvao13/churn-analysis",
      linkDemo: "#",
      caseStudy: `churn-analysis`,
      images: [_churn1.src, _churn2.src, _churn3.src, _churn4.src, _churn5.src, _churn6.src, _churn7.src],
      imageAlts: [
        "Kaplan-Meier survival curve showing customer churn probability over 12 months",
        "Gradient Boosting model feature importance chart for churn prediction",
        "Customer segmentation matrix by churn risk and revenue value",
        "Cohort retention heatmap showing monthly churn patterns",
        "Churn prediction dashboard with high-risk customer list",
        "ROC curve showing 0.91 AUC for churn classification model",
        "Survival analysis results by customer segment and contract type",
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
      desc: "<b>🔴 Problem:</b> Traditional rules miss 40% of zero-day fraud attacks.<br><b>🟢 Solution:</b> Built an unsupervised ensemble (Isolation Forest & PCA) to detect anomalies without labels.<br><b>🚀 Impact:</b> Detected patterns in 0.17% of transactions that bypassed standard filters.",
      stack: ["Python", "Machine Learning", "Scikit-Learn", "Matplotlib"],
      linkRepo: "https://github.com/jose-galvao13/fraud-detection-system",
      linkDemo: "#",
      caseStudy: `fraud-detection`,
      images: [_fraud1.src, _fraud2.src, _fraud3.src, _fraud4.src],
      imageAlts: [
        "PCA scatter plot isolating anomalous transactions in 2D space",
        "Isolation Forest anomaly scores distribution histogram",
        "Fraud detection pipeline architecture diagram",
        "Transaction network graph highlighting flagged fraudulent clusters",
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
      desc: "<b>🔴 Problem:</b> Investors lack granular data to find undervalued assets.<br><b>🟢 Solution:</b> Scraped & analyzed 95k+ listings with geo-spatial mapping.<br><b>🚀 Impact:</b> Identifies arbitrage opportunities by comparing price/m² across neighboring municipalities.",
      stack: ["Power BI", "Python", "Data Modeling", "Web Scraping"],
      linkRepo: "https://github.com/jose-galvao13/Portugal-Real-Estate",
      linkDemo: "#",
      caseStudy: `real-estate`,
      images: [_realEstate.src],
      imageAlts: ["Power BI dashboard showing price per m² across Portuguese municipalities with geo-spatial map"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: true,
      category: ['bi'],
    },
    {
      id: 'chatcfo',
      titleKey: 'project.chatcfo.title',
      typeKey: 'project.chatcfo.type',
      desc: "<b>🔴 Problem:</b> Auditors spend hours digging through 200+ page PDFs.<br><b>🟢 Solution:</b> AI Assistant (RAG + Llama 3) that queries docs with citations.<br><b>🚀 Impact:</b> Reduces research time by 95%, delivering verifiable answers in seconds.",
      stack: ["Python", "Machine Learning", "LangChain", "RAG"],
      linkRepo: "https://github.com/jose-galvao13/ChatCFO",
      linkDemo: "#",
      caseStudy: `chatcfo`,
      images: [_chatcfo1.src, _chatcfo2.src, _chatcfo3.src],
      imageAlts: [
        "ChatCFO interface showing AI-powered query on a 200-page financial PDF",
        "RAG pipeline architecture: document ingestion, embedding, and retrieval flow",
        "ChatCFO citation panel showing source page references for each answer",
      ],
      complexity: "advanced",
      businessImpact: "high",
      featured: true,
      category: ['ai', 'finance'],
    },

    // ── OTHER (Show More) ───────────────────────────────────────────────────
    {
      id: 'macro-portfolio',
      titleKey: 'project.macro.title',
      typeKey: 'project.macro.type',
      desc: "<b>🔴 Problem:</b> Static Excel sheets fail to capture real-time volatility.<br><b>🟢 Solution:</b> Live dashboard tracking S&P 500, BTC & Gold via API.<br><b>🚀 Impact:</b> Automates risk metrics (Sharpe, Drawdown), enabling instant rebalancing decisions.",
      stack: ["Python", "Streamlit", "Plotly", "API"],
      linkRepo: "https://github.com/jose-galvao13/portfolio-macro-analyzer",
      linkDemo: "https://portfolio-macro-analyzer-galvao.streamlit.app/",
      caseStudy: `macro-portfolio`,
      images: [_macro.src],
      imageAlts: ["Live portfolio dashboard tracking S&P 500, BTC and Gold with Sharpe Ratio and Max Drawdown metrics"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: false,
      category: ['finance', 'bi'],
    },
    {
      id: 'equity-research',
      titleKey: 'project.equity.title',
      typeKey: 'project.equity.type',
      desc: "<b>🔴 Problem:</b> Manual DCF valuation is prone to error and slow.<br><b>🟢 Solution:</b> Auto-Valuation tool fetching live financials to calculate WACC & FCF.<br><b>🚀 Impact:</b> Generates equity research reports in 2 minutes vs. 4 hours manually.",
      stack: ["Python", "API", "Financial Modeling", "Valuation"],
      linkRepo: "https://github.com/jose-galvao13/Equity-Research-Agent-AI",
      linkDemo: "#",
      caseStudy: `equity-research`,
      images: [_equity1.src, _equity2.src],
      imageAlts: [
        "Auto DCF valuation output showing WACC calculation and free cash flow projections",
        "Equity research report generated in 2 minutes with sensitivity analysis table",
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
      desc: "<b>🔴 Problem:</b> Manual credit reviews are slow and biased.<br><b>🟢 Solution:</b> ML model (Random Forest) protected by dynamic compliance rules.<br><b>🚀 Impact:</b> 85% prediction accuracy and 50% reduction in processing time per applicant.",
      stack: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn"],
      linkRepo: "https://github.com/jose-galvao13/banker-ai",
      linkDemo: "https://credit-risk-scoring-ai-engine-galvao.streamlit.app/",
      caseStudy: `banker-ai`,
      images: [_banker.src],
      imageAlts: ["Banker AI credit scoring interface showing applicant risk score and decision explanation"],
      complexity: "advanced",
      businessImpact: "high",
      featured: false,
      category: ['ml', 'finance'],
    },
    {
      id: 'financial-warehouse',
      titleKey: 'project.warehouse.title',
      typeKey: 'project.warehouse.type',
      desc: "<b>🔴 Problem:</b> Decentralized CSV files lead to data inconsistency.<br><b>🟢 Solution:</b> Enterprise ETL pipeline transforming raw ERP data into a Star Schema.<br><b>🚀 Impact:</b> Reduced query time by 70% and enabled single-source-of-truth reporting.",
      stack: ["SQL", "Python", "Power BI", "Data Architecture"],
      linkRepo: "https://github.com/jose-galvao13/financial-warehouse",
      linkDemo: "#",
      caseStudy: `financial-warehouse`,
      images: [_warehouse.src],
      imageAlts: ["Star schema data architecture diagram for financial data warehouse with fact and dimension tables"],
      complexity: "advanced",
      businessImpact: "high",
      featured: false,
      category: ['engineering', 'finance'],
    },
    {
      id: 'financial-reporting',
      titleKey: 'project.reporting.title',
      typeKey: 'project.reporting.type',
      desc: "<b>🔴 Problem:</b> Month-end close takes 2 days of manual Excel work.<br><b>🟢 Solution:</b> Python script that validates Trial Balances vs. SNC rules.<br><b>🚀 Impact:</b> Process cut to <5 seconds with 100% mathematical integrity guaranteed.",
      stack: ["Python", "Excel Automation", "Financial Reporting"],
      linkRepo: "https://github.com/jose-galvao13/automated-financial-reporting",
      linkDemo: "#",
      caseStudy: `financial-reporting`,
      images: [_reporting.src],
      imageAlts: ["Python automation output: Trial Balance validation report against SNC accounting rules"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: false,
      category: ['engineering', 'finance'],
    },
    {
      id: 'ecommerce-analytics',
      titleKey: 'project.ecom.title',
      typeKey: 'project.ecom.type',
      desc: "<b>🔴 Problem:</b> High churn rate hidden in aggregate sales data.<br><b>🟢 Solution:</b> RFM Segmentation model on 100k+ transactions.<br><b>🚀 Impact:</b> Identified €96k revenue at risk and a €42k cross-sell opportunity.",
      stack: ["Power BI", "SQL", "DAX", "RFM Analysis"],
      linkRepo: "https://github.com/jose-galvao13/ecommerce-analytics",
      linkDemo: "#",
      caseStudy: `ecommerce-analytics`,
      images: [_ecom1.src, _ecom2.src, _ecom3.src, _ecom4.src],
      imageAlts: [
        "Power BI RFM segmentation dashboard showing customer clusters and revenue at risk",
        "Customer lifetime value chart segmented by RFM quintiles",
        "Cross-sell opportunity map showing €42k revenue potential by product category",
        "Churn cohort analysis with month-over-month retention trends",
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
      desc: "<b>🔴 Problem:</b> Static budgeting fails to capture seasonality.<br><b>🟢 Solution:</b> Facebook Prophet model forecasting 6-month demand.<br><b>🚀 Impact:</b> 88% MAPE accuracy, enabling precise inventory planning and cash flow forecasts.",
      stack: ["Python", "Power BI", "Machine Learning", "Time-Series"],
      linkRepo: "https://github.com/jose-galvao13/Ai-Sales-Forecasting-Budgeting",
      linkDemo: "#",
      caseStudy: `sales-forecasting`,
      images: [_forecast.src],
      imageAlts: ["Facebook Prophet 6-month sales forecast with confidence intervals and seasonality decomposition"],
      complexity: "intermediate",
      businessImpact: "medium",
      featured: false,
      category: ['ml', 'bi'],
    },
    {
      id: 'fraud-api',
      titleKey: 'project.fraudapi.title',
      typeKey: 'project.fraudapi.type',
      desc: "<b>🔴 Problem:</b> Legacy fraud filters are too slow for real-time payments and fail to scale.<br><b>🟢 Solution:</b> Production-grade MLOps API (FastAPI) serving an unsupervised ensemble with batch processing and hot-reloading.<br><b>🚀 Impact:</b> Sub-50ms inference latency and 64.6% recall on zero-day patterns, automating high-frequency transaction security.",
      stack: ["FastAPI", "MLOps", "Docker", "Python", "Scikit-Learn"],
      linkRepo: "https://github.com/jose-galvao13/fraud-api",
      linkDemo: "#",
      caseStudy: `fraud-api`,
      images: [_fraudapi.src, _fraudapi2.src, _fraudapi3.src, _fraudapi4.src],
      imageAlts: [
        "FraudShield API Dashboard showing executive summary and detection metrics",
        "FastAPI Swagger UI documentation for real-time transaction scoring",
        "MLOps pipeline architecture from data ingestion to containerized deployment",
        "Terminal output showing batch prediction JSON response with risk levels"
      ],
      complexity: "advanced",
      businessImpact: "high",
      featured: true,
      category: ['ml', 'engineering'],
    },
  ];
}

/**
 * Get translated projects for a specific language
 * This is useful for server-side rendering
 */
export function getTranslatedProjects(baseUrl: string, lang: Lang = 'en') {
  const projects = getProjectsData(baseUrl);
  
  return projects.map(project => ({
    ...project,
    title: t(lang, project.titleKey),
    type: t(lang, project.typeKey),
  }));
}

/**
 * Get a single project by ID with translations
 */
export function getProjectById(id: string, baseUrl: string, lang: Lang = 'en') {
  const projects = getTranslatedProjects(baseUrl, lang);
  return projects.find(p => p.id === id);
}
export const getProjects = (baseUrl: string) => getTranslatedProjects(baseUrl, 'en');