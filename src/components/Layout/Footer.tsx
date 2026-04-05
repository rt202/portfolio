import { siteConfig } from "../../config/siteConfig";

export const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      href: `mailto:${siteConfig.contact.email}`,
      label: "Email",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16v12H4z" />
          <path d="m4 8 8 6 8-6" />
        </svg>
      )
    },
    {
      href: siteConfig.contact.linkedinUrl,
      label: "LinkedIn",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.7-1.56A1.97 1.97 0 1 0 5.2 3a1.97 1.97 0 0 0 .04 3.94ZM20.44 12.9c0-3.47-1.85-5.08-4.32-5.08a3.74 3.74 0 0 0-3.36 1.85V8.5H9.38c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.05 1.88 2.58V20h3.37v-7.1Z" />
        </svg>
      )
    },
    {
      href: siteConfig.contact.githubUrl,
      label: "GitHub",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M12 .5a12 12 0 0 0-3.8 23.38c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.22 1.83 1.22 1.08 1.83 2.82 1.3 3.5.99.1-.77.42-1.3.75-1.6-2.67-.3-5.47-1.31-5.47-5.86 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.22a11.6 11.6 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.2 0 4.56-2.8 5.55-5.48 5.85.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="border-t border-white/5 bg-[#020314]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {siteConfig.name}. Built with React and Vite.</p>
        <div className="flex items-center gap-3">
          <a
            href={socialLinks[0].href}
            className="transition-colors hover:text-white"
            aria-label={socialLinks[0].label}
          >
            {siteConfig.contact.email}
          </a>
          <span className="text-white/10">|</span>
          {socialLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="text-gray-400 transition-colors hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
