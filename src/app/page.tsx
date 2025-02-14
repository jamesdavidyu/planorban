"use client";

import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`flex flex-col font-[family-name:var(--font-geist-sans)] h-screen ${
        darkMode ? "bg-black text-white" : ""
      }`}
    >
      <header
        className={`grid grid-cols-3 p-8 border-b z-10 fixed w-full ${
          darkMode ? "bg-black" : ""
        }`}
      >
        <div>
          <a
            href="https://www.planorban.com"
            className="flex w-fit"
            title="Planorban"
          >
            <Avatar>
              <AvatarImage src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLSgxEf8i4ZGeSIWMpQRy6gK7A5vNl0HaJDrVx" />
            </Avatar>
          </a>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <HoverCard>
            <HoverCardTrigger
              href="https://github.com/jamesdavidyu/"
              target="_blank"
              className="hover:cursor-pointer"
            >
              <img
                src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLUnvc5KtjuCHJXMhVGktnDBzvxQi2bIE5ofer"
                className="rounded-full h-28"
              />
            </HoverCardTrigger>
            <HoverCardContent
              className={`flex justify-center items-center gap-x-4 ${
                darkMode ? "bg-black" : ""
              }`}
            >
              <Contact />
            </HoverCardContent>
          </HoverCard>
          <div className="flex flex-col items-center">
            <div>
              Hello! My name is&nbsp;
              <HoverCard>
                <HoverCardTrigger
                  href="https://github.com/jamesdavidyu/"
                  target="_blank"
                  className="underline hover:no-underline text-blue-500"
                >
                  James Yu.
                </HoverCardTrigger>
                <HoverCardContent
                  className={`flex justify-center items-center gap-x-4 ${
                    darkMode ? "bg-black" : ""
                  }`}
                >
                  <Contact />
                </HoverCardContent>
              </HoverCard>
            </div>
            <p>I am a full stack developer skilled in:</p>
            <Menubar
              className={`mt-2 ${darkMode ? "bg-black text-white" : ""}`}
            >
              <MenubarMenu>
                <MenubarTrigger className="hover:cursor-pointer">
                  Languages
                </MenubarTrigger>
                <MenubarContent
                  className={`flex justify-center items-center gap-x-2 p-2 ${
                    darkMode ? "bg-black text-white" : ""
                  }`}
                >
                  <img
                    src="https://utfs.io/f/f5d9dfd5-a566-46ae-83f0-8094a153a1a4-g3ezok.png"
                    className="size-10"
                  />
                  <img
                    src="https://utfs.io/f/8f68be8b-4a32-4709-a1dc-ab1fe6edce6c-2js.png"
                    className="w-20"
                  />
                  <img
                    src="https://utfs.io/f/0c063887-ad21-4361-83f9-5d22f9c9d653-8myeez.png"
                    className="size-10"
                  />
                  <img
                    src="https://utfs.io/f/18697db9-42df-4a31-b981-ababe7b32bb7-1xrfm.png"
                    className="size-10"
                  />
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="hover:cursor-pointer">
                  Databases
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="hover:cursor-pointer">
                  Frameworks
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="hover:cursor-pointer">
                  Cloud
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-fit" title="Dark mode toggle">
            {darkMode ? (
              <SunIcon
                className="hover:cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <MoonIcon
                className="hover:cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            )}
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center overflow-y-scroll mt-44 z-0">
        <main className="flex flex-col items-center space-y-4 pt-4">
          <a
            href="https://github.com/jamesdavidyu"
            target="_blank"
            className="font-bold underline hover:no-underline text-xl"
            title="GitHub"
          >
            Projects
          </a>
          <Projects darkMode={darkMode} />
        </main>
        <footer className="flex justify-end w-full border-t p-4 mt-8">
          <div className="flex items-center gap-x-2">
            <a
              href="https://github.com/jamesdavidyu/planorban"
              target="_blank"
              className="hover:cursor-pointer hover:underline"
            >
              Check out the code for this site on GitHub.
            </a>
            <Avatar>
              <a
                href="https://github.com/jamesdavidyu/planorban"
                target="_blank"
              >
                <AvatarImage src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png" />
              </a>
            </Avatar>
          </div>
        </footer>
      </div>
    </div>
  );
}
