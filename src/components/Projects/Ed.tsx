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
        className={`w-full sm:w-[475px] 2xl:w-[525px] 2xl:h-[529px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a
          href="https://howlecareer.com/"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLxYvVUzsMCGPjSaxegOIHKo1hBrNWfqYzQ2M0"
            className="h-72 rounded-t-xl border-b border-neutral-700"
            alt="howlecareer.com"
          />
        </a>
        <div className="flex flex-col p-4">
          <a href="https://howlecareer.com/" target="_blank">
            <Button className="w-full">howlecareer.com</Button>
          </a>
          <div className="mt-3">
            <p className="italic text-green-600">
              &#47;&#42;&nbsp;In Progress&nbsp;&#42;&#47;
            </p>
            Written in Java &#40;Spring Boot&#41; and TypeScript
            &#40;Angular&#41; with PostgreSQL and JWT authentication, an app for
            a lesson planning/teaching/analytics app. Deployed via Vercel and
            Koyeb.
          </div>
          <div className="flex justify-between mt-2 2xl:mt-6">
            <div className="flex items-center gap-x-2">
              <Avatar>
                <a
                  href="https://github.com/jamesdavidyu/schooltecher"
                  target="_blank"
                >
                  <AvatarImage
                    src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                    alt="GitHub"
                  />
                </a>
              </Avatar>
              <a
                href="https://github.com/jamesdavidyu/schooltecher"
                target="_blank"
              >
                <Button variant="destructive">Frontend Repo</Button>{" "}
              </a>
            </div>
            <div className="flex items-center gap-x-2">
              <a href="https://github.com/jamesdavidyu/ed-api" target="_blank">
                <Button variant="secondary">Backend Repo</Button>
              </a>
              <Avatar>
                <a
                  href="https://github.com/jamesdavidyu/ed-api"
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
