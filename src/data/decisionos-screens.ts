// src/data/decisionos-screens.ts
// Slideshow do DecisionOS — imagens em src/assets/images/DecisionOS/
// Para acrescentar/reordenar: importa a imagem e edita a lista `decisionosScreens`.

import dos0 from '../assets/images/DecisionOS/DecisionOS.png';
import dos1 from '../assets/images/DecisionOS/DecisionOS1.png';
import dos2 from '../assets/images/DecisionOS/DecisionOS2.png';
import dos3 from '../assets/images/DecisionOS/DecisionOS3.png';
import dos4 from '../assets/images/DecisionOS/DecisionOS4.png';
import dos5 from '../assets/images/DecisionOS/DecisionOS5.png';
import dos6 from '../assets/images/DecisionOS/DecisionOS6.png';
import dos7 from '../assets/images/DecisionOS/DecisionOS7.png';
import dos8 from '../assets/images/DecisionOS/DecisionOS8.png';
import dos9 from '../assets/images/DecisionOS/DecisionOS9.png';
import dos10 from '../assets/images/DecisionOS/DecisionOS10.png';
import dos11 from '../assets/images/DecisionOS/DecisionOS11.png';
import dos12 from '../assets/images/DecisionOS/DecisionOS12.png';
import dos13 from '../assets/images/DecisionOS/DecisionOS13.png';
import dos14 from '../assets/images/DecisionOS/DecisionOS14.png';
import dos15 from '../assets/images/DecisionOS/DecisionOS15.png';
import dos16 from '../assets/images/DecisionOS/DecisionOS16.png';
import dos17 from '../assets/images/DecisionOS/DecisionOS17.png';
import dos18 from '../assets/images/DecisionOS/DecisionOS18.png';
import dos19 from '../assets/images/DecisionOS/DecisionOS19.png';
import dos20 from '../assets/images/DecisionOS/DecisionOS20.png';
import dos21 from '../assets/images/DecisionOS/DecisionOS21.png';
import dos22 from '../assets/images/DecisionOS/DecisionOS22.png';
import dos23 from '../assets/images/DecisionOS/DecisionOS23.png';
import dos24 from '../assets/images/DecisionOS/DecisionOS24.png';
import dos25 from '../assets/images/DecisionOS/DecisionOS25.png';
import dos26 from '../assets/images/DecisionOS/DecisionOS26.png';
import dos27 from '../assets/images/DecisionOS/DecisionOS27.png';
import dos28 from '../assets/images/DecisionOS/DecisionOS28.png';
import dos30 from '../assets/images/DecisionOS/DecisionOS30.png';
import dos31 from '../assets/images/DecisionOS/DecisionOS31.png';

