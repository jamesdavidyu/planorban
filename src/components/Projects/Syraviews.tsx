import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface SyraviewsProps {
  darkMode: boolean;
}

export const Syraviews = ({ darkMode }: SyraviewsProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a href="https://syraviews.com" target="_blank">
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLFmBpIIul6K25DGPkXTZn7jetRmC0bSOw1Bxf"
            className="h-72 rounded-t-xl border-b border-neutral-700"
          />
        </a>
        <div className="flex flex-col p-4">
          <Button>syraviews.com</Button>
          <p className="mt-3"></p>
        </div>
      </Card>
    </>
  );
};
