import VLHealthClinicPage from "@/assets/images/vlhealthclinic.png";
import IKJryPage from "@/assets/images/ikjry.png";

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
    title: "React Native application",
    description:
      "My personal portfolio built with React, TypeScript, Taiwind CSS, Next.js, GSAP and framer motion.",
    link: "reactnative-application",
    image: IKJryPage,
    technologies: [
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Axios",
    ],
  },
  {
    company: "Portfolio",
    year: "2025",
    title: "My React portfolio",
    description: "Enhanced user experience by 40%",
    link: "portfolio-website",
    image: VLHealthClinicPage,
    technologies: [
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Axios",
    ],
  },
  {
    company: "VL Health Clinic",
    year: "2025",
    title: "VL Health Clinic",
    description:
      "My first bigger project made independently. Designed and developed a full Wordpress website with online shop for health clinic.",
    link: "https://vlhealthclinic.fi/",
    image: VLHealthClinicPage,
    technologies: ["Wordpress", "Woocommerce", "Elementor"],
  },
  {
    company: "The Firma",
    year: "2024",
    title: "The Association of Engineering Education Directors",
    description:
      "Website for engineering association made by myself. I got free hands redesigning and developing new look.",
    link: "https://www.insinoorikoulutusjohtajat.fi/?lang=en",
    image: IKJryPage,
    technologies: ["Wordpress", "Woocommerce", "Elementor"],
  },
];