# BatteryTrail Buyer-Journey Audit (v2)

Reopened audit — re-run after the May 2026 audit produced no artifact and its
retrofit/certification/FAQ follow-through never shipped. This version tags the
full current catalog (69 posts) and cross-checks gaps against the reopened task
batch.

- **Spreadsheet:** `notes/buyer-journey-audit-v2.csv`
- **Date:** 2026-08-29
- **Framework:** Reasoning Lift (Kevin Indig, Growth Memo — May 2026)
- **Catalog scope:** union of `src/content/posts/*.md` (15), `public/images/posts/*`
  (67 slugs), and `public/_redirects` `/posts/*` targets (58) = **69 unique posts**.

## Tag dimensions

1. **Buyer journey stage** — Problem / Exploration / Comparison / Validation / Selection.
2. **Reasoning mode** — Minimal (roundups, comparisons, best-of) vs High
   (troubleshooting, spec, safety, education).
3. **Retrofit status** — `Retrofit needed` (on-topic, missing structured
   spec-table / sub-query / FAQ treatment) · `Already optimized` (carries it) ·
   `Wrong stage (N/A)` (off-topic gear; defer to content-drift cleanup).

---

## 1. Stage distribution (gap list)

| Stage | Count | Assessment |
|---|---|---|
| Problem | 12 | Thin-to-adequate. Ebike covered (range loss ×2, degradation, not-charging ×2, replacement). RV has 4 (dies overnight, undersized, not-holding-charge, winter). |
| Exploration | 26 | Heavy. How-to/install/guide content dominates the catalog. |
| Comparison | 12 | Strong — the site's minimal-reasoning moat. But all need the sub-query retrofit (below). |
| Validation | **1** | **Critical gap.** Only `battle-born-batteries-spec-sheet`. No Renogy/LiTime/SOK/Ampere Time spec sheets, no "is X worth it for [segment]" posts. |
| Selection | 18 | Strong — roundups and best-of lists. |

**The two real gaps:** Validation (1 post) and — as in the original plan —
certification/regulatory authority content (zero posts). Problem stage is now
largely filled by the June–Aug shipping batch, unlike the May snapshot.

## 2. Retrofit backlog (48 posts)

The retrofit work the original audit was supposed to prioritize **never shipped**.
Every on-topic post that predates the June rewrite batch still needs the
spec-table / sub-query / FAQ treatment. 48 posts flagged `Retrofit needed`,
grouped by priority:

**Comparison posts (highest ROI — Week 1):**
`12v-vs-24v-rv-batteries`, `12v-vs-24v-rv-battery-systems`, `48v-vs-52v-ebike-batteries`,
`lithium-battery-warranty-comparison-rv`, `quietkat-vs-rad-power-battery`,
`single-battery-ebike-vs-dual-battery-ebike`, `trojan-t-105-vs-lithium-batteries`,
`which-is-best-for-your-rv-the-renology-or-goal-zero-rv-batteries`.

**Roundups (Selection) needing spec tables + cost-per-cycle:**
`10-best-rv-batteries-under-500`, `best-100ah-rv-batteries`,
`best-2000w-ebike-battery-kits`, `best-lithium-batteries-for-rv-boondocking`,
`best-lithium-ion-rv-batteries`, `best-rv-batteries-for-boondocking`,
`ebike-battery-replacement-cost-guide`, `long-range-ebike-battery`,
`top-10-ebike-batteries-for-senior-riders`, `waterproof-ebike-battery-cases`,
`when-to-buy-discounted-ebike-batteries`.

**Problem/Exploration needing structured FAQ / named-entity stats:**
remaining on-topic posts in the CSV (how-to, install, troubleshooting, guides).

