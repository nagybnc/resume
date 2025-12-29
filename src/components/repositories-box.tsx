import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { Repository } from "../lib/config";

interface RepositoriesBoxProps {
  repository: Repository;
}

const RepositoriesBox = ({ repository }: RepositoriesBoxProps) => {
  return (
    <div className="flex flex-col gap-2 border border-(--color-border) p-4">
      <h3 className="flex items-center gap-2 text-sm text-(--color-link) print:text-xs">
        <BookmarkSquareIcon className="inline-block h-5 w-5 text-(--color-icon) print:text-xs" />
        <a href={repository.url} target="_blank" rel="noopener noreferrer">
          {repository.title}
        </a>
      </h3>
      <p className="text-sm text-(--color-text-secondary) print:text-xs">
        {repository.description}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span
            style={{ backgroundColor: repository.technologyColor }}
            className={`inline-block h-3 w-3 rounded-full border border-(--color-border)`}
          ></span>
          <p className="text-xs text-(--color-text-secondary)">{repository.technology}</p>
        </div>
        <p className="rounded-3xl border border-(--color-border) px-1 py-1 text-xs text-(--color-text-secondary)">
          Public
        </p>
        {repository.projectUrl && (
          <a
            href={repository.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-(--color-border) px-1 py-1 text-xs text-(--color-text-secondary)"
          >
            GitHub Project
          </a>
        )}
      </div>
    </div>
  );
};

export default RepositoriesBox;
