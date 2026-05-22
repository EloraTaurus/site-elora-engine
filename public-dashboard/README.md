# Elora Public Dashboard Bundle

Portable dashboard package for public website embedding.

## Files
- `elora-dashboard.js`: standalone renderer + telemetry poller.
- `elora-dashboard.css`: runtime surface and pulse styling.
- `index.html`: local host/demo page for verification.

## Default telemetry source
- `GET /public/api/dashboard/telemetry-v1`

## Drop-in usage
```html
<link rel="stylesheet" href="/assets/elora-dashboard.css" />
<div data-elora-dashboard data-endpoint="https://ai.elorataurus.com/public/api/dashboard/telemetry-v1"></div>
<script src="/assets/elora-dashboard.js"></script>
```

## Optional JS config
```js
window.EloraDashboard.mount("#public-dashboard", {
  endpoint: "https://ai.elorataurus.com/public/api/dashboard/telemetry-v1",
  pollMs: 7000,
  staleAfterOverrideS: 18,
  musicSrc: "/soundtrack/",
  musicVolume: 0.1,
  musicAutoplay: false
});
```

## Notes
- Only consume `/public/api/dashboard/*` routes.
- Do not call `/admin/*` from public website.
- Stale payloads auto-shift pulse to low-energy deterministic mode.
- `telemetry-v1` now carries optional `kpi` and `proof` blocks for 1:1 website parity with internal dashboard sections.
