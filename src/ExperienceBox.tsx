import { BriefcaseIcon } from "@heroicons/react/24/outline";
import Table from "./Table";
import { Experience, Project } from "./utils/configs";

interface ExperienceBoxProps {
    experience: Experience;
}

const ExperienceBox = ({ experience }: ExperienceBoxProps) => {
    return (
        <div key={experience.title} className="my-4 border border-[#30363d] p-4 print:my-2 print:p-2">
            <h3 className="text-lg text-[#58a6ff] print:text-sm">
                <BriefcaseIcon className="inline-block h-5 w-5 text-gray-400 print:text-xs" /> {experience.title}
            </h3>
            <p className="text-sm font-bold text-gray-400 print:text-xs">{experience.date}</p>
            {experience.projects.map((project: Project) => (
                <Table key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ExperienceBox;
