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
  // React ecosystem
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
    title: "Next.js",
    value: "Next-black",
    logo: "next.js",
    logoColor: "white",
  },
  // Languages
  {
    title: "TypeScript",
    value: "TypeScript-3178C6",
    logo: "typescript",
    logoColor: "white",
  },
  {
    title: "JavaScript",
    value: "JavaScript-323330",
    logo: "javascript",
    logoColor: "F7DF1E",
  },
  // Python ecosystem
  {
    title: "Python",
    value: "Python-3776AB",
    logo: "python",
    logoColor: "white",
  },
  {
    title: "FastAPI",
    value: "FastAPI-009688",
    logo: "fastapi",
    logoColor: "white",
  },
  // Cloud & DevOps
  {
    title: "AWS",
    value: "AWS-FF9900",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik03LjY0MSAxMC4zNTdjMCAuNzEuMzU0IDEuMDMxLjM1NCAxLjIyNWMwIC4wOTYtLjAzMi4xMjgtLjEyOC4xOTNsLS40Mi4yNThjLS4wMzIuMDMyLS4xMjguMDMyLS4xOTMuMDMyYzAgMC0uMjU3LjAzMi0uNjQ0LS44MDZjLS40NTEuNTgtMS4xOTIuOTY3LTEuOTMzLjkwMmMtLjQ4My4wMzMtMS44NjktLjI1Ny0xLjgwNC0xLjc3MWMtLjAzMi0xLjE5MyAxLjAzLTEuOTM0IDIuMjIzLTEuODdjLjIyNSAwIC42NzYgMCAxLjQ1LjE5NHYtLjQ4M2MuMDk2LS44MDYtLjQ1MS0xLjQ1LTEuNDE4LTEuMzUzYy0uMDMyIDAtLjU4IDAtMS40NS4zMjJjLS4yMjUuMTI5LS4yMjUuMTI5LS4zMjIuMTI5Yy0uMjI1IDAtLjEyOS0uNjQ1LS4wOTctLjc3M2MuMTMtLjE5NCAxLjEyOC0uNTQ4IDIuMDMtLjU0OGMuNjQ0LS4wMzIgMS4yNTcuMTI5IDEuNzcyLjU0OGMuNDE5LjQ1LjU4IDEuMDMuNTQ4IDEuNjQzem0tMi43MzggMWMuOTk4IDAgMS40NS0uNjQ1IDEuNTQ2LS45NjdjLjAzMi0uMzIzLjAzMi0uNDg0LjAzMi0uODdjLS4zMjItLjAzMy0uNzczLS4xMy0xLjI1Ni0uMTNjLS40NTEtLjAzMS0xLjM1My4xOTQtMS4zMjEgMWMuMDY0LjU4LjQxOS45OTguOTk5Ljk2Nm01LjM0OC43MDhjLS4yNTguMDMyLS4zNTUtLjEyOS0uNDItLjMyMkw4LjI4NiA2LjYyYy0uMDMyLS4wOTctLjAzMi0uMTkzLS4wMzItLjI1OGMwLS4wOTYuMDMyLS4xMjkuMTI5LS4xMjloLjY3N2MuMjU3LS4wMzIuMzU0LjE5NC40MTguMzIzbDEuMTI4IDQuMzgxbDEuMDYzLTQuMzgxYy4wMzMtLjA5Ny4wOTctLjM1NS40Mi0uMzIzaC41NDdjLjAzMiAwIC4zNTQgMCAuNDE5LjMyM2wxLjAzIDQuNDQ2bDEuMTI4LTQuNDQ2YzAtLjAzMy4wOTctLjM1NS40MTktLjMyM2guNjQ0Yy4wMzMgMCAuMTk0LS4wMzIuMTMuMjU4YzAgLjAzMi4wOTYtLjM1NC0xLjY0NCA1LjI4NGMtLjAzMi4xOTMtLjEyOS4zNTQtLjQxOS4zMjJoLS41OGMtLjM1NC4wMzItLjQxOC0uMzIyLS40MTgtLjM1NEwxMi4yMTYgNy40OWwtMS4wMzEgNC4yNTNjMCAuMDMyLS4wMzIuMzU0LS40MTkuMzU0aC0uNDgzdi0uMDMyem04LjUwNS4xOTNjLS4xOTMgMC0xLjAzIDAtMS43NzItLjM1NGMtLjEyOS0uMDMzLS4yNTgtLjIyNi0uMjU4LS4zNTV2LS4zNTRjMC0uMjU4LjE5NC0uMjI2LjI1OC0uMTkzYy4zMjIuMTI4LjQ4My4yMjUuOTAyLjMyMmMxLjEyOC4yNTggMS42NDMtLjAzMiAxLjc3Mi0uMTI5Yy40Mi0uMjU4LjQ1MS0uODA2LjEzLTEuMDk1Yy0uMzIzLS4yNTgtLjQ1Mi0uMjU4LTEuNjQ0LS42NDVjLS4wOTctLjA2NC0xLjMyLS40NS0xLjMyLTEuNjQzYy0uMDMzLS44Ny43NzItMS43NzIgMi4xNTgtMS43NzJjLjQxOSAwIDEuNDUuMTI5IDEuNzcyLjQ4M2MuMDMyLjAzMy4wMzIuMTMuMDMyLjIyNnYuMzIyYzAgLjEyOS0uMDMyLjIyNi0uMTI5LjIyNmMtLjI1OC0uMDMzLS42NDQtLjM1NS0xLjU0Ni0uMzU1Yy0uMjI2IDAtMS4yNTcuMDMyLTEuMTkyLjc3M2MwIC41OC44Ny44MDYuOTY2Ljg3YzEuMTI4LjM1NSAxLjU0Ni40MiAxLjkzMy45NjdjLjU0OC42NzYuMjU4IDEuNDgyLjEyOSAxLjcwN2MtLjYxMiAxLjEyOC0yLjEyNiAxLTIuMTkgMW0xLjI4OSAzLjI4NmMtMi4xNTkgMS41OC01LjM0OCAyLjQ0OS04LjAyMiAyLjQ0OUExNC40MyAxNC40MyAwIDAgMSAyLjEgMTQuMjU2Yy0uMjI2LS4xOTQtLjAzMy0uNDUxLjIyNS0uMjU4YTIwLjIgMjAuMiAwIDAgMCA5Ljg1OSAyLjU3N2MyLjU3NyAwIDUuMTIyLS41NDcgNy41MDctMS41NDZjLjM4Ni0uMTYxLjcwOC4yMjUuMzU0LjUxNW0uOTAyLTEuMDNjLS4yNTgtLjM1NS0xLjg2OS0uMTMtMi41NDUtLjA5N2MtLjIyNi4wMzItLjI1OC0uMTMtLjAzMi0uMjU4YzEuMjU2LS44NyAzLjMxOC0uNjQ0IDMuNTQzLS4zNTRjLjI1OC4yNTctLjAzMiAyLjM1Mi0xLjI1NiAzLjM1Yy0uMTkzLjEzLS4zNTQuMDMyLS4yNTgtLjEyOWMuMjI2LS43MDguODA2LTIuMTU4LjU0OC0yLjUxMyIvPjwvc3ZnPg==",
    logoColor: "white",
  },
  {
    title: "Vercel",
    value: "vercel-000000",
    logo: "vercel",
    logoColor: "white",
  },
  // UI Libraries
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
  // Testing
  {
    title: "Cypress",
    value: "cypress-E5E5E5",
    logo: "cypress",
    logoColor: "058a5e",
  },
  // Tools
  {
    title: "Claude",
    value: "Claude-fff7e0",
    logo: "anthropic",
    logoColor: "1a1a1a",
  },
  {
    title: "n8n",
    value: "n8n-EA4B71",
    logo: "n8n",
    logoColor: "white",
  },
];

