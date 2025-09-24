import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";


export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-cyan-600/30 via-[#1e293b]/60 via-60% to-transparent">
      <div className="container pt-12 ">
        <div className="py-10 flex flex-col items-center">
          <span>© 2025 Rebecca Kontio. All rights reserved.</span>
          <nav className="mt-4 inline-flex items-center gap-4">
            <a
              href="https://github.com/Rebeccakontio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/rebecca-kontio-614230291/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={32} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
