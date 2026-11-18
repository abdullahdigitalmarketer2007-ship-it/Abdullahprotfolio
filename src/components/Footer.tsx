import { Language, PortfolioContent, SITE_LINKS } from '../data/portfolioData';

interface FooterProps {
  nav: PortfolioContent['nav'];
  footer: PortfolioContent['footer'];
  linkedinStatus: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  languageLabel: string;
}

export function Footer({
  nav,
  footer,
  linkedinStatus,
  language,
  onLanguageChange,
  languageLabel,
}: FooterProps) {
  const quickLinks = [
    { href: '#home', label: language === 'bn' ? 'হোম' : 'Home' },
    { href: '#about', label: nav.links.about },
    { href: '#services', label: nav.links.services },
    { href: '#skills', label: nav.links.skills },
    { href: '#projects', label: nav.links.projects },
    { href: '#process', label: nav.links.process },
    { href: '#contact', label: nav.cta },
  ];

  return (
    <footer className="border-t border-[#272F40] bg-[#10131B] py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand summary */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="font-display text-xl font-extrabold tracking-[0.08em] text-[#F6F4EE]"
            >
              {nav.brand}
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#A8B0C2]">
              {footer.roleLine}
            </p>

            <div
              role="group"
              aria-label={languageLabel}
              className="mt-6 inline-flex items-center gap-1 rounded-lg border border-[#272F40] bg-[#161B26] p-1"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={language === 'en'}
                className={`min-h-[34px] rounded-md px-3 py-1 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 ${
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
                className={`min-h-[34px] rounded-md px-3 py-1 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  language === 'bn'
                    ? 'bg-[#E4C06C] text-[#14110A]'
                    : 'text-[#A8B0C2] hover:text-[#F6F4EE]'
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F6F4EE]">
              {footer.quickLinksLabel}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#A8B0C2]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors duration-150 hover:text-[#E4C06C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F6F4EE]">
              {footer.connectLabel}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#A8B0C2]">
              <li>
                <a
                  href={SITE_LINKS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-[#E4C06C]"
                >
                  WhatsApp ({SITE_LINKS.whatsappDisplay})
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_LINKS.email}`}
                  className="break-all transition-colors duration-150 hover:text-[#E4C06C]"
                >
                  {SITE_LINKS.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-[#F6F4EE]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <span className="text-[#A8B0C2]">LinkedIn · {linkedinStatus}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#272F40] pt-6 text-xs text-[#A8B0C2]">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
