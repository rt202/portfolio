import { siteConfig } from "../../config/siteConfig";
import { Section } from "../common/Section";

// Uses siteConfig.about (profileImage, description, skills).
// Update the about copy or skills list in src/config/siteConfig.ts.
export const About = () => {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Background"
      className="bg-surface/30"
    >
      <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src={siteConfig.about.profileImage}
            alt={`${siteConfig.name} profile`}
            className="h-40 w-40 rounded-full border border-white/10 object-cover shadow-xl shadow-black/40"
          />
        </div>
        <div>
          <p className="text-base leading-relaxed text-text-muted">
            {siteConfig.about.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.about.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/50 px-3 py-1 text-xs font-medium text-accent transition hover:bg-accent/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
