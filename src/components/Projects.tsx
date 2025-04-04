import { BabyShower } from "./Projects/BabyShower";
import { UNYT } from "./Projects/UNYT";
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
        <UNYT darkMode={darkMode} />
        <Ed darkMode={darkMode} />
      </div>
      <div className="flex flex-col items-center 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <Yyj darkMode={darkMode} />
        <Syraviews darkMode={darkMode} />
        {/* TODO: need to add my VBA program and Tableau data analytics */}
      </div>
      <div className="flex flex-col items-center 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <Syraqs darkMode={darkMode} />
        <BabyShower darkMode={darkMode} />
      </div>
      {/* <div className="flex flex-col items-center 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <InProgress darkMode={darkMode} />
      </div> */}
    </div>
  );
};
