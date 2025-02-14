import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects = ({ darkMode }: ProjectsProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <Card
          className={`w-full sm:w-[475px] 2xl:w-[525px] ${
            darkMode ? "bg-black text-white" : ""
          }`}
        >
          <a href="https://syraviews.com" target="_blank">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLFmBpIIul6K25DGPkXTZn7jetRmC0bSOw1Bxf"
              className="h-72 rounded-t-xl border-b"
            />
          </a>
          <div className="flex flex-col p-4">
            <Button>syraviews.com</Button>
            <p className="mt-3"></p>
          </div>
        </Card>
        <Card
          className={`w-full sm:w-[475px] 2xl:w-[525px] ${
            darkMode ? "bg-black text-white" : ""
          }`}
        >
          <a href="https://syraqs.com" target="_blank">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLnLmDusdqectlQXLhk6oKRjmaTi8nwNMzuGYf"
              className="h-72 rounded-t-xl border-b"
            />
          </a>
          <div className="flex flex-col p-4">
            <Button>syraqs.com</Button>
            <p className="mt-3"></p>
          </div>
        </Card>
      </div>
      <div className="flex flex-col items-center 2xl:flex-row gap-x-4 space-y-4 2xl:space-y-0">
        <Card
          className={`w-full sm:w-[475px] 2xl:w-[525px] ${
            darkMode ? "bg-black text-white" : ""
          }`}
        >
          <a href="https://youyoungjune.com" target="_blank">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLWwroDiBjUVQNz20JR5M8ohxsYgOb7amnLw1B"
              className="h-72 rounded-t-xl border-b"
            />
          </a>
          <div className="flex flex-col p-4">
            <Button>youyoungjune.com</Button>
            <div className="mt-3">
              <p className="italic text-green-600">
                &#47;&#42;&nbsp;In Progress&nbsp;&#42;&#47;
              </p>
              My arts portfolio with JWT authentication &#40;users need to log
              in to see the content&#41;, written in Typescript
              &#40;Next.js&#41; and Java &#40;Spring Boot&#41; with MongoDB
              &#40;Atlas&#41;.
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <a
                    href="https://github.com/jamesdavidyu/planorban"
                    target="_blank"
                  >
                    <AvatarImage src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png" />
                  </a>
                </Avatar>
                <Button variant="destructive">Frontend Repo</Button>
              </div>
              <div className="flex items-center gap-x-2">
                <Button variant="secondary">
                  <a
                    href="https://github.com/jamesdavidyu/yyjApi_java"
                    target="_blank"
                  >
                    Backend Repo
                  </a>
                </Button>
                <Avatar>
                  <a
                    href="https://github.com/jamesdavidyu/yyjApi_java"
                    target="_blank"
                  >
                    <AvatarImage src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png" />
                  </a>
                </Avatar>
              </div>
            </div>
          </div>
        </Card>
        <Card
          className={`w-full sm:w-[475px] 2xl:w-[525px] ${
            darkMode ? "bg-black text-white" : ""
          }`}
        >
          <a href="https://github.com/jamesdavidyu" target="_blank">
            <img
              src={
                darkMode
                  ? "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL5MnRTn8fLieHIWtKpZ0mgDCXwsE51NrnTlS4"
                  : "https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLz9T58VEwfIZTOd5vKqxuLcyDSkljEV8JNaXH"
              }
              className="h-72 rounded-t-xl border-b"
            />
          </a>
          <div className="flex flex-col p-4">
            <Button>github.com/jamesdavidyu</Button>
            <p className="mt-3">More Coming Soon!</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
