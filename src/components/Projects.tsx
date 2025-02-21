import { Ed } from "./Projects/Ed";
import { Syraqs } from "./Projects/Syraqs";
import { Syraviews } from "./Projects/Syraviews";
import { Yyj } from "./Projects/Yyj";

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects = ({ darkMode }: ProjectsProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <Ed darkMode={darkMode} />
        <Syraviews darkMode={darkMode} />
      </div>
      <div className="flex flex-col items-center 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <Yyj darkMode={darkMode} />
        <Syraqs darkMode={darkMode} />
        {/* TODO: need to add my VBA program and Tableau data analytics, comecny */}
      </div>
      {/* <div className="flex flex-col items-center 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <InProgress darkMode={darkMode} />
      </div> */}
    </div>
  );
};
