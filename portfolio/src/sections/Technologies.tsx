import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpo,
  SiMongodb,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import FigmaIcon from "@/assets/icons/Figma.svg";
import FadeIn from "@/components/ScrollTrigger";

export const Technologies = () => {
  const techStack = [
    { Icon: SiReact, label: "React", color: "#61DAFB" },
    { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
    { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
    { Icon: SiReact, label: "React Native", color: "#61DAFB" },
    { Icon: SiCss3, label: "CSS3", color: "#1572B6" },
    { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
    { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
    { Icon: FigmaIcon, label: "Figma", color: "#7C3AED" },
    { Icon: SiExpo, label: "Expo", color: "#ffffff" },
    { Icon: SiGithub, label: "GitHub", color: "#ffffff" },
  ];

  return (
    <div className="container py-16">
      <FadeIn>
        <h2 className="font-bold text-3xl md:text-5xl text-center text-white">
          Technologies I Use
        </h2>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {techStack.map(({ Icon, label, color }, i) => (
            <FadeIn key={label} scroll={false} bounce bounceDelay={(i % 2) + 1}>
              <div
                className="flex flex-col items-center border-2 rounded-xl p-4 transition"
                style={{
                  borderColor: color,
                }}
              >
                <Icon className="w-16 h-16" style={{ color }} />
                <span className="mt-2 text-sm text-center" style={{ color }}>
                  {label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};
