import { siteConfig } from "../../config/siteConfig";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-text-muted">
        © {year} {siteConfig.name}. Built with React.
      </div>
    </footer>
  );
};
