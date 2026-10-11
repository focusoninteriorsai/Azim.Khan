# Azim Khan — personal portfolio

A fast, responsive, multi-page personal-branding portfolio for Azim Khan, CEO of FocusOn Interiors. Built with plain HTML, custom CSS and dependency-free JavaScript. There is no application backend, form service, package installation or build step.

## Pages

- `index.html` — portfolio home with the animated handwritten welcome, profile overview, leadership, selected work and contact preview
- `about.html` — biography, career roles, education and FocusOn Interiors overview
- `journey.html` — career timeline from Backend Operator to CEO
- `projects.html` — filterable portfolio of selected FocusOn Interiors team projects
- `contact.html` — direct phone, email, WhatsApp, LinkedIn and office links (no form/backend)

## Run locally

Serve the static files from this directory with any static file server. For example:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173`. This is only a local preview; no deployment configuration is included.

## Shared assets

- `styles.css` — responsive theme, page layouts, handwriting loader and motion effects
- `script.js` — home-page loader, image fallbacks, scroll reveals, mobile navigation and project filters

Portrait and project photography are referenced from the supplied Azim Khan portfolio. Project photography is credited to FocusOn Interiors.
