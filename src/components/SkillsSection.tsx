import React from 'react';
import { skillGroups } from '../data/portfolioData';

interface SkillsSectionProps {
  onSkillClick?: (skill: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSkillClick }) => {
  return (
    <section
      id="skills"
      className="flex flex-col px-4 py-8 bg-surface-container-lowest"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-[0.8125rem] text-secondary tracking-widest font-semibold">
          02. //
        </span>
        <h2 className="font-display text-[1.5rem] font-semibold text-on-surface tracking-tight">
          Technical Skills
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="flex flex-col p-4 rounded-xl bg-surface-container border border-white/5 shadow-sm transition-all hover:border-white/10"
          >
            <div className={`flex items-center gap-2 mb-1 ${group.colorClass}`}>
              <span className="material-symbols-outlined text-[20px]">{group.icon}</span>
              <span className="font-mono text-[0.8125rem] uppercase tracking-wider font-semibold text-on-surface">
                {group.title}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {group.skills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => onSkillClick?.(skill)}
                  className={`px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright font-mono text-[0.8125rem] font-medium border border-white/5 transition-colors cursor-pointer text-left ${group.badgeClass}`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
