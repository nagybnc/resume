import { Project } from "../utils/configs";

interface TableProps {
    project: Project;
}

const ProjectTable = ({ project }: TableProps) => {
    return (
        <div className="print:text-xs">
            {project.customer && <h5 className="mt-4 font-bold">{project.customer}</h5>}
            <table className="mt-2 w-full table-auto border border-[#30363d]">
                <tbody>
                    <tr>
                        <td className="border border-[#30363d] p-4 print:p-2">Participation</td>
                        <td className="border border-[#30363d] p-4 print:p-2">{project.participation}</td>
                    </tr>
                    <tr>
                        <td className="border border-[#30363d] p-4 print:p-2">Technologies</td>
                        <td className="border border-[#30363d] p-4 print:p-2">{project.technologies}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTable;
