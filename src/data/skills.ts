export interface SkillCategory {
  code: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    code: "01",
    title: "Programming Languages",
    skills: ["Python", "Java", "C#", "C++", "C", "SQL", "Kotlin"],
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
    ],
  },
  {
    code: "03",
    title: "Frameworks & Libraries",
    skills: ["Unity", "Tkinter", "Pygame", "PyMuPDF", "Edge-TTS", "YOLO", "Hadoop"],
  },
  {
    code: "04",
    title: "Other Areas",
    skills: ["Multithreading", "Natural Language Processing", "Statistics", "Probability"],
  },
  {
    code: "05",
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
];
