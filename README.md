# Aurghyadip Kundu — Academic & Faculty Portfolio

A responsive, single-page academic portfolio website for **Aurghyadip Kundu**, Assistant Professor of Computer Science & Engineering at NSHM Knowledge Campus, Durgapur.

Styled with a **Syllabus / Academic Index theme**, each main section corresponds to a custom course code (e.g., `CSE-100` Orientation, `CSE-300` Research, `CSE-400` Teaching).

---

## 🌟 Key Features

- **Academic Syllabus Navigation**: Sticky sidebar indexed by course codes (`CSE-100` through `CSE-700`) with active section highlighting on scroll.
- **Interactive Research & Publications (`CSE-300`)**:
  - Category filtering (*AI & Risk Optimisation*, *IoT & Healthcare*, *Software Engineering*).
  - Expandable publication abstracts and 1-click **BibTeX** copying with toast feedback.
- **Courses & Pedagogy (`CSE-400`)**: Interactive accordion cards detailing course modules, lab work, and outcome-based learning strategies.
- **Academic Appointments & Experience (`CSE-200`)**: Timeline view covering teaching positions, institutional roles (IQAC Core Committee, NAAC Criteria 2 Coordinator, NVIDIA Educator), and industry background.
- **Institutional Leadership & Clubs (`CSE-500`)**: Highlights of student club mentorship (CodeNEST, Open Source Club) and committee contributions.
- **Qualifications & Toolkit (`CSE-600`)**: Organized breakdown of technical stack (CUDA/HPC, Python, C++, Deep Learning frameworks) and degrees (M.Tech CSE, B.Tech CSE).
- **Office Hours & Contact (`CSE-700`)**: Direct contact form and institutional contact metadata.
- **Midnight Slate & Parchment Aesthetic**: Custom CSS design system using Google Fonts (*Cinzel*, *Newsreader*, *Inter*, *JetBrains Mono*), FontAwesome, and Academicons.

---

## 📁 Repository Structure

```
.
├── index.html     # Single-page web application (HTML markup, embedded CSS, & JS logic)
├── profile.jpg    # Hero section portrait image of Aurghyadip Kundu
├── README.md      # Project documentation
└── .gitignore     # Git ignore rules
```

---

## 🚀 Local Development

No build steps, package managers, or compilation required. You can view the site locally using any of the following methods:

1. **Direct Browser Execution**:
   Simply open [index.html](file:///home/aurghya/Coding/aurghyadip_portfolio/index.html) directly in any web browser.

2. **Local HTTP Server**:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

---

## 🌐 Hosting on GitHub Pages

1. Initialize git and commit your files:
   ```bash
   git init
   git add index.html profile.jpg README.md .gitignore
   git commit -m "Initial portfolio release"
   git branch -M main
   ```
2. Link your GitHub repository and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Navigate to **Settings → Pages** on your GitHub repository.
   - Set **Source** to **Deploy from a branch**.
   - Select `main` branch and `/ (root)` directory, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 📜 Technical Details

- **Typography**: Google Fonts (*Newsreader*, *Cinzel*, *Inter*, *JetBrains Mono*) loaded via CDN.
- **Icons**: FontAwesome 6 & Academicons.
- **Accessibility & UX**: Fully responsive layout with mobile drawer navigation, smooth scrolling, keyboard focus rings, and `prefers-reduced-motion` support.
