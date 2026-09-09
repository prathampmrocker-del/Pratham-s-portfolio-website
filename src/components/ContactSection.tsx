import React from 'react';
import { portfolioContact } from '../data/portfolioData';

interface ContactSectionProps {
  onEmailMeClick: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onEmailMeClick,
  onCopyText,
}) => {
  return (
    <section id="contact" className="flex flex-col px-4 py-8 bg-surface">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-[0.8125rem] text-secondary tracking-widest font-semibold">
          07. //
        </span>
        <h2 className="font-display text-[1.5rem] font-semibold text-on-surface tracking-tight">
          Let's Connect
        </h2>
      </div>

      {/* Warm Recruiter Statement */}
      <div className="p-4 rounded-xl bg-surface-container border border-white/5 shadow-sm mb-4">
        <p className="font-body text-[1.0625rem] text-on-surface font-medium leading-snug">
          Interested in technology, learning and building meaningful projects. Feel free to connect with me.
        </p>
      </div>

      {/* Direct Contact Actions */}
      <div className="flex flex-col gap-2.5 mb-6">
        {/* Email */}
        <div className="group flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-bright transition-colors border border-white/5">
          <a
            href={`mailto:${portfolioContact.email}`}
            className="flex items-center gap-3 flex-1 min-w-0"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[22px]">mail</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[0.6875rem] text-outline">Email</span>
              <span className="font-body text-[0.9375rem] text-on-surface font-medium truncate">
                {portfolioContact.email}
              </span>
            </div>
          </a>
          <button
            type="button"
            onClick={() => onCopyText(portfolioContact.email, 'Email')}
            className="p-2 text-outline hover:text-primary transition-colors cursor-pointer"
            title="Copy email"
          >
            <span className="material-symbols-outlined text-[20px]">content_copy</span>
          </button>
        </div>

        {/* Phone */}
        <div className="group flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-bright transition-colors border border-white/5">
          <a
            href={`tel:${portfolioContact.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 flex-1 min-w-0"
          >
            <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
              <span className="material-symbols-outlined text-[22px]">call</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[0.6875rem] text-outline">Phone</span>
              <span className="font-body text-[0.9375rem] text-on-surface font-medium truncate">
                {portfolioContact.phone}
              </span>
            </div>
          </a>
          <button
            type="button"
            onClick={() => onCopyText(portfolioContact.phone, 'Phone')}
            className="p-2 text-outline hover:text-tertiary transition-colors cursor-pointer"
            title="Copy phone"
          >
            <span className="material-symbols-outlined text-[20px]">content_copy</span>
          </button>
        </div>

        {/* Location */}
        <div
          onClick={() => onCopyText(portfolioContact.location, 'Location')}
          className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-bright transition-colors border border-white/5 cursor-pointer"
          title="Click to copy location"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[22px]">pin_drop</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[0.6875rem] text-outline">Location</span>
              <span className="font-body text-[0.9375rem] text-on-surface font-medium">
                {portfolioContact.location}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline text-[18px]">
            content_copy
          </span>
        </div>
      </div>

      {/* Quick Action Links */}
      <div className="flex flex-col gap-2 mb-10">
        <button
          type="button"
          onClick={onEmailMeClick}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-on-primary font-body text-[0.9375rem] font-semibold text-center hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-md"
        >
          <span className="material-symbols-outlined text-[20px]">send</span>
          <span>Email Me</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={portfolioContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:text-secondary font-mono text-[0.75rem] font-medium hover:bg-surface-bright transition-colors border border-white/5"
          >
            <span className="material-symbols-outlined text-[18px]">account_box</span>
            <span>LinkedIn Profile</span>
          </a>
          <a
            href={portfolioContact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:text-secondary font-mono text-[0.75rem] font-medium hover:bg-surface-bright transition-colors border border-white/5"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>

      {/* Footer Colophon */}
      <footer className="pt-6 border-t border-white/5 flex flex-col items-center justify-center text-center gap-1.5">
        <span className="font-mono text-[0.6875rem] text-outline">
          © 2026 Pratham P. Madanthyar
        </span>
        <span className="font-mono text-[0.6875rem] text-outline-variant">
          Designed with modern developer aesthetics
        </span>
      </footer>
    </section>
  );
};
