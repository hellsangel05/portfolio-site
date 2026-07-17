import Image from "next/image";
import type { PortfolioProject } from "../data/portfolio";

type ProjectMediaProps = {
  project: Pick<PortfolioProject, "image">;
  priority?: boolean;
  sizes: string;
};

export function ProjectMedia({ project, priority = false, sizes }: ProjectMediaProps) {
  if (!project.image) return null;

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
