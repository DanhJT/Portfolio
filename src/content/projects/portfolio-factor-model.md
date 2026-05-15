---
title: "Portfolio Optimization with ESG Constraints"
summary: "Mean-variance optimization across 39 real MSCI country equity indices, with progressively tighter ESG constraints. Quantifies the return efficiency cost of a sustainability mandate."
course: "Portfolio Management"
grade: "A"
date: "MSc, Spring 2026"
tools: ["Excel"]
tags: ["Portfolio Theory", "ESG", "Mean-Variance", "Optimization"]
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

Practical application of mean-variance portfolio theory to a real dataset of 39 MSCI country equity indices spanning Europe, the Americas, and Asia-Pacific. The central question was how much risk-adjusted return an investor gives up when required to meet an ESG mandate, and how that cost changes as the constraint tightens.

## Approach

- Pulled real monthly return data for all 39 MSCI country indices and computed a **full variance-covariance matrix** alongside mean returns for each market, forming the inputs to the optimizer.
- Solved for the **maximum Sharpe ratio (MSR) portfolio** through mean-variance optimization, with no constraints other than full investment. The unconstrained MSR portfolio concentrated in New Zealand (35.6%), Colombia (24.8%), Peru (20.9%), Czech Republic (9.1%), and Russia (9.6%), achieving a monthly mean return of 1.27% and volatility of 5.67%, for a Sharpe ratio of 0.201, well above the equal-weight benchmark Sharpe of 0.114.
- Introduced a binding **ESG constraint** requiring the portfolio's average ESG score to exceed a minimum threshold, then tightened that threshold in three steps (increments of 2.5, 5.0, and 7.5 above the unconstrained score). At each level, the optimizer was re-run and the resulting Sharpe ratio recorded.
- Traced the **efficiency cost** of the sustainability mandate: the tightest constraint brought the Sharpe down from 0.201 to 0.193, a measurable but modest reduction, concentrated at the upper end of the constraint range rather than distributed evenly across all levels.

## Result

The constraint cost was non-linear: most of the Sharpe ratio loss occurred at the tightest level, with the first two increments imposing only marginal reductions. Even at maximum constraint, the ESG portfolio significantly outperformed the equal-weight alternative on a risk-adjusted basis. The model gave a precise, quantitative answer to a question that is usually discussed qualitatively, making the trade-off legible rather than approximate.

**Key skills:** mean-variance optimization, real market data extraction and structuring, variance-covariance matrix construction, Sharpe ratio analysis, ESG-constrained portfolio construction, efficient frontier interpretation, and Excel-based financial modeling.
