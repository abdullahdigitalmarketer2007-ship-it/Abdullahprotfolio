# Product Requirements Document (PRD)
## Abdullah — Digital Marketing Specialist Portfolio

## 1. Product overview
A bilingual personal portfolio website for Abdullah, a Digital Marketing Specialist focused on SEO, Meta Ads, and Social Media Marketing.

## 2. Problem and opportunity
Potential clients need a quick way to understand who Abdullah is, what services he offers, what work he can demonstrate, and how to contact him. The site should establish trust through clarity and real evidence rather than unsupported claims.

## 3. Goals
- Communicate professional positioning within the first screen.
- Explain core services and the value each service can provide.
- Present verified work or clearly labeled practice projects.
- Make contact options visible and easy to use.
- Provide a polished bilingual experience.
- Deliver a fast, accessible, responsive experience.

## 4. Non-goals
- No e-commerce or payment flow.
- No client login or admin dashboard in the first release.
- No CRM, email automation, or analytics integrations unless separately requested.
- No invented testimonials, client logos, campaign metrics, credentials, or employment details.
- No claims of guaranteed rankings, leads, or revenue.

## 5. Target audience
Primary:
- Small and medium business owners
- Local businesses seeking digital marketing support
- Founders and service providers
- Potential freelance clients

Secondary:
- Recruiters and collaborators
- Other marketing professionals

## 6. User journeys
### Journey A: Potential client
1. Opens the homepage.
2. Understands Abdullah's role and main services.
3. Reviews service details and selected work.
4. Clicks WhatsApp or Facebook to start a conversation.

### Journey B: Recruiter/collaborator
1. Opens the homepage.
2. Reads About and Skills.
3. Reviews projects and work process.
4. Uses LinkedIn or another contact channel.

### Journey C: Bangla-first visitor
1. Opens the site.
2. Switches language to বাংলা.
3. Reads all main sections in Bangla.
4. Uses the same contact actions.

## 7. Sitemap and sections
Single-page portfolio with anchored navigation:
1. Home
2. About
3. Services
4. Skills
5. Projects
6. Process
7. Contact

A multi-page architecture is not required for the first release.

## 8. Functional requirements
### Header/navigation
- Display Abdullah wordmark/name.
- Provide anchor links to all major sections.
- Provide a visible language toggle: EN / বাংলা.
- Provide a contact CTA.
- Mobile navigation must be usable by keyboard and touch.

### Hero
- Show name, role, short positioning statement, and two CTAs.
- Primary CTA: Contact via WhatsApp.
- Secondary CTA: View projects.
- Use a portrait only if Abdullah supplies an approved photo; otherwise use a designed typographic/abstract visual.

### About
- Provide a concise introduction with editable copy.
- Do not state years of experience, education, location, or certifications until confirmed.

### Services
Show three core service groups:
- SEO
- Meta Ads
- Social Media Marketing

Each service should have a short description and a list of typical deliverables. Avoid guaranteeing results.

### Skills/toolkit
- Show only confirmed skills/tools.
- Unknown tools should be omitted or marked as editable placeholders in source content.
- Do not display proficiency percentages or star ratings.

### Projects
- Support project cards with title, category, objective, Abdullah's role, deliverables, and verified outcome (optional).
- If no real projects are supplied, show clearly labeled practice/demo projects or an empty-state invitation to add case studies.
- Never fabricate brands, screenshots, or campaign results.

### Process
Use a simple 4-step process:
1. Discover
2. Plan
3. Execute
4. Review & improve

### Contact
- Facebook link supplied by user.
- WhatsApp link generated from supplied number.
- LinkedIn: supplied URL is a generic feed URL, not a profile. Use a replaceable placeholder until a personal profile URL is supplied.
- Email: omit until supplied.
- If a contact form is implemented without a backend, label it as a demo and do not pretend messages are delivered.

### Language switch
- All authored interface content must be available in English and Bangla.
- Language toggle must update navigation, headings, descriptions, buttons, and footer.
- Use readable Bangla typography with a suitable Bengali font fallback.

## 9. Content requirements
Use `CONTENT.md` as the approved copy source. Keep all unknown facts as placeholders. The site should not contain lorem ipsum.

## 10. Design requirements
Follow `DESIGN_SYSTEM.md`. The site should feel premium, editorial, confident, and human-crafted. Avoid generic AI-template visuals.

## 11. Asset requirements
Follow `ASSETS.md`. Do not use random unrelated stock imagery. Use a real portrait only with user approval.

## 12. Accessibility and usability
- Semantic landmarks and heading order.
- Keyboard-accessible navigation and controls.
- Visible focus indicator.
- Sufficient color contrast.
- Descriptive alt text.
- Buttons and links must have clear labels.
- Respect reduced-motion preferences.

## 13. Responsive requirements
- Mobile: 320–767 px
- Tablet: 768–1023 px
- Desktop: 1024 px and above
- No horizontal overflow.
- Hero and project cards must reflow cleanly.
- Touch targets should be comfortably sized.

## 14. SEO requirements
- Page title: Abdullah | Digital Marketing Specialist
- Meta description describing SEO, Meta Ads, and Social Media Marketing services without guarantees.
- Open Graph metadata with an approved image when available.
- One H1; logical H2/H3 structure.
- Descriptive alt text and meaningful link labels.

## 15. Analytics/privacy
No analytics or tracking is required in the first release. Do not add tracking scripts without explicit approval and a privacy notice where appropriate.

## 16. Acceptance criteria
- [ ] Homepage communicates name, role, and service focus immediately.
- [ ] All required sections exist.
- [ ] EN/বাংলা toggle updates all site copy.
- [ ] Facebook and WhatsApp links work.
- [ ] LinkedIn is visibly flagged as needing a personal profile URL or left as a placeholder.
- [ ] No fabricated experience, clients, metrics, testimonials, or certifications.
- [ ] Project examples are real or explicitly labeled practice/demo.
- [ ] Mobile, tablet, and desktop layouts are usable.
- [ ] Keyboard navigation and focus states work.
- [ ] No broken links or nonfunctional CTAs.
- [ ] Build succeeds in the target environment.

## 17. Open items
- Approved professional portrait (optional)
- Personal LinkedIn profile URL
- Email address (optional)
- Short About biography
- Real project/case-study details and approved images
- Confirmed tools/software list
- Any verified education/certifications (optional)
