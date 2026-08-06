export const AUTHOR_INFO = {
  name: "Aurghyadip Kundu",
  role: "Assistant Professor",
  department: "Computer Science & Engineering",
  institution: "NSHM Knowledge Campus, Durgapur",
  location: "Durgapur, WB, India",
  email: "adkundu@gmail.com",
  phone: "+91 8240461858",
  github: "https://github.com/aurghya-0",
  linkedin: "https://linkedin.com/in/aurghyadip-kundu",
  instagram: "https://instagram.com/aurghyadip",
  twitter: "https://x.com/aurghyadip",
  scholar: "https://scholar.google.com",
  avatarUrl: "/profile.jpg",
  degree: "M.Tech CSE",
  tagline: "Assistant Professor & Open Source Developer",
  bio: "Assistant Professor and Open Source Developer with 4+ years of academic experience across CSE and IT departments, specializing in Python, DSA/DAA, Software Engineering and C Programming. Experienced in curriculum design, academic coordination, and leading innovation-driven student communities."
};

export const QUICK_STATS = [
  { value: "4+", label: "Peer-Reviewed Publications (Springer, NASL)" },
  { value: "6+", label: "Open Source Packages & Tools" },
  { value: "4+", label: "Academic & Industry Positions" },
  { value: "4+", label: "Years of Academic Experience" }
];

export const SYLLABUS_NAV = [
  { code: "CSE-100", label: "Orientation", id: "orientation" },
  { code: "CSE-300", label: "Research & Papers", id: "publications" },
  { code: "CSE-400", label: "Courses & Pedagogy", id: "teaching" },
  { code: "CSE-200", label: "Appointments", id: "experience" },
  { code: "CSE-500", label: "Service & Clubs", id: "leadership" },
  { code: "CSE-550", label: "Open Source", id: "opensource" },
  { code: "CSE-600", label: "Qualifications & Skills", id: "toolkit" },
  { code: "CSE-700", label: "Office Hours", id: "contact" }
];

export const RESEARCH_PILLARS = [
  {
    id: "hpc",
    icon: "microchip",
    title: "High Performance Computing",
    desc: "Parallel algorithms, CUDA GPU acceleration, OpenMP/MPI, and high-throughput data processing systems."
  },
  {
    id: "ai-risk",
    icon: "trending-up",
    title: "Financial AI & Risk Optimisation",
    desc: "Deep learning volatility models, portfolio management, and reinforcement learning for risk mitigation."
  },
  {
    id: "iot-health",
    icon: "activity",
    title: "IoT & Healthcare Analytics",
    desc: "Edge-cloud architectures, feature selection classifiers (KNN), and COVID-19/cardiac screening models."
  },
  {
    id: "se-risk",
    icon: "git-branch",
    title: "Software Engineering & Risk",
    desc: "Sub-process risk modeling, stage-oriented quality metrics, and open-source development workflows."
  }
];

export const KEY_METRICS = [
  { key: "Current Designation", val: "Assistant Professor" },
  { key: "Institution", val: "NSHM Knowledge Campus" },
  { key: "Academic Experience", val: "Since Feb 2022" },
  { key: "Postgraduate Degree", val: "M.Tech CSE", highlight: true },
  { key: "Undergraduate Degree", val: "B.Tech IT" },
  { key: "Institutional Committees", val: "IQAC, NAAC, NVIDIA Lab" },
  { key: "Student Clubs", val: "CodeNEST, Open Source Club" }
];

