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
        className={`w-full sm:w-[475px] 2xl:w-[525px] h-[529px] ${
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
          <Button>
            <a href="https://syraviews.com" target="_blank">
              syraviews.com
            </a>
          </Button>
          <div className="mt-3">
            A small app to invite friends and collect RSVPs for my soon-to-be
            son&apos;s gender reveal party, written in Golang &#40;mux&#41; and
            Typescript &#40;Next.js&#41; with PostgreSQL and JWT authentication.
            Deployed via Vercel and Fly.io. Log in with &quot;recruiter&quot;
            and &quot;r3cruiter!&quot;.
          </div>
          <div className="flex justify-between 2xl:mt-3">
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
              <Button variant="destructive">
                <a
                  href="https://github.com/jamesdavidyu/gender_reveal_ui"
                  target="_blank"
                >
                  Frontend Repo
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-x-2">
              <Button variant="secondary">
                <a href="https://github.com/jamesdavidyu/grs" target="_blank">
                  Backend Repo
                </a>
              </Button>
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
