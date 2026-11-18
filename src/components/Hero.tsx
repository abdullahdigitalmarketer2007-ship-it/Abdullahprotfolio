import { ArrowUpRight, ArrowDownRight, MessageCircle, Globe, Linkedin, Mail } from 'lucide-react';
import { HERO_IMAGE, Language, PortfolioContent, SITE_LINKS } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  content: PortfolioContent['hero'];
  language: Language;
  onLanguageChange: (lang: Language) => void;
  languageLabel: string;
  linkedinStatus: string;
}

export function Hero({
  content,
  language,
  onLanguageChange,
  languageLabel,
  linkedinStatus,
}: HeroProps) {
  return (
    <section
      id="home"
      className="border-b border-[#272F40] bg-[#0B0D12] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Top editorial meta row + visible EN / বাংলা language switch */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#272F40]/80 pb-5">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium tracking-[0.14em] uppercase text-[#A8B0C2]">
            <span className="text-[#E4C06C]">{content.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span>{content.tagline}</span>
          </div>

          <div
            role="group"
            aria-label={languageLabel}
            className="inline-flex items-center gap-1 rounded-lg border border-[#272F40] bg-[#161B26] p-1"
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

        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Typographic Hierarchy */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="mb-3 text-base font-medium text-[#A8B0C2] sm:text-lg">
                {content.greeting}
              </p>

              <h1 className="font-display max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#F6F4EE] [text-wrap:balance] sm:text-5xl lg:text-[3.75rem]">
                {content.headline}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-[#E4C06C]">
                {content.specializations.map((item, idx) => (
                  <span key={item} className="inline-flex items-center gap-3">
                    <span>{item}</span>
                    {idx < content.specializations.length - 1 && (
                      <span aria-hidden="true" className="text-[#272F40]">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#A8B0C2] sm:text-lg">
                {content.description}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={SITE_LINKS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#E4C06C] px-6 py-3 text-sm font-semibold text-[#14110A] transition-colors duration-200 hover:bg-[#EED089] whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{content.primaryCta}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#272F40] bg-[#10131B] px-6 py-3 text-sm font-semibold text-[#F6F4EE] transition-colors duration-200 hover:border-[#A8B0C2] hover:bg-[#161B26] whitespace-nowrap shrink-0"
                >
                  <span>{content.secondaryCta}</span>
                  <ArrowDownRight className="h-4 w-4 text-[#E4C06C]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#272F40]/80 pt-6 text-sm">
              <a
                href={SITE_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 font-medium text-[#F6F4EE] transition-colors duration-200 hover:text-[#E4C06C]"
              >
                <MessageCircle className="h-4 w-4 text-[#E4C06C]" aria-hidden="true" />
                <span>WhatsApp ({SITE_LINKS.whatsappDisplay})</span>
              </a>

              <a
                href={SITE_LINKS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 font-medium text-[#A8B0C2] transition-colors duration-200 hover:text-[#F6F4EE]"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>Facebook</span>
              </a>

              <a
                href={`mailto:${SITE_LINKS.email}`}
                className="inline-flex min-h-[40px] items-center gap-2 font-medium text-[#A8B0C2] transition-colors duration-200 hover:text-[#E4C06C]"
              >
                <Mail className="h-4 w-4 text-[#E4C06C]" aria-hidden="true" />
                <span>{SITE_LINKS.email}</span>
              </a>

              <a
                href="#contact"
                title={linkedinStatus}
                className="inline-flex min-h-[40px] items-center gap-2 font-medium text-[#A8B0C2] transition-colors duration-200 hover:text-[#F6F4EE]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn · {linkedinStatus}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Abdullah Portrait Frame with warm champagne-gold ambient glow */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 -z-0 rounded-[28px] bg-[#E4C06C]/10 blur-2xl"
            />
            <figure className="relative z-10 flex h-full flex-col overflow-hidden rounded-[20px] border border-[#272F40] bg-[#161B26] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <div className="relative aspect-[3/4] w-full flex-1 overflow-hidden bg-[#F6F4EE] lg:aspect-auto lg:min-h-[420px]">
                <ResilientImage
                  src={HERO_IMAGE}
                  alt={content.imageAlt}
                  fallbackTitle={content.captionTitle}
                  loading="eager"
                  className="h-full w-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#161B26]/35 to-transparent"
                />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[#272F40] bg-[#161B26] px-5 py-4">
                <span className="font-display text-sm font-semibold text-[#F6F4EE]">
                  {content.captionTitle}
                </span>
                <span className="text-xs text-[#A8B0C2]">{content.captionText}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-width 3-Column Focus Strip below the Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#272F40] bg-[#272F40] md:grid-cols-3">
          {content.pillars.map((pillar) => (
            <div key={pillar.index} className="bg-[#10131B] p-6 sm:p-7">
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <span className="font-display text-xs font-semibold tracking-[0.12em] text-[#E4C06C] tabular-nums">
                  {pillar.index}
                </span>
              </div>
              <h2 className="font-display text-lg font-semibold text-[#F6F4EE]">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#A8B0C2]">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
