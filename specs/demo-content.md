# Demo Content — Flux Product & Mock Data

All 9 templates use the same fictional product: **Flux — an analytics platform for developer teams.**

---

## Flux Copy

- **Tagline:** "Ship faster with real-time developer analytics"
- **Subtitle:** "Flux gives engineering teams visibility into deploy frequency, code review velocity, and incident response — so you can measure what matters."
- **Features:**
  1. Real-time Dashboards — "Live metrics that update as your team ships."
  2. Deploy Tracking — "Every deploy, tagged and tracked."
  3. Review Velocity — "PR open → review → merge timelines. Find bottlenecks."
  4. Incident Timeline — "MTTR, severity trends, and on-call load in one view."
- **Nav items:** Home, Dashboard, Components, Login

---

## Dashboard Mock Data

### Stat cards (4)

| Label           | Value | Change | Trend |
|-----------------|-------|--------|-------|
| Total Deploys   | 1,284 | +12.5% | up    |
| Avg Review Time | 4.2h  | -8.3%  | down  |
| Active PRs      | 23    | +2     | up    |
| Incidents (30d) | 7     | -22.2% | down  |

### Recent Deploys table (8 rows)

| Service       | Environment | Status  | Author      | Timestamp        |
|---------------|-------------|---------|-------------|------------------|
| api-gateway   | production  | success | Sarah Chen  | 2024-01-15 14:32 |
| auth-service  | staging     | success | Marcus Webb | 2024-01-15 14:18 |
| web-app       | production  | failed  | Priya Patel | 2024-01-15 13:55 |
| data-pipeline | production  | success | Alex Kojima | 2024-01-15 12:41 |
| api-gateway   | staging     | success | Sarah Chen  | 2024-01-15 11:22 |
| web-app       | staging     | success | Jordan Lee  | 2024-01-15 10:08 |
| auth-service  | production  | success | Marcus Webb | 2024-01-15 09:45 |
| notifications | production  | success | Priya Patel | 2024-01-15 08:30 |

### Chart Data: Deploys This Week

Pure CSS bar chart (NOT a chart library). 7 bars, deploys per weekday:
- Mon: 18
- Tue: 24
- Wed: 31
- Thu: 22
- Fri: 28
- Sat: 8
- Sun: 4

Label: "Deploys This Week"

Every template implements this the same way structurally but styles it per-aesthetic.

---

## Auth Pages

### Login
- Email + password + "Remember me" checkbox + submit
- Validate email format and password min 8 chars on blur
- Errors below fields in destructive color

### Signup
- Full name + email + password (with strength indicator: weak/medium/strong) + confirm password + submit
- Validate on blur
