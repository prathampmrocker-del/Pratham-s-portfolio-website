import React from 'react';

interface HeaderProps {
  onOpenTerminal: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal, onOpenContact }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-[#0f131c]/85 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-2xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Left: Terminal Toggle & Brand */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenTerminal}
            aria-label="Open developer terminal"
            title="Open Interactive Developer Terminal"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-1 focus:ring-primary/40 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">terminal</span>
          </button>
          
          <div className="flex flex-col">
            <span className="font-semibold text-[1.125rem] tracking-tight text-on-surface leading-none font-display">
              PRATHAM P.M.
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              <span className="text-[0.6875rem] font-medium font-mono text-secondary tracking-wider">
                &lt;AI/DS /&gt;
              </span>
            </div>
          </div>
        </div>

        {/* Right: Status Pill & Avatar */}
        <div className="flex items-center gap-2.5">
          <div className="hidden xs:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-white/5">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="text-[0.6875rem] font-medium font-mono text-tertiary">
              Open to Internships
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            aria-label="Contact Pratham"
            title="Contact Pratham"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
