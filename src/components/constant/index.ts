import { IMAGES } from "../../../public";
import { routes } from "../routes/route";
import { ExperienceData, Project, Skill } from "../types/type";

export const skillsData: Skill[] = [
    // Frontend (5 skills)
    {
        name: 'React',
        level: 92,
        icon: IMAGES.REACT_JS_IMAGE,
        category: 'frontend',
        color: '#61DAFB',
        description: 'Building interactive user interfaces with React hooks and modern patterns'
    },
    {
        name: 'Next.js',
        level: 98,
        icon: IMAGES.NEXT_JS_IMAGE,
        category: 'frontend',
        color: '#000000',
        description: 'Full-stack React framework with SSR, SSG, and API routes'
    },
    {
        name: 'TypeScript',
        level: 85,
        icon: IMAGES.TYPESCRIPT_IMAGE,
        category: 'frontend',
        color: '#3178C6',
        description: 'Type-safe JavaScript development with advanced features'
    },
    {
        name: 'Tailwind CSS',
        level: 90,
        icon: IMAGES.TAILWIND_CSS_IMAGE,
        category: 'frontend',
        color: '#06B6D4',
        description: 'Utility-first CSS framework for rapid UI development'
    },
    {
        name: 'JavaScript',
        level: 92,
        icon: IMAGES.JAVASCRIPT_IMAGE,
        category: 'frontend',
        color: '#F7DF1E',
        description: 'Modern JavaScript with ES6+ features and async programming'
    },

    // Backend (5 skills)
    {
        name: 'Node.js',
        level: 85,
        icon: IMAGES.NODE_JS_IMAGE,
        category: 'backend',
        color: '#339933',
        description: 'Server-side JavaScript runtime with event-driven architecture'
    },
    {
        name: 'Express.js',
        level: 82,
        icon: IMAGES.EXPRESS_JS_IMAGE,
        category: 'backend',
        color: '#000000',
        description: 'Fast, unopinionated web framework for Node.js'
    },
    {
        name: 'MongoDB',
        level: 78,
        icon: IMAGES.MONGODB_IMAGE,
        category: 'backend',
        color: '#47A248',
        description: 'NoSQL database with flexible document storage'
    },
    {
        name: 'Firebase',
        level: 80,
        icon: IMAGES.FIREBASE_IMAGE,
        category: 'backend',
        color: '#FFCA28',
        description: 'Backend-as-a-Service with real-time database and authentication'
    },
    {
        name: 'REST APIs',
        level: 85,
        icon: IMAGES.REST_API_IMAGE,
        category: 'backend',
        color: '#FF6B6B',
        description: 'Designing and implementing RESTful API endpoints'
    },
];


export const socials = [
    { name: 'github', url: 'https://github.com/MuhammadUsmanRana' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-usman-280321268/' },
    { name: 'x', url: 'https://x.com/Muhamma69588482' },
    { name: 'whatsapp', url: 'https://wa.me/923212494291' }
];


export const experienceData: ExperienceData[] = [
    {
        company: "Devontix Solutions",
        role: "Mern Stack Developer",
        duration: "Oct 2024 - Present",
        location: "On Site",
        description: [
            "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js",
            "Implemented RESTful APIs and integrated them with frontend interfaces",
            "Collaborated with cross-functional teams to deliver high-quality software solutions",
            "Optimized application performance and improved user experience"
        ],
        technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "Tailwind CSS", "styled-components"],
        logo: IMAGES.DEVONTIX_LOGO,
    },
    {
        company: "Genius Mind Zone",
        role: "Mern Stack Developer",
        duration: "Apr 2024 - Oct 2024",
        location: "On Site",
        description: [
            "Built scalable backend services using Node.js and Express.js",
            "Designed and implemented database schemas using MongoDB",
            "Created responsive frontend components with React and modern CSS",
            "Participated in code reviews and maintained code quality standards"
        ],
        technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "CSS3"],
        logo: IMAGES.GENIUS_MIND_LOGO,
    },
    {
        company: "DevString",
        role: "Frontend Developer",
        duration: "Mar 2023 - Feb 2024",
        location: "On Site",
        description: [
            "Developed responsive web applications using React and TypeScript",
            "Implemented modern UI/UX designs with attention to accessibility",
            "Worked with REST APIs and state management solutions",
            "Contributed to team knowledge sharing and documentation"
        ],
        technologies: ["Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Git"],
        logo: IMAGES.DEVSTRING_LOGO,
    },
];

export const navItems = [
    { label: 'Home', href: routes.home },
    { label: 'About', href: routes.about },
    { label: 'Projects', href: routes.projects },
    { label: 'Skills', href: routes.skills },
    { label: 'Experience', href: routes.experience },
    { label: 'Contact', href: routes.contact },
];

export const contactInfo = [
    {
        label: 'Email',
        value: 'ranausman5939@gmail.com',
        href: 'mailto:ranausman5939@gmail.com'
    },
    {
        label: 'Phone',
        value: '+92 (321) 2494291',
        href: 'tel:+923212494291'
    },
    {
        label: 'Location',
        value: 'Faisalabad, Pakistan',
        href: null
    }
];

export const dynamicTexts = ["MERN Stack Developer", "Next.js Developer", "React.js Developer"];

export const projectsData: Project[] = [
    {
        id: 1,
        title: "E-commerce Dashboard",
        description: "A modern dashboard for e-commerce stores with real-time analytics, inventory management, and order processing.",
        image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React", "TypeScript", "Tailwind"],
        liveUrl: "https://example.com/project1",
        githubUrl: "https://github.com/johndoe/project1",
        featured: true
    },
    {
        id: 2,
        title: "Weather App",
        description: "A beautiful weather application with 7-day forecasts, location search, and customizable units of measurement.",
        image: "https://images.pexels.com/photos/1072848/pexels-photo-1072848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React", "APIs", "CSS"],
        liveUrl: "https://example.com/project2",
        githubUrl: "https://github.com/johndoe/project2"
    },
    {
        id: 3,
        title: "Task Management System",
        description: "A collaborative task management tool with real-time updates, task assignment, and progress tracking.",
        image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React", "Firebase", "Tailwind"],
        liveUrl: "https://example.com/project3",
        githubUrl: "https://github.com/johndoe/project3"
    },
    {
        id: 4,
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout plans, progress visualization, and goal setting.",
        image: "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React Native", "TypeScript", "Charts"],
        liveUrl: "https://example.com/project4",
        githubUrl: "https://github.com/johndoe/project4"
    },
    {
        id: 5,
        title: "Recipe Finder",
        description: "A recipe discovery app with search filters, nutrition information, and personalized recommendations.",
        image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React", "Redux", "API"],
        liveUrl: "https://example.com/project5",
        githubUrl: "https://github.com/johndoe/project5"
    },
    {
        id: 6,
        title: "Virtual Classroom",
        description: "An interactive virtual classroom with video conferencing, whiteboard, and resource sharing capabilities.",
        image: "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React", "WebRTC", "Firebase"],
        liveUrl: "https://example.com/project6",
        githubUrl: "https://github.com/johndoe/project6"
    }
];

