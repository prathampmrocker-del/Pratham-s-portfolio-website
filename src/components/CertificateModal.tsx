import React from 'react';
import { Certification } from '../types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  onClose,
  onCopyText,
}) => {
  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-surface-container border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 border-b border-white/5 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-md">
              <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
            </div>
            <div>
              <span className="font-mono text-[0.6875rem] text-secondary font-semibold uppercase">
                Official Credential Verification
              </span>
              <h3 className="font-display text-[1.25rem] font-bold text-on-surface">
                {certification.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer border border-white/5"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Certificate Card Body */}
        <div className="p-4 rounded-xl bg-surface-container-low border border-white/5 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[0.8125rem] font-mono border-b border-white/5 pb-2">
            <span className="text-outline">Issuer Organization:</span>
            <span className="text-primary font-semibold">{certification.issuer}</span>
          </div>
          <div className="flex justify-between items-center text-[0.8125rem] font-mono border-b border-white/5 pb-2">
            <span className="text-outline">Status:</span>
            <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              Verified / In Progress
            </span>
          </div>
          <div className="flex justify-between items-center text-[0.8125rem] font-mono border-b border-white/5 pb-2">
            <span className="text-outline">Credential ID:</span>
            <span className="text-on-surface-variant font-mono">{certification.credentialId}</span>
          </div>
          <div className="flex justify-between items-center text-[0.8125rem] font-mono">
            <span className="text-outline">Recipient:</span>
            <span className="text-on-surface font-semibold">Pratham P. Madanthyar</span>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.6875rem] uppercase text-outline tracking-wider font-semibold">
            Key Competencies Validated
          </span>
          <div className="grid grid-cols-1 gap-1.5">
            {certification.skillsLearned.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-high text-[0.8125rem] font-mono text-on-surface border border-white/5"
              >
                <span className="material-symbols-outlined text-primary text-[16px]">check</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          <button
            type="button"
            onClick={() => onCopyText(certification.title, 'Certificate Name')}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-mono text-[0.8125rem] font-medium border border-white/5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">content_copy</span>
            <span>Copy Info</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-on-primary font-mono text-[0.8125rem] font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-md"
          >
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
};