export const PUBLICATIONS = [
  {
    id: "pub-1",
    year: "2026",
    venueTag: "National Academy Science Letters",
    category: "ai",
    categoryName: "AI & Risk Optimisation",
    title: "Deep Learning-Based Volatility Forecasting, Portfolio Management, and Reinforcement Learning-Based Risk Optimisation",
    authors: ["Aurghyadip Kundu", "et al."],
    journal: "National Academy Science Letters (NASL) — Published Jan 2026",
    abstract: "Proposes an end-to-end framework combining temporal deep learning architectures for market volatility prediction with deep reinforcement learning policies to optimize dynamic portfolio rebalancing under non-stationary risk constraints.",
    bibtex: `@article{kundu2026deep,
  title={Deep Learning-Based Volatility Forecasting, Portfolio Management, and Reinforcement Learning-Based Risk Optimisation},
  author={Kundu, Aurghyadip and others},
  journal={National Academy Science Letters},
  year={2026},
  month={Jan},
  publisher={Springer / National Academy of Sciences, India}
}`
  },
  {
    id: "pub-2",
    year: "2022",
    venueTag: "ICADM 2022",
    category: "healthcare",
    categoryName: "IoT & Healthcare",
    title: "Heart Disease Detection Using Feature Selection-Based KNN Classifier",
    authors: ["Aurghyadip Kundu", "et al."],
    journal: "International Conference on Data Analytics and Management (ICADM) — Jan 2022",
    abstract: "Presents a machine learning pipeline using heuristic feature selection to isolate high-impact clinical indicators, improving classification accuracy and speed for early-stage cardiac risk screening.",
    bibtex: `@inproceedings{kundu2022heart,
  title={Heart Disease Detection Using Feature Selection-Based KNN Classifier},
  author={Kundu, Aurghyadip and others},
  booktitle={International Conference on Data Analytics and Management (ICADM)},
  year={2022},
  month={Jan}
}`
  },
  {
    id: "pub-3",
    year: "2021",
    venueTag: "Springer Nature",
    category: "healthcare",
    categoryName: "IoT & Healthcare",
    title: "IoT-Cloud Based Healthcare Model for COVID-19 Detection",
    authors: ["Aurghyadip Kundu", "et al."],
    journal: "Springer Nature — Published Apr 2021",
    abstract: "Demonstrates an integrated IoT sensor cloud framework for non-invasive physiological monitoring, streaming real-time telemetry to cloud-hosted predictive models for early pandemic isolation protocols.",
    bibtex: `@article{kundu2021iot,
  title={IoT-Cloud Based Healthcare Model for COVID-19 Detection},
  author={Kundu, Aurghyadip and others},
  journal={Springer Nature},
  year={2021},
  month={Apr},
  publisher={Springer Nature}
}`
  },
  {
    id: "pub-4",
    year: "2018",
    venueTag: "IJAER",
    category: "se",
    categoryName: "Software Engineering",
    title: "Sub Process and Stage-Oriented Risk Analysis Model for Software Projects",
    authors: ["Aurghyadip Kundu", "et al."],
    journal: "International Journal of Applied Engineering Research (IJAER) — Jun 2018",
    abstract: "Formulates a structured software metrics framework that evaluates project risk at granular sub-process stages, aiding agile software managers in early defect containment.",
    bibtex: `@article{kundu2018subprocess,
  title={Sub Process and Stage-Oriented Risk Analysis Model for Software Projects},
  author={Kundu, Aurghyadip and others},
  journal={International Journal of Applied Engineering Research},
  volume={13},
  number={11},
  pages={9102--9108},
  year={2018}
}`
  }
];

export const COURSES = [
  {
    code: "CSE-302",
    name: "High Performance Computing",
    desc: "Parallel computing paradigms, multi-threaded programming using OpenMP, distributed memory with MPI, and GPU acceleration with NVIDIA CUDA architectures.",
    tags: ["C / C++", "OpenMP", "MPI", "CUDA"]
  },
  {
    code: "CSE-101",
    name: "Python Programming & Data Systems",
    desc: "Foundational data structures, object-oriented concepts, functional idioms, data analysis with NumPy/Pandas, and building modern web backends.",
    tags: ["Python 3", "NumPy", "Pandas", "Jupyter"]
  },
  {
    code: "CSE-401",
    name: "Data Warehousing & Mining",
    desc: "ETL pipelines, dimensional modeling, OLAP cubes, association rule mining, clustering, classification algorithms, and enterprise business intelligence.",
    tags: ["SQL", "PostgreSQL", "Power BI", "Scikit-Learn"]
  },
  {
    code: "CSE-202",
    name: "IoT Systems & Embedded Hardware",
    desc: "Sensor interfacing, microcontrollers, BLE/Wi-Fi communication protocols, edge analytics, and real-time cloud data pipelines.",
    tags: ["NVIDIA Jetson", "ESP32", "MQTT", "BLE"]
  },
  {
    code: "CSE-305",
    name: "Software Engineering & Testing",
    desc: "Agile & DevOps methodologies, UML architecture design, automated unit testing, CI/CD pipelines, and software quality assurance metrics.",
    tags: ["Git", "Docker", "UML", "Agile / Scrum"]
  },
  {
    code: "CSE-102",
    name: "C Programming & Research Methodology",
    desc: "Procedural programming, pointer arithmetic, memory management, statistical analysis methods, and academic paper drafting in LaTeX/Typst.",
    tags: ["ANSI C", "LaTeX", "Typst", "Research Ethics"]
  }
];

