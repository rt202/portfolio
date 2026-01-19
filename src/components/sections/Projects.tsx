import { siteConfig } from "../../config/siteConfig";
import { Section } from "../common/Section";

// Uses siteConfig.projects (intro, featuredProjectId, items).
// Add or update projects in src/config/siteConfig.ts.
export const Projects = () => {
  const { items, featuredProjectId, intro } = siteConfig.projects;
  const featuredProject = items.find(
    (project) => project.id === featuredProjectId
  );
  const remainingProjects = items.filter(
    (project) => project.id !== featuredProjectId
  );

  return (
    <Section id="projects" title="Projects" subtitle="Selected Work">
      <p className="max-w-2xl text-base text-text-muted">{intro}</p>

      {featuredProject ? (
        <div className="mt-10 rounded-2xl border border-white/10 bg-surface/60 p-8 shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:border-accent/40">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
            <span className="text-accent">Featured</span>
            {featuredProject.status ? (
              <span className="rounded-full border border-accent/40 px-3 py-1 text-[10px] text-accent">
                {featuredProject.status}
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-text-primary">
            {featuredProject.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {featuredProject.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featuredProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={featuredProject.liveUrl}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-purple-500 motion-reduce:transform-none"
              target="_blank"
              rel="noreferrer"
            >
              View Details
            </a>
            <a
              href={featuredProject.githubUrl}
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-white hover:scale-[1.02] motion-reduce:transform-none"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {remainingProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-white/10 bg-surface/40 p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/30"
          >
            <div className="flex items-center justify-between text-xs text-text-muted">
              <span className="uppercase tracking-[0.2em]">Project</span>
              {project.status ? (
                <span className="rounded-full border border-accent/40 px-3 py-1 text-[10px] text-accent">
                  {project.status}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-text-primary">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                className="text-sm font-semibold text-accent transition hover:text-purple-400"
                target="_blank"
                rel="noreferrer"
              >
                View Details
              </a>
              <a
                href={project.githubUrl}
                className="text-sm font-semibold text-text-primary transition hover:text-purple-300"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
