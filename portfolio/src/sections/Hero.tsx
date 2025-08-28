import Image from "next/image";
import selfie from "@/assets/images/IMG_2509.png";
import ArroDown from "@/assets/icons/arrow-down.svg";

export const Hero = () => {

  return (
    <div className="py-28 md:py-28 lg:py-30">
      <div className="container">
        <div className="flex flex-col items-center">
        <Image
          src={selfie}
          alt="photo of myself"
          className="rounded-full w-40 h-40 object-cover"
        />
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">FrontEnd Developer And Designer</h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        I am a passionate web developer with a focus on creating intuitive and
        engaging user experiences. My goal is to build applications that not
        only look great but also function seamlessly.
      </p>
      </div>
      <div className="flex flex-col items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full">
          <span className="font-semibold font-sm"> See my projects </span>
          <ArroDown className="size-4"/>
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};
