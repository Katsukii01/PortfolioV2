import {
    html,
    css,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    laravel,
    bootstrap,
    threejs,
    net,
    sql,
    python,
    gimp,
    office,
    unity,

    p0,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,

    zs1,
    carefour,
    ans,
} from "../assets";
import { 
    FaLightbulb, FaBolt, FaGithub, FaProjectDiagram, 
    FaUserCheck, FaCar, FaUsers, FaSyncAlt, FaHardHat 
  } from 'react-icons/fa';

export const NavLinks = [
    {
        id: "about",
        title:"About",
    },
    {
        id: "technologies",
        title:"Technologies",
    },
    {
        id: "skills",
        title:"Skills",
    },
    {
        id: "projects",
        title:"Projects",
    },
    {
        id: "experience",
        title:"Experience",
    },
    {
        id: "contact",
        title:"Contact",
    },

];

export const projects = [
  {
    name: "RecruitHelper – AI-Powered Recruitment Platform",
    description: "An AI-enhanced platform streamlining candidate matching and recruitment process.",
    image: p0,
    technologies: [
      { name: "React", color: "#61DBFB" },
      { name: "OpenAI API", color: "#10A37F" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "Python", color: "#3776AB" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Fast API", color: "#009688" },
      { name: "LLM", color: "#6B7280" }
    ],
    linkGithub: "https://github.com/Katsukii01/RecruitHelper",
    linkLiveSite: "https://recruit-helper.netlify.app/"
  },
  {
    name: "Next.js E-commerce Shop",
    description: "Fully functional online store built with Next.js and Stripe integration.",
    image: p1,
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "Stripe", color: "#635BFF" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Clerk", color: "#3F3F46" },
      { name: "MongoDB", color: "#47A248" }
    ],
    linkGithub: "https://github.com/Katsukii01/Shop_in_NextJs",
    linkLiveSite: ""
  },
  {
    name: "Laravel Streaming Service",
    description: "Platform for watching cartoons, including authentication and video hosting.",
    image: p2,
    technologies: [
      { name: "Laravel", color: "#FF2D20" },
      { name: "MySQL", color: "#00758F" },
      { name: "Bootstrap", color: "#7952B3" }
    ],
    linkGithub: "https://github.com/Katsukii01/Website_to_watch_cartoons_Laravel",
    linkLiveSite: ""
  },
  {
    name: "BMI Calculator – C# WinForms",
    description: "Simple desktop app to calculate BMI with real-time feedback and health ranges.",
    image: p3,
    technologies: [
      { name: "C#", color: "#9B4F96" },
      { name: ".NET", color: "#512BD4" },
      { name: "WinForms", color: "#2C4F7C" }
    ],
    linkGithub: "https://github.com/Katsukii01/BMI_Calculator_C-_WinForms",
    linkLiveSite: ""
  },
  {
    name: "Laravel Gaming Hub with Multiplayer",
    description: "Gaming portal with user accounts, real-time multiplayer games, and leaderboard.",
    image: p4,
    technologies: [
      { name: "Laravel", color: "#FF2D20" },
      { name: "WebSockets", color: "#7952B3" },
      { name: "MySQL", color: "#00758F" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Bootstrap", color: "#7952B3" }
    ],
    linkGithub: "https://github.com/Katsukii01/GameHub",
    linkLiveSite: ""
  },
  {
    name: "Android Remote Car Controller App",
    description: "Mobile app allowing remote control of a car prototype via Bluetooth.",
    image: p5,
    technologies: [
      { name: "Java", color: "#007396" },
      { name: "Android Studio", color: "#3DDC84" },
      { name: "Bluetooth", color: "#0082FC" },
      { name: "STM32 MCU", color: "#0F1E5A" }
    ],
    linkGithub: "https://github.com/Katsukii01/Car_controlled_with_app",
    linkLiveSite: ""
  },
  {
    name: "Python Image Person Recognizer",
    description: "ML-based tool for detecting and recognizing persons in static images.",
    image: p6,
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "OpenCV", color: "#5C3EE8" },
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "Json", color: "#292929" }
    ],
    linkGithub: "https://github.com/Katsukii01/Tracking_Persons_Python",
    linkLiveSite: ""
  },
   {
    name: "Anime Face Detector AI Model",
    description: "Neural network model for detecting anime faces in image datasets.",
    image: p7,
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "Keras", color: "#D00000" }
    ],
    linkGithub: "https://github.com/Katsukii01/AnimeFaces-AI-model",
    linkLiveSite: ""
  },
  {
    name: "ASP.NET Streaming Service",
    description: "Modern streaming site with ASP.NET backend and media playback features.",
    image: p8,
    technologies: [
      { name: "ASP.NET", color: "#512BD4" },
      { name: "C#", color: "#9B4F96" },
      { name: "Entity Framework", color: "#107C10" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "MySQL", color: "#00758F" }
    ],
    linkGithub: "https://github.com/Katsukii01/Anime-Hub-ASP-NET",
    linkLiveSite: ""
  },
  {
    name: "Escape Horror Game – Unity 3D",
    description: "Immersive 3D horror game with puzzles and atmospheric tension.",
    image: p9,
    technologies: [
      { name: "Unity3D", color: "#000000" },
      { name: "C#", color: "#9B4F96" },
      { name: "Blender", color: "#F5792A" },
      { name: "Gimp", color: "#545454" }
    ],
    linkGithub: "https://github.com/Katsukii01/EspcapeFromAnsTheGame",
    linkLiveSite: ""
  },
  {
    name: "ANS AI Demo – React + Three.js",
    description: "Interactive 3D AI demonstration using WebGL and voice recognition.",
    image: p10,
    technologies: [
      { name: "React", color: "#61DBFB" },
      { name: "Three.js", color: "#000000" },
      { name: "OpenAI API", color: "#10A37F" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "Fast API", color: "#009688" },
      { name: "Python", color: "#3776AB" }
    ],
    linkGithub: "https://github.com/Katsukii01/ANS-AI-DEMO",
    linkLiveSite: "https://ans-ai.netlify.app/"
  },
  {
    name: "3D Developer Portfolio",
    description: "Personal portfolio built in 3D with animations and project showcase.",
    image: p11,
    technologies: [
      { name: "React", color: "#61DBFB" },
      { name: "Three.js", color: "#000000" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "Tailwind CSS", color: "#38BDF8" }
    ],
    linkGithub: "https://github.com/Katsukii01/3D-Portfolio",
    linkLiveSite: ""
  },
  {
    name: "User Management System – Redux",
    description: "Admin panel to manage users with filters, pagination, and mock API.",
    image: p12,
    technologies: [
      { name: "React", color: "#61DBFB" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#38BDF8" }
    ],
    linkGithub: "https://github.com/Katsukii01/user-managment-raw-code",
    linkLiveSite: "https://katsukii01.github.io/user-management/"
  }
  ];
  

