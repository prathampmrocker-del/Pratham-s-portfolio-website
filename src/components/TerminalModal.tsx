import React, { useState, useRef, useEffect } from 'react';
import { portfolioContact, projectsData, skillGroups } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'init',
      output: (
        <div className="text-secondary">
          Welcome to Pratham's Developer Console [v1.0.4 - Bengaluru Node].
          <br />
          Type <span className="text-primary font-bold">help</span> to view available commands.
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="flex flex-col gap-1 text-[0.8125rem]">
            <span className="text-primary font-bold">Available Commands:</span>
            <div className="grid grid-cols-[110px_1fr] gap-x-2 gap-y-1 mt-1">
              <span className="text-secondary font-mono">bio</span>
              <span className="text-on-surface-variant">View student background and focus</span>
              <span className="text-secondary font-mono">skills</span>
              <span className="text-on-surface-variant">Display core technical competencies</span>
              <span className="text-secondary font-mono">projects</span>
              <span className="text-on-surface-variant">List development pipeline</span>
              <span className="text-secondary font-mono">contact</span>
              <span className="text-on-surface-variant">Print email, phone, location</span>
              <span className="text-secondary font-mono">internship</span>
              <span className="text-on-surface-variant">Check summer availability</span>
              <span className="text-secondary font-mono">clear</span>
              <span className="text-on-surface-variant">Clear terminal output</span>
              <span className="text-secondary font-mono">exit</span>
              <span className="text-on-surface-variant">Close developer terminal</span>
            </div>
          </div>
        );
        break;

      case 'bio':
        outputNode = (
          <div className="text-on-surface-variant leading-relaxed">
            <span className="text-primary font-semibold">{portfolioContact.name}</span>
            <br />
            {portfolioContact.degree} @ {portfolioContact.university}
            <br />
            Focused on machine intelligence, database architectures, and structured programming in C &amp; Python.
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="flex flex-col gap-1.5">
            {skillGroups.map((g) => (
              <div key={g.id}>
                <span className="text-secondary font-semibold">[{g.title}]</span>:{' '}
                <span className="text-on-surface">{g.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="flex flex-col gap-1.5">
            {projectsData.map((p) => (
              <div key={p.id}>
                <span className="text-tertiary font-semibold">&gt; {p.title}</span> ({p.status})
                <br />
                <span className="text-outline-variant font-mono pl-3">
                  Stack: {p.tags.join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-on-surface">
            Email: <a href={`mailto:${portfolioContact.email}`} className="text-primary underline">{portfolioContact.email}</a>
            <br />
            Phone: <span className="text-tertiary">{portfolioContact.phone}</span>
            <br />
            Location: {portfolioContact.location}
          </div>
        );
        break;

      case 'internship':
        outputNode = (
          <div className="text-tertiary">
            STATUS: Open for Summer 2025/2026 Internships.
            <br />
            Target domains: AI Engineering, Data Engineering, Software Development.
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      default:
        outputNode = (
          <div className="text-error">
            command not found: {cmd}. Type <span className="underline font-bold text-primary">help</span> for a list of commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: outputNode }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-surface-container-lowest border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm max-h-[85vh]">
        {/* Terminal Title Bar */}
        <div className="h-10 bg-surface-container flex items-center justify-between px-4 border-b border-white/5 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="text-[0.75rem] text-outline ml-2 font-mono">pratham@workstation: ~</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-outline hover:text-on-surface transition-colors cursor-pointer"
            aria-label="Close terminal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Terminal Screen */}
        <div
          ref={scrollRef}
          className="p-4 flex-1 overflow-y-auto space-y-3 min-h-[260px] max-h-[500px] text-[0.8125rem]"
        >
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-outline">
                <span className="text-secondary">$</span>
                <span className="text-on-surface font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Prompt line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 text-outline pt-1">
            <span className="text-secondary font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type command..."
              className="flex-1 bg-transparent border-none outline-none text-on-surface font-mono text-[0.8125rem] focus:ring-0"
              autoFocus
            />
          </form>
        </div>

        {/* Terminal Footer shortcuts */}
        <div className="px-4 py-2 bg-surface-container border-t border-white/5 flex flex-wrap items-center justify-between text-[0.6875rem] text-outline">
          <div className="flex items-center gap-3">
            <span>Quick:</span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateSection('skills');
              }}
              className="hover:text-primary underline cursor-pointer"
            >
              skills
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateSection('projects');
              }}
              className="hover:text-primary underline cursor-pointer"
            >
              projects
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateSection('contact');
              }}
              className="hover:text-primary underline cursor-pointer"
            >
              contact
            </button>
          </div>
          <span className="hidden sm:inline">Press Enter to execute</span>
        </div>
      </div>
    </div>
  );
};
