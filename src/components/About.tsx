import { ABOUT_IMAGE, PortfolioContent } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface AboutProps {
  content: PortfolioContent['about'];
}

export function About({ content }: AboutProps) {
  return (
    <section
      id="about"
      className="border-b border-[#272F40] bg-[#10131B] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Visual Column */}
          <div className="lg:col-span-5">
            <div className="h-full overflow-hidden rounded-[20px] border border-[#272F40] bg-[#161B26] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
              <ResilientImage
                src={ABOUT_IMAGE}
                alt={content.imageAlt}
                fallbackTitle={content.heading}
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
              />
            </div>
          </div>

          {/* Right Editorial Bio Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C06C]">
              {content.sectionLabel}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#F6F4EE] [text-wrap:balance] sm:text-4xl lg:text-[2.75rem]">
              {content.heading}
            </h2>
            <p className="mt-6 max-w-[65ch] text-base leading-[1.75] text-[#A8B0C2] sm:text-lg">
              {content.body}
            </p>

            {/* Working Principles */}
            <div className="mt-10 border-t border-[#272F40] pt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F6F4EE]">
                {content.noteLabel}
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {content.principles.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h4 className="font-display text-sm font-semibold text-[#F6F4EE]">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#A8B0C2]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
