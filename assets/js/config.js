/*
 * Niwa & Neo landing page: deployment configuration.
 * Everything that differs between preview and production lives here.
 * Nothing secret belongs in this file: it is shipped to the browser.
 */
window.SS_CONFIG = {
  /* Lead delivery. POST target that accepts JSON and returns 2xx on success
   * (Vercel function, Google Apps Script web app, Pabbly webhook, Leadrat proxy).
   * Leave empty until a real endpoint exists: the form then refuses to submit
   * and offers the phone number instead of showing a fake success message. */
  leadEndpoint: "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjUwNTY1MDYzNTA0MzY1MjZjNTUzNyI_3D_pc/IjU3NjcwNTZiMDYzNzA0MzU1MjY5NTUzMjUxM2Ii_pc",

  /* "form" = URL-encoded POST without a CORS preflight (right for Pabbly / Zapier / Make webhooks).
   * "json" = JSON POST (for your own endpoint that answers CORS). */
  leadEndpointMode: "form",

  /* Send as text/plain to avoid a CORS preflight (needed for Google Apps Script). */
  leadEndpointSimpleRequest: false,

  /* Optional: redirect here after a confirmed submission (thank-you page).
   * Leave empty to show the inline success message (which also unlocks the floor plans). */
  thankYouUrl: "thank-you.html",

  /* Google Tag Manager container, e.g. "GTM-XXXXXXX". Loaded only when set. */
  gtmId: "",

  /* Phone shown on the page. Replace with the sales / channel-partner number before launch. */
  phoneDisplay: "74069 17711",
  phoneE164: "+917406917711",

  /* WhatsApp number, digits only with country code, e.g. "917406917711".
   * All WhatsApp buttons stay hidden until this is set. Confirm the number is on WhatsApp. */
  whatsappNumber: "",
  whatsappMessage: "Hi, I'm interested in Assetz Niwa & Neo, North Bengaluru. Please share the price and floor plans.",

  /* Auto-open the enquiry popup after this many seconds (once per session).
   * 0 disables auto-open; the popup still opens from every Enquire button. */
  popupDelaySeconds: 10,

  /* Optional public brochure URL. If set, a download link is shown after a successful
   * "Download Brochure" enquiry. Leave empty and the sales team sends it instead. */
  brochureUrl: "",

  /* Channel-partner / agent RERA number, shown in the footer when set. */
  agentRera: "",

  /* Named in the consent line: who will contact the enquirer. Confirm before launch. */
  consentEntity: "Assetz Property Group, KVN and their authorised sales partners",

  /* Final site URL for the canonical tag, e.g. "https://www.example.com/". Empty = use the live URL. */
  siteUrl: "",

  /* Full privacy policy URL. The footer link only renders when this is set. */
  privacyUrl: ""
};
