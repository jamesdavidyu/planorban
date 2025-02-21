import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface InProgressProps {
  darkMode: boolean;
}

export const InProgress = ({ darkMode }: InProgressProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a href="https://github.com/jamesdavidyu" target="_blank">
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLC66KfEjOwfepZnmHXaPd2KcTGY6845Ry7Jjb"
            className={`h-72 rounded-t-xl border-b border-neutral-700 ${
              darkMode ? "invert" : ""
            }`}
          />
        </a>
        <div className="flex flex-col p-4">
          <Button>github.com/jamesdavidyu</Button>
          <p className="mt-3">More Coming Soon!</p>
        </div>
      </Card>
    </>
  );
};
