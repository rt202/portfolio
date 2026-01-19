import { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
  contentClassName
}: SectionProps) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 ${className ?? ""}`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-20 lg:py-24 transition-all duration-700 motion-reduce:transition-none ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0"
        } ${contentClassName ?? ""}`}
      >
        {title ? (
          <div className="mb-10">
            {subtitle ? (
              <p className="text-accent text-sm uppercase tracking-[0.3em]">
                {subtitle}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
              {title}
            </h2>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
};
