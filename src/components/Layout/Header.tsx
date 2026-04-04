import { useEffect, useState } from "react";
import { siteConfig } from "../../config/siteConfig";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "demos", label: "Demos", href: "#demos" }
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020314]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-white">
          {siteConfig.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.links.mlPrepUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-purple-500/40 px-4 py-2 text-sm font-medium text-purple-300 transition-colors hover:border-purple-400 hover:text-white"
          >
            ML Prep
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-purple-500"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-[#020314]/95 backdrop-blur-md px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.links.mlPrepUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-purple-300 hover:text-white"
            >
              ML Prep
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
