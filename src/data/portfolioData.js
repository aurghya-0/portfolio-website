export const AUTHOR_INFO = {
  name: "Aurghyadip Kundu",
  role: "Assistant Professor",
  department: "Computer Science & Engineering",
  institution: "NSHM Knowledge Campus, Durgapur",
  location: "Durgapur, WB, India",
  email: "aurghyadipk@yahoo.com",
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
  { code: "CSE-420", label: "Courseware Portals", id: "courseware" },
  { code: "CSE-200", label: "Appointments", id: "experience" },
  { code: "CSE-500", label: "Service & Clubs", id: "leadership" },
  { code: "CSE-550", label: "Open Source", id: "opensource" },
  { code: "CSE-600", label: "Qualifications & Skills", id: "toolkit" },
  { code: "CSE-700", label: "Office Hours", id: "contact" }
];

export const COURSEWARE_SITES = [
  {
    id: "kernelcraft-os",
    title: "KernelCraft | Operating Systems Lab",
    subtitle: "Interactive OS Concepts, Kernel Visualizations & POSIX System Programming",
    courseCode: "PCC-CS502 / CS592",
    badge: "Featured OS Lab Portal",
    category: "Operating Systems",
    liveUrl: "https://aurghya-0.github.io/operating-systems-lab/",
    githubUrl: "https://github.com/aurghya-0/operating-systems-lab",
    techStack: ["C", "Linux System Calls", "POSIX Threads", "HTML5/JS", "IPC & Memory"],
    desc: "Comprehensive interactive laboratory portal for MAKAUT Operating Systems curriculum. Features interactive CPU scheduling visualizers, memory page replacement simulators, process synchronization codebases, and Linux POSIX C system call tutorials.",
    features: [
      "Interactive CPU Scheduling Simulator (FCFS, SJF, Round Robin, Priority Scheduling)",
      "POSIX Multithreading & Semaphore Synchronization Lab Code (Dining Philosophers, Producer-Consumer)",
      "Page Replacement Algorithm Simulators (FIFO, LRU, Optimal Page Replacement)",
      "Linux File Systems, Fork/Exec IPC, & C System Call Interactive Reference Codebase"
    ],
    highlights: [
      "100% Interactive In-Browser Visualizations",
      "Production-Grade C & POSIX Implementations",
      "Full MAKAUT CS592 Lab Manual Integration"
    ]
  },
  {
    id: "advanced-python",
    title: "Advanced Python, EDA & Data Mining Basics",
    subtitle: "Exploratory Data Analysis, Machine Learning Pipelines & Data Mining",
    courseCode: "CSE-401 / PEC-IT702B",
    badge: "Data Science Portal",
    category: "Python & Data Mining",
    liveUrl: "https://aurghya-0.github.io/advanced-python/",
    githubUrl: "https://github.com/aurghya-0/advanced-python",
    techStack: ["Python 3.11", "Pandas", "NumPy", "Scikit-Learn", "Jupyter"],
    desc: "Educational courseware portal covering advanced Pythonic OOP, functional idioms, exploratory data analysis (EDA), data cleaning, statistical modeling, and data mining algorithms designed for senior undergraduate CSE & IT students.",
    features: [
      "Interactive Pythonic OOP & Functional Programming Notebooks",
      "Comprehensive Data Mining Pipelines (Apriori Association Rules, K-Means, Decision Trees)",
      "Real-World Healthcare & Financial Dataset Analysis Case Studies",
      "Scikit-Learn Machine Learning Workflow Templates & Feature Scaling Guides"
    ],
    highlights: [
      "Complete Jupyter & Markdown Code Repositories",
      "End-to-End Data Mining Workflows",
      "Interactive Exploratory Data Analysis Demos"
    ]
  },
  {
    id: "pcc-cs393-dsa",
    title: "PCC-CS393 Data Structures & Algorithms Lab",
    subtitle: "MAKAUT CSE-393 Curriculum, Algorithmic Visualizations & C Codebase",
    courseCode: "PCC-CS393",
    badge: "Core DSA Curriculum",
    category: "Data Structures & Algorithms",
    liveUrl: "https://aurghya-0.github.io/pcc-cs393/",
    githubUrl: "https://github.com/aurghya-0/pcc-cs393",
    techStack: ["C / C++", "Data Structures", "Algorithms", "Pointers", "GDB Debugging"],
    desc: "Official lab courseware website for PCC-CS393 (Data Structures & Algorithms Lab). Contains production-grade C/C++ implementations, step-by-step memory stack/heap trace diagrams, time complexity analyses, and interactive algorithm benchmarks.",
    features: [
      "Linear Data Structures: Dynamic Arrays, Linked Lists (Singly, Doubly, Circular), Stacks & Queues",
      "Non-Linear Data Structures: Binary Search Trees (BST), AVL Tree Balancing & Binary Heaps",
      "Graph Algorithms: BFS, DFS, Dijkstra Shortest Path, Prim & Kruskal Spanning Trees",
      "Sorting & Searching Benchmarks with Big-O Time & Space Complexity Analyses"
    ],
    highlights: [
      "Official MAKAUT PCC-CS393 Lab Syllabus Alignment",
      "Memory Pointer Allocation & Stack Tracing",
      "Optimized C/C++ Reference Implementations"
    ]
  },
  {
    id: "c-programming-tutorial",
    title: "C Programming Mastery Tutorial Portal",
    subtitle: "Foundational C Language, Pointer Mechanics & System Allocation",
    courseCode: "ESC-191 / ESC-291",
    badge: "First-Year Foundation",
    category: "C & Systems Programming",
    liveUrl: "https://aurghya-0.github.io/c-programming/",
    githubUrl: "https://github.com/aurghya-0/c-programming",
    techStack: ["C99 / C11", "Pointer Arithmetic", "Dynamic Memory", "File I/O", "Structures"],
    desc: "First-year undergraduate courseware portal introducing students to C programming fundamentals, pointer arithmetic mechanics, dynamic allocation (malloc/calloc/realloc/free), structures, and modular file stream handling.",
    features: [
      "Step-by-Step Pointer Arithmetic & Memory Stack/Heap Layout Diagrams",
      "Interactive C Code Snippets & GDB Debugging Walkthroughs",
      "Structured Practice Problem Sets & Automated Unit Test Exercises",
      "File System I/O, Binary File Streams & Dynamic Struct Projects"
    ],
    highlights: [
      "Tailored for First-Year Engineering Students",
      "Visual Memory Layout & Pointer Arithmetic",
      "Graded Coding Exercises & Solutions"
    ]
  },
  {
    id: "pcc-cs593-java",
    title: "PCC-CS593 Java OOP Laboratory Portal",
    subtitle: "Object-Oriented Design, Multithreading & Event-Driven Applications",
    courseCode: "PCC-CS593",
    badge: "MAKAUT Java Lab",
    category: "Java & OOP",
    liveUrl: "https://aurghya-0.github.io/PCC-CS593-Lab/",
    githubUrl: "https://github.com/aurghya-0/PCC-CS593-Lab",
    techStack: ["Java 17+", "OOP Principles", "Multithreading", "Swing / JavaFX", "Collections"],
    desc: "Comprehensive laboratory portal for PCC-CS593 Object-Oriented Programming using Java. Covers core OOP pillars, exception handling, Java Collection Framework, multithreading concurrency, and event-driven GUI desktop applications.",
    features: [
      "OOP Design Patterns: Encapsulation, Inheritance, Polymorphism & Interfaces",
      "Java Concurrency, Thread Synchronization & Inter-thread Communication",
      "Java Collections Framework (ArrayList, HashMap, TreeSet) & Generics Deep-Dive",
      "Event-Driven Desktop GUI Programming with JavaFX & Swing Components"
    ],
    highlights: [
      "Complete MAKAUT PCC-CS593 Experiment Suite",
      "Thread Concurrency & Synchronization Demos",
      "Modern Java 17+ Language Features"
    ]
  }
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
    level: "Advanced Undergraduate / Elective",
    desc: "Parallel computing paradigms, multi-threaded programming using OpenMP, distributed memory with MPI, and GPU acceleration with NVIDIA CUDA architectures.",
    tags: ["C / C++", "OpenMP", "MPI", "CUDA"],
    prerequisites: "Data Structures & Algorithms, Computer Architecture, C/C++ Programming",
    labStack: "NVIDIA CUDA Toolkit, GCC/G++, OpenMPI, Linux HPC Clusters",
    modules: [
      "Module 1: Foundations of Parallel Computing & Flynn's Taxonomy",
      "Module 2: Shared Memory Multi-threading with OpenMP Directives & Pragmas",
      "Module 3: Distributed Memory Architecture & Message Passing Interface (MPI)",
      "Module 4: Heterogeneous GPU Computing, CUDA Kernel Execution, Threads & Grids",
      "Module 5: Performance Profiling, Memory Coalescing & Roofline Models"
    ],
    outcomes: [
      "Design and implement scalable parallel algorithms using OpenMP and MPI",
      "Develop high-throughput GPU kernels in NVIDIA CUDA",
      "Analyze parallel speedup, efficiency, and Amdahl's Law metrics"
    ]
  },
  {
    code: "CSE-101",
    name: "Python Programming & Data Systems",
    level: "Core Undergraduate",
    desc: "Foundational data structures, object-oriented concepts, functional idioms, data analysis with NumPy/Pandas, and building modern web backends.",
    tags: ["Python 3", "NumPy", "Pandas", "Jupyter"],
    prerequisites: "High School Mathematics & Fundamental Problem Solving",
    labStack: "Python 3.11+, VS Code, Jupyter Notebooks, Conda / Pipenv",
    modules: [
      "Module 1: Control Flow, Functions, Lambdas & Comprehensions",
      "Module 2: Object-Oriented Programming, Polymorphism & Metaclasses",
      "Module 3: Vectorized Numerical Operations with NumPy Arrays",
      "Module 4: Data Manipulation, Cleaning & Aggregation with Pandas DataFrames",
      "Module 5: Automated File Handling, Regex & RESTful Web Service Integration"
    ],
    outcomes: [
      "Write modular, pythonic code following PEP 8 guidelines",
      "Analyze complex tabular datasets using Pandas and NumPy",
      "Develop scripts for data automation and analytical reporting"
    ]
  },
  {
    code: "CSE-401",
    name: "Data Warehousing & Mining",
    level: "Core Senior Undergraduate",
    desc: "ETL pipelines, dimensional modeling, OLAP cubes, association rule mining, clustering, classification algorithms, and enterprise business intelligence.",
    tags: ["SQL", "PostgreSQL", "Power BI", "Scikit-Learn"],
    prerequisites: "Database Management Systems (DBMS), Basic Probability & Statistics",
    labStack: "PostgreSQL, Python Scikit-Learn, Power BI Desktop, Jupyter",
    modules: [
      "Module 1: Data Warehouse Architectures, Star & Snowflake Schema Design",
      "Module 2: Extract, Transform, Load (ETL) Data Pipelines & Data Cleaning",
      "Module 3: Association Rule Mining (Apriori & FP-Growth Algorithms)",
      "Module 4: Classification Models (Decision Trees, Naive Bayes, K-NN)",
      "Module 5: Clustering Techniques (K-Means, DBSCAN) & Business Intelligence Dashboards"
    ],
    outcomes: [
      "Construct enterprise dimensional models and OLAP cubes",
      "Apply machine learning classification and clustering algorithms on real-world datasets",
      "Build interactive BI executive dashboards in Power BI"
    ]
  },
  {
    code: "CSE-202",
    name: "IoT Systems & Embedded Hardware",
    level: "Core Intermediate",
    desc: "Sensor interfacing, microcontrollers, BLE/Wi-Fi communication protocols, edge analytics, and real-time cloud data pipelines.",
    tags: ["NVIDIA Jetson", "ESP32", "MQTT", "BLE"],
    prerequisites: "Basic Circuit Theory, Digital Logic Design, C Programming",
    labStack: "Arduino IDE, ESP32 Microcontrollers, NVIDIA Jetson Nano, MQTT Broker",
    modules: [
      "Module 1: Microcontroller Architecture, GPIO Pins, SPI & I2C Sensor Protocols",
      "Module 2: Wireless Communication: Wi-Fi, Bluetooth Low Energy (BLE) & Zigbee",
      "Module 3: Lightweight Messaging with MQTT & Edge Data Telemetry",
      "Module 4: Edge AI Acceleration on NVIDIA Jetson Embedded Platforms",
      "Module 5: IoT Security Fundamentals, Encryption & Cloud Integration"
    ],
    outcomes: [
      "Interface physical analog/digital sensors with ESP32 microcontrollers",
      "Implement real-time MQTT telemetry streaming to cloud dashboards",
      "Deploy computer vision and ML models onto edge AI devices"
    ]
  },
  {
    code: "CSE-305",
    name: "Software Engineering & Testing",
    level: "Core Undergraduate",
    desc: "Agile & DevOps methodologies, UML architecture design, automated unit testing, CI/CD pipelines, and software quality assurance metrics.",
    tags: ["Git", "Docker", "UML", "Agile / Scrum"],
    prerequisites: "Object-Oriented Programming (C++/Java/Python)",
    labStack: "Git / GitHub, Docker, PyTest / JUnit, StarUML, Jira Workflow",
    modules: [
      "Module 1: Software Lifecycle Models: Waterfall vs Agile / Scrum Frameworks",
      "Module 2: Requirements Analysis & Object-Oriented Modeling with UML",
      "Module 3: System Design Architecture, Design Patterns & Refactoring",
      "Module 4: Automated Testing: Unit, Integration & Regression Testing",
      "Module 5: Continuous Integration / Continuous Deployment (CI/CD) & Dockerization"
    ],
    outcomes: [
      "Design formal UML class, sequence, and activity diagrams",
      "Implement automated test suites achieving high code coverage",
      "Manage collaborative agile software projects using Git workflows"
    ]
  },
  {
    code: "CSE-102",
    name: "C Programming & Research Methodology",
    level: "Core Foundation",
    desc: "Procedural programming, pointer arithmetic, memory management, statistical analysis methods, and academic paper drafting in LaTeX/Typst.",
    tags: ["ANSI C", "LaTeX", "Typst", "Research Ethics"],
    prerequisites: "None (Introductory Course)",
    labStack: "GCC Compiler, GDB Debugger, Typst CLI, Overleaf / LaTeX",
    modules: [
      "Module 1: Procedural Fundamentals: Data Types, Control Loops & Functions",
      "Module 2: Pointers, Dynamic Memory Allocation (malloc/free) & Memory Leaks",
      "Module 3: Structs, Unions & Low-Level Binary File Processing",
      "Module 4: Fundamentals of Academic Research, Literature Review & Hypothesis Testing",
      "Module 5: Technical Typesetting with Typst & LaTeX for Research Papers"
    ],
    outcomes: [
      "Master low-level pointer arithmetic and manual memory management in C",
      "Draft publishable academic manuscripts using Typst and LaTeX",
      "Conduct structured scientific literature reviews and ethical research design"
    ]
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
    category: "Accreditation & Quality Assurance",
    type: "Core Committee Member · 2024–Present",
    icon: "award",
    title: "Internal Quality Assurance Cell (IQAC)",
    institution: "NSHM Knowledge Campus, Durgapur",
    desc: "Member of institutional IQAC core committee driving Outcome-Based Education (OBE) compliance, NAAC accreditation benchmarks, and academic evaluation standards."
  },
  {
    category: "Accreditation & Quality Assurance",
    type: "Departmental Coordinator · 2023–2024",
    icon: "file-check",
    title: "NAAC Criteria 2 Accreditation Lead",
    institution: "Parul University, Vadodara",
    desc: "Departmental Lead for NAAC Criteria 2 (Teaching-Learning & Evaluation), preparing academic documentation, outcome metrics, and syllabus evaluation audits."
  },
  {
    category: "Research & Lab Facilities",
    type: "Institutional Coordinator · 2023–2024",
    icon: "cpu",
    title: "NVIDIA Jetson Collaborative Labs",
    institution: "Parul University, Vadodara",
    desc: "Institutional coordinator overseeing hardware deployment, student research initiatives, and edge AI projects in the NVIDIA Jetson Embedded Systems Lab."
  },
  {
    category: "Academic Governance",
    type: "Committee Member · 2023–2024",
    icon: "shield-check",
    title: "Academic Welfare Monitoring Committee",
    institution: "Parul University, Vadodara",
    desc: "Committee member monitoring student academic progression, curriculum feedback loops, and faculty-student welfare initiatives."
  },
  {
    category: "Student Innovation & Coding Clubs",
    type: "Faculty Advisor · Aug 2024–Present",
    icon: "users",
    title: "CodeNEST — Institutional Coding Club",
    institution: "NSHM Knowledge Campus, Durgapur",
    desc: "Faculty advisor organizing competitive programming hackathons, peer code reviews, and industry speaker sessions for undergraduate engineers."
  },
  {
    category: "Student Innovation & Coding Clubs",
    type: "Founding Member · Nov 2024–Present",
    icon: "code",
    title: "Open Source Student Developers Club",
    institution: "NSHM Knowledge Campus, Durgapur",
    desc: "Founding mentor helping undergraduate developers transition from tutorials to real open-source repository contributions and collaborative Git workflows."
  },
  {
    category: "Student Innovation & Coding Clubs",
    type: "Lead Member · Jan 2017–Jun 2018",
    icon: "google",
    title: "Google Developer Student Club (GDSC)",
    institution: "CIEM, Kolkata",
    desc: "Led student developer community at Calcutta Institute of Engineering & Management, organizing technical workshops, study jams, and campus hackathons."
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
    name: "SyncTask — Smart Android Task Manager",
    period: "2026 — Present",
    type: "Android Application (Play Store)",
    desc: "Modern offline-first task management application for Android built with Kotlin & Jetpack Compose. Features cloud sync, smart reminders, custom tags, and focus analytics.",
    url: "/synctask/"
  },
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
      { name: "English", highlight: true },
      { name: "Hindi", highlight: true },
      { name: "Bengali (Native)", highlight: true }
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
