import { ArrowUpRight } from 'lucide-react';
import { PortfolioContent, ServiceId } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ServicesProps {
  content: PortfolioContent['services'];
  onSelectServiceForContact: (serviceId: ServiceId) => void;
}

export function Services({ content, onSelectServiceForContact }: ServicesProps) {
  const [seoService, metaService, socialService] = content.items;

  return (
    <section
      id="services"
      className="border-b border-[#272F40] bg-[#0B0D12] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#272F40] pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C06C]">
              {content.sectionLabel}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#F6F4EE] [text-wrap:balance] sm:text-4xl lg:text-[2.75rem]">
              {content.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#A8B0C2] sm:text-base">
            {content.subheading}
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 1: Featured SEO Card (7 columns on desktop) */}
          {seoService && (
            <article className="flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#272F40] bg-[#161B26] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] lg:col-span-7">
              <div className="grid h-full grid-cols-1 sm:grid-cols-12">
                <div className="flex flex-col justify-between p-6 sm:col-span-7 sm:p-8">
                  <div>
                    <span className="font-display text-xs font-semibold tracking-[0.14em] text-[#E4C06C] tabular-nums">
                      {seoService.index}
                    </span>
                    <h3 className="font-display mt-3 text-2xl font-bold text-[#F6F4EE]">
                      {seoService.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#A8B0C2] sm:text-base">
                      {seoService.summary}
                    </p>

                    <div className="mt-6 border-t border-[#272F40] pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F6F4EE]">
                        {seoService.deliverablesLabel}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-[#A8B0C2]">
                        {seoService.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <span className="text-[#E4C06C]" aria-hidden="true">
                              —
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => onSelectServiceForContact(seoService.id)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#E4C06C] transition-colors duration-200 hover:text-[#F6F4EE]"
                    >
                      <span>{seoService.ctaLabel}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="border-t border-[#272F40] sm:col-span-5 sm:border-t-0 sm:border-l">
                  <ResilientImage
                    src={seoService.image}
                    alt={seoService.imageAlt}
                    fallbackTitle={seoService.title}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>
              </div>
            </article>
          )}

          {/* Card 2: Meta Ads Card (5 columns on desktop) */}
          {metaService && (
            <article className="flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#272F40] bg-[#161B26] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] lg:col-span-5">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-[#272F40]">
                <ResilientImage
                  src={metaService.image}
                  alt={metaService.imageAlt}
                  fallbackTitle={metaService.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="font-display text-xs font-semibold tracking-[0.14em] text-[#E4C06C] tabular-nums">
                    {metaService.index}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-bold text-[#F6F4EE]">
                    {metaService.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A8B0C2]">
                    {metaService.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-medium text-[#A8B0C2]">
                    {metaService.deliverables.map((item, idx) => (
                      <span key={item} className="inline-flex items-center gap-3">
                        <span>{item}</span>
                        {idx < metaService.deliverables.length - 1 && (
                          <span aria-hidden="true" className="text-[#272F40]">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForContact(metaService.id)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#E4C06C] transition-colors duration-200 hover:text-[#F6F4EE]"
                  >
                    <span>{metaService.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Card 3: Social Media Marketing Full-Width Horizontal Feature (12 columns) */}
          {socialService && (
            <article className="overflow-hidden rounded-[20px] border border-[#272F40] bg-[#161B26] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] lg:col-span-12">
              <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                <div className="aspect-[16/10] overflow-hidden border-b border-[#272F40] lg:col-span-4 lg:aspect-auto lg:border-r lg:border-b-0">
                  <ResilientImage
                    src={socialService.image}
                    alt={socialService.imageAlt}
                    fallbackTitle={socialService.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                    <div className="md:col-span-7">
                      <span className="font-display text-xs font-semibold tracking-[0.14em] text-[#E4C06C] tabular-nums">
                        {socialService.index}
                      </span>
                      <h3 className="font-display mt-3 text-2xl font-bold text-[#F6F4EE]">
                        {socialService.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#A8B0C2] sm:text-base">
                        {socialService.summary}
                      </p>
                    </div>
                    <div className="border-t border-[#272F40] pt-5 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F6F4EE]">
                        {socialService.deliverablesLabel}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-[#A8B0C2]">
                        {socialService.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <span className="text-[#E4C06C]" aria-hidden="true">
                              —
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end border-t border-[#272F40] pt-5">
                    <button
                      type="button"
                      onClick={() => onSelectServiceForContact(socialService.id)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#E4C06C] transition-colors duration-200 hover:text-[#F6F4EE]"
                    >
                      <span>{socialService.ctaLabel}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
