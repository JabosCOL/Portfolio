import { CodeSquare, HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Download, Github, ArrowLeft, ArrowRight, Eye } from "lucide-react";

export const iconsHeader = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/david-bolivar-a6b590228/",
    },
    {
        id: 2,
        logo: <Download size={30} strokeWidth={1} />,
        src: "assets/curriculum.pdf",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    }
];

export const skills = [
    {
        id: 1,
        url: "skills-1.svg"
    },
    {
        id: 2,
        url: "skills-2.svg"
    },
    {
        id: 3,
        url: "skills-3.svg"
    },
    {
        id: 4,
        url: "skills-4.svg"
    },
    {
        id: 5,
        url: "skills-5.svg"
    },
    {
        id: 6,
        url: "skills-6.svg"
    },
    {
        id: 7,
        url: "skills-7.svg"
    },
    {
        id: 8,
        url: "skills-8.svg"
    },
    {
        id: 9,
        url: "skills-9.svg"
    }
]

export const timeLime = [
    {
        id: 1,
        title: "Full-Stack Developer",
        subtitle: "BINANCE",
        description: "Develop top UI-UX features alongside with Next.js, React.js, Redux & Tailwind \ SASS for the front-end and PostgreSQL, Node & Express at the back-end. I always fulfill the client's requirements and specifications, while identifying chances to optimize and improve code quality.",
        date: "Jul 2024 Jul 2022",
    },
    {
        id: 2,
        title: "Cultural and language immersion",
        subtitle: "ILSC Education Group - Brisbane AU",
        description: "Became fluent in English by residing and studying in Australia for approximately 8 months.",
        date: "Feb 2024 Jul 2023",
    },
    {
        id: 3,
        title: "Web Developer",
        subtitle: "Andes University",
        description: "Learn required technical skills (JavaScript, CSS, PHP, and Drupal) in record time thanks to the university's sponsorship. This helped me to quickly integrate into the development team. Moreover, these skills allowed me to contribute as a team player by assisting and guiding new members of our team. As a result, the overall delivery of approved tickets increased.",
        date: "Jul 2022 Sep 2021",
    },
    {
        id: 4,
        title: "Higher Diploma - Software Engineering",
        subtitle: "SENA Institute",
        description: "Became an enthusiast software engineer, focusing on databases and web project planning. Thanks to my good grades and engagement in the tech industry, I was called to join Microsoft's AZ-900 apprenticeship program for cloud services with Azure, and soon after, I encouraged myself to participate in the national competition SenaSoft in the category of web development, where I learned to develop and manage a project in a practical setting along with my teammates. Moreover, I was contacted by the Andes University to begin my career journey.",
        date: "Jun 2022 Mar 2019",
    },
]

export const counter = [
    {
        id: 0,
        endCounter: 3,
        text: "Years of experience",
    },
    {
        id: 1,
        endCounter: 20,
        text: "Finished projects",
    },
    {
        id: 2,
        endCounter: 1,
        text: "National Competition",
    },
];

