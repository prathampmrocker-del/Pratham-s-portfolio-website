import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-highest/95 border border-primary/40 text-on-surface shadow-2xl backdrop-blur-md animate-bounce-short">
      <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
      <span className="font-mono text-[0.75rem] font-medium">{message}</span>
    </div>
  );
};
