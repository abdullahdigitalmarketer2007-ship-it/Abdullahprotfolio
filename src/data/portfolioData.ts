export type Language = 'en' | 'bn';

export type ServiceId = 'seo' | 'meta-ads' | 'social-media';

export interface ServiceItem {
  id: ServiceId;
  index: string;
  title: string;
  summary: string;
  deliverablesLabel: string;
  deliverables: string[];
  ctaLabel: string;
  image: string;
  imageAlt: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  scope: string;
  focusPoints: string[];
}

export interface PracticeProject {
  id: string;
  category: 'seo' | 'meta-ads' | 'social-media';
  categoryLabel: string;
  statusLabel: string;
  title: string;
  goal: string;
  contribution: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioContent {
  meta: {
    pageTitle: string;
    languageLabel: string;
  };
  nav: {
    brand: string;
    links: {
      about: string;
      services: string;
      skills: string;
      projects: string;
      process: string;
    };
    cta: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    headline: string;
    role: string;
    specializations: string[];
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    captionTitle: string;
    captionText: string;
    pillars: {
      index: string;
      title: string;
      detail: string;
    }[];
  };
  about: {
    sectionLabel: string;
    heading: string;
    body: string;
    noteLabel: string;
    principles: {
      title: string;
      detail: string;
    }[];
    imageAlt: string;
  };
  services: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  skills: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    detailHeading: string;
    focusHeading: string;
    items: SkillItem[];
  };
  projects: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    noticeTitle: string;
    noticeBody: string;
    filterAll: string;
    goalLabel: string;
    contributionLabel: string;
    deliverablesLabel: string;
    viewBlueprintLabel: string;
    closeLabel: string;
    items: PracticeProject[];
  };
  process: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    body: string;
    directChannelsLabel: string;
    whatsappLabel: string;
    whatsappDisplay: string;
    whatsappAction: string;
    facebookLabel: string;
    facebookAction: string;
    linkedinLabel: string;
    linkedinStatus: string;
    linkedinNote: string;
    emailLabel: string;
    emailAction: string;
    copyEmailLabel: string;
    copiedLabel: string;
    composer: {
      title: string;
      subtitle: string;
      serviceLabel: string;
      generalOption: string;
      businessLabel: string;
      businessPlaceholder: string;
      goalLabel: string;
      goalPlaceholder: string;
      previewLabel: string;
      sendButton: string;
      sendEmailButton: string;
      helperNote: string;
    };
  };
  footer: {
    roleLine: string;
    quickLinksLabel: string;
    connectLabel: string;
    copyright: string;
  };
}

export const SITE_LINKS = {
  whatsappNumber: '+8801726902902',
  whatsappDisplay: '01726-902902',
  whatsappUrl: 'https://wa.me/8801726902902',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61594136079794',
  // Supplied LinkedIn URL (https://www.linkedin.com/feed/) points to the generic LinkedIn feed,
  // not a personal profile. Replace with Abdullah's personal LinkedIn profile URL before launch.
  personalLinkedInUrl: '',
  email: 'abdullahdigitalmarketer2007@gmail.com',
};

export const HERO_IMAGE = '/src/assets/images/hero_abstract_editorial_1794978990658.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_strategy_stilllife_1794978990827.jpg';
export const SEO_IMAGE = '/src/assets/images/service_seo_visual_1794978991428.jpg';
export const META_ADS_IMAGE = '/src/assets/images/service_meta_ads_visual_1794978992613.jpg';
export const SOCIAL_IMAGE = '/src/assets/images/service_social_visual_1794978992712.jpg';

