import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const Projects = () => {
  return (
    <section className="pb- lg:py-">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          My Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          See how I transformed concepts into engaging digital Experiences
        </p>
        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-[#817e62]/50
              overflow-hidden rounded-3xl 
              relative pt-8 px-8 border border-white/25
              md:pt-12 md:px-10"
            >
              <div className="flex">
                <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5 text-white/50">
                {project.results.map((result, idx) => (
                  <li key={idx}>{result.title}</li>
                ))}
              </ul>
              <a href={project.link}>
                <button
                  className="bg-white text-black h-12 w-full 
                px-6 rounded-xl font-semibold inline-flex items-center 
                justify-center gap-2 mt-8 md:w-auto"
                >
                  <span>View more</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>
              </a>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-md-0 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
