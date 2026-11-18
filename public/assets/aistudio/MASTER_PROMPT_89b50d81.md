# MASTER PROMPT — Abdullah | Digital Marketing Specialist

You are a senior product designer, UI/UX designer, brand designer, and full-stack web developer. Build a polished, production-minded personal portfolio website for **Abdullah — Digital Marketing Specialist**.

## 1. Project goal
Create a memorable, credible portfolio that helps potential clients understand Abdullah's services, review verified work, and contact him. The website must feel intentionally art-directed and professionally crafted—not like a generic AI-generated template.

Primary goals:
1. Present Abdullah's professional positioning clearly.
2. Explain services in plain, benefit-led language.
3. Showcase only real, approved projects and measurable results.
4. Make Facebook, WhatsApp, LinkedIn, and email contact paths easy to find.
5. Work smoothly on mobile, tablet, and desktop.

## 2. Project files: read and follow all of them
Before writing code, read these project files in full:
- `PRD.md` — product goals, audience, requirements, page structure, and acceptance criteria.
- `DESIGN_SYSTEM.md` — visual direction, colors, typography, spacing, components, responsive behavior, and accessibility.
- `CONTENT.md` — approved copy, bilingual content rules, contact details, and placeholders.
- `ASSETS.md` — asset inventory, image-generation prompts, usage rules, and asset fallbacks.

Treat these files as the single source of truth. Do not invent facts to fill gaps. If files conflict, prioritize this order:
1. Explicit user-provided facts and contact links
2. `PRD.md` for product behavior
3. `DESIGN_SYSTEM.md` for visual decisions
4. `CONTENT.md` for copy
5. `ASSETS.md` for visual assets

If a required fact is missing, use a clearly labeled editable placeholder or omit the claim. Never create fake testimonials, client logos, certifications, employment history, project results, revenue figures, or performance statistics.

## 3. Brand and contact information
- Brand/name: **Abdullah**
- Role: **Digital Marketing Specialist**
- Service focus: **SEO • Meta Ads • Social Media Marketing**
- Positioning line: **Helping Businesses Grow Online**
- Facebook: https://www.facebook.com/profile.php?id=61594136079794
- WhatsApp number: +8801726902902
- WhatsApp URL: https://wa.me/8801726902902
- LinkedIn URL supplied: https://www.linkedin.com/feed/

Important LinkedIn note: the supplied URL points to LinkedIn's feed, not a personal profile. Add it as a temporary link only if needed, and make it easy to replace. Prefer a clear placeholder such as `[ADD_PERSONAL_LINKEDIN_PROFILE_URL]` until Abdullah supplies his public profile URL. Do not claim that the feed URL is his profile.

## 4. Experience and content integrity
Do not assume years of experience, education, location, certifications, client names, industries served, campaign budgets, or campaign outcomes. Use editable placeholders such as:
- `[Add a short professional introduction]`
- `[Add verified project title]`
- `[Add project goal and your contribution]`
- `[Add verified result, if available]`
- `[Add email address]`
- `[Add personal LinkedIn profile URL]`

A project card must never display invented metrics. If no verified case study is available, show a clearly marked “Selected Practice Projects” area and label each item as a practice/demo project.

## 5. Required experience
Build a responsive, bilingual (Bangla and English) portfolio. Include:
- Header with logo/wordmark, navigation, language switch, and contact CTA
- Hero section with name, role, short value proposition, and primary/secondary CTAs
- About section
- Services section
- Skills/toolkit section (only tools actually confirmed by the user; otherwise editable)
- Selected projects/case studies section
- Work process section
- Contact section with Facebook, WhatsApp, LinkedIn, and an editable email placeholder
- Footer with quick links and social links

Use a language switch that changes all authored interface copy between Bangla and English. Do not translate URLs, brand names, or technical product names unnecessarily. Persist language preference only if a simple, privacy-conscious implementation is available; otherwise default to English and keep the switch functional during the session.

## 6. Visual direction
Follow `DESIGN_SYSTEM.md`. Aim for a premium dark editorial aesthetic:
- Deep charcoal/near-black background
- Warm white typography
- Restrained electric-blue or muted-lime accent (use the exact tokens in the design system)
- Strong typography hierarchy
- Generous whitespace
- Deliberate grid and alignment
- Subtle motion and tasteful hover states
- Real project imagery or purposeful abstract visuals—not random stock photos

Avoid:
- Generic gradient blobs
- Excessive glassmorphism
- Overused AI-looking neon effects
- Random floating icons
- Fake dashboards and fabricated analytics
- Excessive animation
- Template-like cards with identical layouts everywhere

## 7. Implementation requirements
Use the existing Google AI Studio project stack and conventions where possible. Inspect the existing files before changing configuration. Do not replace working setup unnecessarily.

Implementation should:
- Use reusable components and clean, maintainable structure.
- Keep content data separate from layout where practical.
- Use semantic HTML and accessible labels.
- Provide keyboard-visible focus states.
- Use responsive layouts and optimized images.
- Include descriptive alt text.
- Ensure all buttons and links perform their stated actions.
- Use real `mailto:` only when a verified email is supplied; otherwise omit email action or show an editable placeholder in source content.
- Use `https://wa.me/8801726902902` for WhatsApp.
- Open external social links safely in a new tab.
- Avoid collecting or storing personal data unless a real form backend is configured.
- If a contact form is included without a backend, clearly explain that it is a front-end demo and do not show a false “message sent” success state.
- Do not expose API keys or secrets in client-side code.

## 8. SEO and quality
Add:
- Unique page title and meta description
- Open Graph title, description, and image placeholder
- Correct heading hierarchy
- Descriptive link text
- Favicon/wordmark placeholder
- Descriptive image alt text
- Basic performance optimization

Do not promise Google rankings or guaranteed marketing outcomes.

## 9. Build workflow
1. Inspect the starter project and identify its framework and entry points.
2. Read all five project documents.
3. Create the site structure and design tokens first.
4. Implement the responsive English version.
5. Add the Bangla translations and working language switch.
6. Add approved assets and replace placeholders only with supplied/verified content.
7. Test every navigation item, CTA, social link, language toggle, and responsive breakpoint.
8. Check for console/build errors and fix them.
9. Review the result against the PRD acceptance criteria.
10. Summarize what is complete and list every remaining placeholder clearly.

## 10. Definition of done
The project is complete only when:
- The site looks polished at mobile, tablet, and desktop sizes.
- The bilingual switch works across all sections.
- Contact/social links use the supplied destinations, with the LinkedIn profile URL flagged for replacement.
- No fake facts, metrics, testimonials, clients, or credentials appear.
- All navigation and CTAs work.
- The project builds/runs successfully in the provided environment.
- Any backend-dependent functionality is clearly identified as not configured.

Now read all project files and build the website accordingly. Do not stop at a wireframe; implement the working front-end within the available project environment.
