import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import { cn } from "@/lib/utils";
import LiveVisitors from "@/components/ui/live-visitors";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-development' | 'ai-ml' | 'blockchain'>('all');

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' || project.category === activeFilter
  );

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'ai-ml', label: 'AI / ML' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <LiveVisitors />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              data-testid={`filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id as any)}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
