import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Button } from "@/components/Button";
import { projects } from "@/data/projectcard";
import { Card } from "@/components/Card";
import FadeIn from "@/components/ScrollTrigger";

export const Projects = () => {
  return (
    <section id="projects" className="container py-16">
      <FadeIn>
        <h2 className="font-bold text-3xl md:text-5xl text-center">
          My Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-xl mx-auto text-white/90 mt-6">
          See what I have recently worked on
        </p>
      </FadeIn>
      <div className="flex flex-col md:mt-20 gap-20 mt-8">
        {projects.map((project) => (
          <FadeIn key={project.title}>
          <Card>
            <div>
              <div className="text-cyan-400 inline-flex gap-2 font-bold uppercase tracking-widest bg-clip-text mt-8">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-semibold text-2xl mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <p className="my-4 text-white/90">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white/30 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button icon={<ArrowUpRightIcon />} color="white">
                  View more
                </Button>
              </a>
            </div>
            <div>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-mb-0 lg:-mt-40 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
              />
            </div>
          </Card>
        </FadeIn>
        ))}
      </div>
    </section>
  );
};
