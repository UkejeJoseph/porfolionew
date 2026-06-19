import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-transparent border border-foreground/10 rounded-2xl overflow-hidden hover:border-foreground/25 hover:shadow-lg transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${project.id}`}>
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge" data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
              {tech}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            data-testid={`link-github-${project.id}`}
            className="text-sm text-muted-foreground hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub {project.isPrivate && "(Private)"}
          </a>
          <a
            href={project.liveUrl}
            data-testid={`link-live-${project.id}`}
            className="text-sm text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
