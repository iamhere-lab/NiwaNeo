# Assetz Niwa & Neo — landing page

Static site, no build step. Open `index.html` in a browser or deploy the folder as-is
(Vercel, Netlify, Hostinger, cPanel, any static host).

## Files
- `index.html`            — the page (all copy lives here)
- `assets/css/styles.css` — styles (Assetz palette tokens at the top of the file in `:root`)
- `assets/js/config.js`   — EDIT THIS BEFORE LAUNCH: phone, WhatsApp, lead endpoint, GTM id, agent RERA
- `assets/js/main.js`     — forms, popup, gated floor plans, lightbox, reveal animations
- `assets/js/editor.js`   — in-browser text editing (only active inside the Claude artifact preview; harmless elsewhere)
- `assets/img/`           — renders from the official brochure, resized (webp) + logos (png)
- `content.json`          — saved text edits from the preview editor (leave as is)

## Before launch (config.js)
- `leadEndpoint`  — POST URL that receives the lead JSON (Pabbly / Apps Script / Leadrat proxy). Forms refuse to submit until set.
- `phoneDisplay` / `phoneE164` — currently +91 74069 17711
- `whatsappNumber` — e.g. "917406917711" to switch on the WhatsApp buttons
- `gtmId`, `agentRera`, `privacyUrl`, `brochureUrl`, `thankYouUrl`

## Fonts
The project site uses General Sans (Fontshare). The `<head>` has the Fontshare link commented out;
uncomment it on the live domain. DM Sans (Google Fonts) is the fallback.

## Price
Starting price shown as ₹1.49 Cr* (from listing portals; Assetz does not publish one). Confirm with sales
and search-replace "1.49 Cr" in index.html if it changes.
