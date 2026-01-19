import { siteConfig } from "../../config/siteConfig";
import { Section } from "../common/Section";

// Uses siteConfig.contact and siteConfig.socials for labels.
// Update contact links and text in src/config/siteConfig.ts.
export const Contact = () => {
  return (
    <Section
      id="contact"
      title={siteConfig.contact.heading}
      subtitle="Contact"
      className="bg-surface/30"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-base text-text-muted">
          {siteConfig.contact.message}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-white"
          >
            {siteConfig.socials.emailLabel}
          </a>
          <a
            href={siteConfig.contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-white"
          >
            {siteConfig.socials.linkedinLabel}
          </a>
          <a
            href={siteConfig.contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-white"
          >
            {siteConfig.socials.githubLabel}
          </a>
        </div>
      </div>
    </Section>
  );
};
