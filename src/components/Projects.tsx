import { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { PortfolioContent, PracticeProject } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectsProps {
  content: PortfolioContent['projects'];
}

type CategoryFilter = 'all' | 'seo' | 'meta-ads' | 'social-media';

export function Projects({ content }: ProjectsProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [activeProject, setActiveProject] = useState<PracticeProject | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProject) {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  useEffect(() => {
    if (activeProject) {
      const updated = content.items.find((item) => item.id === activeProject.id);
      if (updated) setActiveProject(updated);
    }
  }, [content.items, activeProject]);

  const filteredProjects =
    filter === 'all'
      ? content.items
      : content.items.filter((project) => project.category === filter);

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: content.filterAll },
    { id: 'seo', label: 'SEO' },
    { id: 'meta-ads', label: 'Meta Ads' },
    { id: 'social-media', label: 'Social Media' },
  ];

  return (
    <section
      id="projects"
      className="border-b border-[#272F40] bg-[#0B0D12] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Section Header + Category Filter Tabs */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#272F40] pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C06C]">
              {content.sectionLabel}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#F6F4EE] [text-wrap:balance] sm:text-4xl lg:text-[2.75rem]">
              {content.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A8B0C2] sm:text-base">
              {content.subheading}
            </p>
          </div>

          <div
            role="group"
            aria-label={content.sectionLabel}
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#272F40] bg-[#161B26] p-1 self-start lg:self-auto"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                aria-pressed={filter === tab.id}
                className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  filter === tab.id
                    ? 'bg-[#E4C06C] text-[#14110A]'
                    : 'text-[#A8B0C2] hover:text-[#F6F4EE]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transparent Practice Notice */}
        <div className="mt-8 rounded-2xl border border-[#272F40] bg-[#161B26] px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#E4C06C] whitespace-nowrap shrink-0">
              {content.noticeTitle}
            </span>
            <p className="text-sm text-[#A8B0C2]">{content.noticeBody}</p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#272F40] bg-[#161B26] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors duration-200 hover:border-[#A8B0C2]/60"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#272F40]">
                  <ResilientImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  {/* Unboxed static metadata with middot separator */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#A8B0C2]">
                    <span className="text-[#E4C06C]">{project.statusLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.categoryLabel}</span>
                  </div>

                  <h3 className="font-display mt-3 text-xl font-bold leading-snug text-[#F6F4EE]">
                    {project.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#A8B0C2]">
                    <p>
                      <span className="font-semibold text-[#F6F4EE]">{content.goalLabel}: </span>
                      {project.goal}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#272F40] px-6 py-4">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex min-h-[40px] w-full items-center justify-between text-sm font-semibold text-[#F6F4EE] transition-colors duration-150 hover:text-[#E4C06C]"
                >
                  <span>{content.viewBlueprintLabel}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#E4C06C]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Unobstructed Blueprint Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0D12]/85 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[22px] border border-[#272F40] bg-[#161B26]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#272F40] px-6 py-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#A8B0C2]">
                <span className="text-[#E4C06C]">{activeProject.statusLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.categoryLabel}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label={content.closeLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#272F40] bg-[#0B0D12] text-[#F6F4EE] transition-colors duration-150 hover:border-[#E4C06C] hover:text-[#E4C06C]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden border-b border-[#272F40]">
              <ResilientImage
                src={activeProject.image}
                alt={activeProject.imageAlt}
                fallbackTitle={activeProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <h3
                id="project-modal-title"
                className="font-display text-2xl font-bold text-[#F6F4EE]"
              >
                {activeProject.title}
              </h3>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#E4C06C]">
                  {content.goalLabel}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#A8B0C2] sm:text-base">
                  {activeProject.goal}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#E4C06C]">
                  {content.contributionLabel}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#A8B0C2] sm:text-base">
                  {activeProject.contribution}
                </p>
              </div>

              <div className="border-t border-[#272F40] pt-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F6F4EE]">
                  {content.deliverablesLabel}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#A8B0C2]">
                  {activeProject.deliverables.map((item) => (
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
          </div>
        </div>
      )}
    </section>
  );
}
