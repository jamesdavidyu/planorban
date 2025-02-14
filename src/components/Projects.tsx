import { Card } from "./ui/card";

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects = ({ darkMode }: ProjectsProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-x-4">
        <Card className={`${darkMode ? "bg-black text-white" : ""}`}>
          <a href="https://jamesandhanna.vercel.app" target="_blank">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLFmBpIIul6K25DGPkXTZn7jetRmC0bSOw1Bxf"
              className="h-72 rounded-t-xl"
            />
          </a>
        </Card>
        <Card className={`${darkMode ? "bg-black text-white" : ""}`}>
          <a href="https://syraqs.com" target="_blank">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLnLmDusdqectlQXLhk6oKRjmaTi8nwNMzuGYf"
              className="h-72 rounded-t-xl"
            />
          </a>
        </Card>
      </div>
      <div className="flex gap-x-4">
        <Card className={`${darkMode ? "bg-black text-white" : ""}`}>
          <a href="https://youyoungjune.com" target="_blank">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLWwroDiBjUVQNz20JR5M8ohxsYgOb7amnLw1B"
              className="h-72 rounded-t-xl"
            />
          </a>
        </Card>
        {/* <Card className={`${darkMode ? "bg-black text-white" : ""}`}>
          <img
            src={
              darkMode
                ? "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL5MnRTn8fLieHIWtKpZ0mgDCXwsE51NrnTlS4"
                : "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLz9T58VEwfIZTOd5vKqxuLcyDSkljEV8JNaXH"
            }
            className="h-72 rounded-t-xl"
          />
        </Card> */}
      </div>
    </div>
  );
};
