import { siteConfig } from "../../config/siteConfig";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#020314]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {siteConfig.name}. Built with React and Vite.</p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.mlPrepUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            ML Prep
          </a>
          <a
            href="#demos"
            className="transition-colors hover:text-white"
          >
            Demos
          </a>
        </div>
      </div>
    </footer>
  );
};
