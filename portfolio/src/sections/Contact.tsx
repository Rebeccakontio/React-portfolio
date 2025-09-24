import { Button } from "@/components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import FadeIn from "@/components/ScrollTrigger";

export const Contact = () => {
  return (
    <div className="container lg:pt-12 lg:pb-20">
      <FadeIn>
        <div className="bg-gradient-to-r from-emerald-500 to-sky-400 text-gray-900 py-8 px-16
        rounded-3xl text-center relative overflow-hidden z-0">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center  md:justify-between">
            <div>
              <h2 className="font-bold text-3xl md:text-5xl md:text-left">Say Hi</h2>
              <p className="mt-4 text-gray-900 md:text-left">
                I am always open to discussing new projects and opportunities.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="mailto:kontiorebecca@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="transparent" icon={<FiArrowUpRight size={20} />}>
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
