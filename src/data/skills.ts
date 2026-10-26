export interface SkillCategory {
  code: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    code: "01",
    title: "Programming Languages",
    skills: ["Python", "Java", "C#", "C++", "C", "SQL", "Kotlin", "TypeScript"],
  },
  {
    code: "02",
    title: "Core Competencies",
    skills: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Software Testing",
      "Debugging",
      "Machine Learning",
    ],
  },
  {
    code: "03",
    title: "Frameworks & Libraries",
    skills: [
      "scikit-learn",
      "XGBoost",
      "pandas",
      "NumPy",
      "FastAPI",
      "Flask",
      "Streamlit",
      "OpenCV",
      "YOLOv8",
      "Hadoop",
      "Next.js",
      "React",
      "Unity",
      "Tkinter",
      "Pygame",
      "PyMuPDF",
      "Edge-TTS",
    ],
  },
  {
    code: "04",
    title: "Data & Analysis",
    skills: [
      "PostgreSQL",
      "RFM Segmentation",
      "Cohort Analysis",
      "Model Calibration",
      "SHAP",
      "Multithreading",
      "Natural Language Processing",
      "Statistics",
      "Probability",
    ],
  },
  {
    code: "05",
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
];
