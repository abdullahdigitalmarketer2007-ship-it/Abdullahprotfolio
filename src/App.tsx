import { useState, useEffect } from 'react';
import { Language, PORTFOLIO_CONTENT, ServiceId } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedContactService, setSelectedContactService] = useState<ServiceId | 'general'>(
    'general',
  );

  const content = PORTFOLIO_CONTENT[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.meta.pageTitle;
  }, [language, content.meta.pageTitle]);

  const handleSelectServiceForContact = (serviceId: ServiceId) => {
    setSelectedContactService(serviceId);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F6F4EE]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#E4C06C] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#14110A]"
      >
        {language === 'bn' ? 'মূল অংশে যান' : 'Skip to main content'}
      </a>

      <Navbar
        content={content.nav}
        language={language}
        onLanguageChange={setLanguage}
        languageLabel={content.meta.languageLabel}
      />

      <main id="main-content">
        <Hero
          content={content.hero}
          language={language}
          onLanguageChange={setLanguage}
          languageLabel={content.meta.languageLabel}
          linkedinStatus={content.contact.linkedinStatus}
        />

        <About content={content.about} />

        <Services
          content={content.services}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        <Skills content={content.skills} />

        <Projects content={content.projects} />

        <Process content={content.process} />

        <Contact
          content={content.contact}
          language={language}
          selectedService={selectedContactService}
          onSelectedServiceChange={setSelectedContactService}
        />
      </main>

      <Footer
        nav={content.nav}
        footer={content.footer}
        linkedinStatus={content.contact.linkedinStatus}
        language={language}
        onLanguageChange={setLanguage}
        languageLabel={content.meta.languageLabel}
      />
    </div>
  );
}
