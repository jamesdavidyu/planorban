import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface EdProps {
  darkMode: boolean;
}

export const Ed = ({ darkMode }: EdProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] h-[529px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a
          href="https://ed-api.koyeb.app/"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL0Y1JD3wOkGNELiUV9lCbH3TyRq6QuAWfgtZ7"
            className="h-72 rounded-t-xl border-b border-neutral-700"
            alt="ed-api.koyeb.app"
          />
        </a>
        <div className="flex flex-col p-4">
          <Button>
            <a href="https://ed-api.koyeb.app/" target="_blank">
              ed-api.koyeb.app
            </a>
          </Button>
          <div className="mt-3">
            <p className="italic text-green-600">
              &#47;&#42;&nbsp;In Progress&nbsp;&#42;&#47;
            </p>
            Written in Java using Spring Boot with PostgreSQL and complete with
            JWT authentication, an API to exchange data for a lesson
            planning/teaching/analytics app. Deployed via Koyeb.
          </div>
          <div className="flex justify-center mt-4">
            <Avatar>
              <a href="https://github.com/jamesdavidyu/ed-api" target="_blank">
                <AvatarImage
                  src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                  alt="GitHub"
                />
              </a>
            </Avatar>
          </div>
        </div>
      </Card>
    </>
  );
};