export const projects = [
    {
        id: 1,
        category: 1,
        title: "Kiosk App",
        description: [
            "Global state management (Redux)",
            "SWR data revalidation",
            "Prisma ORM (object-oriented paradigm)",
            "Server actions",
            "API and Form data validation (Zod)",
            "App router",
            "Server and client composition patterns",
            "Next cloudinary library for image uploading",
            "Pagination and Dynamic routing"
        ],
        stack: ["Next 14, Typescript, Prisma, TailwindCSS"],
        image: "/image-14.jpg",
        urlGithub: "https://github.com/JabosCOL/Kiosk-next",
        urlDemo: "https://kiosk-next-8gajaobd4-jaboscols-projects.vercel.app/",
    },
    {
        id: 3,
        category: 1,
        title: "Cocktail App",
        description: [
            "React router DOM",
            "Lazy and Suspense to improve routing performance",
            "Theming of Tailwind",
            "Zustand - Slice pattern",
            "Axios",
            "API and Form data validation (Zod)",
            "Headless UI (Scalable UI components)"
        ],
        stack: ["React, Typescript, TailwindCSS"],
        image: "/image-12.jpg",
        urlGithub: "https://github.com/JabosCOL/Drinks-api",
        urlDemo: "https://astonishing-valkyrie-677dc5.netlify.app/",
    },
    {
        id: 4,
        category: 1,
        title: "Weather App",
        description: [
            "Axios (Data fetching)",
            "Api keys - Env variables",
            "Valibot (Data validation)",
            "CSS Modules",
            "Framer motion",
            "Hooks - Custom hooks",
        ],
        stack: ["React, Typescript, CSS Modules, APIs"],
        image: "/image-10.jpg",
        urlGithub: "https://github.com/JabosCOL/Weather-api",
        urlDemo: "https://regal-taiyaki-fb2d22.netlify.app/",
    },
    {
        id: 5,
        category: 1,
        title: "Crypto App",
        description: [
            "Axios (Data fetching)",
            "Zustand",
            "Zod  (Data validation)",
            "Hooks - Custom hooks",
        ],
        stack: ["React, Typescript, TailwindCSS"],
        image: "/image-11.jpg",
        urlGithub: "https://github.com/JabosCOL/Crypto-api",
        urlDemo: "https://statuesque-sunburst-a04d3f.netlify.app/",
    },
    {
        id: 6,
        category: 1,
        title: "Budget Planner",
        description: [
            "ContextAPI",
            "Reducer",
            "Headless UI",
            "Tailwind directives",
            "States",
            "Hooks - Custom hooks",
            "Helpers",
            "localStorage",
        ],
        stack: ["React, Typescript, TailwindCSS"],
        image: "/image-9.jpg",
        urlGithub: "https://github.com/JabosCOL/Budget-planner",
        urlDemo: "https://tubular-custard-93fc37.netlify.app/",
    },
    {
        id: 7,
        category: 1,
        title: "Patient Manager",
        description: [
            "Zustand",
            "React Hook Form",
            "States",
            "Hooks",
            "localStorage",
        ],
        stack: ["React, Typescript, TailwindCSS"],
        image: "/image-8.jpg",
        urlGithub: "https://github.com/JabosCOL/Patient-manager",
        urlDemo: "https://glowing-chaja-312e52.netlify.app/",
    },
    {
        id: 8,
        category: 1,
        title: "Calories tracker",
        description: [
            "ContextAPI",
            "Reducer",
            "States",
            "Hooks - Custom hooks",
            "Form handling",
            "localStorage",
        ],
        stack: ["React, Typescript, TailwindCSS"],
        image: "/image-6.jpg",
        urlGithub: "https://github.com/JabosCOL/Calories-tracker",
        urlDemo: "https://meek-rolypoly-efdf8b.netlify.app/",
    },
    {
        id: 9,
        category: 1,
        title: "Tip calculator",
        description: [
            "Reducer",
            "State",
            "Hooks - Custom hooks",
            "Generics",
            "Helpers",
        ],
        stack: ["React, Typescript, Tailwind"],
        image: "/image-13.jpg",
        urlGithub: "https://github.com/JabosCOL/Tip-calculator",
        urlDemo: "https://cozy-marigold-5be746.netlify.app/",
    },
    {
        id: 10,
        category: 2,
        title: "Delivery App",
        description: [
            "SASS (mixins - variables - functions - modularity)",
            "GULP (minification - image optimization - mapping)",
            "SMACSS",
            "BEM",
            "Lazy loading",
            "Positions",
            "Custom properties",
            "Utilities",
            "Responsive design",
            "CSS animations"
        ],
        stack: ["HTML, SASS"],
        image: "/image-4.jpg",
        urlGithub: "https://github.com/JabosCOL/DeliveryApp",
        urlDemo: "https://sunny-manatee-eb8c99.netlify.app/",
    },
    {
        id: 11,
        category: 2,
        title: "CoffeeShop",
        description: [
            "SASS (mixins - variables - functions - modularity)",
            "GULP (minification - image optimization - mapping)",
            "SMACSS",
            "Positions",
            "Custom properties",
            "Utilities",
            "Responsive design"
        ],
        stack: ["HTML, SASS"],
        image: "/image-3.jpg",
        urlGithub: "https://github.com/JabosCOL/CoffeeShop",
        urlDemo: "https://lighthearted-mousse-df884f.netlify.app/",
    },
    {
        id: 12,
        category: 2,
        title: "Nucleus",
        description: [
            "BEM",
            "SMACSS",
            "Positions",
            "Responsive design",
            "Grid - Flexbox",
            "CSS animations",
            "Custom properties",
            "Utilities",
            "Relative length units"
        ],
        stack: ["HTML, CSS"],
        image: "/image-2.jpg",
        urlGithub: "https://github.com/JabosCOL/Nucleus",
        urlDemo: "https://magical-kleicha-a82ffe.netlify.app/",
    },
    {
        id: 13,
        category: 2,
        title: "TechPro",
        description: [
            "Responsive design",
            "Grid - Flexbox",
            "CSS animations",
            "CSS gradients",
            "Avif, Webp compatibility",
            "Custom properties",
            "Pseudo-classes",
            "Relative length units"
        ],
        stack: ["HTML, CSS"],
        image: "/image-1.jpg",
        urlGithub: "https://github.com/JabosCOL/TechPRO",
        urlDemo: "https://sage-squirrel-e06c3e.netlify.app/",
    },
    {
        id: 14,
        category: 2,
        title: "Architecture",
        description: [
            "Responsive design",
            "Grid - Flexbox",
            "CSS animations",
            "Custom properties",
            "Pseudo-classes (before - after)",
            "Relative length units"
        ],
        stack: ["HTML, CSS"],
        image: "/image-5.jpg",
        urlGithub: "https://github.com/JabosCOL/Architecture",
        urlDemo: "https://regal-valkyrie-06987b.netlify.app/",
    }
];