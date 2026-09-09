import React from 'react';
import { portfolioContact } from '../data/portfolioData';

interface HeroSectionProps {
  onViewProjects: () => void;
  onContactClick: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewProjects,
  onContactClick,
  onCopyText,
}) => {
  return (
    <section
      id="overview"
      className="flex flex-col px-4 py-8 relative overflow-hidden bg-surface-container-lowest"
    >
      {/* Ambient Radial Glows */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-56 h-56 rounded-full bg-primary-container/10 blur-2xl pointer-events-none" />

      <div className="flex flex-col gap-4 relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-high border border-white/5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-mono text-[0.6875rem] font-medium text-tertiary">
            Open for Summer 2025/2026 Internships
          </span>
        </div>

        {/* Identity */}
        <div className="flex flex-col gap-1 mt-1">
          <span className="font-mono text-[0.75rem] text-secondary tracking-widest uppercase font-medium">
            &lt;Student Developer /&gt;
          </span>
          <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] font-bold text-on-surface tracking-tight leading-none mt-1">
            PRATHAM P. <span className="text-primary">MADANTHYAR</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-mono text-[0.8125rem] text-secondary border border-white/5">
              B.Tech – Artificial Intelligence &amp; Data Science
            </span>
          </div>
        </div>

        {/* University Pill */}
        <div className="flex items-center gap-2 text-on-surface-variant font-mono text-[0.8125rem]">
          <span className="material-symbols-outlined text-[18px] text-primary">school</span>
          <span>REVA University, Bengaluru</span>
        </div>

        {/* Intro Paragraph */}
        <p className="font-body text-[0.9375rem] text-on-surface-variant leading-relaxed">
          Motivated AI &amp; Data Science student passionate about programming, artificial
          intelligence, databases and data-driven problem solving. Currently building strong
          technical foundations through hands-on learning and projects.
        </p>

        {/* Quick Contact Pills */}
        <div className="flex flex-col gap-2 mt-1">
          {/* Location */}
          <div
            onClick={() => onCopyText(portfolioContact.location, 'Location')}
            className="group flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high font-mono text-[0.75rem] text-on-surface-variant cursor-pointer transition-colors border border-white/5"
            title="Click to copy location"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                location_on
              </span>
              <span>{portfolioContact.location}</span>
            </div>
            <span className="material-symbols-outlined text-[14px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
              content_copy
            </span>
          </div>

          {/* Email */}
          <div className="group flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high font-mono text-[0.75rem] text-on-surface-variant transition-colors border border-white/5">
            <a
              href={`mailto:${portfolioContact.email}`}
              className="flex items-center gap-2.5 hover:text-primary transition-colors flex-1 truncate"
            >
              <span className="material-symbols-outlined text-[16px] text-primary shrink-0">
                mail
              </span>
              <span className="truncate">{portfolioContact.email}</span>
            </a>
            <button
              type="button"
              onClick={() => onCopyText(portfolioContact.email, 'Email')}
              className="p-1 hover:text-primary transition-colors cursor-pointer"
              title="Copy email address"
            >
              <span className="material-symbols-outlined text-[14px] text-outline hover:text-primary">
                content_copy
              </span>
            </button>
          </div>

          {/* Phone */}
          <div className="group flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high font-mono text-[0.75rem] text-on-surface-variant transition-colors border border-white/5">
            <a
              href={`tel:${portfolioContact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 hover:text-tertiary transition-colors flex-1"
            >
              <span className="material-symbols-outlined text-[16px] text-tertiary">call</span>
              <span>{portfolioContact.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => onCopyText(portfolioContact.phone, 'Phone number')}
              className="p-1 hover:text-tertiary transition-colors cursor-pointer"
              title="Copy phone number"
            >
              <span className="material-symbols-outlined text-[14px] text-outline hover:text-tertiary">
                content_copy
              </span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={onViewProjects}
            className="flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-on-primary font-medium text-[0.9375rem] text-center transition-all hover:opacity-90 active:scale-[0.98] shadow-md cursor-pointer"
          >
            <span>View Projects</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
          <button
            type="button"
            onClick={onContactClick}
            className="flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container-high text-primary font-medium text-[0.9375rem] text-center transition-all hover:bg-surface-bright active:scale-[0.98] border border-white/5 cursor-pointer"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>

        {/* Dev Social Links */}
        <div className="flex items-center gap-3 pt-2">
          <span className="font-mono text-[0.6875rem] text-outline font-medium">PROFILES //</span>
          <a
            href={portfolioContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-container-high font-mono text-[0.6875rem] text-on-surface hover:text-secondary transition-colors border border-white/5"
          >
            <span className="material-symbols-outlined text-[16px]">account_box</span>
            <span>LinkedIn</span>
          </a>
          <a
            href={portfolioContact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-container-high font-mono text-[0.6875rem] text-on-surface hover:text-secondary transition-colors border border-white/5"
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
