# Glow Up Skin Centre — Form & Security Check

- Netlify form name remains `consultation-enquiry`.
- Static form registration remains in `index.html` for Netlify form detection.
- Honeypot is read from the submitted form and bot-filled requests are stopped.
- Form POST remains URL-encoded and same-origin.
- Success UI only appears after an HTTP success response.
- Indian mobile validation is stricter and input lengths are capped.
- Security headers include CSP, HSTS, anti-framing, nosniff, referrer policy, permissions policy, and cross-domain policy.
- External new-tab links use `noopener noreferrer`.
- `.netlify/` local state is ignored.

Note: Netlify can still classify unrealistic test submissions as spam. For final testing, use a realistic name and valid 10-digit mobile number.
