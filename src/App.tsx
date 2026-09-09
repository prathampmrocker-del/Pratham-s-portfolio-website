import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { CurrentlyLearningSection } from './components/CurrentlyLearningSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { TerminalModal } from './components/TerminalModal';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';
import { Project, Certification } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyText = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => showToast(`Copied ${label} to clipboard!`),
        () => showToast(`Selected: ${text}`)
      );
    } else {
      showToast(`Selected: ${text}`);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    let targetElementId = sectionId;
    if (sectionId === 'journey') {
      targetElementId = 'education';
    } else if (sectionId === 'overview') {
      targetElementId = 'overview';
    }

    const element = document.getElementById(targetElementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      const contactEl = document.getElementById('contact');
      const eduEl = document.getElementById('education');
      const projectsEl = document.getElementById('projects');
      const skillsEl = document.getElementById('skills');

      if (contactEl && scrollY >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (eduEl && scrollY >= eduEl.offsetTop) {
        setActiveSection('journey');
      } else if (projectsEl && scrollY >= projectsEl.offsetTop) {
        setActiveSection('projects');
      } else if (skillsEl && scrollY >= skillsEl.offsetTop) {
        setActiveSection('skills');
      } else {
        setActiveSection('overview');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e17] flex justify-center text-on-surface selection:bg-primary-container selection:text-on-primary-container font-body">
      {/* Container simulating high-fidelity mobile / developer workstation */}
      <div className="w-full max-w-2xl min-h-screen bg-surface flex flex-col relative shadow-2xl border-x border-white/5">
        {/* Fixed Header */}
        <Header
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface">
          {/* Section 0: Hero & Overview */}
          <HeroSection
            onViewProjects={() => scrollToSection('projects')}
            onContactClick={() => setIsContactModalOpen(true)}
            onCopyText={handleCopyText}
          />

          {/* Section 1: Profile & Career Focus */}
          <ProfileSection
            onSelectInterest={(interest) =>
              showToast(`Career Domain Focus: ${interest}`)
            }
          />

          {/* Section 2: Technical Skills */}
          <SkillsSection
            onSkillClick={(skill) =>
              showToast(`Skill: ${skill} (Active coursework & practice)`)
            }
          />

          {/* Section 3: Projects */}
          <ProjectsSection
            onViewProject={(proj) => setSelectedProject(proj)}
            onGithubClick={(proj) => {
              showToast(`Opening repository link for ${proj.projectCode}...`);
              if (proj.githubUrl) {
                window.open(proj.githubUrl, '_blank', 'noopener,noreferrer');
              }
            }}
          />

          {/* Section 4: Education */}
          <EducationSection />

          {/* Section 5: Certifications */}
          <CertificationsSection
            onViewCertificate={(cert) => setSelectedCert(cert)}
          />

          {/* Section 6: Currently Learning */}
          <CurrentlyLearningSection
            onItemClick={(name) =>
              showToast(`Learning in progress: ${name}`)
            }
          />

          {/* Section 7: Let's Connect & Footer */}
          <ContactSection
            onEmailMeClick={() => setIsContactModalOpen(true)}
            onCopyText={handleCopyText}
          />
        </main>

        {/* Fixed Bottom Navigation */}
        <BottomNav
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Modals & Overlays */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenGithub={(proj) => {
            showToast(`Opening GitHub for ${proj.projectCode}`);
            if (proj.githubUrl) {
              window.open(proj.githubUrl, '_blank', 'noopener,noreferrer');
            }
          }}
        />

        <CertificateModal
          certification={selectedCert}
          onClose={() => setSelectedCert(null)}
          onCopyText={handleCopyText}
        />

        <TerminalModal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          onNavigateSection={scrollToSection}
        />

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          onShowToast={showToast}
        />

        <Toast message={toastMessage} />
      </div>
    </div>
  );
}