export const experiences: Experience[] = [
  {
    id: 3,
    title: "EDEN - Full Stack Developer",
    date: "(Jan 2024 - Present)",
    projects: [
      {
        id: 0,
        title: "Project #1",
        participation: `Sole technical engineer at an early-stage AI startup, responsible for full-stack development, DevOps, and automation. Built and integrated AI features using LLMs, image generation, and related technologies, delivering end-to-end solutions in a rapidly evolving environment.`,
        technologies:
          "React, TypeScript, Next.JS, Cypress, Material-UI, AWS, Vercel, Python, FastAPI, LangChain, LLMs, n8n, Figma",
      },
    ],
  },
  {
    id: 2,
    title: "Arcadia Astronautics - Lead Frontend Developer",
    date: "(March 2023 - Jan 2024)",
    projects: [
      {
        id: 0,
        title: "Project #1",
        participation:
          "I spearheaded the creation of a cutting-edge web platform designed to manage and optimize satellite propulsion systems. I assumed a multifaceted role that included not only leading the development team but also actively contributing to project delivery and management processes. Managed a team of 10 individuals across three countries.",
        technologies:
          "React, TypeScript, Next.JS, Cypress, Material-UI, AWS, CesiumJS",
      },
    ],
  },
  {
    id: 1,
    title: "EPAM Systems - Frontend Developer",
    date: "(Aug 2017 - Oct 2022)",
    projects: [
      {
        id: 0,
        title: "Project #1",
        participation:
          "Participated in project start from scratch. Played active part in Process of tasks clarification during sprint planning. Demonstrates self-management skills, works without supervision. Plays a mentor role for less experienced colleagues. Conducted interviews with potential candidates.",
        technologies:
          "React, TypeScript, Redux, Material-UI, Cypress, Jest, Testing Library",
      },
    ],
  },
  {
    id: 0,
    title: "Netwerk Media - Frontend Developer",
    date: "(Aug 2016 - Aug 2017)",
    projects: [
      {
        id: 0,
        title: "Project #1",
        customer: "",
        participation:
          "Built responsive websites from design mockups using HTML, CSS, and jQuery. Implemented UI enhancements and maintained WordPress sites. Gained foundational experience in mobile development with React Native.",
        technologies: "HTML, CSS, Jquery, Wordpress, react-native",
      },
    ],
  },
];
