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
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div>
          <a
            href="https://www.planorban.com"
            className="flex w-fit -mt-2"
            title="Planorban"
          >
            <Avatar>
              <AvatarImage
                src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLSgxEf8i4ZGeSIWMpQRy6gK7A5vNl0HaJDrVx"
                className={`${darkMode ? "invert" : ""}`}
              />
            </Avatar>
          </a>
        </div>
        <div className="flex flex-col 2xl:flex-row space-y-2 2xl:space-y-0 justify-center items-center gap-x-2">
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
                  className="underline hover:no-underline text-blue-600"
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
                    title="Python"
                    alt="Python"
                  />
                  <img
                    src="https://utfs.io/f/8f68be8b-4a32-4709-a1dc-ab1fe6edce6c-2js.png"
                    className="w-20"
                    title="Golang"
                    alt="Golang"
                  />
                  <img
                    src="https://utfs.io/f/0c063887-ad21-4361-83f9-5d22f9c9d653-8myeez.png"
                    className="size-10"
                    title="Typescript"
                    alt="Typescript"
                  />
                  <img
                    src="https://utfs.io/f/18697db9-42df-4a31-b981-ababe7b32bb7-1xrfm.png"
                    className="-mx-1 size-10"
                    title="Java"
                    alt="Java"
                  />
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="hover:cursor-pointer">
                  Databases
                </MenubarTrigger>
                <MenubarContent
                  className={`flex justify-center items-center gap-x-2 p-2 ${
                    darkMode ? "bg-black text-white" : ""
                  }`}
                >
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/34331b9c-04d9-46fe-bf2b-80b6b4d78a23-ytjru4.png"
                    className="size-10"
                    title="PostgreSQL"
                    alt="PostgreSQL"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/47a62486-9094-4b32-922f-d91d58a7521e-estkac.png"
                    className="w-20"
                    title="SQLite"
                    alt="SQLite"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/b2db0c49-4824-43b4-816d-094ab300115e-1pysc4.png"
                    className="size-10"
                    title="MongoDB"
                    alt="MongoDB"
                  />
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="hover:cursor-pointer">
                  Frameworks
                </MenubarTrigger>
                <MenubarContent
                  className={`flex justify-center items-center gap-x-2 p-2 ${
                    darkMode ? "bg-black text-white" : ""
                  }`}
                >
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/6cec46fa-d49f-480f-b875-964225c3792d-20eer.png"
                    className={`size-10 ${darkMode ? "" : "invert"}`}
                    title="Next.js"
                    alt="Next.js"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/e3892ea3-6d89-41d2-be4e-2496b69b5802-1sj3pb.png"
                    className="size-10"
                    title="React"
                    alt="React"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/e1c5d774-9034-4d27-bac4-83609a2c0cf7-m0jdt1.png"
                    className="size-10"
                    title="Django"
                    alt="Django"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/c89ce08c-0926-4b1f-bbc7-2e4306bab049-mj0jnj.png"
                    className="-mx-2 w-12"
                    title="Spring Boot"
                    alt="Spring Boot"
                  />
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="hover:cursor-pointer">
                  Cloud
                </MenubarTrigger>
                <MenubarContent
                  className={`flex justify-center items-center gap-x-2 p-2 ${
                    darkMode ? "bg-black text-white" : ""
                  }`}
                >
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/b590f013-c0b2-4166-8aef-f9430a4ca4fd-dk6j3t.png"
                    className={`w-20 -mx-6 ${darkMode ? "" : "invert"}`}
                    title="Vercel"
                    alt="Vercel"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/72df50f8-3c93-4a65-8b7e-11f6c3e09312-26b7.svg"
                    className={`size-10 ${darkMode ? "" : "invert"}`}
                    title="Fly.io"
                    alt="Fly.io"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/b2db0c49-4824-43b4-816d-094ab300115e-1pysc4.png"
                    className="size-10"
                    title="MongoDB"
                    alt="MongoDB"
                  />
                  <img
                    src="https://m2my1rq4tt.ufs.sh/f/e947aa1f-326e-4897-aa8f-9cb8bd70b916-22v1.webp"
                    className={`w-10 -my-2 ${darkMode ? "" : "invert"}`}
                    title="AWS"
                    alt="AWS"
                  />
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-fit" title="Dark mode toggle">
            {darkMode ? (
              <SunIcon
                className="hover:cursor-pointer text-yellow-300"
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
      <div className="flex flex-col items-center overflow-y-scroll mt-64 2xl:mt-44 z-0">
        <main className="flex flex-col items-center space-y-4 pt-8 2xl:pt-4">
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
        <footer className="flex justify-center 2xl:justify-end w-full border-t p-4 mt-8">
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
