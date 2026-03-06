# Wealth Wellness Hub (Wealth Wallet Dashboard)

A fintech-style “Wealth Wallet” that consolidates portfolios across asset classes (cash/equities/crypto/private assets), computes simple financial wellness analytics (diversification, liquidity, stress resilience), and produces scenario-based insights with alerts + recommendations.

> Demo/Education only — not financial advice.

---

## What it does (MVP)
- **Import / Load portfolio**
  - Upload a CSV portfolio, or load a sample dataset
- **Unified wealth view**
  - Net worth + allocation by asset class
- **Wellness analytics**
  - Diversification, Liquidity, and Resilience (stress-test based)
- **Scenario stress testing**
  - Apply market shocks and see portfolio impact + top drivers
- **Actionable output**
  - Alerts + 3 recommendations tied to detected issues
- **(Optional) Price utilities**
  - Fetch/refresh price history for tickers (if enabled)

---

## Tech Stack
- **Frontend:** React + Vite
- **Backend:** Spring Boot (Java)
- **Data:** CSV ingestion + server-side portfolio analysis

---

## How to run (Local)

### 1) Clone
```bash
git clone https://github.com/itzlidat/wealth-wellness-hub-real.git
cd wealth-wellness-hub-real