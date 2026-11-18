import { useState, useEffect } from 'react';
import { PortfolioContent } from '../data/portfolioData';

interface SkillsProps {
  content: PortfolioContent['skills'];
}

export function Skills({ content }: SkillsProps) {
  const [selectedId, setSelectedId] = useState<string>(content.items[0]?.id ?? 'seo');

  useEffect(() => {
    if (!content.items.some((item) => item.id === selectedId)) {
      setSelectedId(content.items[0]?.id ?? 'seo');
    }
  }, [content.items, selectedId]);

  const activeSkill =
    content.items.find((item) => item.id === selectedId) ?? content.items[0];

  return (
    <section
      id="skills"
      className="border-b border-[#272F40] bg-[#10131B] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading + Interactive Capability Selector */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C06C]">
              {content.sectionLabel}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#F6F4EE] [text-wrap:balance] sm:text-4xl lg:text-[2.75rem]">
              {content.heading}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#A8B0C2] sm:text-base">
              {content.subheading}
            </p>

            {/* Capability Buttons (No percentage bars or star ratings) */}
            <div
              role="tablist"
              aria-label={content.heading}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {content.items.map((skill) => {
                const isSelected = skill.id === activeSkill?.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedId(skill.id)}
                    className={`min-h-[42px] rounded-xl border px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'border-[#E4C06C] bg-[#E4C06C] text-[#14110A]'
                        : 'border-[#272F40] bg-[#161B26] text-[#F6F4EE] hover:border-[#A8B0C2] hover:bg-[#1E2534]'
                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Skill Practical Breakdown */}
          <div className="lg:col-span-6">
            {activeSkill && (
              <div
                role="tabpanel"
                aria-label={activeSkill.name}
                className="flex h-full flex-col justify-between rounded-[20px] border border-[#272F40] bg-[#161B26] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:p-8 lg:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#272F40] pb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C06C]">
                      {activeSkill.category}
                    </span>
                    <span className="text-xs text-[#A8B0C2]">{content.detailHeading}</span>
                  </div>

                  <h3 className="font-display mt-6 text-2xl font-bold text-[#F6F4EE] sm:text-3xl">
                    {activeSkill.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#A8B0C2]">
                    {activeSkill.scope}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#272F40] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F6F4EE]">
                    {content.focusHeading}
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-[#A8B0C2]">
                    {activeSkill.focusPoints.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="text-[#E4C06C]" aria-hidden="true">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
