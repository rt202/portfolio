import { siteConfig } from "../../config/siteConfig";

// Uses siteConfig.hero, siteConfig.name, siteConfig.title, and siteConfig.tagline.
// Update hero text or resume link in src/config/siteConfig.ts.
export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-bg via-[#050622] to-bg"
    >
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl animate-float-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(124,58,237,0.12)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl text-center lg:text-left">
          <p
            className="text-sm uppercase tracking-[0.35em] text-text-muted opacity-0 animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: "0.05s" }}
          >
            {siteConfig.hero.intro}
          </p>
          <h1
            className="mt-4 text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl opacity-0 animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: "0.15s" }}
          >
            {siteConfig.name}
          </h1>
          <p
            className="mt-4 text-lg font-medium text-accent opacity-0 animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: "0.25s" }}
          >
            {siteConfig.hero.subtitle}
          </p>
          <p
            className="mt-4 text-base text-text-muted opacity-0 animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: "0.35s" }}
          >
            {siteConfig.tagline}
          </p>
          <div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start opacity-0 animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-purple-500 motion-reduce:transform-none"
            >
              View Projects
            </a>
            <a
              href={siteConfig.hero.resumeUrl}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-white hover:scale-[1.02] motion-reduce:transform-none"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-center lg:justify-start">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-text-muted transition hover:text-accent"
          >
            Scroll
            <span className="h-6 w-[1px] bg-text-muted/60 transition group-hover:bg-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};
