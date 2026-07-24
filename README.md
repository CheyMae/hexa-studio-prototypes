# hexa-studio-prototypes

Clickable web prototypes exported from [`hexa-studio-context`](https://github.com/CheyMae/hexa-studio-context) (private), for usability testing. Public on purpose — see that repo's `links/related-repos.md` for why.

Screenshots, click-zones, and internal process live in the private repo. This repo holds only what a tester needs: real, typeable pages that look and behave like the design, nothing about the design system's tokens, rules, or agents.

## What's here

**Login → Dashboard** — first flow exported, first hand-walk of the web-export step.

- `index.html` — Login screen (first-time-user state). Real typeable User ID/Password fields, a working show/hide password toggle (real Hexa eye icons), and a fixed test credential that either proceeds to Dashboard or shows Hexa's real "Incorrect password" Error-state look (border + inline message, both pulled from Hexa's own Text Field tokens — no test credential shown on-screen; the person running the test discloses it directly).
- `dashboard.html` — Dashboard screen (Deposit, default state), reached after a successful login.
- `assets/icons/` — real icon artwork exported from Hexa, not hand-drawn approximations. Each SVG is stripped down to just its icon geometry (Figma's export includes an opaque background layer and off-canvas page context by default — both removed).
- Real Poppins webfont (Hexa's actual typeface), not a system-font fallback.
- Status Bar, App Bar, and Navigation Bar all stay fixed in place while the screen's own content scrolls underneath — the screen is a real bounded phone-height viewport with its own internal scroll, not an ever-growing page.
- Microsoft Clarity is wired in for usability-test tracking (tap heatmaps, session time, drop-off) — replace `PROJECT_ID` in both pages' `<head>` with a real Clarity project ID before sharing a test link.

## What this is not

Not a real login — the test credential is fixed, and never shown in the UI itself; whoever runs the test hands it to testers directly. Never type a real account's credentials into this or any prototype like it.

Not pixel-exact — colors, spacing, radii, type, and icons are all pulled from Hexa's real, live-verified tokens and artwork (see the source repo's `screens/*/binding.md`), but this is a first export pass, not a design-QA'd production asset. Good enough for a click-through usability test.
