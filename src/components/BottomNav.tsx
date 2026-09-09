import React from 'react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'skills', label: 'Skills', icon: 'code_blocks' },
    { id: 'projects', label: 'Projects', icon: 'deployed_code' },
    { id: 'journey', label: 'Journey', icon: 'history_edu' },
    { id: 'contact', label: 'Connect', icon: 'send' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#0f131c]/90 backdrop-blur-xl border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="max-w-2xl mx-auto flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-1 transition-all rounded-lg cursor-pointer ${
                isActive
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant/80 hover:text-on-surface'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? 'scale-110 text-primary' : ''
                }`}
              >
                {item.icon}
              </span>
              <span className="text-[0.6875rem] font-mono tracking-tight leading-none">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
