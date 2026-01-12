import { useState, useEffect } from "react";
import mePicture from "@/assets/me.jpeg";
import {
  BuildingOffice2Icon,
  MapPinIcon,
  EnvelopeIcon,
  LinkIcon,
  PrinterIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { experiences, Repository, Skill, skills } from "@/lib";
import { ExperienceBox, RepositoriesBox } from "@/components";

const CAREER_START = new Date(2015, 7, 1); // August 1, 2015

const getYearsOfExperience = () => {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (
    now <
    new Date(now.getFullYear(), CAREER_START.getMonth(), CAREER_START.getDate())
  ) {
    years--;
  }
  return years;
};

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="h-full bg-(--color-bg-primary) print:h-screen">
      <header className="flex h-12 items-center justify-between print:justify-center self-center bg-(--color-bg-secondary) px-8 text-(--color-text-primary) print:px-4 xl:px-32 2xl:px-64">
        <PrinterIcon
          className="h-5 w-5 cursor-pointer text-(--color-icon) hover:text-(--color-icon-hover) print:hidden"
          onClick={() => {
            window.print();
          }}
        />
        <p className="self-center">
          <a className="underline" href="https://github.com/nagybnc/resume">
            https://github.com/nagybnc/resume
          </a>
        </p>
        <div className="flex items-center gap-2 print:hidden">
          {isDark ? (
            <SunIcon
              className="h-5 w-5 cursor-pointer text-(--color-icon) hover:text-(--color-icon-hover)"
              onClick={toggleTheme}
            />
          ) : (
            <MoonIcon
              className="h-5 w-5 cursor-pointer text-(--color-icon) hover:text-(--color-icon-hover)"
              onClick={toggleTheme}
            />
          )}
          <p className="cursor-not-allowed text-(--color-icon)">EN</p>
        </div>
      </header>
      <section className="mx-8 flex font-sans print:mx-1 xl:mx-32 2xl:mx-64">
        <div className="mx-4 mt-8 w-80 flex-none p-4 print:mt-4 print:max-w-44 print:p-0">
          <img
            src={mePicture}
            alt="Bence Nagy profile picture"
            className="rounded-full border-2 border-(--color-border) print:p-0 aspect-square w-full object-cover"
          />
          <h1 className="mt-6 mb-4">
            <span className="block text-2xl font-semibold leading-5 text-(--color-text-primary) print:text-lg">
              Bence Nagy
            </span>
            <span className="block text-xl text-(--color-text-secondary) print:text-sm">
              @nagybnc
            </span>
          </h1>
          <ul className="mt-2 list-none space-y-1 text-sm text-(--color-text-primary) print:text-xs">
            <li>
              <BuildingOffice2Icon className="mr-2 inline-block h-5 w-5 text-(--color-icon) print:h-3 print:w-3" />
              Frontend Engineer (Full-Stack & AI Experience)
            </li>
            <li>
              <MapPinIcon className="mr-2 inline-block h-5 w-5 text-(--color-icon) print:h-3 print:w-3" />
              Budapest, Hungary
            </li>
            <li>
              <EnvelopeIcon className="mr-2 inline-block h-5 w-5 text-(--color-icon) print:h-3 print:w-3" />
              nagybnc@gmail.com
            </li>
            <li>
              <LinkIcon className="mr-2 inline-block h-5 w-5 text-(--color-icon) print:h-3 print:w-3" />
              <a href="https://www.linkedin.com/in/nagybnc/">
                linkedin.com/in/nagybnc
              </a>
            </li>
          </ul>
          <div className="mt-4 border border-(--color-border)"></div>
          <h3 className="my-4 font-semibold text-(--color-text-primary) print:text-xs">
            Technologies
          </h3>
          <ul className="flex flex-wrap gap-2 print:flex-col">
            {skills.map((skill: Skill) => (
              <li key={skill.title}>
                <img
                  src={`https://img.shields.io/badge/${skill.value}?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.logoColor}`}
                  alt={skill.title}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="my-8 rounded-lg border border-(--color-border) p-4 text-(--color-text-primary) print:my-4 print:border-none">
          <p className="mb-4 font-mono text-xs">
            nagybnc<span className="mx-1 text-(--color-text-secondary)">/</span>
            README
            <span className="text-(--color-text-secondary)">.md</span>
          </p>
          <ul className="ml-4 list-disc text-sm print:text-xs">
            <li>
              🚀 Frontend & Full Stack Developer building web applications with
              workflow automation.
            </li>
            <li>
              💼 Over {getYearsOfExperience()} years of experience in the
              software development industry.
            </li>
            <li>
              🤖 Building AI-driven products with React, TypeScript, Python, and
              workflow automation.
            </li>
            <li>
              🛠️ Experienced in working in multicultural and rapidly changing
              environment.
            </li>
            <li>
              👥 Led cross-functional teams 10+ developers across multiple
              countries delivering satellite propulsion systems.
            </li>
          </ul>
          <div className="my-6 border-2 border-(--color-border) print:my-4"></div>
          <h1 className="mb-4 text-2xl text-(--color-text-primary) print:mb-2 print:text-lg">
            Experiences
          </h1>
          {experiences.map((experience) => (
            <ExperienceBox key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
