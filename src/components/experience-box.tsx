import { BriefcaseIcon } from "@heroicons/react/24/outline";
import ProjectTable from "./project-table";
import { Experience, Project } from "../lib/config";

interface ExperienceBoxProps {
  experience: Experience;
}

const ExperienceBox = ({ experience }: ExperienceBoxProps) => {
  return (
    <div className="my-4 border border-(--color-border) p-4 print:my-2 print:p-2">
      <h3 className="text-lg flex items-center gap-2 text-(--color-link) print:text-sm">
        <BriefcaseIcon className="inline-block h-5 w-5 text-(--color-icon) print:text-xs" />{" "}
        {experience.title}
      </h3>
      <p className="text-sm font-bold text-(--color-text-secondary) print:text-xs">
        {experience.date}
      </p>
      {experience.projects.map((project: Project) => (
        <ProjectTable key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ExperienceBox;
