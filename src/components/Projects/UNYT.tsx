import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface UNYTProps {
  darkMode: boolean;
}

export const UNYT = ({ darkMode }: UNYTProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] 2xl:h-[529px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a
          href="https://upstatenewyorktransportation.com/"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL8vgRtjF19FKXefHshPgWbqRUGduANcQp3otM"
            className="h-72 rounded-t-xl border-b border-neutral-700"
            alt="upstatenewyorktransportation.com"
          />
        </a>
        <div className="flex flex-col p-4">
          <a href="https://upstatenewyorktransportation.com/" target="_blank">
            <Button className="w-full">upstatenewyorktransportation.com</Button>
          </a>
          <div className="mt-3">
            <p className="italic text-green-600">
              &#47;&#42;&nbsp;In Progress&nbsp;&#42;&#47;
            </p>
            A parking spot reservation app with JWT authentication, written in
            JavaScript &#40;jQuery, Bootstrap&#41; and Node.js
            &#40;TypeScript&#41;. Deployed on Render &#40;if the page shows a
            502 code, please try again in 50 seconds or so&#41;.
          </div>
          <div className="flex justify-center mt-2 2xl:mt-0">
            <Avatar>
              <a
                href="https://github.com/jamesdavidyu/parking-api"
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
      </Card>
    </>
  );
};