export const EXPERIENCE = [
  {
    period: "Aug 2024 — Present",
    role: "Assistant Professor, Dept. of Computer Science & Engineering",
    institution: "NSHM Knowledge Campus, Durgapur, West Bengal",
    bullets: [
      "Teach a variety of Computer Science and Engineering courses, including Python Programming, C Programming, and Data Warehousing and Data Mining.",
      "IQAC Core Committee Member.",
      "Coordinator for institutional innovation and coding club, CodeNEST."
    ]
  },
  {
    period: "May 2023 — Jul 2024",
    role: "Assistant Professor, Dept. of CSE (Faculty of Eng. & Tech.)",
    institution: "Parul University, Vadodara, Gujarat",
    bullets: [
      "Subject Coordinator for High Performance Computing.",
      "Teach Software Engineering, Internet of Things, Python Programming, High Performance Computing, and Open Source Software.",
      "Create course syllabi and lesson plans.",
      "Departmental Coordinator for NAAC Criteria 2.",
      "Institutional Coordinator for NVIDIA Jetson Collaborative Labs.",
      "Academic Welfare Monitoring Committee Member."
    ]
  },
  {
    period: "Feb 2022 — Mar 2023",
    role: "Assistant Professor, Dept. of Information Technology",
    institution: "Calcutta Institute of Engineering & Management (CIEM), Kolkata",
    bullets: [
      "Teach Object Oriented Programming, Python Programming, Data Warehousing, Data Mining, and Research Methodology.",
      "Use effective assessment strategies to evaluate student learning and provide feedback for improvement.",
      "Advise and mentor students on academic and career-related matters, including research opportunities and job prospects."
    ]
  },
  {
    period: "Sep 2018 — May 2019",
    role: "Android Developer",
    institution: "Fortuna Impex Pvt. Ltd., Kolkata",
    bullets: [
      "Developed smart canteen management system for in-house use.",
      "Worked with smart security and access control systems using IoT integrated with Android systems.",
      "Managed a team of interns working on BLE devices for smart sensors in parking detection."
    ]
  }
];

export const LEADERSHIP = [
  {
    type: "Founding Member · Nov 2024–Present",
    icon: "code",
    title: "Open Source Student Developers Club",
    desc: "Founding member of a community helping undergraduate developers transition from tutorials to real open-source repository contributions and collaborative Git workflows."
  },
  {
    type: "Faculty Advisor · Aug 2024–Present",
    icon: "users",
    title: "CodeNEST — Open Source Club of NSHM",
    desc: "Faculty advisor for NSHM's institutional innovation and coding club, organizing hackathons, peer code reviews, and industry speaker sessions."
  },
  {
    type: "Lead Member · Jan 2017–Jun 2018",
    icon: "google",
    title: "Google Developers Student Club, CIEM",
    desc: "Led student developer community at Calcutta Institute of Engineering & Management, organizing workshops, study jams, and campus tech events."
  }
];

