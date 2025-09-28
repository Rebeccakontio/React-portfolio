import Image from "next/image";
import selfie from "@/assets/images/IMG_2509.png";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import { Button } from "@/components/Button";
import FadeIn from "@/components/ScrollTrigger";  

export const Hero = () => {

  return (
    <div className="pt-28 pb-16 md:pt-24 lg:pt-32 lg:pb-20 relative overflow-hidden">
      <div className="container z-10">
        <FadeIn scroll={false}>
          <section id="about" className="flex flex-col items-center">
            <Image
              src={selfie}
              alt="photo of myself"
              className="rounded-full w-40 h-40 object-cover"
            />
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold md:text-5xl text-center mt-8 tracking-wide">
                <span className="text-cyan-400">Frontend</span> Developer
                And <span className="text-cyan-400">Designer</span>
              </h1>
              <p className="mt-8 text-center text-white/90 md:text-lg">
                Hi, I am Rebecca, a web developer with hands-on
                experience in building web applications through various
                projects. I am studying my last year as Information Business
                student majoring in software engineering and project management.
                Currently, I am looking for an IT internship. I enjoy building both websites and mobile apps, and I
                sometimes work on UI designs as well. I am passionate about
                building responsive, high performing and user-friendly web
                services. I want to be proficient in latest technologies and
                continuously expand my skill set.
              </p>
            </div>
            <nav className="mt-8 inline-flex items-center gap-4">
              <a
                href="https://github.com/Rebeccakontio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <SiGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/rebecca-kontio-614230291/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <SiLinkedin size={32} />
              </a>
            </nav>
            <div className="inline-flex items-center mt-8 gap-4">
              <a
                href="mailto:kontiorebecca@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="white">Contact</Button>
              </a>
              <div className="transform transition-transform duration-200 hover:scale-105">
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    color="transparent"
                    borderColor="white"
                    icon={<IoMdDownload size={20} />}
                  >
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
};
