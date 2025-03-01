import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface SyraviewsProps {
  darkMode: boolean;
}

export const Syraviews = ({ darkMode }: SyraviewsProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] 2xl:h-[529px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a
          href="https://syraviews.com"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLXAV4lOc39AZVJ2mqlrWf3bT4DUeS7ukICx0a"
            className="h-72 rounded-t-xl border-b border-neutral-700"
            alt="syraviews.com"
          />
        </a>
        <div className="flex flex-col p-4">
          <a href="https://syraviews.com" target="_blank">
            <Button className="w-full">syraviews.com</Button>
          </a>
          <div className="mt-3">
            A small app to invite friends and collect RSVPs for my soon-to-be
            son&apos;s gender reveal party, written in Golang &#40;mux&#41; and
            TypeScript &#40;Next.js&#41; with PostgreSQL and JWT authentication.
            Deployed via Vercel and Fly.io. Log in with &quot;recruiter&quot;
            and &quot;r3cruiter!&quot;.
          </div>
          <div className="flex justify-between mt-2 2xl:mt-4">
            <div className="flex items-center gap-x-2">
              <Avatar>
                <a
                  href="https://github.com/jamesdavidyu/gender_reveal_ui"
                  target="_blank"
                >
                  <AvatarImage
                    src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                    alt="GitHub"
                  />
                </a>
              </Avatar>
              <a
                href="https://github.com/jamesdavidyu/gender_reveal_ui"
                target="_blank"
              >
                <Button variant="destructive">Frontend Repo</Button>
              </a>
            </div>
            <div className="flex items-center gap-x-2">
              <a href="https://github.com/jamesdavidyu/grs" target="_blank">
                <Button variant="secondary">Backend Repo</Button>
              </a>
              <Avatar>
                <a href="https://github.com/jamesdavidyu/grs" target="_blank">
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