export const OPEN_SOURCE = [
  {
    name: "modernclassnotes",
    platform: "CTAN (LaTeX)",
    year: "2026",
    role: "Creator & Maintainer",
    desc: "LaTeX package and document class for typesetting course notes, lecture handouts, and assignment worksheets with seven color palettes and pedagogical callout environments.",
    url: "https://ctan.org/pkg/modernclassnotes"
  },
  {
    name: "modern-class-presentation",
    platform: "Typst Universe",
    year: "2026",
    role: "Creator & Maintainer",
    desc: "Dependency-free Typst package for modern university lectures and classroom presentations with section dividers, focus slides, and reusable content blocks.",
    url: "https://typst.app/universe/package/modern-class-presentation"
  },
  {
    name: "modern-project-report",
    platform: "Typst Universe",
    year: "2026",
    role: "Creator & Maintainer",
    desc: "Clean college and university project report template with dynamic running headers, cover page, abstract, and structured outlines.",
    url: "https://typst.app/universe/package/modern-project-report"
  },
  {
    name: "AutoGrade-Core",
    platform: "GitHub",
    year: "2026",
    role: "Creator & Maintainer",
    desc: "High-performance, multi-threaded C++20 system evaluation framework for automated grading of C/C++ academic programming submissions.",
    url: "https://github.com/aurghya-0/AutoGrade-Core"
  },
  {
    name: "obe-exam",
    platform: "GitHub",
    year: "2026",
    role: "Creator & Maintainer",
    desc: "Outcome-Based Education (OBE) standard examination question paper template for Typst, compliant with NAAC, NBA, and IQAC requirements.",
    url: "https://github.com/aurghya-0/obe-exam"
  },
  {
    name: "typst-mailmerge",
    platform: "GitHub",
    year: "2026",
    role: "Creator & Maintainer",
    desc: "Comprehensive mail merge package for Typst to generate personalized letters, certificates, address labels, badges, and envelopes from CSV data.",
    url: "https://github.com/aurghya-0/typst-mailmerge"
  }
];

export const PROJECTS = [
  {
    name: "typstcode",
    period: "2026 — Present",
    type: "Personal Project",
    desc: "Desktop editor for Typst with an integrated writing workflow for authoring, compiling, and previewing Typst documents.",
    url: "https://github.com/aurghya-0/typstcode"
  },
  {
    name: "Android Based Smart Automated Library Management System",
    period: "Jun 2017 — Aug 2018",
    type: "Calcutta Institute of Engineering & Management",
    desc: "Developed an automated library management system using NFC and QR code to reduce the staffing need for a college library.",
    url: null
  }
];

export const EDUCATION = [
  {
    degree: "Master of Technology in Computer Science & Engineering",
    institution: "Brainware University, Kolkata, India",
    period: "Aug 2019 — Jul 2021",
    gpa: "8.74 / 10.0 GPA",
    courses: "Algorithms & Data Structures, Artificial Intelligence, Web Technology, Internet of Things"
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Calcutta Institute of Engineering & Management, Kolkata, India",
    period: "Aug 2014 — Jul 2018",
    gpa: "7.39 / 10.0 GPA",
    courses: "Algorithms & Data Structures, Web Technology, Programming Languages, DBMS, Operating Systems"
  }
];

export const SKILL_GROUPS = [
  {
    title: "Spoken Languages",
    skills: [
      { name: "English (Native)", highlight: true },
      { name: "German (Native)", highlight: true },
      { name: "Japanese (Basic)", highlight: false }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", highlight: true },
      { name: "C", highlight: true },
      { name: "SQL", highlight: false },
      { name: "PostgreSQL", highlight: false },
      { name: "JavaScript", highlight: false },
      { name: "Typst", highlight: true },
      { name: "LaTeX", highlight: true }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", highlight: true },
      { name: "Docker", highlight: false },
      { name: "VS Code", highlight: false },
      { name: "Microsoft Office", highlight: false },
      { name: "Canva", highlight: false }
    ]
  },
  {
    title: "BI & Data Analytics",
    skills: [
      { name: "Power BI", highlight: true },
      { name: "Jupyter", highlight: false },
      { name: "NumPy", highlight: false },
      { name: "Pandas", highlight: false }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Public Speaking", highlight: false },
      { name: "Communication", highlight: false },
      { name: "Critical Thinking", highlight: false },
      { name: "Leadership", highlight: true },
      { name: "Technical Writing", highlight: true }
    ]
  }
];

export const INTERESTS = [
  "Video Games",
  "Anime",
  "Reading Non-fiction & Fiction",
  "Classical and Original Soundtrack Music"
];
