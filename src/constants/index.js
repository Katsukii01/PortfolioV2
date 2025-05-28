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
      technologies: ["React", "OpenAI API", "Tailwind CSS", "Python", "Firebase", "Fast API", "LLM"],
      linkGithub: "https://github.com/Katsukii01/Shop_in_NextJs",
      linkLiveSite: "https://recruit-helper.netlify.app/"
    },
    {
      name: "Next.js E-commerce Shop",
      description: "Fully functional online store built with Next.js and Stripe integration.",
      image: p1,
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "TypeScript", "Clerk", "MongoDB"],
      linkGithub: "https://github.com/Katsukii01/Shop_in_NextJs",
      linkLiveSite: ""
    },
    {
      name: "Laravel Streaming Service",
      description: "Platform for watching cartoons, including authentication and video hosting.",
      image: p2,
      technologies: ["Laravel","MySQL", "Bootstrap"],
      linkGithub: "https://github.com/Katsukii01/Website_to_watch_cartoons_Laravel",
      linkLiveSite: ""
    },
    {
      name: "BMI Calculator – C# WinForms",
      description: "Simple desktop app to calculate BMI with real-time feedback and health ranges.",
      image: p3,
      technologies: ["C#", ".NET", "WinForms"],
      linkGithub: "https://github.com/Katsukii01/BMI_Calculator_C-_WinForms",
      linkLiveSite: ""
    },
    {
      name: "Laravel Gaming Hub with Multiplayer",
      description: "Gaming portal with user accounts, real-time multiplayer games, and leaderboard.",
      image: p4,
      technologies: ["Laravel", "WebSockets", "MySQL", "Firebase", "Bootstrap"],
      linkGithub: "https://github.com/Katsukii01/GameHub",
      linkLiveSite: ""
    },
    {
      name: "Android Remote Car Controller App",
      description: "Mobile app allowing remote control of a car prototype via Bluetooth.",
      image: p5,
      technologies: ["Java", "Android Studio", "Bluetooth", "STM32 MCU",],
      linkGithub: "https://github.com/Katsukii01/Car_controlled_with_app",
      linkLiveSite: ""
    },
    {
      name: "Python Image Person Recognizer",
      description: "ML-based tool for detecting and recognizing persons in static images.",
      image: p6,
      technologies: ["Python", "OpenCV", "TensorFlow", "Json"],
      linkGithub: "https://github.com/Katsukii01/Tracking_Persons_Python",
      linkLiveSite: ""
    },
    {
      name: "Anime Face Detector AI Model",
      description: "Neural network model for detecting anime faces in image datasets.",
      image: p7,
      technologies: ["Python", "TensorFlow", "Keras"],
      linkGithub: "https://github.com/Katsukii01/AnimeFaces-AI-model",
      linkLiveSite: ""
    },
    {
      name: "ASP.NET Streaming Service",
      description: "Modern streaming site with ASP.NET backend and media playback features.",
      image: p8,
      technologies: ["ASP.NET", "C#", "Entity Framework", "Bootstrap", "MySQL"],
      linkGithub: "https://github.com/Katsukii01/Anime-Hub-ASP-NET",
      linkLiveSite: ""
    },
    {
      name: "Escape Horror Game – Unity 3D",
      description: "Immersive 3D horror game with puzzles and atmospheric tension.",
      image: p9,
      technologies: ["Unity3D", "C#", "Blender", "Gimp"],
      linkGithub: "https://github.com/Katsukii01/EspcapeFromAnsTheGame",
      linkLiveSite: ""
    },
    {
      name: "ANS AI Demo – React + Three.js",
      description: "Interactive 3D AI demonstration using WebGL and voice recognition.",
      image: p10,
      technologies: ["React", "Three.js", "OpenAI API", "Tailwind CSS", "Fast API", "Python"],
      linkGithub: "https://github.com/Katsukii01/ANS-AI-DEMO",
      linkLiveSite: "https://ans-ai.netlify.app/"
    },
    {
      name: "3D Developer Portfolio",
      description: "Personal portfolio built in 3D with animations and project showcase.",
      image: p11,
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      linkGithub: "https://github.com/Katsukii01/3D-Portfolio",
      linkLiveSite: ""
    },
    {
      name: "User Management System – Redux",
      description: "Admin panel to manage users with filters, pagination, and mock API.",
      image: p12,
      technologies: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
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