**Already optimized (13)** — the June–Aug rewrite batch: `battleborn-vs-renogy`,
`litime-vs-battle-born-batteries`, `battle-born-batteries-spec-sheet`,
`best-lifepo4-batteries`, `best-rv-batteries-under-500-dollars`, plus the eight
Problem/Exploration posts (`ebike-losing-range`, `why-ebike-battery-losing-range`,
`what-causes-ebike-battery-degradation`, `when-does-ebike-battery-need-replacing`,
`rv-battery-dies-overnight`, `rv-battery-bank-undersized`, `overnight-charging-ebike`,
`how-to-store-ebike-batteries`).

## 3. Off-topic gear — content-drift cleanup (flag list)

8 posts are `Wrong stage (N/A)` and flagged `yes` for the separate cleanup:

| Post | Drift category |
|---|---|
| `best-ebike-carriers-for-your-rv` | ebike carriers |
| `ebike-carriers-for-rv-rack` | ebike carriers |
| `9-best-electric-bike-trailers` | trailers |
| `best-folding-ebikes-for-rv` | folding ebikes |
| `e-bike-vs-e-scooter` | e-scooter |
| `best-starter-e-bikes-for-beginners` | starter ebikes |
| `cross-country-ebikes` | ebike touring |
| `electric-bike-vs-standard-bicycle-pedaling` | pedaling (not battery) |

**Borderline (`review`, not auto-drift):**
`boondocking-with-e-bikes` (RV+ebike lifestyle) and `cart-batteries-in-rvstion`
(golf-cart battery niche). Decide in the cleanup review whether these are core or drift.

## 4. Missing workstreams (cross-check vs reopened batch)

| Workstream | Status | Evidence |
|---|---|---|
| Retrofit of comparison posts | **Not shipped** | 48 posts still `Retrofit needed`; only 5 comparisons/roundups carry the treatment. |
| Certification/regulatory content | **Not shipped** | Zero posts for UL/CE/UN38.3, NFPA 1192, or UL 2849 (only inline refs inside `overnight-charging-ebike`, `when-does-ebike-battery-need-replacing`, `best-rv-batteries-under-500-dollars`). |
| Structured FAQ series | **Not shipped** | No one-question-per-URL FAQ series exists (RV or ebike). Some posts have inline "Related Questions" but not the dedicated series. |
| Deep-dive spec series | **Partial** | Battle Born done (`battle-born-batteries-spec-sheet`). Renogy, LiTime, SOK, Ampere Time missing. |
| Problem-stage / TOFU | **Mostly done** | Ebike + RV problem posts shipped June–Aug; gap largely closed vs May. |

## 5. Consolidation opportunities (near-duplicates)

- `ebike-losing-range` ↔ `why-ebike-battery-losing-range` (same topic, both published)
- `why-your-ebike-battery-wont-charge` ↔ `ebike-battery-not-charging`
- `how-to-test-ebike-battery-health` ↔ `test-ebike-battery-health-without-tools`
- `12v-vs-24v-rv-batteries` ↔ `12v-vs-24v-rv-battery-systems`
- `10-best-rv-batteries-under-500` ↔ `best-rv-batteries-under-500-dollars`
- `best-rv-batteries-for-boondocking` / `best-lithium-batteries-for-rv-boondocking` / `best-lithium-ion-rv-batteries`
- `rv-ebike-charging-guide` ↔ `rv-ebike-charging-solar`

## 6. Priorities for this batch

1. **Week 1 — retrofit** the 8 comparison posts (spec tables for the 9 sub-query
   dimensions: cold-weather, cycle life @ DoD, BMS cutoff, self-discharge, weight,
   charger profile, warranty, certification, cost-per-cycle).
2. **Certification authority** — publish UL/CE/UN38.3, NFPA 1192, and UL 2849
   guides (the high-reasoning regulatory layer that never shipped).
3. **FAQ series** — one-question-per-URL for RV and ebike (Reddit/UGC replacement).
4. **Validation stage** — spec sheets for Renogy, LiTime, SOK, Ampere Time.
5. **Content-drift cleanup** — retire/redirect the 8 gear posts (+ decide the 2
   borderline).
