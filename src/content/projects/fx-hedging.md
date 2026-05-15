---
title: "FX Exposure & Hedging Strategy"
summary: "Foreign exchange exposure analysis for a Swiss exporter with CHF revenues and EUR costs. Operating cash flow modeled across EUR/CHF scenarios, with natural, forward, and money-market hedging compared against the unhedged baseline."
course: "Corporate Finance, FX Risk Management"
grade: "A"
date: "MSc, Spring 2026"
tools: ["Excel"]
tags: ["FX Risk", "Hedging", "Corporate Finance", "Scenario Analysis"]
featured: true
order: 2
screenshots:
  - src: "/projects/fx-hedging/output-summary.png"
    alt: "FX hedging output summary"
    caption: "Output summary: hedged vs. unhedged operating cash flow across hedging structures."
  - src: "/projects/fx-hedging/exposure-scenario-analysis.png"
    alt: "FX exposure scenario analysis"
    caption: "Profit margin and operating cash flow under EUR/CHF scenarios, pre and post operational change."
  - src: "/projects/fx-hedging/ocf-sensitivity.png"
    alt: "Operating cash flow sensitivity to EUR/CHF"
    caption: "Operating cash flow sensitivity to EUR/CHF movements."
---

## Context

A Swiss automotive exporter produces 20,000 cars per year, priced at CHF 70,000 each, and sells them into a EUR-denominated market. Operating costs of EUR 850M (labour, production, admin, and depreciation) are EUR-denominated, creating a structural long-CHF, short-EUR exposure in the profit margin. At the base EUR/CHF rate of 1.10, the business earns a pre-tax operating margin of 34.8%. The brief was to quantify how that margin moves with the exchange rate, assess what operational restructuring achieves, and compare forward and money-market hedging against the unhedged baseline.

## Approach

- Modeled **unhedged operating performance** across three EUR/CHF states (0.9, 1.0, 1.1) at t+2, incorporating deflation adjustments to both prices and costs. At EUR/CHF of 0.9 the profit margin compressed to 22.9%; at 1.1 it expanded to 33.3%, with operating cash flows ranging from CHF 293M to CHF 505M across the three states.
- Evaluated **partial natural hedging through operational restructuring**: relocating CHF 260M of costs (labour, production, and admin) from EUR to CHF reduced but did not eliminate rate sensitivity. Post-restructuring margins ranged from 25.8% to 32.8% across the same three states, compared to 22.9% to 33.3% pre-restructuring, confirming the tightened range but non-zero residual exposure.
- Computed the **after-tax net CHF exposure** (CHF revenues of CHF 1,325M minus CHF costs of CHF 260M, tax-effected at 20%) yielding a net CHF exposure of CHF 852M as the quantity to hedge.
- Evaluated **forward hedging** at a forward rate of EUR/CHF 1.0, locking in an operating cash flow of CHF 413M regardless of the spot rate at settlement.
- Evaluated a **money-market hedge** using the CIP-implied forward rate of EUR/CHF 0.922, which produced a hedged cash flow of CHF 347M, below the forward hedge outcome at the given rate environment.

## Result

The forward hedge eliminated all FX variance at the cost of giving up upside in favorable rate scenarios. The money-market hedge, priced through the CIP relationship, produced a lower locked-in value under the prevailing rate assumptions and would represent the inferior choice at these rates. Natural hedging through outsourcing reduced rate sensitivity materially but left meaningful residual exposure. The model made clear which state the company would most regret having hedged (state 3, EUR/CHF 1.1, where the unhedged position outperforms), directly addressing the regret-minimization framing in the brief.

**Key skills:** FX exposure quantification, scenario-based operating cash flow modeling, profit margin sensitivity analysis, natural hedging through operational restructuring, after-tax net exposure computation, forward contract pricing, money-market hedge mechanics, CIP-implied forward rates, and Excel-based financial modeling.
