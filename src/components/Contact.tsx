interface ContactProps {
  bio: boolean;
  setBio: (bio: boolean) => void;
}

export const Contact = ({ bio, setBio }: ContactProps) => {
  return (
    <div className="flex gap-x-3 items-center justify-center">
      <p
        className="text-4xl hover:cursor-pointer"
        title="Resume and cover letter"
        onClick={() => setBio(!bio)}
      >
        &#128209;
      </p>
      <a href="https://github.com/jamesdavidyu" target="_blank" title="GitHub">
        <img
          src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
          className="size-10"
          alt="GitHub"
        />
      </a>
      <a
        href="https://linkedin.com/in/jamesdavidyu"
        target="_blank"
        title="LinkedIn"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          className="size-10"
          alt="LinkedIn"
        />
      </a>
      <a
        className="text-5xl"
        href="mailto:jamesdavidyu@gmail.com"
        title="jamesdavidyu@gmail.com"
      >
        &#128231;
      </a>
    </div>
  );
};
