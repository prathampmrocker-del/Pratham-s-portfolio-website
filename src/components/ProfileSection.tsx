import React from 'react';
import { careerInterests } from '../data/portfolioData';

interface ProfileSectionProps {
  onSelectInterest?: (interest: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onSelectInterest }) => {
  return (
    <section id="profile" className="flex flex-col px-4 py-8 bg-surface">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-[0.8125rem] text-secondary tracking-widest font-semibold">
          01. //
        </span>
        <h2 className="font-display text-[1.5rem] font-semibold text-on-surface tracking-tight">
          Profile
        </h2>
      </div>

      {/* Intro Card */}
      <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface-container-low border border-white/5 shadow-sm mb-4">
        <p className="font-body text-[0.9375rem] text-on-surface-variant leading-relaxed">
          Pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at REVA
          University, Bengaluru. Deeply focused on solidifying competencies across structured
          programming, database paradigms, data analysis, and emerging machine intelligence
          workflows.
        </p>
        <div className="flex items-center gap-2 text-tertiary font-mono text-[0.75rem] pt-1">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span>Foundational Engineering &amp; Applied Problem Solving</span>
        </div>
      </div>

      {/* Career Focus Card */}
      <div className="flex flex-col p-4 rounded-xl bg-surface-container border border-white/5 shadow-sm">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">explore</span>
            <h3 className="font-display text-[1.125rem] font-semibold text-on-surface">
              Career Focus
            </h3>
          </div>
          <span className="font-mono text-[0.6875rem] text-outline uppercase tracking-wider font-medium">
            Interested In
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {careerInterests.map((interest) => (
            <div
              key={interest.title}
              onClick={() => onSelectInterest?.(interest.title)}
              className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright transition-colors border border-white/5 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-[18px] ${interest.color}`}>
                  {interest.icon}
                </span>
                <span className="font-body text-[0.9375rem] text-on-surface font-medium">
                  {interest.title}
                </span>
              </div>
              <span className="material-symbols-outlined text-outline text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
