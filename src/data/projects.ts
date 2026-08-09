export type VisualVariant = "traffic" | "disaster" | "audiobook";

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
    id: "smart-traffic",
    index: "01",
    title: "Smart Traffic Management System",
    year: "2024",
    category: "Computer Vision",
    technologies: ["Python", "YOLO", "Hadoop", "Web Development"],
    description:
      "Designed and implemented a real-world video processing pipeline using Python and YOLO to monitor and manage traffic flow in real time.",
    overview:
      "Traffic flow needs to be monitored and managed in real time. This project applies a Python and YOLO-based video processing pipeline to address that need.",
    implementation:
      "The pipeline was built around YOLO for object detection over video frames, with Python handling the processing flow. Hadoop was integrated for scalable data processing, optimizing backend performance and ensuring reliable data ingestion.",
    contribution: [
      "Designed and implemented the real-time video processing pipeline using Python and YOLO.",
      "Integrated Hadoop to scale data processing and improve backend performance.",
    ],
    github: null,
    demo: null,
    visual: "traffic",
  },
  {
    id: "disaster-preparedness",
    index: "02",
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
    index: "03",
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