export const decisionosScreens: { src: string; alt: { en: string; pt: string } }[] = [
  { src: dos0.src, alt: { en: "Executive Overview: prioritised decisions and filters by period, product, region and channel", pt: "Visão Geral Executiva: decisões priorizadas e filtros por período, produto, região e canal" } },
  { src: dos1.src, alt: { en: "Overview KPIs (revenue, gross profit, margin, transactions), AI executive summary, revenue vs profit by month and product mix", pt: "KPIs da visão geral (receita, lucro bruto, margem, transações), resumo executivo por IA, receita vs lucro por mês e mix de produtos" } },
  { src: dos2.src, alt: { en: "Business Intelligence: revenue by region and monthly revenue", pt: "Business Intelligence: receita por região e receita mensal" } },
  { src: dos3.src, alt: { en: "Profit Intelligence: profitability leaks and the profit bridge explaining why margin changed", pt: "Profit Intelligence: fugas de rentabilidade e ponte de lucro que explica a variação da margem" } },
  { src: dos4.src, alt: { en: "Customer Intelligence: customer concentration, churn risk and segments", pt: "Customer Intelligence: concentração de clientes, risco de churn e segmentos" } },
  { src: dos5.src, alt: { en: "Investment Intelligence: 5-year DCF valuation with fair value per share", pt: "Investment Intelligence: valorização por DCF a 5 anos com valor justo por ação" } },
  { src: dos6.src, alt: { en: "DCF sensitivity matrix (WACC vs terminal growth) and explicit assumptions", pt: "Matriz de sensibilidade do DCF (WACC vs crescimento terminal) e pressupostos explícitos" } },
  { src: dos7.src, alt: { en: "Stock Portfolio: holdings imported from a spreadsheet with cost, current value and gain/loss", pt: "Stock Portfolio: posições importadas de uma folha de cálculo com custo, valor atual e ganho/perda" } },
  { src: dos8.src, alt: { en: "Portfolio analysis: concentration, effective number of positions and exposure by currency, sector and country", pt: "Análise de carteira: concentração, número efetivo de posições e exposição por moeda, setor e país" } },
  { src: dos9.src, alt: { en: "Portfolio imports and manual price updates", pt: "Importações da carteira e atualização manual de preços" } },
  { src: dos10.src, alt: { en: "Portfolio risk: volatility, maximum drawdown and historical VaR per position", pt: "Risco da carteira: volatilidade, drawdown máximo e VaR histórico por posição" } },
  { src: dos11.src, alt: { en: "Correlation heatmap between positions and portfolio drawdown curve", pt: "Mapa de correlações entre posições e curva de drawdown da carteira" } },
  { src: dos12.src, alt: { en: "Business scenario simulator: price, marketing and churn levers with the expected impact and a button to commit it as a decision", pt: "Simulador de cenários de negócio: alavancas de preço, marketing e churn, impacto esperado e botão para registar como decisão" } },
  { src: dos13.src, alt: { en: "Decision Simulator for the stock portfolio: what happens if part of a position is sold", pt: "Simulador de decisões da carteira: o que acontece se parte de uma posição for vendida" } },
  { src: dos14.src, alt: { en: "Portfolio scenario result: Value-at-Risk, weights before and after, and assumptions", pt: "Resultado do cenário de carteira: Value-at-Risk, pesos antes e depois e pressupostos" } },
  { src: dos15.src, alt: { en: "AI Advisor: recommendations generated only from the aggregated, server-computed model", pt: "Assistente de IA: recomendações geradas apenas a partir do modelo agregado calculado pelo servidor" } },
  { src: dos16.src, alt: { en: "Decision Log with the decision lifecycle statuses, from proposed to archived", pt: "Registo de Decisões com os estados do ciclo de vida, de proposta a arquivada" } },
  { src: dos17.src, alt: { en: "Data page: files and sources connected to the analysis", pt: "Página de Dados: ficheiros e fontes ligados à análise" } },
  { src: dos18.src, alt: { en: "Data Quality Center: quality score with completeness, validity and consistency checks", pt: "Data Quality Center: pontuação de qualidade com verificações de completude, validade e consistência" } },
  { src: dos19.src, alt: { en: "Products table with revenue, profit, margin and share of revenue", pt: "Tabela de produtos com receita, lucro, margem e quota da receita" } },
  { src: dos20.src, alt: { en: "Executive summary report with KPIs, top risks and top opportunities", pt: "Relatório de resumo executivo com KPIs, principais riscos e principais oportunidades" } },
  { src: dos21.src, alt: { en: "What's changing: price, volume, discount and cost effects on profit, plus top products", pt: 'O que está a mudar: efeitos de preço, volume, desconto e custo no lucro, e produtos principais' } },
  { src: dos22.src, alt: { en: "Revenue by region and channel, with customer base and concentration", pt: "Receita por região e canal, com base de clientes e concentração" } },
  { src: dos23.src, alt: { en: "Three-month revenue forecast with conservative, base and upside cases", pt: "Previsão de receita a três meses com cenários conservador, base e otimista" } },
  { src: dos24.src, alt: { en: "Settings: language, security, default currency and exchange rates", pt: "Definições: idioma, segurança, moeda predefinida e taxas de câmbio" } },
  { src: dos25.src, alt: { en: "Notifications: customers at risk, unprofitable product, cost leakage and concentrated portfolio", pt: "Notificações: clientes em risco, produto não rentável, fuga de custos e carteira concentrada" } },
  { src: dos26.src, alt: { en: "My account: profile and password change", pt: "A minha conta: perfil e alteração de palavra-passe" } },
  { src: dos27.src, alt: { en: "Team management: adding members and assigning roles", pt: "Gestão de equipa: adicionar membros e atribuir funções" } },
  { src: dos28.src, alt: { en: "User menu with account, team and log out", pt: "Menu do utilizador com conta, equipa e terminar sessão" } },
  { src: dos30.src, alt: { en: "Sign-in screen", pt: "Ecrã de início de sessão" } },
  { src: dos31.src, alt: { en: "Create organization screen for multi-tenant onboarding", pt: "Ecrã de criação de organização (onboarding multi-tenant)" } },
];
