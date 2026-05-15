---
title: "Fixed Income Analysis of U.S. Treasury Securities"
summary: "Spot rates, forward rates, and bond risk measures derived from U.S. Treasury market quotes. Coupon stripping, bootstrapping, and duration-convexity analysis applied end-to-end."
course: "Fixed Income, Excel Modeling"
grade: "A"
date: "MSc, Autumn 2025"
tools: ["Excel"]
tags: ["Fixed Income", "Bootstrapping", "Duration", "Yield Curve"]
cover: "/projects/fixed-income-treasury/yield-curve-analysis.png"
coverFit: "contain"
featured: true
order: 3
screenshots:
  - src: "/projects/fixed-income-treasury/yield-curve-summary.png"
    alt: "Yield curve calculation summary"
    caption: "Bootstrapped spot and forward rates derived from Treasury bill and note quotes."
  - src: "/projects/fixed-income-treasury/yield-curve-analysis.png"
    alt: "U.S. Treasury yield curve analysis"
    caption: "U.S. Treasury yield curve, with spot rates plotted against maturities."
  - src: "/projects/fixed-income-treasury/coupon-cash-flows.png"
    alt: "Coupon cash flow value table"
    caption: "Coupon-paying notes decomposed into discounted cash flows."
  - src: "/projects/fixed-income-treasury/duration.png"
    alt: "Duration and convexity table"
    caption: "Yield to maturity, duration, modified duration, and convexity for the bond universe."
---

## Context

End-to-end fixed income analysis applied to live U.S. Treasury market data, covering the full maturity spectrum from overnight bills to multi-year notes. The objective was to build the term structure from raw market quotes, derive forward rates explicitly, and compute standard bond risk measures from first principles, without relying on library functions or pre-built Bloomberg outputs.

## Approach

- Extracted **spot rates from Treasury bills** by treating short-dated instruments as zero-coupon securities and converting bid/ask prices (quoted on a bank discount basis) to true ask yields. The bill dataset covered maturities from 5 days out to 357 days, with ask yields ranging from approximately 3.62% to 4.32% across the curve.
- Bootstrapped **spot rates from coupon-paying Treasury notes** by decomposing each note into its individual cash flows, using previously derived spot rates to discount all coupons except the final one, and solving for the implied zero-coupon rate at each successive maturity. Notes ranged from the 3.5% of September 2025 to longer-dated issues at maturities out to 2027 and beyond.
- Derived **implied forward rates** from the bootstrapped spot curve, using the standard no-arbitrage relationship between spot rates at adjacent maturities to build the forward term structure.
- Computed **bond risk measures** for a representative note on the yield curve, including semi-annual duration (approximately 1.58 periods), modified duration (1.54), and convexity (3.92 semi-annual periods, or 0.98 in years), alongside yield-to-maturity and price sensitivity to parallel rate shifts.

## Result

A self-contained Excel model that takes raw Treasury bid/ask quotes as input and produces a bootstrapped spot curve, a forward rate term structure, and the full set of bond risk measures for any security on that curve. Every intermediate calculation is visible, which makes it a practical verification tool wherever vendor-supplied risk numbers need to be checked from market data.

**Key skills:** Treasury market quoting conventions, discount-to-yield conversion, coupon stripping, bootstrapping, spot and forward rate derivation, yield-to-maturity, Macaulay duration, modified duration, convexity, and Excel-based fixed income modeling.
