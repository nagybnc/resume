export interface Skill {
    title: string;
    value: string;
    logo: string;
    logoColor: string;
}

export interface Respository {
    id: number;
    title: string;
    url: string;
    projectUrl: string;
    description: string;
    technology: string;
    technologyColor: string;
}

export interface Project {
    id: number;
    title: string;
    customer: string;
    data: {
        participation: string;
        technologies: string;
    };
}
export interface Experience {
    id: number;
    title: string;
    date: string;
    projects: Project[];
}

export const skills: Skill[] = [
    {
        title: "JavaScript",
        value: "JavaScript-323330",
        logo: "javascript",
        logoColor: "F7DF1E",
    },
    {
        title: "TypeScript",
        value: "TypeScript-3178C6",
        logo: "typescript",
        logoColor: "white",
    },
    {
        title: "HTML5",
        value: "HTML5-E34F26",
        logo: "html5",
        logoColor: "white",
    },
    {
        title: "CSS3",
        value: "CSS3-1572B6",
        logo: "css3",
        logoColor: "white",
    },
    {
        title: "React",
        value: "React-20232A",
        logo: "react",
        logoColor: "61DAFB",
    },
    {
        title: "Redux",
        value: "Redux-593D88",
        logo: "redux",
        logoColor: "white",
    },
    {
        title: "Material-UI",
        value: "Material_UI-0081CB",
        logo: "mui",
        logoColor: "61DAFB",
    },
    {
        title: "Tailwind",
        value: "tailwind_css-06B6D4",
        logo: "tailwind-css",
        logoColor: "white",
    },
    {
        title: "Jest",
        value: "Jest-323330",
        logo: "Jest",
        logoColor: "white",
    },
    {
        title: "Testing Library",
        value: "testing%20library-323330",
        logo: "testing-library",
        logoColor: "red",
    },
    {
        title: "Cypress",
        value: "cypress-E5E5E5",
        logo: "cypress",
        logoColor: "058a5e",
    },
    {
        title: "Git",
        value: "GIT-E44C30",
        logo: "git",
        logoColor: "white",
    },
    {
        title: "Webpack",
        value: "webpack-%238DD6F9",
        logo: "webpack",
        logoColor: "black",
    },
];

export const repositories: Respository[] = [
    {
        id: 0,
        title: "weather-app",
        url: "https://github.com/nagybnc/weather-app",
        projectUrl: "https://github.com/users/nagybnc/projects/2",
        description: "Weather status and forecast app, using React JS and OpenWeatherMap API ⛈",
        technology: "TypeScript",
        technologyColor: "#3178c6",
    },
    {
        id: 1,
        title: "JS-Senior-Developer-Growth",
        url: "https://github.com/nagybnc/JS-Senior-Developer-Growth",
        projectUrl: "",
        description: "Some great ways to ensure you grow and sustain your career as a JS developer 📈",
        technology: "CSS",
        technologyColor: "#563d7c",
    },

    {
        id: 2,
        title: "resume",
        url: "https://github.com/nagybnc/resume",
        projectUrl: "",
        description: "One page summary of my work experience 📜",
        technology: "TypeScript",
        technologyColor: "#3178c6",
    },
];

export const experiences: Experience[] = [
    {
        id: 0,
        title: "EPAM Systems - Frontend Developer",
        date: "(Aug 2017 – Presents)",
        projects: [
            {
                id: 0,
                title: "Project 1",
                customer: "Automotive (JIRA Plugin Development)",
                data: {
                    participation:
                        "Participated in project start from scratch. Played active part in Process of tasks clarification during sprint planning. Demonsrates self-management skills, works without supervision. Plays a mentor role for less experienced colleagues. Customer-facing role.",
                    technologies: "React, TypeScript, Redux, Material-UI, Cypress, Jest, Testing Library",
                },
            },
            {
                id: 1,
                title: "Project 2",
                customer: "Banking (Dashboard App)",
                data: {
                    participation: "Produced good-quality code, followed project style guide. Refactoring for UI changes. Unit testing.",
                    technologies: "ES6, React, Redux, Less, Webpack, Mocha, Enzyme, Chai",
                },
            },
        ],
    },
    {
        id: 1,
        title: "Netwerk Media - Web Developer",
        date: "(Aug 2016 – Aug 2017)",
        projects: [
            {
                id: 0,
                title: "Project 1",
                customer: "Digital Agency",
                data: {
                    participation: "Sitebuild Implement of small new features (incl. UI changes). Find parts of code which should be refactoring. Refactoring for UI changes. Bugfixes.",
                    technologies: "HTML5, JS, ES6, React Native, CSS3, jQuery, GSAP, PHP",
                },
            },
        ],
    },
];
