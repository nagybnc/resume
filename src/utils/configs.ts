export interface Skill {
  title: string;
  value: string;
  logo: string;
  logoColor: string;
}

export interface Repository {
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
  customer?: string;
  participation: string;
  technologies: string;
}
export interface Experience {
  id: number;
  title: string;
  date: string;
  projects: Project[];
}

export const skills: Skill[] = [
  {
    title: "React",
    value: "React-20232A",
    logo: "react",
    logoColor: "61DAFB",
  },
  {
    title: "Next.js",
    value: "Next-black",
    logo: "next.js",
    logoColor: "white",
  },
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
  {
    title: "Azure",
    value: "azure-%230072C6",
    logo: "microsoftazure",
    logoColor: "white",
  },
];

export const repositories: Repository[] = [
  {
    id: 0,
    title: "weather-app",
    url: "https://github.com/nagybnc/weather-app",
    projectUrl: "https://github.com/users/nagybnc/projects/2",
    description: "Weather status app, using React JS and OpenWeatherMap API ⛈",
    technology: "TypeScript",
    technologyColor: "#3178c6",
  },
  {
    id: 1,
    title: "ZooMap Explorer",
    url: "https://github.com/nagybnc/zoomap-explorer",
    projectUrl: "",
    description:
      "App for exploring your surroundings and discovering new zoos 🌎",
    technology: "React",
    technologyColor: "#61DAFB",
  },

  // {
  //     id: 2,
  //     title: "resume",
  //     url: "https://github.com/nagybnc/resume",
  //     projectUrl: "",
  //     description: "One page summary of my work experience 📜",
  //     technology: "TypeScript",
  //     technologyColor: "#3178c6",
  // },
];

export const experiences: Experience[] = [
  {
    id: 0,
    title: "Arcadia Astronautics - Lead Frontend Developer",
    date: "(March 2023 – Present)",
    projects: [
      {
        id: 0,
        title: "Project 1",
        participation:
          "I spearheaded the creation of a cutting-edge web platform designed to manage and optimize satellite propulsion systems. I assumed a multifaceted role that included not only leading the development team but also actively contributing to project delivery and management processes. Managed a team of 10 individuals across three countries.",
        technologies: "React, TypeScript, Next.JS, Cypress, Material-UI, AWS",
      },
    ],
  },
  {
    id: 1,
    title: "NN Group - Senior Frontend Developer",
    date: "(Nov 2022 – Jan 2023)",
    projects: [
      {
        id: 0,
        title: "Project 1",
        participation:
          "Find parts of code which should be refactored. Bugfixes. Encouraging innovative solutions in fastening delivery, suggesting new IT processes.",
        technologies: "React, TypeScript, Recoil, Material-UI, MS Azure",
      },
    ],
  },
  {
    id: 2,
    title: "EPAM Systems - Frontend Developer",
    date: "(Aug 2017 – Oct 2022)",
    projects: [
      {
        id: 0,
        title: "Project 1",
        participation:
          "Participated in project start from scratch. Played active part in Process of tasks clarification during sprint planning. Demonstrates self-management skills, works without supervision. Plays a mentor role for less experienced colleagues. Conducted interviews with potential candidates, assessing their skills fit with company culture.",
        technologies:
          "React, TypeScript, Redux, Material-UI, Cypress, Jest, Testing Library",
      },
    ],
  },
  {
    id: 3,
    title: "Netwerk Media - Frontend Developer",
    date: "(Aug 2016 – Aug 2017)",
    projects: [
      {
        id: 0,
        title: "Project 1",
        customer: "",
        participation:
          "Sitebuild Implement of small new features (incl. UI changes)",
        technologies: "HTML, CSS, Jquery, Wordpress, react-native",
      },
    ],
  },
];
