import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Language, PortfolioContent } from '../data/portfolioData';

interface NavbarProps {
  content: PortfolioContent['nav'];
  language: Language;
  onLanguageChange: (lang: Language) => void;
  languageLabel: string;
}

export function Navbar({
  content,
  language,
  onLanguageChange,
  languageLabel,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const navItems = [
    { href: '#about', label: content.links.about },
    { href: '#services', label: content.links.services },
    { href: '#skills', label: content.links.skills },
    { href: '#projects', label: content.links.projects },
    { href: '#process', label: content.links.process },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#272F40] bg-[#0B0D12]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="font-display text-lg font-extrabold tracking-[0.08em] text-[#F6F4EE] transition-colors duration-200 hover:text-[#E4C06C] whitespace-nowrap shrink-0"
        >
          {content.brand}
        </a>

        {/* Zone 2: 5 single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A8B0C2]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 transition-colors duration-200 hover:text-[#F6F4EE] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#E4C06C] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action CTA (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#E4C06C] px-4 py-2 text-xs font-semibold text-[#14110A] transition-colors duration-200 hover:bg-[#EED089] whitespace-nowrap shrink-0"
          >
            <span>{content.cta}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? content.closeMenuLabel : content.openMenuLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#272F40] bg-[#161B26] text-[#F6F4EE] transition-colors duration-200 hover:border-[#A8B0C2] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Responsive mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[#272F40] bg-[#0B0D12] px-5 py-6 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center justify-between border-b border-[#272F40]/70 py-2 text-base font-medium text-[#F6F4EE] transition-colors duration-150 hover:text-[#E4C06C]"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-[#A8B0C2]" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div
              role="group"
              aria-label={languageLabel}
              className="inline-flex items-center rounded-lg border border-[#272F40] bg-[#161B26] p-1"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={language === 'en'}
                className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  language === 'en'
                    ? 'bg-[#E4C06C] text-[#14110A]'
                    : 'text-[#A8B0C2] hover:text-[#F6F4EE]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                aria-pressed={language === 'bn'}
                className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  language === 'bn'
                    ? 'bg-[#E4C06C] text-[#14110A]'
                    : 'text-[#A8B0C2] hover:text-[#F6F4EE]'
                }`}
              >
                বাংলা
              </button>
            </div>

            <a
              href="#contact"
              onClick={handleNavClick}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#E4C06C] px-5 py-2.5 text-sm font-semibold text-[#14110A] transition-colors duration-200 hover:bg-[#EED089] whitespace-nowrap shrink-0"
            >
              <span>{content.cta}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
