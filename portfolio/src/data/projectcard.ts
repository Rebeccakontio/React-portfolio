import VLHealthClinicPage from "@/assets/images/vlhealthclinic.png";
import IKJryPage from "@/assets/images/ikjry.png";
import PortfolioPage from "@/assets/images/portfolio.png";

import type { StaticImageData } from "next/image";

interface ProjectCard {
  company: string;
  year: string;
  image: StaticImageData;
  technologies: string[];
  link: string;
  title: string;
  description: string;
}

export const projects: ProjectCard[] = [
  {
    company: "Personal project",
    year: "2025",
    title: "My portfolio",
    description:
      "My personal portfolio to showcase my experience and skills. Enter the source code by clicking the button below.",
    link: "https://github.com/Rebeccakontio/React-portfolio",
    image: PortfolioPage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "GSAP"],
  },

  {
    company: "VL Health Clinic",
    year: "2025",
    title: "VL Health Clinic",
    description:
      "My first freelance work made for a beauty clinic company. Designed and developed a full WordPress website/online store with booking and multiple pages. Learned a lot about client communication, project management, SEO optimization and how to make an online store.",
    link: "https://vlhealthclinic.fi/",
    image: VLHealthClinicPage,
    technologies: ["Wordpress", "Woocommerce", "Elementor"],
  },
  {
    company: "The Firma",
    year: "2024",
    title: "The Association of Engineering Education Directors",
    description:
      "My first WordPress Website project for engineering association made independently. Goal was to update the existing website's design and content to this day, and add membership/contact forms. I got free hands redesigning and developing the website.",
    link: "https://www.insinoorikoulutusjohtajat.fi/?lang=en",
    image: IKJryPage,
    technologies: ["Wordpress", "Woocommerce", "Elementor"],
  },
];