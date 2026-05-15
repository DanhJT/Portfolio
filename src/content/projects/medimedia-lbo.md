---
title: "MediMedia International, Leveraged Buyout Valuation"
summary: "APV valuation of a leveraged management buyout of MediMedia International. Capital structure assessment, mezzanine warrant valuation, and exit-multiple IRR analysis."
course: "Applied Valuation, LBO / M&A"
grade: "Waiting on grade"
date: "MSc, Spring 2026"
tools: ["Excel", "PowerPoint"]
tags: ["LBO", "M&A", "APV", "Valuation"]
cover: "/projects/medimedia-lbo/cover.png"
featured: true
order: 1
screenshots:
  - src: "/projects/medimedia-lbo/lbo-summary.png"
    alt: "MediMedia LBO valuation summary"
    caption: "Page 1 of 3 from the full CFA-style valuation report."
  - src: "/projects/medimedia-lbo/financing-cashflows.png"
    alt: "Senior debt and mezzanine investor cash flows"
    caption: "Senior debt waterfall on top (Tranche A, Tranche B, and bank cash flows) and mezzanine investor cash flows on the bottom, year by year."
  - src: "/projects/medimedia-lbo/exit-scenarios.png"
    alt: "Exit scenarios on EV/EBIT and EV/EBITDA multiples"
    caption: "Exit scenarios across EV/EBIT (top) and EV/EBITDA (bottom): enterprise value, equity, management share, and 3-year IRR."
  - src: "/projects/medimedia-lbo/put-option-valuation.png"
    alt: "Black-Scholes put option valuation"
    caption: "Black-Scholes valuation of the put option embedded in the mezzanine warrants."
---

## Context

Case study of a leveraged management buyout of MediMedia International, a healthcare media publisher. The deal involved a four-tranche financing stack: Tranche A senior debt in ECU, Tranche B senior debt in USD, a mezzanine layer with attached warrants, and a vendor note with PIK interest. The brief was to assess whether the proposed structure created adequate value across all investor classes, whether the business could service the debt from projected cash flows, and what the mezzanine warrants and embedded put option were actually worth.

## Approach

- Valued the business using an **Adjusted Present Value (APV)** framework, discounting eight years of projected free cash flows (ranging from $7.4M in 1991 to $15.1M in 1998) and a terminal value at the unlevered cost of equity, then adding a separate PV of annual tax shields. The APV yielded an enterprise value of $102.9M and an implied equity value of $44.6M against total debt of $58.3M at close.
- Modeled the **multi-currency financing structure** including Tranche A (ECU 10.09M at 12.25% ECU rate) and Tranche B (USD 18M at 9%), tracking scheduled principal repayments, interest coverage, and net bank cash flows year by year. Senior debt IRR came in at 3.1%, within the 1-2% benchmark over LIBOR, confirming it was fairly priced.
- Priced the **mezzanine warrants and put provision** using Black-Scholes with a 34.3% volatility assumption and 7-year maturity. The call value was $44.6M against the equity base, implying a warrant value of $6.7M. The put right at 7x 1998 earnings added a further $5.9M in PV terms, bringing total embedded option value to $11.7M. The mezzanine IRR of 12.1% sat below its 20-30% benchmark, signaling the layer was expensive for MediMedia to carry.
- Built **exit scenarios** at year 3 (1993) using real comparable company multiples sourced from Bloomberg, applying both EV/EBIT (median 18.5x, range 16-21x) and EV/EBITDA (median 11.9x, range 10-14x) to projected EBIT of $16.9M and EBITDA of $18.9M. At the median EV/EBIT exit, management's 85% equity stake generated a 3-year IRR of 188%, or a 23.7x return multiple on the $11M equity investment.

## Result

The APV confirmed deal viability at the proposed entry price, and management faced very strong upside under most exit scenarios, with IRRs ranging from 156% to 202% across the EV/EBIT scenario range. The key risk was the mezzanine layer. Its IRR underperformed benchmarks, the embedded option value was substantial, and any mis-pricing of the warrant package materially changed the total cost of the deal. Senior bank debt was well-structured with comfortable coverage and cash flow to service it across the projection period.

**Key skills:** APV valuation, free cash flow modeling, tax-shield discounting, LBO capital structure analysis, multi-currency debt modeling, Black-Scholes warrant valuation, comparable company analysis, exit-multiple scenario analysis, and equity IRR computation.
