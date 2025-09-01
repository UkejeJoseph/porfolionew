import { useState } from "react";
import { projects, Project } from "@/data/projects";
import { certifications } from "@/data/certifications";
import ProjectCard from "@/components/project-card";
import CertificationCard from "@/components/certification-card";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-design' | 'web-development'>('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web-design', label: 'Web design' },
    { id: 'web-development', label: 'Web development' }
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="text-muted-foreground text-sm mb-8" data-testid="page-views-projects">
          (312 views)
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
