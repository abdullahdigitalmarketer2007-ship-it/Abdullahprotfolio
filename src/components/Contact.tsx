import { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle, Globe, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { Language, PortfolioContent, ServiceId, SITE_LINKS } from '../data/portfolioData';

interface ContactProps {
  content: PortfolioContent['contact'];
  language: Language;
  selectedService: ServiceId | 'general';
  onSelectedServiceChange: (service: ServiceId | 'general') => void;
}

export function Contact({
  content,
  language,
  selectedService,
  onSelectedServiceChange,
}: ContactProps) {
  const [businessName, setBusinessName] = useState('');
  const [goalNote, setGoalNote] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const serviceOptions: { id: ServiceId | 'general'; label: string }[] = [
    { id: 'general', label: content.composer.generalOption },
    { id: 'seo', label: 'SEO' },
    { id: 'meta-ads', label: 'Meta Ads' },
    { id: 'social-media', label: 'Social Media Marketing' },
  ];

  useEffect(() => {
    if (!serviceOptions.some((opt) => opt.id === selectedService)) {
      onSelectedServiceChange('general');
    }
  }, [selectedService, onSelectedServiceChange]);

  const activeServiceLabel =
    serviceOptions.find((opt) => opt.id === selectedService)?.label ??
    content.composer.generalOption;

  const buildWhatsAppMessage = () => {
    const trimmedBiz = businessName.trim();
    const trimmedGoal = goalNote.trim();

    if (language === 'bn') {
      const parts = [
        `হ্যালো আবদুল্লাহ, আমি ${activeServiceLabel} বিষয়ে কথা বলতে চাই।`,
        trimmedBiz ? `ব্যবসা/প্রজেক্ট: ${trimmedBiz}` : '',
        trimmedGoal ? `বিস্তারিত: ${trimmedGoal}` : '',
      ].filter(Boolean);
      return parts.join('\n');
    }

    const parts = [
      `Hi Abdullah, I'd like to discuss ${activeServiceLabel}.`,
      trimmedBiz ? `Business / Project: ${trimmedBiz}` : '',
      trimmedGoal ? `Goal: ${trimmedGoal}` : '',
    ].filter(Boolean);
    return parts.join('\n');
  };

  const compiledMessage = buildWhatsAppMessage();
  const whatsappComposeUrl = `${SITE_LINKS.whatsappUrl}?text=${encodeURIComponent(compiledMessage)}`;
  const emailSubject =
    language === 'bn'
      ? `প্রজেক্ট আলোচনা: ${activeServiceLabel}`
      : `Project Inquiry: ${activeServiceLabel}`;
  const mailtoComposeUrl = `mailto:${SITE_LINKS.email}?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(compiledMessage)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_LINKS.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0B0D12] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Contact Channels */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C06C]">
                {content.sectionLabel}
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#F6F4EE] [text-wrap:balance] sm:text-4xl lg:text-[2.75rem]">
                {content.heading}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#A8B0C2]">
                {content.body}
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F6F4EE]">
                {content.directChannelsLabel}
              </p>

              {/* WhatsApp Primary Channel */}
              <a
                href={SITE_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#E4C06C]/50 bg-[#161B26] p-5 transition-colors duration-200 hover:border-[#E4C06C] hover:bg-[#1E2534]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4C06C] text-[#14110A]">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#A8B0C2]">
                      {content.whatsappLabel} · {content.whatsappDisplay}
                    </div>
                    <div className="font-display text-base font-semibold text-[#F6F4EE]">
                      {content.whatsappAction}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#E4C06C]" aria-hidden="true" />
              </a>

              {/* Facebook Channel */}
              <a
                href={SITE_LINKS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#272F40] bg-[#161B26] p-5 transition-colors duration-200 hover:border-[#A8B0C2] hover:bg-[#1E2534]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#272F40] bg-[#0B0D12] text-[#F6F4EE]">
                    <Globe className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#A8B0C2]">
                      {content.facebookLabel}
                    </div>
                    <div className="font-display text-base font-semibold text-[#F6F4EE]">
                      {content.facebookAction}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#A8B0C2]" aria-hidden="true" />
              </a>

              {/* Email Channel with mailto + Copy button */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#272F40] bg-[#161B26] p-5 transition-colors duration-200 hover:border-[#A8B0C2]">
                <a
                  href={`mailto:${SITE_LINKS.email}`}
                  className="flex min-w-0 flex-1 items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#272F40] bg-[#0B0D12] text-[#E4C06C]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-[#A8B0C2]">
                      {content.emailLabel} · {content.emailAction}
                    </div>
                    <div className="font-display truncate text-sm font-semibold text-[#F6F4EE] sm:text-base">
                      {SITE_LINKS.email}
                    </div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#272F40] bg-[#0B0D12] px-3 py-1.5 text-xs font-semibold text-[#F6F4EE] transition-colors duration-150 hover:border-[#E4C06C] hover:text-[#E4C06C] whitespace-nowrap shrink-0"
                >
                  {emailCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#E4C06C]" aria-hidden="true" />
                      <span className="text-[#E4C06C]">{content.copiedLabel}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{content.copyEmailLabel}</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Transparent Placeholder */}
              <div className="rounded-2xl border border-[#272F40] bg-[#161B26]/60 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#272F40] bg-[#0B0D12] text-[#A8B0C2]">
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#A8B0C2]">
                      <span className="text-[#F6F4EE]">{content.linkedinLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#E4C06C]">{content.linkedinStatus}</span>
                    </div>
                    <p className="text-sm text-[#A8B0C2]">{content.linkedinNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Project Brief Composer */}
          <div className="lg:col-span-6">
            <div className="rounded-[22px] border border-[#272F40] bg-[#161B26] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-[#F6F4EE]">
                {content.composer.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A8B0C2]">
                {content.composer.subtitle}
              </p>

              <div className="mt-7 space-y-5">
                {/* Service Topic Selector */}
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#F6F4EE]">
                    {content.composer.serviceLabel}
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => onSelectedServiceChange(opt.id)}
                        aria-pressed={selectedService === opt.id}
                        className={`min-h-[38px] rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 ${
                          selectedService === opt.id
                            ? 'border-[#E4C06C] bg-[#E4C06C] text-[#14110A]'
                            : 'border-[#272F40] bg-[#0B0D12] text-[#A8B0C2] hover:border-[#A8B0C2] hover:text-[#F6F4EE]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Business Name */}
                <div>
                  <label
                    htmlFor="whatsapp-business-name"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#F6F4EE]"
                  >
                    {content.composer.businessLabel}
                  </label>
                  <input
                    id="whatsapp-business-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={content.composer.businessPlaceholder}
                    className="mt-2 w-full rounded-xl border border-[#272F40] bg-[#0B0D12] px-4 py-3 text-sm text-[#F6F4EE] placeholder:text-[#A8B0C2]/60 focus:border-[#E4C06C] focus:outline-none"
                  />
                </div>

                {/* Optional Goal Note */}
                <div>
                  <label
                    htmlFor="whatsapp-goal-note"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#F6F4EE]"
                  >
                    {content.composer.goalLabel}
                  </label>
                  <textarea
                    id="whatsapp-goal-note"
                    rows={3}
                    value={goalNote}
                    onChange={(e) => setGoalNote(e.target.value)}
                    placeholder={content.composer.goalPlaceholder}
                    className="mt-2 w-full rounded-xl border border-[#272F40] bg-[#0B0D12] px-4 py-3 text-sm text-[#F6F4EE] placeholder:text-[#A8B0C2]/60 focus:border-[#E4C06C] focus:outline-none"
                  />
                </div>

                {/* Live Message Preview */}
                <div className="rounded-xl border border-[#272F40] bg-[#0B0D12] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A8B0C2]">
                    {content.composer.previewLabel}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[#F6F4EE]">
                    {compiledMessage}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#E4C06C] px-5 py-3 text-sm font-semibold text-[#14110A] transition-colors duration-200 hover:bg-[#EED089]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>{content.composer.sendButton}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href={mailtoComposeUrl}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#272F40] bg-[#0B0D12] px-5 py-3 text-sm font-semibold text-[#F6F4EE] transition-colors duration-200 hover:border-[#E4C06C] hover:text-[#E4C06C]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{content.composer.sendEmailButton}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <p className="text-center text-xs text-[#A8B0C2]">
                  {content.composer.helperNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
