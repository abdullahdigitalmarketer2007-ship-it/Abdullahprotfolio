import { PortfolioContent } from '../data/portfolioData';

interface ProcessProps {
  content: PortfolioContent['process'];
}

export function Process({ content }: ProcessProps) {
  return (
    <section
      id="process"
      className="border-b border-[#272F40] bg-[#10131B] py-16 sm:py-20 lg:py-28"
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

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-[#272F40] bg-[#272F40] sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between bg-[#161B26] p-6 sm:p-8"
            >
              <div>
                <span className="font-display text-3xl font-bold text-[#E4C06C] tabular-nums">
                  {step.number}
                </span>
                <h3 className="font-display mt-6 text-xl font-bold text-[#F6F4EE]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A8B0C2]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