export const PORTFOLIO_CONTENT: Record<Language, PortfolioContent> = {
  en: {
    meta: {
      pageTitle: 'Abdullah | Digital Marketing Specialist',
      languageLabel: 'Switch language',
    },
    nav: {
      brand: 'ABDULLAH',
      links: {
        about: 'About',
        services: 'Services',
        skills: 'Skills',
        projects: 'Projects',
        process: 'Process',
      },
      cta: "Let's Talk",
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
    },
    hero: {
      eyebrow: 'Digital Marketing Specialist',
      greeting: "Hi, I'm Abdullah",
      headline: 'Build a Stronger Digital Presence.',
      role: 'Digital Marketing Specialist',
      specializations: ['SEO', 'Meta Ads', 'Social Media Marketing'],
      tagline: 'Helping Businesses Grow Online.',
      description:
        'I help businesses improve their online visibility through thoughtful SEO, Meta Ads, and social media marketing.',
      primaryCta: 'Contact on WhatsApp',
      secondaryCta: 'View My Work',
      imageAlt: 'Portrait of Abdullah, Digital Marketing Specialist',
      captionTitle: 'Abdullah',
      captionText: 'Digital Marketing Specialist · SEO & Meta Ads',
      pillars: [
        {
          index: '01',
          title: 'Search Visibility',
          detail: 'Structuring pages and content so the right search audience can find your business.',
        },
        {
          index: '02',
          title: 'Meta Advertising',
          detail: 'Aligning audience research, ad direction, and monitoring around clear goals.',
        },
        {
          index: '03',
          title: 'Social Media Presence',
          detail: 'Building purposeful content plans and practical publishing workflows.',
        },
      ],
    },
    about: {
      sectionLabel: 'About',
      heading: 'A Little About Me',
      body: "I'm Abdullah, a Digital Marketing Specialist focused on helping businesses build a clearer and more effective online presence. My work focuses on SEO, Meta Ads, and social media marketing—with an emphasis on understanding business goals, choosing the right approach, and improving through thoughtful execution.",
      noteLabel: 'Working Principles',
      principles: [
        {
          title: 'Business Context First',
          detail: 'Every campaign or audit begins by clarifying what your business offers and who needs to see it.',
        },
        {
          title: 'Practical Execution',
          detail: 'Focused deliverables—from clean on-page structure to structured Meta ad sets—without unnecessary complexity.',
        },
        {
          title: 'Honest Review',
          detail: 'Decisions are guided by observable performance signals rather than inflated promises or vanity claims.',
        },
      ],
      imageAlt:
        'Editorial desk still-life with an open grid notebook, pen, and laptop edge representing marketing strategy planning',
    },
    services: {
      sectionLabel: 'Services',
      heading: 'Core Marketing Services',
      subheading:
        'Three focused disciplines designed to strengthen search discoverability, paid reach, and social consistency.',
      items: [
        {
          id: 'seo',
          index: '01',
          title: 'Search Engine Optimization (SEO)',
          summary:
            'Improve how your website is structured and presented in search so the right audience can discover your business.',
          deliverablesLabel: 'Typical deliverables',
          deliverables: [
            'Keyword research',
            'On-page SEO',
            'Technical SEO review',
            'Content optimization',
          ],
          ctaLabel: 'Discuss SEO',
          image: SEO_IMAGE,
          imageAlt:
            'Minimalist architectural illustration of a glass lens inspecting structured dark grid blocks representing SEO',
        },
        {
          id: 'meta-ads',
          index: '02',
          title: 'Meta Ads',
          summary:
            'Plan and manage Meta advertising campaigns around a clear audience, message, and business objective.',
          deliverablesLabel: 'Typical deliverables',
          deliverables: [
            'Campaign planning',
            'Audience research',
            'Ad creative direction',
            'Campaign monitoring',
          ],
          ctaLabel: 'Discuss Meta Ads',
          image: META_ADS_IMAGE,
          imageAlt:
            'Architectural geometric layers and modular panels representing structured Meta Ads campaign planning',
        },
        {
          id: 'social-media',
          index: '03',
          title: 'Social Media Marketing',
          summary:
            'Build a consistent social presence with purposeful content, clear messaging, and a practical publishing plan.',
          deliverablesLabel: 'Typical deliverables',
          deliverables: [
            'Content planning',
            'Post ideas',
            'Page optimization',
            'Performance review',
          ],
          ctaLabel: 'Discuss Social Media',
          image: SOCIAL_IMAGE,
          imageAlt:
            'Balanced grid of charcoal and warm ivory tactile tiles representing an organized social media content calendar',
        },
      ],
    },
    skills: {
      sectionLabel: 'Skills',
      heading: 'Confirmed Capabilities',
      subheading:
        'Select any area below to view how it fits into a typical engagement. Only confirmed capabilities are listed.',
      detailHeading: 'Practical Scope',
      focusHeading: 'Key Focus Areas',
      items: [
        {
          id: 'seo',
          name: 'SEO',
          category: 'Organic Search',
          scope:
            'Aligning site structure, search intent, and page clarity so businesses earn relevant organic visibility over time.',
          focusPoints: ['Search intent mapping', 'Site hierarchy review', 'Organic visibility strategy'],
        },
        {
          id: 'keyword-research',
          name: 'Keyword Research',
          category: 'Search Intelligence',
          scope:
            'Identifying the exact terms and questions potential customers use when looking for products or local services.',
          focusPoints: ['Commercial vs. informational intent', 'Topic clustering', 'Page-to-keyword mapping'],
        },
        {
          id: 'on-page-seo',
          name: 'On-Page SEO',
          category: 'Page Optimization',
          scope:
            'Refining titles, meta descriptions, heading hierarchy, internal links, and page copy for clarity and relevance.',
          focusPoints: ['Title & meta structure', 'Heading hierarchy (H1–H3)', 'Internal linking clarity'],
        },
        {
          id: 'technical-seo',
          name: 'Technical SEO',
          category: 'Site Health',
          scope:
            'Reviewing foundational technical signals such as crawlability, indexation hygiene, URL structure, and mobile usability.',
          focusPoints: ['Crawl & indexation checks', 'Clean URL & canonical review', 'Mobile & core readiness'],
        },
        {
          id: 'meta-ads',
          name: 'Meta Ads',
          category: 'Paid Social',
          scope:
            'Structuring Facebook and Instagram ad campaigns around well-defined objectives, audiences, and creative testing.',
          focusPoints: ['Campaign objective setup', 'Audience segmentation', 'Creative & copy alignment'],
        },
        {
          id: 'social-media-marketing',
          name: 'Social Media Marketing',
          category: 'Brand Presence',
          scope:
            'Helping businesses stay recognizable and active on social channels through clear positioning and consistent page presentation.',
          focusPoints: ['Profile & page optimization', 'Consistent brand messaging', 'Audience engagement review'],
        },
        {
          id: 'content-planning',
          name: 'Content Planning',
          category: 'Editorial Strategy',
          scope:
            'Organizing practical content calendars and post concepts tied directly to customer questions and business offers.',
          focusPoints: ['Monthly publishing cadence', 'Content pillar balance', 'Actionable post briefs'],
        },
      ],
    },
    projects: {
      sectionLabel: 'Projects',
      heading: 'Selected Practice Projects',
      subheading:
        'Sample strategy blueprints created to illustrate workflow and structure. Verified client case studies will be added as approved.',
      noticeTitle: 'Practice / Demo Blueprints',
      noticeBody:
        'No verified client metrics are claimed here. Each item below is clearly marked as a practice project showing approach and deliverables.',
      filterAll: 'All',
      goalLabel: 'Project Goal',
      contributionLabel: 'Planned Contribution',
      deliverablesLabel: 'Scope & Deliverables',
      viewBlueprintLabel: 'Inspect Blueprint',
      closeLabel: 'Close blueprint',
      items: [
        {
          id: 'practice-seo-audit',
          category: 'seo',
          categoryLabel: 'SEO',
          statusLabel: 'Practice Project',
          title: 'Local Service Website SEO & Structure Blueprint',
          goal: 'Create a clean search foundation for a service-based business website so core service pages match real customer queries.',
          contribution:
            'Conducted sample keyword grouping, mapped headings and internal links across core service pages, and outlined technical SEO review priorities.',
          deliverables: [
            'Service keyword map',
            'On-page title & heading template',
            'Technical review checklist',
          ],
          image: SEO_IMAGE,
          imageAlt: 'Architectural illustration representing the SEO practice project blueprint',
        },
        {
          id: 'practice-meta-campaign',
          category: 'meta-ads',
          categoryLabel: 'Meta Ads',
          statusLabel: 'Practice Project',
          title: 'Meta Ads Lead & Messaging Campaign Structure',
          goal: 'Design an organized Meta advertising campaign structure focused on attracting relevant local inquiries within a controlled budget.',
          contribution:
            'Structured campaign objective selection, drafted audience segmentation hypotheses, and prepared creative messaging angles for testing.',
          deliverables: [
            'Campaign & ad set structure',
            'Audience interest & location notes',
            'Ad copy & creative brief',
          ],
          image: META_ADS_IMAGE,
          imageAlt: 'Architectural illustration representing the Meta Ads practice project blueprint',
        },
        {
          id: 'practice-social-calendar',
          category: 'social-media',
          categoryLabel: 'Social Media',
          statusLabel: 'Practice Project',
          title: 'Business Page Optimization & Monthly Content Plan',
          goal: 'Establish a repeatable monthly social publishing system that explains services clearly and keeps brand messaging consistent.',
          contribution:
            'Outlined page bio/CTA improvements, defined balanced content pillars, and drafted a structured weekly post cadence.',
          deliverables: [
            'Page optimization checklist',
            '4-pillar content calendar',
            'Post concept prompts',
          ],
          image: SOCIAL_IMAGE,
          imageAlt: 'Architectural illustration representing the Social Media practice project blueprint',
        },
      ],
    },
    process: {
      sectionLabel: 'Work Process',
      heading: 'How Work Progresses',
      subheading: 'A straightforward four-stage workflow designed for clarity from the first conversation.',
      steps: [
        {
          number: '01',
          title: 'Discover',
          description: 'Understand the business, audience, and goals.',
        },
        {
          number: '02',
          title: 'Plan',
          description: 'Choose a suitable strategy and priorities.',
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Deliver the agreed work with care.',
        },
        {
          number: '04',
          title: 'Review & Improve',
          description: 'Evaluate available data and refine the approach.',
        },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      heading: 'Have a Project in Mind?',
      body: "Tell me a little about your business and what you'd like to improve. We can start with a conversation.",
      directChannelsLabel: 'Direct Channels',
      whatsappLabel: 'WhatsApp',
      whatsappDisplay: '01726-902902',
      whatsappAction: 'Message on WhatsApp',
      facebookLabel: 'Facebook',
      facebookAction: 'Visit Facebook Profile',
      linkedinLabel: 'LinkedIn',
      linkedinStatus: 'Profile URL Pending',
      linkedinNote: 'Personal LinkedIn profile URL will be linked here once provided.',
      emailLabel: 'Email',
      emailAction: 'Send an Email',
      copyEmailLabel: 'Copy',
      copiedLabel: 'Copied',
      composer: {
        title: 'Quick Project Brief',
        subtitle:
          'Prepare a short project note below and open it directly in WhatsApp or your email app—no form data is stored.',
        serviceLabel: 'Area of interest',
        generalOption: 'General Inquiry',
        businessLabel: 'Your business or project name (optional)',
        businessPlaceholder: 'e.g., Retail store, service business, personal brand',
        goalLabel: 'What would you like to improve?',
        goalPlaceholder: 'Briefly share your goal for SEO, Meta Ads, or Social Media...',
        previewLabel: 'Message preview',
        sendButton: 'Continue on WhatsApp',
        sendEmailButton: 'Open in Email App',
        helperNote:
          'Opens WhatsApp (wa.me/8801726902902) or your default email client with your prepared message.',
      },
    },
    footer: {
      roleLine: 'Digital Marketing Specialist · SEO · Meta Ads · Social Media Marketing',
      quickLinksLabel: 'Navigation',
      connectLabel: 'Connect',
      copyright: `© ${new Date().getFullYear()} Abdullah. All rights reserved.`,
    },
  },
  bn: {
    meta: {
      pageTitle: 'আবদুল্লাহ | ডিজিটাল মার্কেটিং স্পেশালিস্ট',
      languageLabel: 'ভাষা পরিবর্তন করুন',
    },
    nav: {
      brand: 'ABDULLAH',
      links: {
        about: 'আমার সম্পর্কে',
        services: 'সার্ভিস',
        skills: 'দক্ষতা',
        projects: 'প্রজেক্ট',
        process: 'কাজের প্রক্রিয়া',
      },
      cta: 'কথা বলি',
      openMenuLabel: 'মেনু খুলুন',
      closeMenuLabel: 'মেনু বন্ধ করুন',
    },
    hero: {
      eyebrow: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট',
      greeting: 'আমি আবদুল্লাহ',
      headline: 'আপনার ব্যবসার ডিজিটাল উপস্থিতি আরও শক্তিশালী করুন।',
      role: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট',
      specializations: ['SEO', 'Meta Ads', 'Social Media Marketing'],
      tagline: 'ব্যবসাকে অনলাইনে এগিয়ে নিতে সহায়তা করি।',
      description:
        'SEO, Meta Ads এবং Social Media Marketing-এর মাধ্যমে ব্যবসার অনলাইন পরিচিতি ও সম্ভাবনা বাড়াতে কাজ করি।',
      primaryCta: 'হোয়াটসঅ্যাপে কথা বলুন',
      secondaryCta: 'আমার কাজ দেখুন',
      imageAlt: 'আবদুল্লাহর পোর্ট্রেট, ডিজিটাল মার্কেটিং স্পেশালিস্ট',
      captionTitle: 'আবদুল্লাহ',
      captionText: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট · SEO ও Meta Ads',
      pillars: [
        {
          index: '০১',
          title: 'সার্চ ভিজিবিলিটি',
          detail: 'সঠিক অডিয়েন্স যেন সার্চে সহজেই আপনার ব্যবসা খুঁজে পায় সেভাবে ওয়েবসাইট সাজানো।',
        },
        {
          index: '০২',
          title: 'Meta Ads পরিকল্পনা',
          detail: 'স্পষ্ট লক্ষ্য ও অডিয়েন্স রিসার্চের ভিত্তিতে কার্যকর বিজ্ঞাপন পরিচালনা।',
        },
        {
          index: '০৩',
          title: 'সোশ্যাল মিডিয়া উপস্থিতি',
          detail: 'পরিকল্পিত কনটেন্ট ও নিয়মিত প্রকাশনার মাধ্যমে ব্র্যান্ডের অবস্থান তৈরি করা।',
        },
      ],
    },
    about: {
      sectionLabel: 'পরিচিতি',
      heading: 'আমার সম্পর্কে',
      body: 'আমি আবদুল্লাহ, একজন Digital Marketing Specialist। SEO, Meta Ads এবং Social Media Marketing-এর মাধ্যমে ব্যবসার অনলাইন উপস্থিতি আরও কার্যকর করতে কাজ করি। প্রতিটি কাজের শুরুতে ব্যবসার লক্ষ্য বোঝা, উপযুক্ত পরিকল্পনা তৈরি এবং ধারাবাহিকভাবে উন্নতির দিকে মনোযোগ দিই।',
      noteLabel: 'কাজের মূলনীতি',
      principles: [
        {
          title: 'ব্যবসার লক্ষ্য প্রথমে',
          detail: 'যেকোনো কাজের শুরুতে আপনার ব্যবসা, পণ্য এবং টার্গেট অডিয়েন্স পরিষ্কারভাবে বুঝে নেওয়া।',
        },
        {
          title: 'বাস্তবসম্মত বাস্তবায়ন',
          detail: 'অপ্রয়োজনীয় জটিলতা ছাড়াই নির্দিষ্ট ও কার্যকর অন-পেজ ও ক্যাম্পেইন কাঠামো তৈরি।',
        },
        {
          title: 'স্বচ্ছ পর্যালোচনা',
          detail: 'অবাস্তব প্রতিশ্রুতির বদলে প্রাপ্ত ডেটা ও ফলাফলের ভিত্তিতে ধাপে ধাপে উন্নতি আনা।',
        },
      ],
      imageAlt: 'ডিজিটাল মার্কেটিং পরিকল্পনা ও নোটবুকের এডিটোরিয়াল স্টিল-লাইফ ছবি',
    },
    services: {
      sectionLabel: 'সার্ভিস',
      heading: 'মূল ডিজিটাল মার্কেটিং সার্ভিস',
      subheading: 'সার্চ দৃশ্যমানতা, পেইড ক্যাম্পেইন ও সোশ্যাল মিডিয়া কনসিসটেন্সি বাড়ানোর তিনটি মূল সেবা।',
      items: [
        {
          id: 'seo',
          index: '০১',
          title: 'Search Engine Optimization (SEO)',
          summary: 'আপনার ওয়েবসাইটকে সার্চের জন্য আরও উপযোগী করে সঠিক অডিয়েন্সের কাছে পৌঁছাতে সহায়তা।',
          deliverablesLabel: 'সম্ভাব্য কাজ',
          deliverables: [
            'Keyword Research',
            'On-Page SEO',
            'Technical SEO Review',
            'Content Optimization',
          ],
          ctaLabel: 'SEO নিয়ে কথা বলুন',
          image: SEO_IMAGE,
          imageAlt: 'SEO ও ওয়েবসাইট কাঠামো বোঝাতে মিনিমাল আর্কিটেকচারাল ইলাস্ট্রেশন',
        },
        {
          id: 'meta-ads',
          index: '০২',
          title: 'Meta Ads',
          summary: 'নির্দিষ্ট অডিয়েন্স ও ব্যবসায়িক লক্ষ্য অনুযায়ী Meta Ads ক্যাম্পেইন পরিকল্পনা ও পরিচালনা।',
          deliverablesLabel: 'সম্ভাব্য কাজ',
          deliverables: [
            'Campaign Planning',
            'Audience Research',
            'Ad Creative Direction',
            'Campaign Monitoring',
          ],
          ctaLabel: 'Meta Ads নিয়ে কথা বলুন',
          image: META_ADS_IMAGE,
          imageAlt: 'Meta Ads ক্যাম্পেইন ও অডিয়েন্স পরিকল্পনা বোঝাতে জ্যামিতিক ইলাস্ট্রেশন',
        },
        {
          id: 'social-media',
          index: '০৩',
          title: 'Social Media Marketing',
          summary: 'পরিকল্পিত কনটেন্ট ও ধারাবাহিক যোগাযোগের মাধ্যমে সোশ্যাল মিডিয়ায় ব্র্যান্ডের উপস্থিতি গড়ে তোলা।',
          deliverablesLabel: 'সম্ভাব্য কাজ',
          deliverables: [
            'Content Planning',
            'Post Ideas',
            'Page Optimization',
            'Performance Review',
          ],
          ctaLabel: 'সোশ্যাল মিডিয়া নিয়ে কথা বলুন',
          image: SOCIAL_IMAGE,
          imageAlt: 'সোশ্যাল মিডিয়া কনটেন্ট ক্যালেন্ডার বোঝাতে মিনিমালিস্ট গ্রিড ইলাস্ট্রেশন',
        },
      ],
    },
    skills: {
      sectionLabel: 'দক্ষতা',
      heading: 'নিশ্চিতকৃত দক্ষতাসমূহ',
      subheading: 'প্রতিটি দক্ষতায় ক্লিক করে কাজের পরিধি দেখুন। এখানে কেবল নিশ্চিতকৃত দক্ষতাগুলোই দেখানো হয়েছে।',
      detailHeading: 'কাজের পরিধি',
      focusHeading: 'মূল মনোযোগের ক্ষেত্র',
      items: [
        {
          id: 'seo',
          name: 'SEO',
          category: 'অর্গানিক সার্চ',
          scope:
            'ওয়েবসাইটের কাঠামো, সার্চ ইন্টেন্ট এবং পেজের স্পষ্টতা সমন্বয় করে সময়ের সাথে প্রাসঙ্গিক সার্চ উপস্থিতি তৈরি করা।',
          focusPoints: ['সার্চ ইন্টেন্ট বিশ্লেষণ', 'সাইট হায়ারার্কি পর্যালোচনা', 'অর্গানিক ভিজিবিলিটি পরিকল্পনা'],
        },
        {
          id: 'keyword-research',
          name: 'Keyword Research',
          category: 'সার্চ রিসার্চ',
          scope:
            'সম্ভাব্য ক্রেতারা কোন শব্দ বা প্রশ্ন দিয়ে আপনার পণ্য ও সেবা খুঁজছেন তা চিহ্নিত করা।',
          focusPoints: ['বাণিজ্যিক বনাম তথ্যভিত্তিক কিওয়ার্ড', 'টপিক ক্লাস্টারিং', 'পেজ অনুযায়ী কিওয়ার্ড ম্যাপিং'],
        },
        {
          id: 'on-page-seo',
          name: 'On-Page SEO',
          category: 'পেজ অপটিমাইজেশন',
          scope:
            'টাইটেল, মেটা ডেসক্রিপশন, হেডিং কাঠামো, ইন্টারনাল লিংক এবং কনটেন্ট আরও স্পষ্ট ও সার্চ-উপযোগী করা।',
          focusPoints: ['টাইটেল ও মেটা স্ট্রাকচার', 'হেডিং বিন্যাস (H1–H3)', 'ইন্টারনাল লিংকিং'],
        },
        {
          id: 'technical-seo',
          name: 'Technical SEO',
          category: 'সাইট হেলথ',
          scope:
            'ক্রলিং, ইনডেক্সেশন হাইজিন, ইউআরএল কাঠামো এবং মোবাইল ব্যবহারযোগ্যতার মতো মৌলিক বিষয়গুলো পরীক্ষা করা।',
          focusPoints: ['ক্রল ও ইনডেক্সেশন চেক', 'পরিচ্ছন্ন URL ও ক্যানোনিকাল', 'মোবাইল ব্যবহারযোগ্যতা'],
        },
        {
          id: 'meta-ads',
          name: 'Meta Ads',
          category: 'পেইড সোশ্যাল',
          scope:
            'Facebook ও Instagram বিজ্ঞাপন ক্যাম্পেইনকে স্পষ্ট উদ্দেশ্য, অডিয়েন্স ও ক্রিয়েটিভ টেস্টিং অনুযায়ী সাজানো।',
          focusPoints: ['ক্যাম্পেইন অবজেক্টিভ নির্ধারণ', 'অডিয়েন্স সেগমেন্টেশন', 'ক্রিয়েটিভ ও কপি সমন্বয়'],
        },
        {
          id: 'social-media-marketing',
          name: 'Social Media Marketing',
          category: 'ব্র্যান্ড উপস্থিতি',
          scope:
            'পরিচ্ছন্ন পেজ উপস্থাপনা ও ধারাবাহিক বার্তার মাধ্যমে সোশ্যাল চ্যানেলে ব্যবসাকে সক্রিয় ও পরিচিত রাখা।',
          focusPoints: ['প্রোফাইল ও পেজ অপটিমাইজেশন', 'ধারাবাহিক ব্র্যান্ড মেসেজিং', 'এনগেজমেন্ট পর্যালোচনা'],
        },
        {
          id: 'content-planning',
          name: 'Content Planning',
          category: 'কনটেন্ট কৌশল',
          scope:
            'ক্রেতাদের সাধারণ প্রশ্ন ও ব্যবসার অফারকে কেন্দ্র করে বাস্তবসম্মত মাসিক কনটেন্ট ক্যালেন্ডার তৈরি করা।',
          focusPoints: ['নিয়মিত পাবলিশিং রুটিন', 'কনটেন্ট পিলার ভারসাম্য', 'কার্যকর পোস্ট আইডিয়া'],
        },
      ],
    },
    projects: {
      sectionLabel: 'প্রজেক্ট',
      heading: 'অনুশীলনমূলক প্রজেক্ট (Practice Blueprints)',
      subheading:
        'কাজের পদ্ধতি ও কাঠামো বোঝাতে তৈরি নমুনা পরিকল্পনা। অনুমোদিত ক্লায়েন্ট কেস স্টাডি যুক্ত হলে এখানে প্রকাশ করা হবে।',
      noticeTitle: 'নমুনা / অনুশীলনমূলক পরিকল্পনা',
      noticeBody:
        'এখানে কোনো কাল্পনিক ক্লায়েন্ট ফলাফল বা সংখ্যা দাবি করা হয়নি। প্রতিটি কার্ড অনুশীলনমূলক প্রজেক্ট হিসেবে স্পষ্টভাবে চিহ্নিত।',
      filterAll: 'সবগুলো',
      goalLabel: 'প্রজেক্টের লক্ষ্য',
      contributionLabel: 'পরিকল্পিত ভূমিকা',
      deliverablesLabel: 'কাজের পরিধি',
      viewBlueprintLabel: 'বিস্তারিত দেখুন',
      closeLabel: 'বন্ধ করুন',
      items: [
        {
          id: 'practice-seo-audit',
          category: 'seo',
          categoryLabel: 'SEO',
          statusLabel: 'অনুশীলনমূলক প্রজেক্ট',
          title: 'লোকাল সার্ভিস ওয়েবসাইটের SEO ও স্ট্রাকচার ব্লুপ্রিন্ট',
          goal: 'একটি সেবাভিত্তিক ব্যবসার ওয়েবসাইটের মূল সার্ভিস পেজগুলোকে গ্রাহকদের প্রকৃত সার্চ কোয়েরির সাথে সামঞ্জস্যপূর্ণ করা।',
          contribution:
            'নমুনা কিওয়ার্ড গ্রুপিং, মূল পেজগুলোর হেডিং ও ইন্টারনাল লিংকিং ম্যাপ এবং Technical SEO রিভিউ অগ্রাধিকার তালিকা তৈরি।',
          deliverables: [
            'সার্ভিস কিওয়ার্ড ম্যাপ',
            'অন-পেজ টাইটেল ও হেডিং টেমপ্লেট',
            'টেকনিক্যাল রিভিউ চেকলিস্ট',
          ],
          image: SEO_IMAGE,
          imageAlt: 'SEO অনুশীলনমূলক প্রজেক্টের আর্কিটেকচারাল ইলাস্ট্রেশন',
        },
        {
          id: 'practice-meta-campaign',
          category: 'meta-ads',
          categoryLabel: 'Meta Ads',
          statusLabel: 'অনুশীলনমূলক প্রজেক্ট',
          title: 'Meta Ads লিড ও মেসেজিং ক্যাম্পেইন কাঠামো',
          goal: 'নির্ধারিত বাজেটের মধ্যে প্রাসঙ্গিক লোকাল ইনকোয়ারি আনতে একটি গোছানো Meta Ads ক্যাম্পেইন কাঠামো তৈরি।',
          contribution:
            'ক্যাম্পেইন অবজেক্টিভ নির্বাচন, অডিয়েন্স সেগমেন্টেশন পরিকল্পনা এবং টেস্টিংয়ের জন্য অ্যাড কপি ও ক্রিয়েটিভ ব্রিফ প্রস্তুতি।',
          deliverables: [
            'ক্যাম্পেইন ও অ্যাড-সেট কাঠামো',
            'অডিয়েন্স ও লোকেশন নোট',
            'অ্যাড কপি ও ক্রিয়েটিভ ব্রিফ',
          ],
          image: META_ADS_IMAGE,
          imageAlt: 'Meta Ads অনুশীলনমূলক প্রজেক্টের জ্যামিতিক ইলাস্ট্রেশন',
        },
        {
          id: 'practice-social-calendar',
          category: 'social-media',
          categoryLabel: 'Social Media',
          statusLabel: 'অনুশীলনমূলক প্রজেক্ট',
          title: 'বিজনেস পেজ অপটিমাইজেশন ও মাসিক কনটেন্ট প্ল্যান',
          goal: 'সেবাগুলো সহজভাবে তুলে ধরতে এবং ব্র্যান্ডের ধারাবাহিকতা বজায় রাখতে পুনরাবৃত্তিযোগ্য মাসিক পাবলিশিং সিস্টেম তৈরি।',
          contribution:
            'পেজ বায়ো ও CTA উন্নতির নির্দেশনা, ৪টি কনটেন্ট পিলার নির্ধারণ এবং সাপ্তাহিক পোস্টের কাঠামো তৈরি।',
          deliverables: [
            'পেজ অপটিমাইজেশন চেকলিস্ট',
            '৪-পিলার কনটেন্ট ক্যালেন্ডার',
            'পোস্ট আইডিয়া গাইড',
          ],
          image: SOCIAL_IMAGE,
          imageAlt: 'সোশ্যাল মিডিয়া অনুশীলনমূলক প্রজেক্টের গ্রিড ইলাস্ট্রেশন',
        },
      ],
    },
    process: {
      sectionLabel: 'কাজের প্রক্রিয়া',
      heading: 'যেভাবে কাজ সম্পন্ন করি',
      subheading: 'প্রথম আলোচনা থেকে শুরু করে ধাপে ধাপে স্বচ্ছ ও পরিপাটি কাজের প্রক্রিয়া।',
      steps: [
        {
          number: '০১',
          title: 'বোঝা (Discover)',
          description: 'ব্যবসা, অডিয়েন্স এবং লক্ষ্য সম্পর্কে ধারণা নেওয়া।',
        },
        {
          number: '০২',
          title: 'পরিকল্পনা (Plan)',
          description: 'উপযুক্ত কৌশল ও অগ্রাধিকার নির্ধারণ।',
        },
        {
          number: '০৩',
          title: 'বাস্তবায়ন (Execute)',
          description: 'পরিকল্পনা অনুযায়ী কাজ সম্পন্ন করা।',
        },
        {
          number: '০৪',
          title: 'পর্যালোচনা ও উন্নতি (Review)',
          description: 'প্রাপ্ত তথ্য বিশ্লেষণ করে প্রয়োজনীয় পরিবর্তন আনা।',
        },
      ],
    },
    contact: {
      sectionLabel: 'যোগাযোগ',
      heading: 'আপনার কি কোনো প্রজেক্টের পরিকল্পনা আছে?',
      body: 'আপনার ব্যবসা এবং কী ধরনের উন্নতি চান, সে সম্পর্কে আমাকে জানান। আমরা একটি আলোচনার মাধ্যমে শুরু করতে পারি।',
      directChannelsLabel: 'সরাসরি যোগাযোগ মাধ্যম',
      whatsappLabel: 'হোয়াটসঅ্যাপ (WhatsApp)',
      whatsappDisplay: '01726-902902',
      whatsappAction: 'হোয়াটসঅ্যাপে মেসেজ দিন',
      facebookLabel: 'ফেসবুক (Facebook)',
      facebookAction: 'ফেসবুক প্রোফাইল দেখুন',
      linkedinLabel: 'লিঙ্কডইন (LinkedIn)',
      linkedinStatus: 'প্রোফাইল লিংক যোগ করা হবে',
      linkedinNote: 'ব্যক্তিগত লিঙ্কডইন প্রোফাইল লিংক যুক্ত হলে এখানে হালনাগাদ করা হবে।',
      emailLabel: 'ইমেইল (Email)',
      emailAction: 'ইমেইল পাঠান',
      copyEmailLabel: 'কপি',
      copiedLabel: 'কপি হয়েছে',
      composer: {
        title: 'দ্রুত প্রজেক্ট বার্তা',
        subtitle:
          'নিচে সংক্ষিপ্ত তথ্য লিখুন এবং সরাসরি হোয়াটসঅ্যাপ অথবা ইমেইল অ্যাপে পাঠান—এখানে কোনো ডেটা সংরক্ষণ করা হয় না।',
        serviceLabel: 'আগ্রহের বিষয়',
        generalOption: 'সাধারণ আলোচনা',
        businessLabel: 'আপনার ব্যবসা বা প্রজেক্টের নাম (ঐচ্ছিক)',
        businessPlaceholder: 'যেমন: অনলাইন শপ, সার্ভিস ব্যবসা, পার্সোনাল ব্র্যান্ড',
        goalLabel: 'কী বিষয়ে উন্নতি করতে চান?',
        goalPlaceholder: 'SEO, Meta Ads বা Social Media নিয়ে আপনার লক্ষ্য সংক্ষেপে লিখুন...',
        previewLabel: 'বার্তার প্রিভিউ',
        sendButton: 'হোয়াটসঅ্যাপে এগিয়ে যান',
        sendEmailButton: 'ইমেইল অ্যাপে পাঠান',
        helperNote:
          'আপনার প্রস্তুতকৃত বার্তাসহ হোয়াটসঅ্যাপ অথবা ডিফল্ট ইমেইল অ্যাপ খুলবে।',
      },
    },
    footer: {
      roleLine: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট · SEO · Meta Ads · Social Media Marketing',
      quickLinksLabel: 'নেভিগেশন',
      connectLabel: 'সংযুক্ত থাকুন',
      copyright: `© ${new Date().getFullYear()} আবদুল্লাহ। সর্বস্বত্ব সংরক্ষিত।`,
    },
  },
};
