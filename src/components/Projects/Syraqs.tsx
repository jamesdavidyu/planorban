import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface SyraqsProps {
  darkMode: boolean;
}

export const Syraqs = ({ darkMode }: SyraqsProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a href="https://syraqs.com" target="_blank">
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLnLmDusdqectlQXLhk6oKRjmaTi8nwNMzuGYf"
            className="h-72 rounded-t-xl border-b border-neutral-700"
          />
        </a>
        <div className="flex flex-col p-4">
          <Button>syraqs.com</Button>
          <p className="mt-3"></p>
        </div>
      </Card>
    </>
  );
};
