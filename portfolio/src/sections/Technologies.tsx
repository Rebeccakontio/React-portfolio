import ReactIcon from "@/assets/icons/React.svg";
import TypeScriptIcon from "@/assets/icons/TypeScript.svg";
import TailwindIcon from "@/assets/icons/TailwindCSS.svg";
import FigmaIcon from "@/assets/icons/Figma.svg";
import CssIcon from "@/assets/icons/CSS3.svg";
import HTMLIcon from "@/assets/icons/HTML5.svg";
import ExpoIcon from "@/assets/icons/expo.svg";
import JavaScriptIcon from "@/assets/icons/JavaScript.svg";
import GithubIcon from "@/assets/icons/GitHub.svg";
import VSCodeIcon from "@/assets/icons/VScode.svg";
import MongoDBIcon from "@/assets/icons/MongoDB.svg";
import FadeIn from "@/components/ScrollTrigger";

export const Technologies = () => {
  return (
    <div className="container py-16">
      <FadeIn>
        <h2 className="font-bold text-3xl md:text-5xl text-center">
          Technologies I Use
        </h2>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <FadeIn scroll={false} bounce bounceDelay={1}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <ReactIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">React</span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={2}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <TypeScriptIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">
                TypeScript
              </span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={1}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <TailwindIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">
                Tailwind CSS
              </span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={2}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <ReactIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">
                React Native
              </span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={1}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <CssIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">CSS3</span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={2}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <HTMLIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">HTML5</span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={1}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <JavaScriptIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">
                JavaScript
              </span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={2}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <MongoDBIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">
                MongoDB
              </span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={1}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <FigmaIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">Figma</span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={2}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <ExpoIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">Expo</span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={1}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <VSCodeIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">
                VS Code
              </span>
            </div>
          </FadeIn>
          <FadeIn scroll={false} bounce bounceDelay={2}>
            <div className="flex flex-col items-center border-2 border-white/30 rounded-xl p-4">
              <GithubIcon className="w-16 h-16" />
              <span className="mt-2 text-white text-sm text-center">
                GitHub
              </span>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </div>
  );
};
