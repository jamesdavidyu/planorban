import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface EdProps {
  darkMode: boolean;
}

export const Ed = ({ darkMode }: EdProps) => {
  return (
    <>
      <Card
        className={`w-full sm:w-[475px] 2xl:w-[525px] ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <a href="https://ed-api.koyeb.app/" target="_blank">
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLn5EMk8dqectlQXLhk6oKRjmaTi8nwNMzuGYf"
            className="h-72 rounded-t-xl border-b border-neutral-700"
          />
        </a>
        <div className="flex flex-col p-4">
          <Button>ed-api.koyeb.app</Button>
          <p className="mt-3">More Coming Soon!</p>
        </div>
      </Card>
    </>
  );
};
