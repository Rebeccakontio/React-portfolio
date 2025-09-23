import FadeIn from "@/components/ScrollTrigger";

const experienceInfo = [
  {
    company: "The Firma",
    year: "2025",
    title: "Internship Frontend Developer",
    description:
      "React native mobile application development for iOS and Android device. I implemented new features and UI components following design specifications. Got to also learn how to make translations using i18n. I implemented API integration with Axios to fetch and send data between the frontend and backend. Worked collaboratively with designers and backend developers. I learned a lot about mobile development, i18n translation, and agile methodologies.",
    technologies: [
      "React Native",
      "TypeScript",
      "NativeWind",
      "Prisma",
      "Axios",
      "Expo",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="container py-16 text-center">
      <FadeIn>
        <h2 className="font-bold text-3xl md:text-5xl text-center">
          My Experience
        </h2>
      </FadeIn>

      <div>
        <FadeIn>
          {experienceInfo.map((experience) => (
            <div key={experience.title} className="mt-8">
              <div className="text-cyan-400 inline-flex gap-2 font-bold uppercase tracking-widest bg-clip-text">
                <span>{experience.company}</span>
                <span>&bull;</span>
                <span>{experience.year}</span>
              </div>
              <h3 className="font-serif text-xl mt-2 md:text-3xl text-white/90">
                {experience.title}
              </h3>
              <hr className="border-t-2 border-white/10 mt-4 w-2/3 mx-auto" />
              <p className="mt-4 text-white/90 md:text-lg max-w-2xl mx-auto">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-800 text-white text-sm px-3 py-1 rounded-full mr-2 mt-4"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};


