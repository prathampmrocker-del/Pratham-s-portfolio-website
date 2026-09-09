import React, { useState } from 'react';
import { portfolioContact } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [subject, setSubject] = useState('Internship Opportunity (Summer 2025/2026)');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link with encoded subject and body
    const emailBody = encodeURIComponent(
      `Hi Pratham,\n\n${message}\n\nFrom: ${senderName || 'Recruiter'}\nEmail: ${senderEmail || 'Not provided'}`
    );
    const emailSubject = encodeURIComponent(subject);
    window.location.href = `mailto:${portfolioContact.email}?subject=${emailSubject}&body=${emailBody}`;
    
    setIsSent(true);
    onShowToast('Opening email client with your drafted message!');
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-surface-container border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 border-b border-white/5 pb-3">
          <div>
            <span className="font-mono text-[0.6875rem] text-secondary font-semibold uppercase">
              Recruiter &amp; Team Connect
            </span>
            <h3 className="font-display text-[1.25rem] font-bold text-on-surface">
              Message Pratham P. Madanthyar
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer border border-white/5"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Preset Topic Buttons */}
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[0.6875rem] text-outline">Select Context:</span>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Internship Opportunity (Summer 2025/2026)',
              'Technical Collaboration',
              'Coffee Chat / Mentorship',
            ].map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSubject(topic)}
                className={`px-2.5 py-1 rounded text-[0.75rem] font-mono transition-colors cursor-pointer border ${
                  subject === topic
                    ? 'bg-primary text-on-primary font-semibold border-primary'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface border-white/5'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[0.6875rem] font-mono text-outline mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Jane Doe (Tech Recruiter)"
                className="w-full px-3 py-2 rounded-lg bg-surface-container-high border border-white/10 text-on-surface text-[0.875rem] font-body focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-[0.6875rem] font-mono text-outline mb-1">
                Your Email
              </label>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="recruiter@company.com"
                className="w-full px-3 py-2 rounded-lg bg-surface-container-high border border-white/10 text-on-surface text-[0.875rem] font-body focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-[0.6875rem] font-mono text-outline mb-1">
              Message Note
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Pratham, we came across your AI & DS profile at REVA University and would love to chat about our upcoming summer internship..."
              className="w-full px-3 py-2 rounded-lg bg-surface-container-high border border-white/10 text-on-surface text-[0.875rem] font-body focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-mono text-[0.8125rem] border border-white/5 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-on-primary font-mono text-[0.8125rem] font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>{isSent ? 'Draft Launched!' : 'Send via Email'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
