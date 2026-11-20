# Security Notes

## Hosting

The root `_headers` file is a Netlify headers configuration. Other static hosts must be configured to send the same response headers; HTML meta tags cannot replace protections such as `frame-ancestors`.

The Content Security Policy allows only the exact versioned vendor script and stylesheet paths used by this site and blocks inline scripts. Babel Standalone currently requires `'unsafe-eval'` to compile the JSX scripts in the browser. React, Babel, and icon stylesheets are version-pinned with Subresource Integrity. Tailwind's browser CDN does not provide CORS headers, so it cannot be SRI-checked here; its URL is version-pinned and restricted by CSP. A production build that precompiles JSX and Tailwind would let the site remove this exception and the CDN script allowlist.

## Data handling

Contact and newsletter forms send submissions to Formspree. Client-side checks are for user experience only; validate, rate-limit, and spam-filter submissions at the form service or a trusted server endpoint. Do not treat browser validation as authorization or trusted data validation.