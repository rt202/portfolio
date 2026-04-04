import { siteConfig } from "../../config/siteConfig";

/**
 * Hero Section - Full viewport landing with animated background
 * Uses: siteConfig.hero, siteConfig.name, siteConfig.title, siteConfig.tagline
 * Update text or resume link in src/config/siteConfig.ts
 */
export const Hero = () => {
  const hasResume = Boolean(siteConfig.hero.resumeUrl);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020314] via-[#0a0d2e] to-[#1a0a2e]">
        {/* Floating orbs */}
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[100px] animate-float-slow" />
        <div
          className="absolute right-[15%] top-[30%] h-[350px] w-[350px] rounded-full bg-indigo-500/15 blur-[80px] animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[10%] left-[30%] h-[300px] w-[300px] rounded-full bg-violet-600/20 blur-[90px] animate-float-slow"
          style={{ animationDelay: "4s" }}
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial fade from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020314_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          className="text-sm font-medium uppercase tracking-[0.4em] text-purple-400 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {siteConfig.hero.intro}
        </p>

        <h1
          className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {siteConfig.name}
        </h1>

        <p
          className="mt-6 text-xl font-medium text-purple-300 sm:text-2xl opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {siteConfig.hero.subtitle}
        </p>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {siteConfig.tagline}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-purple-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
          >
            View Projects
          </a>
          <a
            href={siteConfig.links.mlPrepUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-purple-500/40 bg-purple-500/10 px-8 py-4 text-base font-semibold text-purple-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white"
          >
            Visit ML Prep
          </a>
          {hasResume && (
            <a
              href={siteConfig.hero.resumeUrl}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10"
            >
              Download Resume
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-gray-500 transition-colors hover:text-purple-400"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-gray-500 to-transparent" />
        </a>
      </div>
    </section>
  );
};
