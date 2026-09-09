import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenGithub: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenGithub,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-surface-container border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-2 border-b border-white/5 pb-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[0.75rem] text-secondary font-semibold">
                {project.projectCode}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-highest font-mono text-[0.6875rem] text-primary border border-white/5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {project.status}
              </span>
            </div>
            <h3 className="font-display text-[1.25rem] font-bold text-on-surface">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer border border-white/5"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Overview */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.6875rem] uppercase text-secondary tracking-wider font-semibold">
            Architecture &amp; Vision
          </span>
          <p className="font-body text-[0.9375rem] text-on-surface-variant leading-relaxed">
            {project.details?.overview || project.description}
          </p>
        </div>

        {/* Objectives */}
        {project.details?.objectives && (
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[0.6875rem] uppercase text-outline tracking-wider font-semibold">
              Key Engineering Milestones
            </span>
            <ul className="flex flex-col gap-1.5">
              {project.details.objectives.map((obj, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-[0.875rem] text-on-surface font-body"
                >
                  <span className="material-symbols-outlined text-tertiary text-[16px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Planned Stack */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.6875rem] uppercase text-outline tracking-wider font-semibold">
            Planned Technologies
          </span>
          <div className="flex flex-wrap gap-1.5">
            {(project.details?.plannedTech || project.tags).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-surface-container-high font-mono text-[0.75rem] text-primary border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline Status */}
        {project.details?.timeline && (
          <div className="p-3 rounded-lg bg-surface-container-low border border-white/5 flex items-center justify-between font-mono text-[0.75rem]">
            <span className="text-outline">Roadmap Target:</span>
            <span className="text-secondary font-medium">{project.details.timeline}</span>
          </div>
        )}

        {/* Modal Action Buttons */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          <button
            type="button"
            onClick={() => onOpenGithub(project)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-mono text-[0.8125rem] font-medium border border-white/5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>Check Git Repo</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-on-primary font-mono text-[0.8125rem] font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-md"
          >
            <span>Close Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
