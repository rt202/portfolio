import { siteConfig } from "../../config/siteConfig";
import { useInView } from "../../hooks/useInView";

/**
 * About Section - Profile picture and bio
 * Uses: siteConfig.about (profileImage, description, skills)
 * Update the about copy or skills list in src/config/siteConfig.ts
 */
export const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-[#030318] py-24"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            About Me
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Background
          </h2>
        </div>

        {/* Content */}
        <div
          className={`mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Profile picture */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-600/30 to-indigo-600/30 blur-2xl" />
              <img
                src={siteConfig.about.profileImage}
                alt={`${siteConfig.name} profile`}
                className="relative h-48 w-48 rounded-full border-4 border-purple-500/30 object-cover shadow-2xl sm:h-56 sm:w-56"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg leading-relaxed text-gray-300">
              {siteConfig.about.description}
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Skills & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {siteConfig.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
