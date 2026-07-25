# Aurghyadip Kundu — Portfolio Site

A single-file static portfolio (HTML + CSS + JS, no build step) styled as a
professor's syllabus: the left-hand nav reads like a course index, and each
section maps to a "course code" (CSE-100 Orientation, CSE-201 Academic
Positions, etc.) tied to the actual subjects taught.

## Files
- `index.html` — the entire site (styles and script are embedded, so this
  is the only file you need to deploy).

## Before you publish
- Replace the "PHOTO 2×2" circle in the hero with a real photo if you'd
  like — either swap it for an `<img>` tag, or leave it as a placeholder.
- Double check the email, phone, LinkedIn and GitHub links at the top of
  `index.html` (inside `.hero-meta` and `#contact`) are current.

## Hosting on GitHub Pages

1. Create a new repository on GitHub (e.g. `aurghya-0.github.io` for a
   user site, or any name for a project site — e.g. `portfolio`).
2. Push this file to the repo root:
   ```bash
   git init
   git add index.html README.md
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a
   branch**, then set **Branch** to `main` and folder to `/ (root)`.
   Save.
5. GitHub will give you a live URL:
   - If your repo is named `<your-username>.github.io`, the site is at
     `https://<your-username>.github.io/`.
   - Otherwise it's at `https://<your-username>.github.io/<repo-name>/`.
   It usually takes 1–2 minutes to go live after the first deploy.

## Local preview
Just open `index.html` directly in a browser, or serve it locally:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes
- Fonts (Newsreader, IBM Plex Sans, IBM Plex Mono) load from Google Fonts
  via CDN — no local font files needed, but an internet connection is
  required for them to render as intended.
- Fully responsive down to mobile, with keyboard focus states and
  `prefers-reduced-motion` support built in.
