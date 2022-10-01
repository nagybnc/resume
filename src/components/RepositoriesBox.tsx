import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { Repository } from "../utils/configs";

interface RepositoriesBox {
    repository: Repository;
}

const RepositoriesBox = ({ repository }: RepositoriesBox) => {
    return (
        <div className="flex flex-col gap-2 border border-[#30363d] p-4">
            <h3 className="flex items-center gap-2 text-sm text-[#58a6ff] print:text-xs">
                <BookmarkSquareIcon className="inline-block h-5 w-5 text-gray-400 print:text-xs" />
                <a href={repository.url} target="_blank">
                    {repository.title}
                </a>
            </h3>
            <p className="text-sm text-gray-400 print:text-xs">{repository.description}</p>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <span style={{ backgroundColor: repository.technologyColor }} className={`inline-block h-3 w-3 rounded-full border border-[#30363d]`}></span>
                    <p className="text-xs text-gray-400">{repository.technology}</p>
                </div>
                <p className="rounded-3xl border border-[#30363d] px-1 py-1 text-xs text-gray-400">Public</p>
                {repository.projectUrl && (
                    <a href={repository.projectUrl} target="_blank" className="rounded-3xl border border-[#30363d] px-1 py-1 text-xs text-gray-400">
                        GitHub Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default RepositoriesBox;
