import { PROJECTS } from "../constants";
import empty from "../assets/empty.png";

const Portfolio = () => {
    return (
        <div className="px-8">
            <div className="border-b border-gray-500/15 py-10">
                <h1 className="text-2xl font-medium bg-gradient-to-r from-[#2AB78D] to-[#122C48] bg-clip-text text-transparent inline-block">
                    Our Portfolio
                </h1>

                <h5 className="text-[#666666] font-semibold py-4">
                    Showcasing Our Best Work
                </h5>
                <p className="bg-gradient-to-r from-[#666666] to-[#CCCCCC] bg-clip-text text-transparent inline-block tracking-tight max-w-2xl">
                    Explore a selection of our recent projects and see how
                    we&apos;ve helped clients bring their visions to life. From
                    branding and design to event management and storytelling,
                    our portfolio highlights the diversity and quality of our
                    work.
                </p>
                <div className="mt-5 flex flex-wrap justify-center lg:justify-between gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="w-[232px]">
                            <div className="bg-[#F6F6F6] flex items-center justify-center h-[180px] rounded-lg">
                                <img
                                    src={empty}
                                    alt={project.name}
                                    className="w-[113px] h-[97px]"
                                />
                            </div>
                            <div className="py-2">
                                <h3 className="text-[#2AB78D] font-semibold">
                                    {project.name}
                                </h3>
                                <h5 className="text-[#122C48] font-semibold py-1">
                                    {project.type}
                                </h5>
                                <p className="text-[#6C6C6C] text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
