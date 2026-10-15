# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: marketing decision-makers (CMO, marketing manager, communication lead) inside mid-to-large organisations in Belgium and France. They arrive already burned by an agency engagement — a rebuild that slipped, a retainer with no measurable link to business outcomes, a senior partner replaced by a junior after signature.

Secondary: founders and co-founders of multi-entity groups (medical practices, corporate networks) who need one point of contact across many sites rather than one agency per entity.

The job: get a digital asset shipped — on a dated schedule, by someone senior, with a business metric attached — without hiring, without a retainer, and without managing an agency.

## Product Purpose

Foxyline delivers strategy, design, engineering and measurement as fixed-scope sprints of 3 to 6 weeks. Success is a shipped, measured deliverable inside the announced window, and a client who deals with the same senior person from brief to handover.

## Positioning

One senior point of contact, backed by a network of specialists called in as needed, with AI-augmented delivery capacity. The claim a neighbouring agency cannot truthfully copy: the person who scopes the work is the person who ships it, at the delivery throughput of a 4–6 person team, on fixed scope with dated deliverables and replies within one working day.

Explicit anti-positioning: not an agency, no juniors on the account, no open-ended retainer.

## Operating Context

- Engagement starts with a 30-minute call booked through Google Calendar appointment scheduling; no deck, no pitch process.
- Sprint structure: Week 1 diagnostic and conversion mapping, Week 2 architecture/wireframes/copy/brand direction, Week 3 design, engineering and tracking integration, Week 4 QA, conversion optimisation, launch and handover.
- Multi-site engagements cascade a single template across new entities (RPE: 10+ radiology-practice sites, 7 practices cascaded).
- Clients are evaluated and served bilingually: French is canonical, English is a faithful translation. Belgium and France.

## Capabilities and Constraints

- Website creation, multi-site deployment, custom development, web automation, GEO (AI-search) optimisation, marketing AI enablement.
- Delivery model: solo senior lead plus a network of specialists brought in per engagement. The client's point of contact never changes.
- Pricing is never published. The entry ticket is discussed on the call; the site sells scoping and speed, not a rate.
- Site is a static Astro build, bilingual (EN at `/`, FR under `/fr/`), with a first-party design system in `public/styles/foxyline-ds/`.
- Legal entity: Foxyline is a brand of Moosly SRL, Brussels, Belgium. Contact: hi@foxyline.ai.

## Brand Commitments

- Name and wordmark: Foxyline (fox mark + wordmark, `src/components/ds/atoms/Mark.astro`).
- Voice: plain, specific, unhedged. States what is wrong with the incumbent agency model in concrete terms (a rebuild promised in 4 months that takes 9; €15,000/month with no measurable outcome). No superlatives, no "elevate/seamless/next-gen" register.
- Bilingual FR/EN with French as source of truth.

## Evidence on Hand

Confirmed and publishable:

- **Radiology Partners Europe** — named with authorisation. 10+ radiology-practice sites, one point of contact, template cascaded across 7 new practices, co-founder governance. Screenshot in repo: `src/assets/rpe-home.png`. Case study page exists.
- **A Belgian employee-benefits fintech** — sector-anonymous. Marketing AI shift plus website rebuild; 10× content output, cited by ChatGPT/Perplexity/Gemini, zero new hires.
- **Pan-European corporate networks** — sector-anonymous.

Available but not yet in the repository (user to supply; must not be fabricated in the meantime):

- Client logos cleared for a logo row.
- Screenshots of delivered sites beyond the RPE home.
- At least one attributable client testimonial (name or first name, role, sector).

Absences future work must not invent: no pricing, no published benchmarks, no client count, no team headcount, no awards, no third-party press.

## Product Principles

1. **The person who scopes is the person who ships.** Any surface implying an account layer, a team of anonymous makers, or a hand-off after signature contradicts the product.
2. **Fixed scope and dated deliverables over open-ended retainers.** Time and scope are the proof; commitments are stated with dates and durations, never as availability language.
3. **Every deliverable carries a KPI agreed with the client.** Outcome claims are tied to a measurable, never to effort or activity.
4. **Named where authorised, sector-anonymous otherwise.** Evidence is real or it is labelled. Never a placeholder logo, never an invented quote.
5. **Elastic capacity, single interface.** The specialist network is real and can be stated, but the client-facing surface stays one contact.

## Accessibility & Inclusion

No client-specific standard has been established. Baseline requirement: keyboard-operable navigation with visible focus states, and legible contrast in both the light and dark themes the site ships.
