import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onViewProject: (project: Project) => void;
  onGithubClick: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onViewProject,
  onGithubClick,
}) => {
  return (
    <section id="projects" className="flex flex-col px-4 py-8 bg-surface">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-[0.8125rem] text-secondary tracking-widest font-semibold">
          03. //
        </span>
        <h2 className="font-display text-[1.5rem] font-semibold text-on-surface tracking-tight">
          Projects
        </h2>
      </div>
      <p className="font-body text-[0.8125rem] text-on-surface-variant mb-4">
        Foundational student builds &amp; upcoming development architecture.
      </p>

      <div className="flex flex-col gap-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col p-4 rounded-xl bg-surface-container border border-white/5 shadow-md hover:border-primary/20 transition-all"
          >
            {/* Top Bar: Project code & Status */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[0.75rem] text-secondary font-semibold">
                {project.projectCode}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-highest font-mono text-[0.6875rem] text-primary font-medium border border-white/5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-[1.125rem] font-semibold text-on-surface">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-body text-[0.9375rem] text-on-surface-variant mt-2 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-surface-container-high font-mono text-[0.6875rem] text-primary border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
              <button
                type="button"
                onClick={() => onGithubClick(project)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-mono text-[0.75rem] font-medium hover:bg-surface-bright active:scale-[0.98] transition-all cursor-pointer border border-white/5"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub</span>
              </button>
              <button
                type="button"
                onClick={() => onViewProject(project)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-primary text-on-primary font-mono text-[0.75rem] font-semibold hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>View Project</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
