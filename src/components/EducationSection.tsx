import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="flex flex-col px-4 py-8 bg-surface-container-lowest"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-[0.8125rem] text-secondary tracking-widest font-semibold">
          04. //
        </span>
        <h2 className="font-display text-[1.5rem] font-semibold text-on-surface tracking-tight">
          Education
        </h2>
      </div>

      <div className="flex flex-col p-4 rounded-xl bg-surface-container border border-white/5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-0.5 rounded bg-surface-container-high font-mono text-[0.6875rem] text-tertiary border border-white/5 font-medium">
            Currently Pursuing
          </span>
          <span className="font-mono text-[0.6875rem] text-outline font-medium">
            Undergraduate
          </span>
        </div>

        <h3 className="font-display text-[1.25rem] font-semibold text-on-surface">
          REVA University
        </h3>
        <p className="font-mono text-[0.8125rem] text-primary mt-0.5 font-medium">
          B.Tech – Artificial Intelligence &amp; Data Science
        </p>

        <div className="flex items-center gap-2 mt-2 text-on-surface-variant font-mono text-[0.75rem]">
          <span className="material-symbols-outlined text-[16px] text-secondary">
            location_on
          </span>
          <span>Bengaluru, Karnataka, India</span>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-surface-container-low border border-white/5 flex flex-col gap-1.5">
          <span className="font-mono text-[0.6875rem] text-on-surface-variant uppercase tracking-wider font-semibold">
            Relevant Academic Focus:
          </span>
          <p className="font-body text-[0.8125rem] text-on-surface leading-relaxed">
            Active coursework focusing on Data Structures, Artificial Intelligence, Database
            Management Systems, and Object-Oriented Programming principles.
          </p>
        </div>
      </div>
    </section>
  );
};
