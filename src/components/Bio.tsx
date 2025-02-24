import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface BioProps {
  bio: boolean;
  setBio: (bio: boolean) => void;
}

export const Bio = ({ bio, setBio }: BioProps) => {
  return (
    <>
      <div className="flex justify-center pt-2">
        <Button variant="destructive" onClick={() => setBio(!bio)}>
          <ArrowLeft />
          Back
        </Button>
      </div>
      <div className="flex flex-col 2xl:flex-row justify-center pt-2 gap-x-8 space-y-6 2xl:space-y-0">
        <iframe
          src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiL3k2UckgQmKG7vV2gZ9eOIHhSunwTc50LMa3l"
          className="h-[700px] xl:h-[925px] xl:w-[700px]"
        ></iframe>
        <div className="xl:w-[700px] px-8 2xl:p-0">
          <p>Dear Recruiter,</p>
          <br />
          <p>
            I have devoted my life to education. Teaching for 7+ years in
            inner-city Syracuse, I became convinced that data and technology are
            paramount to make meaningful progress in education. I have since
            been on a journey to integrate technology and education and am now
            enthusiastically applying for Software Engineer roles to bring the
            essential skills that I have learned from my journey.
          </p>
          <br />
          <p>
            My technology experience predates my education experience as I was
            trained in data analytics in college, focusing on education policy.
            While studying education data, I felt the urge to get classroom
            teaching experience to better understand the data I was analyzing,
            always intending to return to tech. As a teacher, I would fulfill my
            typical teaching duties during the day while completing client and
            personal analytics projects in the evenings using Python, SQL, and
            Excel, incorporating technology in my classroom wherever I could to
            innovate teaching. Accumulating more responsibilities as I got older
            and losing some of that evening time but unwilling to lose technical
            skills, I sought automation to make up for the lost time. However, I
            had much to learn before I could use automation effectively in the
            classroom and ultimately the decrease in time put me in a position
            of feeling I had to decide between teaching and technology.
            Believing that developing my technical skills would be more
            beneficial to education, I became an Education Data Analyst at
            Quality Information Partners where I experienced some of the best
            professional development of my life, writing SQL and VBA programs to
            automate report-building for the U.S. Department of Education as a
            contractor. Working remotely also gave me a little more evening time
            where my insistence for automation helped me discover software
            development, building apps in Typescript &#040;Next.js&#041; with
            Java &#040;Spring Boot&#041;, Python &#040;Django&#041;, and Golang
            &#040;mux&#041; on the backend. I see software development as the
            ultimate automation of data reporting, “scheduling” data fetches and
            setting up displays for these data ahead of time instead of manually
            and time-consumingly building dashboards for the same data display,
            and I have become addicted. I realized I want to build tools for
            teachers and students instead of analytic dashboards and when I
            retire, I will likely spend my day-to-day building apps.
          </p>
          <br />
          <p>
            Trying to bridge technology and education motivates me to become a
            Software Engineer. I am happy to expand on my story, experience, and
            skills and can be reached at{" "}
            <a
              href="mailto:jamesdavidyu@gmail.com"
              className="hover:underline hover:cursor-pointer text-blue-600"
            >
              jamesdavidyu@gmail.com
            </a>{" "}
            or &#040;315&#041; 760-4443 for an in-person or virtual interview.
            Thank you in advance for the time and consideration.
          </p>
          <br />
          <p>Sincerely,</p>
          <p>James Yu</p>
        </div>
      </div>
    </>
  );
};
