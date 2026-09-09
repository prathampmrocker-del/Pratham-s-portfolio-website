import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';

interface CertificationsSectionProps {
  onViewCertificate: (cert: Certification) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onViewCertificate,
}) => {
  const cert = certificationsData[0];

  return (
    <section id="certifications" className="flex flex-col px-4 py-8 bg-surface">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-[0.8125rem] text-secondary tracking-widest font-semibold">
          05. //
        </span>
        <h2 className="font-display text-[1.5rem] font-semibold text-on-surface tracking-tight">
          Certifications
        </h2>
      </div>

      <div className="flex flex-col p-4 rounded-xl bg-surface-container border border-white/5 shadow-sm hover:border-white/10 transition-all">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col">
            <span className="font-mono text-[0.6875rem] text-secondary font-semibold">
              ISSUER: {cert.issuer}
            </span>
            <h3 className="font-display text-[1.25rem] font-semibold text-on-surface mt-0.5">
              {cert.title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
          </div>
        </div>

        {/* Editable Placeholder Meta Box */}
        <div className="flex flex-col gap-2 mt-4 p-3 rounded-lg bg-surface-container-high border border-white/5">
          <div className="flex justify-between items-center text-[0.6875rem] font-mono">
            <span className="text-outline">Date:</span>
            <span className="text-on-surface-variant">{cert.issueDate}</span>
          </div>
          <div className="flex justify-between items-center text-[0.6875rem] font-mono">
            <span className="text-outline">Credential ID:</span>
            <span className="text-on-surface-variant">{cert.credentialId}</span>
          </div>
          <div className="flex justify-between items-center text-[0.6875rem] font-mono">
            <span className="text-outline">Verify URL:</span>
            <span className="text-secondary">{cert.verifyUrl}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onViewCertificate(cert)}
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container-high text-primary hover:bg-surface-bright active:scale-[0.99] font-mono text-[0.8125rem] font-semibold transition-all border border-white/5 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
          <span>View Certificate</span>
        </button>
      </div>
    </section>
  );
};
