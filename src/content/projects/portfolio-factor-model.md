---
title: "Portfolio Optimization & Factor Model Analysis"
summary: "Mean-variance optimization, ESG-constrained portfolios, and multi-factor regressions on equities and ETFs. Examines the trade-off between risk, return, and sustainability."
course: "Portfolio Management, Factor Analysis"
grade: "A"
date: "MSc, Spring 2026"
tools: ["Excel"]
tags: ["Portfolio Theory", "ESG", "Factor Models", "Regression"]
order: 4
screenshots:
  - src: "/projects/portfolio-factor-model/portfolio-weights.png"
    alt: "Portfolio weights table with Sharpe ratios"
    caption: "Portfolio weights and Sharpe ratios, unconstrained vs. ESG-constrained efficient portfolios."
  - src: "/projects/portfolio-factor-model/sharpe-vs-esg.png"
    alt: "Sharpe ratio vs ESG constraint"
    caption: "Sharpe ratio as the ESG constraint tightens, quantifying the cost of sustainability."
---

## Context

Two-part project applying portfolio theory and empirical asset pricing to evaluate both portfolio construction and the drivers of return. The central question: how much risk-adjusted performance does an investor give up for an ESG mandate, and what factor exposures actually drive the returns of well-known securities?

## Approach

**Portfolio optimization.**
- Mean-variance optimization to construct efficient portfolios and identify the maximum Sharpe ratio portfolio.
- Sustainability layered on as an additional constraint, allowing the cost of ESG requirements on risk-return efficiency to be measured directly.

**Factor analysis.**
- Regression models used to explain the return behavior of selected securities, namely SPY, Berkshire Hathaway, and Microsoft.
- Factor loadings on market, size, value, profitability, investment, and growth interpreted to characterize each name (large-cap, growth, profitability tilt, etc.) rather than relying on labels.

## Result

The ESG constraint reduces Sharpe but the cost is non-linear. Most of the efficiency loss comes from the tightest portion of the constraint. Factor regressions confirmed expected exposures (Microsoft as large-cap growth, Berkshire as quality/value) and quantified the size of each tilt rather than describing it qualitatively.

**Key skills:** portfolio optimization, Sharpe ratio analysis, ESG constraints, efficient frontier interpretation, CAPM, factor regressions, alpha interpretation, and Excel-based financial analysis.
