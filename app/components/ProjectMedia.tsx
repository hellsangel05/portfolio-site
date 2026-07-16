import Image from "next/image";
import type { PortfolioProject } from "../data/portfolio";

type ProjectMediaProps = {
  project: Pick<PortfolioProject, "category" | "image" | "name" | "slug">;
  priority?: boolean;
  sizes: string;
  variant?: "card" | "hero";
};

export function ProjectMedia({ project, priority = false, sizes, variant = "card" }: ProjectMediaProps) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
      />
    );
  }

  return (
    <div
      className="project-media-placeholder"
      data-project={project.slug}
      data-variant={variant}
      role="img"
      aria-label={`${project.name} project artwork. Updated product screenshots are coming soon.`}
    >
      <div className="project-media-placeholder-grid" />
      <div className="project-media-placeholder-signal" />
      <div className="project-media-placeholder-copy">
        <span>{project.category}</span>
        {variant === "hero" ? <strong>{project.name}</strong> : null}
        <small>Updated screenshots coming soon</small>
      </div>
    </div>
  );
}
