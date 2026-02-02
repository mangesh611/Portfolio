
import { Experience, Project, Education, SkillGroup, Certification, Volunteering } from './types';

export const PERSONAL_INFO = {
  name: "Mangesh Upadhyay",
  title: "Backend Developer",
  email: "mangeshupy@gmail.com",
  phone: "9372900073",
  location: "Malad, Mumbai",
  links: {
    linkedin: "https://www.linkedin.com/in/mangesh-upadhyay-426990215/",
    github: "https://github.com/mangesh611"
  },
  summary: "Versatile and motivated Java and NodeJS developer with a solid foundation in object-oriented programming and a passion for writing clean, efficient code. Proficient in Java, NodeJS, with hands-on experience building small-scale applications. Eager to contribute to projects and thrive in collaborative, fast-paced development teams."
};

export const EXPERIENCES: Experience[] = [
  /*{
    company: "Goldenmace IT Solution",
    role: "Frontend Developer",
    period: "January 2024 – Present",
    projects: [
      {
        title: "Hope UI Pro",
        description: "An advanced, feature-rich dashboard & frontend template designed to offer a seamless user experience across various web applications.",
        links: [{ label: "Link", url: "#" }]
      },
      {
        title: "Streamit",
        description: "A Netflix-inspired video streaming platform built with a modern video player and dynamic UI. Provides customizable layouts, categories, and playback features to deliver an engaging OTT-like experience.",
        links: [{ label: "Dashboard", url: "#" }, { label: "Template", url: "#" }]
      },
      {
        title: "Ner Diamond",
        description: "Designed and developed the entire frontend incorporating custom animations and smooth transitions. Assists diamond buyers in finding the right diamond with precise pricing.",
        links: [{ label: "Link", url: "#" }]
      },
      {
        title: "Realista",
        description: "Developed the complete frontend UI, integrating Google Maps API for property location visualization. Enabled intuitive search and filtering for house seekers.",
        links: [{ label: "Link", url: "#" }]
      }
    ]
  },*/
  {
    company: "Alwrite",
    role: "Backend Developer Trainee",
    period: "January 2026 – Present",
    projects: [
      {
        title: "Lockton",
        description: "Handled backend tasks and system operations to support internal workflows.",
        //links: [{ label: "Dashboard", url: "#" }]
        image:"",
      },
      {
        title: "Universal Sompo",
        description: "Worked on backend systems and operational tasks ensuring smooth platform processes.",
        image:""
        //links: [{ label: "Link", url: "#" }]
      }
    ]
  }
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    title: "Servify",
    description: "Servicer is a comprehensive service booking platform that enables users to find and book nearby service providers. The system automatically notifies available providers within the user's vicinity, creating a seamless on-demand service experience.",
    tech: ["Java","Springboot", "Spring Security", "RestAPI","MySQL"],
    image: "/Servify.png",
    links: [{ label: "Link", url: "https://github.com/mangesh611/Servify" }]
  },
  {
    title: "Expense Tracker",
    description: "A full-featured backend API for tracking personal expenses and incomes. Built with Spring Boot and MySQL, this application supports complete CRUD operations with clean architecture and separation of concerns.",
    tech: ["java", "Springboot", "MySQL", "Maven", "RestAPI"],
    image: "/ExpenseTracker.png",
    links: [{ label: "Link", url: "https://github.com/mangesh611/ExpenseTracker" }]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Backend",
    items: ["JavaScript","NodeJS", "Java", "Springboot", "Spring Security", "RestAPI", "Pyhton"]
  },
  {
    category: "DB",
    items: ["MySQL" , "MongoDB"]
  },
  /*{
    category: "Design & Styling",
    items: ["HTML", "CSS", "SCSS", "Bootstrap", "HTML Prototype"]
  },*/
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "Intellij IDE","VS Code", "Npm", "Webpack"]
  },
  /*{
    category: "Project Management",
    items: ["Agile Methodologies", "Project Planning"]
  }*/
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering – Computer Science",
    institution: "Universal College of Engineering - Mumbai University",
    period: "2021 – 2025",
    stats: "Avg. CGPA: 7.14"
  },
  {
    degree: "HSC Science – (General Science)",
    institution: "Saraf Junior College - Mumbai University",
    period: "2019 – 2021",
    stats: "75.6%"
  },
  {
    degree: "SSC Boards",
    institution: "Mother Teresa High School – Maharashtra Board",
    period: "2018 – 2019",
    stats: "68.2%"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "HTML Tutorial | W3School", date: "July, 2023" },
  { name: "Web Developer course", date: "January, 2024" },
  { name: "Beginning of JS", date: "September, 2024" }
];

export const VOLUNTEERING: Volunteering[] = [
  {
    organization: "BHUMI NGO",
    role: "City Lead",
    period: "August 2022 - Present",
    description: "Focus on human needs and environmental sustainability through projects like Bird feeders and Flowerpot making. Role in organizing Blood donation camps."
  },
  {
    organization: "Unnati Balgram NGO",
    role: "Host | Volunteering | Team Leading",
    period: "October 2024 - Present",
    description: "Organized events like Bala Painting and Beach Cleanups. Mentored underprivileged students academically and personally."
  },
  {
    organization: "Computer Society of India (CSI)",
    role: "Community Volunteer",
    period: "March 2022 - 2024",
    description: "Dedicated to advancing technological knowledge and fostering collaborative learning. Provided guidance through career-focused lectures."
  }
];

export const HOBBIES = [
  "Building side projects – APIs, automation scripts, or small tools",
  "Debugging & performance tuning"
];

export const LANGUAGES = ["English", "Hindi", "Marathi", ];
