export type VisualVariant = "traffic" | "disaster" | "audiobook" | "fraud" | "chainbi";

export interface Project {
  id: string;
  index: string;
  title: string;
  year: string;
  category: string;
  label?: string;
  technologies: string[];
  description: string;
  overview: string;
  implementation: string;
  contribution: string[];
  github: string | null;
  demo: string | null;
  visual: VisualVariant;
}

export const projects: Project[] = [
  {
    id: "fraudlens",
    index: "01",
    title: "FraudLens — Fraud-Risk Decision System",
    year: "2026",
    category: "Machine Learning",
    technologies: ["Python", "XGBoost", "scikit-learn", "PostgreSQL", "FastAPI", "Streamlit", "SHAP"],
    description:
      "An end-to-end fraud-risk decision system that scores transactions with calibrated gradient-boosted models and a cost-aware policy, served through a FastAPI scoring service and Streamlit analyst console.",
    overview:
      "Fraud detection is a rare-event, adversarial problem where accuracy is meaningless and analyst review capacity is limited. This system treats it as a decision problem: simulate realistic behavior, build leakage-free point-in-time features, and choose a policy that minimizes expected cost rather than optimizing a classifier score in isolation.",
    implementation:
      "A behavioral transaction simulator feeds a PostgreSQL warehouse, where point-in-time features are built with explicit leakage tests. Rules, logistic regression, and XGBoost are compared under temporal validation with an embargo; the selected model is probability-calibrated and wrapped in a cost-based, analyst-capacity-aware decision policy. SHAP explains individual decisions, drift is monitored, and results are exposed through a FastAPI scoring service and a three-page Streamlit analyst console. Synthetic data only — a portfolio and research system, not production banking software.",
    contribution: [
      "Built the simulator to warehouse to model to policy pipeline, including a 53-feature registry and 13 leakage tests.",
      "Compared rules, logistic regression, and XGBoost under temporal validation, then calibrated probabilities and evaluated expected cost.",
      "Implemented a cost-aware decision policy with analyst-capacity limits and an Isolation Forest unseen-fraud experiment.",
      "Added SHAP explanations, drift monitoring, a FastAPI scoring service, and a Streamlit analyst console.",
    ],
    github: "https://github.com/rutujkale/fraudlens",
    demo: "https://fraud-lens.streamlit.app/",
    visual: "fraud",
  },
  {
    id: "chain-bi",
    index: "02",
    title: "ChainBI — Blockchain Business Intelligence",
    year: "2026",
    category: "Data Analysis & BI",
    technologies: ["Python", "PostgreSQL", "SQL", "pandas", "Next.js", "React", "TypeScript"],
    description:
      "A business-intelligence system that treats an Aave V3 DeFi protocol's on-chain activity as a customer dataset, turning months of transactions into segmentation, retention, and business recommendations through a seven-page dashboard.",
    overview:
      "On-chain data is a detailed customer activity log, not just a trading signal. This project analyzes six months of Aave V3 activity on Polygon PoS to answer business questions about growth, concentration, and retention, delivered as a live analytical web application.",
    implementation:
      "An ETL pipeline pulls public transaction, token-transfer, and contract data from the Etherscan V2 API into a PostgreSQL warehouse. SQL window functions and CTEs power RFM segmentation, whale-concentration, and cohort-retention analysis alongside pandas and seaborn. Results are exported as static JSON and rendered in a seven-page Next.js dashboard covering overview, customer intelligence, retention, operations, analytics, insights, and system limitations.",
    contribution: [
      "Defined the business requirements, KPI framework, and stakeholder map for the protocol analysis.",
      "Built the extraction, cleaning, PostgreSQL warehouse, and SQL analysis pipeline.",
      "Implemented RFM segmentation and month-over-month cohort retention analysis.",
      "Shipped a seven-page Next.js dashboard deployed to Vercel, with all data limitations disclosed in-app.",
    ],
    github: "https://github.com/rutujkale/blockchain-business-intelligence",
    demo: "https://chainbi-analytics.vercel.app",
    visual: "chainbi",
  },
  {
    id: "smart-traffic",
    index: "03",
    title: "Smart Traffic Management System",
    year: "2024",
    category: "Computer Vision",
    technologies: ["Python", "YOLOv8", "Hadoop", "Quantum Computing (QUBO)", "Flask", "OpenCV"],
    description:
      "A real-time traffic management platform combining YOLOv8 vehicle detection, Hadoop log analytics, and quantum-ready QUBO signal-timing optimization behind a live Flask dashboard.",
    overview:
      "Traffic flow needs real-time monitoring and adaptive signal control. This project combines computer vision, big-data processing, and optimization to detect vehicles, aggregate multi-camera logs, and choose signal timings that respond to congestion.",
    implementation:
      "A Python and OpenCV pipeline detects and tracks vehicles with YOLOv8, counts per-lane crossings, and logs JSONL events. A Hadoop Streaming MapReduce job aggregates those logs into hourly per-lane volume, speed, and congestion analytics. Signal timing is formulated as a QUBO using D-Wave's Ocean SDK (dimod and neal) and solved with simulated annealing, with a one-line path to real quantum hardware. A Flask dashboard visualizes live congestion, vehicle composition, and signal plans.",
    contribution: [
      "Built the real-time YOLOv8 detection, tracking, and per-lane counting pipeline.",
      "Wrote the Hadoop Streaming MapReduce job for high-volume multi-camera log aggregation.",
      "Formulated signal timing as a QUBO with D-Wave Ocean and solved it via simulated annealing.",
      "Built the Flask dashboard for live congestion and signal-plan monitoring.",
    ],
    github: "https://github.com/rutujkale/smart-traffic-system",
    demo: null,
    visual: "traffic",
  },
  {
    id: "disaster-preparedness",
    index: "04",
    title: "Gamified Disaster Preparedness & Risk Reduction Platform",
    year: "2025",
    category: "Game Development & Simulation",
    label: "HACKATHON PROJECT",
    technologies: ["Unity", "C#", "Game Design", "Asset Creation", "UI/UX", "Web-Based Simulation"],
    description:
      "Collaborated in a cross-functional team to develop interactive simulation scripts in C# using the Unity engine for the Smart India Hackathon.",
    overview:
      "A gamified platform focused on disaster preparedness and risk reduction, developed for the Smart India Hackathon to help users prepare for emergency scenarios through interactive simulation.",
    implementation:
      "Built interactive simulation scripts in C# using the Unity engine as part of a cross-functional team. Participated in regular code reviews and refactored core code modules to optimize simulation performance and improve system responsiveness.",
    contribution: [
      "Developed interactive simulation scripts in C# using Unity.",
      "Participated in code reviews and refactored core modules to optimize simulation performance.",
    ],
    github: null,
    demo: null,
    visual: "disaster",
  },
  {
    id: "pdf-audiobook-generator",
    index: "05",
    title: "PDF Audiobook Generator",
    year: "2026",
    category: "Desktop Application",
    technologies: ["Python", "Tkinter", "PyMuPDF", "Edge-TTS", "Pygame", "Threading", "Git"],
    description:
      "A cross-platform desktop application that converts text-based PDFs into natural-sounding audiobooks using Python and Microsoft Edge neural text-to-speech voices.",
    overview:
      "Reading long-form documents can be time-consuming. This cross-platform desktop application converts text-based PDFs into natural-sounding audiobooks so content can be listened to instead.",
    implementation:
      "The application extracts text from PDFs with PyMuPDF, applies text cleanup, and synthesizes audio in chunks using Microsoft Edge neural text-to-speech voices through Edge-TTS. Generation runs on multiple threads and is cancellable, with persistent settings and a built-in audio player built with Pygame, all wrapped in a Tkinter interface.",
    contribution: [
      "Implemented multithreaded text-to-speech execution.",
      "Used Git for version control, documentation, and debugging edge cases during text extraction.",
    ],
    github: "https://github.com/rutujkale/PDF-Audiobook-Generator",
    demo: null,
    visual: "audiobook",
  },
];
