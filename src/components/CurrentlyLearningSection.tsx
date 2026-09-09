import React from 'react';
import { currentlyLearningItems } from '../data/portfolioData';

interface CurrentlyLearningProps {
  onItemClick?: (name: string) => void;
}

export const CurrentlyLearningSection: React.FC<CurrentlyLearningProps> = ({ onItemClick }) => {
  return (
    <section
      id="learning"
      className="flex flex-col px-4 py-8 bg-surface-container-lowest"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-[0.8125rem] text-secondary tracking-widest font-semibold">
          06. //
        </span>
        <h2 className="font-display text-[1.5rem] font-semibold text-on-surface tracking-tight">
          Currently Learning
        </h2>
      </div>
      <p className="font-body text-[0.8125rem] text-on-surface-variant mb-4">
        Active continuous skill refinement and knowledge expansion.
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        {currentlyLearningItems.map((item) => (
          <div
            key={item.name}
            onClick={() => onItemClick?.(item.name)}
            className={`flex items-center gap-2.5 p-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors border border-white/5 cursor-pointer group ${
              item.fullWidth ? 'col-span-2' : ''
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${item.color} animate-pulse shrink-0`} />
            <span className="font-mono text-[0.8125rem] text-on-surface group-hover:text-primary transition-colors font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
