import mePicture from "./assets/me.jpeg";
import { BuildingOffice2Icon, MapPinIcon, EnvelopeIcon, LinkIcon, PrinterIcon, MoonIcon } from "@heroicons/react/24/solid";
import { experiences, repositories, Repository, Skill, skills } from "./utils/configs";
import ExperienceBox from "./ExperienceBox";
import RepositoriesBox from "./RepositoriesBox";

const yearCalculator = () => {
    const date1 = new Date("08/01/2016");
    const date2 = new Date();
    const Difference_In_Time = date2.getTime() - date1.getTime();
    return Math.floor(Difference_In_Time / (1000 * 3600 * 24 * 365));
};

function App() {
    return (
        <div className="h-full bg-[#0d1117] print:h-screen">
            <header className="flex h-12 items-center justify-between self-center bg-[#161b22] px-8 text-gray-200 print:px-4 xl:px-32 2xl:px-64">
                <PrinterIcon
                    className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white"
                    onClick={() => {
                        window.print();
                    }}
                />
                <p className="self-center">
                    <a className="underline" href="https://github.com/nagybnc/#">
                        https://github.com/nagybnc/resume
                    </a>
                </p>
                <div className="flex items-center gap-2">
                    <MoonIcon className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white" />
                    <p className="cursor-pointer text-gray-400 hover:text-white">EN</p>
                </div>
            </header>
            <section className="mx-8 flex font-sans print:mx-1 xl:mx-32 2xl:mx-64">
                <div className="mx-4 mt-8 w-80 flex-none p-4 print:mt-4 print:max-w-[11rem] print:p-0">
                    <img src={mePicture} className="mx-4 rounded-full border-2 border-[#30363d] print:p-0" />
                    <h1 className="mt-6 mb-4">
                        <span className="block text-2xl font-semibold leading-5 text-gray-200 print:text-lg">Bence Nagy</span>
                        <span className="block text-xl text-gray-500 print:text-sm">nagybnc</span>
                    </h1>
                    <ul className="mt-2 list-none space-y-1 text-sm text-gray-200 print:text-xs">
                        <li>
                            <BuildingOffice2Icon className="mr-2 inline-block h-5 w-5 text-gray-400 print:h-3 print:w-3" />
                            Frontend Developer
                        </li>
                        <li>
                            <MapPinIcon className="mr-2 inline-block h-5 w-5 text-gray-400 print:h-3 print:w-3" />
                            Budapest, Hungary
                        </li>
                        <li>
                            <EnvelopeIcon className="mr-2 inline-block h-5 w-5 text-gray-400 print:h-3 print:w-3" />
                            nagybnc@gmail.com
                        </li>
                        <li>
                            <LinkIcon className="mr-2 inline-block h-5 w-5 text-gray-400 print:h-3 print:w-3" />
                            <a href="https://www.linkedin.com/in/nagybnc/">linkedin.com/in/nagybnc</a>
                        </li>
                    </ul>
                    <div className="mt-4 border border-gray-700"></div>
                    <h3 className="my-4 font-semibold text-gray-300 print:text-xs">Technologies</h3>
                    <ul className="flex flex-wrap gap-2 print:flex-col">
                        {skills.map((skill: Skill) => (
                            <li key={skill.title}>
                                <img src={`https://img.shields.io/badge/${skill.value}?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.logoColor}`} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="my-8 rounded-lg border border-[#30363d] p-4 text-gray-300 print:my-4 print:border-none">
                    <p className="mb-4 font-mono text-xs">
                        nagybnc<span className="mx-1 text-gray-400">/</span>README<span className="text-gray-400">.md</span>
                    </p>
                    <ul className="ml-8 list-disc text-sm print:text-xs">
                        <li>🌟 Result oriented, highly motivated and proactive Frontend Developer.</li>
                        <li>📰 Over {yearCalculator()} years of experience in software development industry.</li>
                        <li>🛠️ Experienced in working in multicultural and rapidly changing environment.</li>
                        <li>📜 Bachelor’s degree in Engineering Information Technology (Computer Science).</li>
                    </ul>
                    <div className="my-6 border-2 border-gray-700 print:my-4"></div>
                    <h1 className="mb-4 text-2xl text-gray-300 print:mb-2 print:text-lg">Experiences</h1>
                    {experiences.map((experience) => (
                        <ExperienceBox key={experience.id} experience={experience} />
                    ))}
                    <h1 className="print:text-basic mb-2 text-lg text-gray-300">GitHub Repositories</h1>
                    <div className="grid grid-cols-2 gap-2">
                        {repositories.map((repository: Repository) => (
                            <RepositoriesBox key={repository.title} repository={repository} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
