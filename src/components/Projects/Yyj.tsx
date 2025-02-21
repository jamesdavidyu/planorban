import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface YyjProps {
  darkMode: boolean;
}

export const Yyj = ({ darkMode }: YyjProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] h-[529px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a
          href="https://youyoungjune.com"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLdAHc7OXg8baGNqhYrtoDdVMz5mujWILy2lf6"
            className="h-72 rounded-t-xl border-b border-neutral-700"
            alt="youyoungjune.com"
          />
        </a>
        <div className="flex flex-col p-4">
          <Button>
            <a href="https://youyoungjune.com" target="_blank">
              youyoungjune.com
            </a>
          </Button>
          <div className="mt-3">
            <p className="italic text-green-600">
              &#47;&#42;&nbsp;In Progress&nbsp;&#42;&#47;
            </p>
            My arts portfolio, written in Java &#40;Spring Boot&#41; and
            Typescript &#40;Next.js&#41; with MongoDB &#40;Atlas&#41; and JWT
            authentication. Deployed via Vercel and Koyeb.
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex items-center gap-x-2">
              <Avatar>
                <a href="https://github.com/jamesdavidyu/yyj" target="_blank">
                  <AvatarImage
                    src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                    alt="GitHub"
                  />
                </a>
              </Avatar>
              <Button variant="destructive">
                <a href="https://github.com/jamesdavidyu/yyj" target="_blank">
                  Frontend Repo
                </a>
              </Button>
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
                  <AvatarImage
                    src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                    alt="GitHub"
                  />
                </a>
              </Avatar>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
