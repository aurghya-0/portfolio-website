export const AUTHOR_INFO = {
  name: "Aurghyadip Kundu",
  role: "Assistant Professor",
  department: "Computer Science & Engineering",
  institution: "NSHM Knowledge Campus, Durgapur",
  location: "Durgapur, WB, India",
  email: "aurghyadipk@yahoo.com",
  yahooEmail: "aurghyadipk@yahoo.com",
  github: "https://github.com/aurghya-0",
  linkedin: "https://linkedin.com/in/aurghyadip-kundu",
  instagram: "https://instagram.com/aurghyadip",
  twitter: "https://x.com/aurghyadip",
  scholar: "https://scholar.google.com",
  avatarUrl: "/profile.jpg",
  degree: "M.Tech CSE",
  tagline: "Computer Science Educator & Open Source Researcher",
  bio: "Specializing in High Performance Computing (HPC), IoT Healthcare Architectures, Applied Deep Learning, and Software Engineering. Dedicated to outcome-based pedagogy, curriculum design, and guiding student developer communities from fundamentals to open-source contributions."
};

export const QUICK_STATS = [
  { value: "4+", label: "Peer-Reviewed Publications (Springer, NASL)" },
  { value: "4+", label: "Academic & Industry Positions" },
  { value: "6+", label: "Core CSE Courses Taught" },
  { value: "M.Tech", label: "Postgraduate Degree in Computer Science" }
];

export const SYLLABUS_NAV = [
  { code: "CSE-100", label: "Orientation", id: "orientation" },
  { code: "CSE-300", label: "Research & Papers", id: "publications" },
  { code: "CSE-400", label: "Courses & Pedagogy", id: "teaching" },
  { code: "CSE-200", label: "Appointments", id: "experience" },
  { code: "CSE-500", label: "Service & Clubs", id: "leadership" },
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
  { key: "Undergraduate Degree", val: "B.Tech CSE" },
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
      "Instructing core courses in Python Programming, Data Warehousing & Mining, and Object-Oriented Design.",
      "Serving as an active member of the institutional IQAC Core Committee, leading internal quality audits.",
      "Coordinator for institutional innovation and coding ecosystem, CodeNEST."
    ]
  },
  {
    period: "May 2023 — Jul 2024",
    role: "Assistant Professor, Dept. of CSE (Faculty of Eng. & Tech.)",
    institution: "Parul University, Vadodara, Gujarat",
    bullets: [
      "Subject Coordinator for High Performance Computing — crafted university syllabus and lab practicals.",
      "Institutional Coordinator for NVIDIA Jetson Collaborative Labs, fostering edge AI research.",
      "Departmental Coordinator for NAAC Criteria 2 (Teaching-Learning and Evaluation).",
      "Taught Software Engineering, Open Source Software, and IoT systems."
    ]
  },
  {
    period: "Feb 2022 — Mar 2023",
    role: "Assistant Professor, Dept. of Information Technology",
    institution: "Calcutta Institute of Engineering & Management (CIEM), Kolkata",
    bullets: [
      "Taught OOP, Python Programming, Data Mining, and Research Methodology to undergraduate cohorts.",
      "Mentored capstone student projects in machine learning and automated smart systems."
    ]
  },
  {
    period: "Sep 2018 — May 2019",
    role: "Android & IoT Developer",
    institution: "Fortuna Impex Pvt. Ltd., Kolkata",
    bullets: [
      "Engineered NFC and Android-based smart canteen management automation.",
      "Developed IoT access control systems and supervised developer interns on BLE parking sensors."
    ]
  }
];

export const LEADERSHIP = [
  {
    type: "Faculty Advisory",
    icon: "users",
    title: "CodeNEST Innovation Club",
    desc: "Coordinator for NSHM's flagship coding club. Organizing hackathons, peer code reviews, and industry speaker sessions to build a vibrant developer culture."
  },
  {
    type: "Mentorship · Nov 2024–Present",
    icon: "code",
    title: "Open Source Student Developers Club",
    desc: "Founding mentor helping undergraduate developers transition from static tutorials to real open-source repository pull requests and collaborative Git workflows."
  },
  {
    type: "Lab Governance",
    icon: "cpu",
    title: "NVIDIA Jetson Collaborative Labs",
    desc: "Served as Institutional Coordinator at Parul University, setting up edge AI hardware testbeds for student research projects in computer vision and robotics."
  },
  {
    type: "Academic Project",
    icon: "book-open",
    title: "Automated Smart Library System",
    desc: "NFC and QR-code powered automated library management system developed at CIEM to digitize catalog circulation and reduce administrative overhead."
  }
];

export const EDUCATION = [
  {
    degree: "M.Tech in Computer Science & Engineering",
    institution: "Brainware University, Kolkata"
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Calcutta Institute of Engineering & Management (CIEM)"
  }
];

export const SKILL_GROUPS = [
  {
    title: "Languages & Systems",
    skills: [
      { name: "Python", highlight: true },
      { name: "C", highlight: true },
      { name: "C++", highlight: false },
      { name: "SQL", highlight: false },
      { name: "JavaScript", highlight: false },
      { name: "PostgreSQL", highlight: false }
    ]
  },
  {
    title: "HPC, AI & Data Analytics",
    skills: [
      { name: "OpenMP", highlight: true },
      { name: "MPI", highlight: true },
      { name: "CUDA", highlight: true },
      { name: "NumPy", highlight: false },
      { name: "Pandas", highlight: false },
      { name: "Power BI", highlight: false },
      { name: "Jupyter", highlight: false }
    ]
  },
  {
    title: "DevOps & Academic Tools",
    skills: [
      { name: "Git", highlight: false },
      { name: "Docker", highlight: false },
      { name: "LaTeX", highlight: true },
      { name: "Typst", highlight: true },
      { name: "Markdown", highlight: false }
    ]
  }
];
