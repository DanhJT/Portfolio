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

End-to-end fixed income valuation applied to live U.S. Treasury market data. The objective: connect Treasury market quotes to the underlying term structure and to the standard bond risk measures, with every step done explicitly rather than via library functions.

## Approach

- Used Treasury bill and Treasury note quotes to derive **spot rates** through coupon stripping and bootstrapping. Short-maturity bills treated as zero-coupon; coupon-paying notes decomposed into cash flows and discounted using rates derived in earlier steps.
- Used the resulting term structure to calculate **implied forward rates**.
- Evaluated bond risk through **yield to maturity, duration, modified duration, convexity**, and price sensitivity to interest rate changes.

## Result

A self-contained Excel model that takes Treasury market quotes as input and outputs the spot and forward curves, plus the standard risk measures for any bond on that curve. Useful as a teaching artifact and as a sanity-check tool for trading or risk seats where vendor-supplied numbers should be verified from first principles.

**Key skills:** bond pricing, Treasury market conventions, bootstrapping, spot and forward rates, duration, convexity, and Excel-based financial modeling.