export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
        name: "sql",
        icon: sql,
    },
    {
        name: "python",
        icon: python,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "laravel",
      icon: laravel,
    },    
    {
      name: "mongodb",
      icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "net",
        icon: net,
    },
    {
        name: "gimp",
        icon: gimp,
    },
    {
        name: "office",
        icon: office,
    },
    {
        name: "unity",
        icon: unity,
    }
  ];

  export const skills = [
    {
      id: 1,
      desc: "PROBLEM-SOLVING",
      icon: FaLightbulb,
    },
    {
      id: 2,
      desc: "FAST LEARNER",
      icon: FaBolt,
    },
    {
      id: 3,
      desc: "FAMILIAR WITH GIT AND GITHUB",
      icon: FaGithub,
    },
    {
      id: 4,
      desc: "KNOW HOW OF PRINCE AND AGILE METODOLOGY",
      icon: FaProjectDiagram,
    },
    {
      id: 5,
      desc: "DEPENDABLE AND RESPONSIBLE",
      icon: FaUserCheck,
    },
    {
      id: 6,
      desc: "OWNS A DRIVERS LICENSE",
      icon: FaCar,
    },
    {
      id: 7,
      desc: "TEAMWORK",
      icon: FaUsers,
    },
    {
      id: 8,
      desc: "ADAPTABILITY",
      icon: FaSyncAlt,
    },
    {
      id: 9,
      desc: "HARDWORKING",
      icon: FaHardHat,
    }
  ];

export const experience = [
    {
        name: "ZS nr1 Kwidzyn",
        years: "2017 - 2021",
        position: "Student",
        desc: "Studied computer science with a focus on technical fundamentals.",
        type: "Education",
        logo: zs1
    },
    {
        name: "ANS Elbląg",
        years: "2021 - 2025",
        position: "Student",
        desc: "Currently pursuing a degree in computer science, transitioning from a technical diploma to engineering.",
        type: "Education",
        logo: ans
    },
    {
        name: "Carrefour",
        years: "11.2020 - 04.2021",
        position: "Merchandiser",
        desc: "Gained valuable experience in a real work environment, developing a sense of responsibility and practical skills.",
        type: "Side job",
        logo:  carefour 
    },
    {
        name: "ANS Elbląg",
        years: "08.2024 - 02.2025",
        position: "Intern front-end developer",
        desc: "Focused on front-end development, gaining hands-on experience and working to improve and develop new skills in this area.",
        type: "Internship",
        logo: ans
    }
]

