---
title: "Carry Trade in Global FX Markets"
summary: "Currency portfolios sorted by 1-month forward discounts, long-short carry trade construction, and risk-adjusted performance evaluation across P1–P4 portfolios."
course: "Global Finance, FX Strategy"
grade: "A"
date: "MSc, Spring 2026"
tools: ["Excel"]
tags: ["FX", "Carry Trade", "Portfolio Sorting"]
order: 5
screenshots:
  - src: "/projects/fx-carry-trade/portfolio-summary.png"
    alt: "Carry trade portfolio summary"
    caption: "Carry trade portfolio summary: average excess return, volatility, Sharpe ratio, t-statistics, and p-values across P1–P4 and the long-short strategy."
---

## Context

Empirical study of the carry trade in global FX markets, built on real historical spot and 1-month forward rate data. The primary single-currency strategy used live AUD/JPY rate data from January 1992 onward. The portfolio analysis sorted a real cross-section of currencies into four non-overlapping portfolios each month based on their 1-month forward discounts, P1 (lowest, most negative) through P4 (highest), to test whether the uncovered interest rate parity violation generated a tradeable carry premium in practice.

## Approach

- Constructed **P1 through P4 portfolios** by sorting currencies on 1-month forward discounts each month, with equal weighting and monthly rebalancing, producing four non-overlapping groups with no overlap across any pair of portfolios.
- Built a **long-short carry trade (CT P4-P1)** going long P4 and short P1 to isolate the carry premium, and separately evaluated a **weighted carry strategy** as an alternative weighting scheme.
- Tested **UIP empirically** by running log-return regressions of spot changes on forward discounts (Task A), confirming that the alpha was non-zero and beta was not equal to 1 with low R-squared, meaning investors were not indifferent between markets, in violation of strict UIP.
- For the **single forward market strategy (AUD/JPY)**, computed log returns, a monthly mean of 0.69% (annualized to 8.25%), historical VaR at the 5th percentile of 6.1%, parametric Gaussian VaR of 6.4%, and CVaR (expected shortfall at 1%) of 11.6%.
- Evaluated all portfolios via **average excess returns, standard deviation, Sharpe ratios, t-statistics, and p-values**, confirming statistical significance.

## Result

The carry strategy delivered returns that increased monotonically from P1 to P4. P1 produced a mean monthly excess return of -0.56% with an annualized Sharpe of -0.60, while P4 produced +0.64% and an annualized Sharpe of 0.83. The long-short CT(P4-P1) earned +0.99% per month with an annualized Sharpe of 1.01, and its t-statistic of 5.07 (p-value 6.96e-7) was strongly significant. The weighted carry strategy also performed well, confirming the result is not an artifact of equal weighting. The strategy's tail risk was material: the AUD/JPY forward position had a CVaR of 11.6% at 1%, consistent with the known crash risk embedded in high-carry positions.

**Key skills:** carry trade construction, currency portfolio sorting, forward discount analysis, UIP regression testing, VaR and CVaR computation, risk-adjusted performance evaluation, t-statistics and p-value interpretation, and Excel-based financial modeling.
