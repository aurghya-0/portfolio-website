# Aurghyadip Kundu — Academic & Faculty Portfolio (React + Vite)

A modern, high-performance, single-page academic portfolio application for **Aurghyadip Kundu**, Assistant Professor of Computer Science & Engineering at NSHM Knowledge Campus, Durgapur. Built with **React 18**, **Vite**, and styled with an **Academic Syllabus / Midnight Slate Design System**.

---

## 🌟 Key Features

- **Academic Syllabus Navigation (`SidebarNav`)**: Sticky sidebar indexed by course codes (`CSE-100` through `CSE-700`) with dynamic scroll observation and active section tracking.
- **Interactive Publications Catalog (`PublicationsSection`)**:
  - Live full-text search across paper titles, venues, abstracts, and keywords.
  - Category filter tabs (*AI & Risk Optimisation*, *IoT & Healthcare*, *Software Engineering*).
  - Expandable abstract cards and formatted **BibTeX** code blocks.
  - One-click copy-to-clipboard citation feedback with animated toast notifications.
- **Pedagogy & Course Offerings (`TeachingSection`)**: Structured cards detailing lab practicals, outcomes, and tech stacks.
- **Career & Experience Timeline (`ExperienceSection`)**: Responsive vertical timeline covering university faculty appointments, IQAC Core Committee roles, NAAC Criteria 2 coordination, and industry IoT development.
- **Institutional Leadership & Service (`LeadershipSection`)**: Faculty advisory, CodeNEST club mentorship, Open Source Student Developers Club, and NVIDIA Jetson Lab governance.
- **Toolkit & Qualifications (`ToolkitSection`)**: Matrix of technical competencies (CUDA, OpenMP, MPI, Python, C/C++) and academic degrees (M.Tech CSE, B.Tech CSE).
- **Office Hours & Direct Inquiry Form (`ContactSection`)**: Direct email/social cards and interactive contact form with mail client fallback.
- **Midnight Slate Aesthetics**: Typography with Google Fonts (*Cinzel*, *Newsreader*, *Inter*, *JetBrains Mono*), Academicons, and Lucide React icons.

---

## 📁 Repository Structure

```
.
├── public/
│   ├── profile.jpg     # Hero section portrait image
│   └── CNAME           # Custom domain mapping (aurghyadip.in)
├── src/
│   ├── components/     # Modular React components
│   │   ├── SidebarNav.jsx
│   │   ├── MobileHeader.jsx
│   │   ├── HeroSection.jsx
│   │   ├── OrientationSection.jsx
│   │   ├── PublicationsSection.jsx
│   │   ├── PublicationCard.jsx
│   │   ├── TeachingSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── LeadershipSection.jsx
│   │   ├── ToolkitSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Toast.jsx
│   ├── data/
│   │   └── portfolioData.js # Structured data model for all sections
│   ├── styles/
│   │   └── index.css   # CSS design system, variables & layout
│   ├── App.jsx         # Main application container & scroll observer
│   └── main.jsx        # React application entry point
├── index.html          # Vite HTML template with Google Fonts & CDN icons
├── package.json        # NPM dependencies & scripts
├── vite.config.js      # Vite build configuration
└── README.md           # Project documentation
```

---

## 🚀 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Production Build**:
   ```bash
   npm run build
   ```
   The compiled bundle will be generated in the `dist/` directory.

---

## 📜 License & Copyright

© 2026 Aurghyadip Kundu. All rights reserved.
