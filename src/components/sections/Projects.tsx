import { siteConfig } from "../../config/siteConfig";
import { useInView } from "../../hooks/useInView";

/**
 * Projects Section - Grid of project cards with images
 * Uses: siteConfig.projects (intro, items with imageUrl)
 * Add or update projects in src/config/siteConfig.ts
 */
export const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { items, intro } = siteConfig.projects;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen bg-[#020314] py-24"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-indigo-900/10 blur-[100px]" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-purple-900/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {intro}
          </p>
        </div>

        {/* Project cards grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d24] transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d24] via-transparent to-transparent" />

                {/* Status badge */}
                {project.status && (
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-purple-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Details →
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-sm font-semibold text-gray-400 transition-colors hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
