# hexa-studio-prototypes

Clickable web prototypes exported from [`hexa-studio-context`](https://github.com/CheyMae/hexa-studio-context) (private), for usability testing. Public on purpose — see that repo's `links/related-repos.md` for why.

Screenshots, click-zones, and internal process live in the private repo. This repo holds only what a tester needs: real, typeable pages that look and behave like the design, nothing about the design system's tokens, rules, or agents.

## What's here

**Login → Dashboard** — first flow exported, first hand-walk of the web-export step.

- `index.html` — Login screen (first-time-user state). Real typeable User ID/Password fields, a working show/hide password toggle, and a fixed test credential (shown on-screen) that either proceeds to Dashboard or shows the real "Incorrect password" error state.
- `dashboard.html` — Dashboard screen (Deposit, default state), reached after a successful login.
- Microsoft Clarity is wired in for usability-test tracking (tap heatmaps, session time, drop-off) — replace `PROJECT_ID` in both pages' `<head>` with a real Clarity project ID before sharing a test link.

## What this is not

Not a real login — the test credential is intentionally fixed and disclosed on-screen. Never type a real account's credentials into this or any prototype like it.

Not pixel-exact — colors, spacing, and radii are pulled from Hexa's real, live-verified tokens (see the source repo's `screens/*/binding.md`), but icons and type-ramp sizing are reconstructed from reference screenshots for this first export, not re-verified line-by-line. Good enough for a click-through usability test, not a production asset.
