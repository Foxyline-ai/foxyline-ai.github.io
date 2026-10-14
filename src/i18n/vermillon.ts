// =========================================================
// FOXYLINE — VERMILLON copy.
//
// Positioning: capacity without headcount. The page opens on the reader's
// bottleneck, not on the studio's track record. "Eighteen sites in production"
// answers "are you credible?" — it does not answer "what does this fix for me?".
//
// Deliberately NOT used: "senior partner, no juniors, no handoffs". Research in
// Aug 2026 found five competing studios running that exact line; it is now the
// category's background noise, not a differentiator. Seniority still shows up —
// but as a consequence of how the work runs, never as the headline claim.
//
// Voice: "vous" for the problem, "je" for the method. Plain declaratives.
// No aphoristic rebuttals ("No agency. No juniors.") — see DESIGN.md > Voice.
// =========================================================

import type { ImageMetadata } from 'astro';

// Portraits supplied by the clients, taken from their own live sites.
import maximeBersou from '../assets/voices/maxime-bersou.webp';
import francisForton from '../assets/voices/francis-forton.webp';

export type Lang = 'en' | 'fr';

export const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_bpA8BrPJisRUneWkbe3GbPBXSW4CNeiupI5iDeR61Sa2WCVmkD_VdzinkNYfxZYZwN6GzUpC?gv=true';

export const EMAIL = 'hi@foxyline.ai';

/* ---------------------------------------------------------
   OUTSTANDING — figures the client has but has not supplied.
   Do not invent values for these. Each `pending: true` block is
   hidden from the page until a real number replaces it.
   · RPE: traffic, bookings, local ranking across the network
   · Tapio: gains produced by the SEO/GEO programme (the 259k
     impressions / 0.87% CTR in the repo are a baseline, not a result)
   · Avoided cost: order of magnitude vs a classic agency
   --------------------------------------------------------- */

interface Gap {
  from: string;
  fromLabel: string;
  to: string;
  toLabel: string;
}

interface Result {
  client: string;
  sector: string;
  problem: string;
  outcome: string;
  figures: { value: string; label: string }[];
  href?: string;
  pending?: boolean;
}

interface Copy {
  meta: { title: string; description: string };
  nav: { work: string; method: string; contact: string; alt: string };
  hero: {
    kicker: string;
    lineA: string;
    lineB: string;
    lineC: string;
    sub: string;
    cta: string;
    alt: string;
  };
  gaps: Gap[];
  block: { mark: string; title: string; body: string[] };
  results: { mark: string; title: string; lede: string; items: Result[] };
  network: { mark: string; title: string; lede: string };
  method: { mark: string; title: string; body: string[] };
  voices: { mark: string; title: string };
  booking: { mark: string; title: string; body: string; cta: string; or: string };
  footer: { legal: string; place: string };
}

export const V: Record<Lang, Copy> = {
  en: {
    meta: {
      title: 'Foxyline — more output, without more headcount',
      description:
        'More sites, more languages, more content, without hiring and without a monthly retainer. Fixed-scope sprints for marketing teams in Belgium and France.',
    },
    nav: { work: 'Work', method: 'How it runs', contact: 'Contact', alt: 'FR' },
    hero: {
      kicker: 'Web studio · Brussels',
      lineA: 'Your targets',
      lineB: 'doubled.',
      lineC: 'Your team didn’t.',
      sub: 'More sites, more languages, more content — without hiring, and without holding an agency on retainer. That is the work I do.',
      cta: 'Book thirty minutes',
      alt: 'See the work',
    },
    gaps: [
      { from: '10×', fromLabel: 'More content', to: '0', toLabel: 'New hires' },
      { from: '18', fromLabel: 'Sites live', to: '1', toLabel: 'Point of contact' },
      { from: '4', fromLabel: 'Weeks', to: '1', toLabel: 'Fixed scope, dated' },
    ],
    block: {
      mark: '01 / The bottleneck',
      title: 'It is not your team that got slower.',
      body: [
        'Your marketing team is asked for roughly three times what it was asked for two years ago: a site per entity, two or three languages, content that never stops, and now visibility inside AI answers as well. The team did not shrink. The list grew.',
        'The two usual ways out are expensive. Hiring takes six months and commits a salary before you know whether the load is permanent. A monthly retainer gives you an account manager, a junior on the account, and an invoice that does not move when the work does.',
        'There is a third option, and it is the one I run: production capacity you switch on for a fixed scope with dates, and that stops when the work ships.',
      ],
    },
    results: {
      mark: '02 / What that produced',
      title: 'Three teams that did not grow.',
      lede: 'Named where the client agreed to it, sector-anonymous where they did not.',
      items: [
        {
          client: 'A Belgian employee-benefits fintech',
          sector: 'Fintech',
          problem:
            'Content production was capped by the size of the team, headcount was frozen, and the site needed a rebuild nobody wanted to risk — the search traffic it carried was too valuable to gamble.',
          outcome:
            'An AI content engine wired into the workflow the team already used, and a full rebuild that moved every URL on the site. Output went up tenfold with nobody new on the payroll — including 79 sector pages, one per Belgian joint committee, in French and Dutch. Those pages did not exist a year ago; they now bring 1,900 visits a quarter at an average position of 6.8. The rebuild did not cost rankings either: the French homepage went from position 10.8 to 5.4 with 15% more clicks, and the login pages climbed to positions 2.1 and 2.2 on brand-new URLs. Measured in Search Console, year on year to 26 Aug 2026.',
          figures: [
            { value: '79', label: 'Sector pages, from zero' },
            { value: '0', label: 'New hires' },
            { value: '+5.4', label: 'Positions, homepage' },
          ],
        },
        {
          client: 'Radiology Partners Europe',
          sector: 'Healthcare · pan-European',
          problem:
            'Every practice wanted its own site and its own voice. The group needed one brand, one architecture, and one place to look at the numbers.',
          outcome:
            'One backbone cascaded across the network: shared architecture, tracking and deploy pipeline, with language, brand and content set per practice. The sites are not placeholders — one practice went from nothing to 992 search visits in its first ninety days, another sits at position 4.3 on its own city, and the group site went from 23 clicks to 405. Measured in Search Console, 28 May – 26 Aug 2026.',
          figures: [
            { value: '18', label: 'Sites live' },
            { value: '5,200', label: 'Search visits / 90 days' },
            { value: '1', label: 'Point of contact' },
          ],
          href: 'https://radiologypartnerseurope.com/',
        },
        {
          client: 'Tapio',
          sector: 'B2B SaaS · carbon intelligence',
          problem:
            'A WordPress site carrying more than it was built for, and two language markets with no search presence at all.',
          outcome:
            'Moved off WordPress onto a static build and restructured into three languages. The English and Dutch versions did not exist in search before; they now bring 220 visits a quarter on their own. On the Belgian market the click-through rate went from 3.4% to 6.0%, and on the event site it went from 8.4% to 26%. Measured in Search Console over the ninety days to 26 Aug 2026.',
          figures: [
            { value: '×3', label: 'Click-through rate' },
            { value: '220', label: 'Visits from EN + NL' },
            { value: '3', label: 'Languages live' },
          ],
          href: 'https://www.tapio.eco/',
        },
      ],
    },
    network: {
      mark: '03 / The network',
      title: 'What one backbone looks like.',
      lede:
        'Eighteen practice sites on shared architecture, tracking and deploy pipeline. Language, brand and content are set per practice, so each one ranks in its own town rather than competing with the others. Captured from production in August 2026.',
    },
    method: {
      mark: '04 / How it runs',
      title: 'Fixed scope, dated deliverables.',
      body: [
        'It starts with a thirty-minute call. You describe the context, I tell you whether I am the right person for it. If I am not, you hear that on the call rather than three weeks into a proposal.',
        'What follows is a fixed scope with a date against each deliverable. Week one is diagnostic and conversion mapping. Week two settles architecture, copy and direction. Week three is design and engineering, with tracking built in rather than bolted on. Week four is QA, launch and handover.',
        'You get an indicator agreed with you before anything is built, and measured after it ships. I answer email within one working day. There is no account layer between us, because there is no one else here.',
      ],
    },
    voices: { mark: '05 / Voices', title: 'From the people who signed.' },
    booking: {
      mark: '06 / Booking',
      title: 'Thirty minutes, no deck.',
      body: 'You describe the load your team is carrying. If I can take part of it, I scope a sprint with dates. If I cannot, you will know before the call ends.',
      cta: 'Book thirty minutes',
      or: 'or write to',
    },
    footer: { legal: 'Foxyline is a brand of Moosly SRL', place: 'Brussels · Belgium' },
  },

  fr: {
    meta: {
      title: 'Foxyline — produire plus, sans recruter',
      description:
        'Plus de sites, plus de langues, plus de contenu, sans recruter et sans retenir une agence au mois. Sprints à périmètre fixe pour les équipes marketing en Belgique et en France.',
    },
    nav: { work: 'Réalisations', method: 'Déroulé', contact: 'Contact', alt: 'EN' },
    hero: {
      kicker: 'Studio web · Bruxelles',
      lineA: 'Vos objectifs',
      lineB: 'ont doublé.',
      lineC: 'Votre équipe, non.',
      sub: 'Plus de sites, plus de langues, plus de contenu — sans recruter et sans retenir une agence au mois. C’est le travail que je fais.',
      cta: 'Réserver trente minutes',
      alt: 'Voir les réalisations',
    },
    gaps: [
      { from: '10×', fromLabel: 'Plus de contenu', to: '0', toLabel: 'Recrutement' },
      { from: '18', fromLabel: 'Sites en ligne', to: '1', toLabel: 'Interlocuteur' },
      { from: '4', fromLabel: 'Semaines', to: '1', toLabel: 'Périmètre fixe, daté' },
    ],
    block: {
      mark: '01 / Le goulot',
      title: 'Ce n’est pas votre équipe qui a ralenti.',
      body: [
        'On demande à votre équipe marketing environ trois fois ce qu’on lui demandait il y a deux ans : un site par entité, deux ou trois langues, du contenu en continu, et désormais une présence dans les réponses des moteurs IA. L’équipe n’a pas rétréci. C’est la liste qui s’est allongée.',
        'Les deux issues habituelles coûtent cher. Recruter prend six mois et engage un salaire avant de savoir si la charge est durable. Retenir une agence au mois vous donne un interlocuteur commercial, un junior sur le compte, et une facture qui ne bouge pas quand le travail baisse.',
        'Il existe une troisième voie, et c’est celle que je fais tourner : une capacité de production que vous activez sur un périmètre fixe et daté, et qui s’arrête quand le travail est livré.',
      ],
    },
    results: {
      mark: '02 / Ce que ça a donné',
      title: 'Trois équipes qui n’ont pas grandi.',
      lede: 'Nommé quand le client l’a autorisé, sectoriel anonyme sinon.',
      items: [
        {
          client: 'Un acteur belge des avantages salariés',
          sector: 'Fintech',
          problem:
            'La production de contenu plafonnait à la taille de l’équipe, les recrutements étaient gelés, et le site avait besoin d’une refonte que personne ne voulait risquer : le trafic de recherche qu’il portait était trop précieux pour être joué.',
          outcome:
            'Une chaîne de production IA branchée sur les outils que l’équipe utilisait déjà, et une refonte complète qui a déplacé toutes les URL du site. Le volume de contenu a été multiplié par dix sans une seule embauche — dont 79 pages sectorielles, une par commission paritaire, en français et en néerlandais. Ces pages n’existaient pas il y a un an ; elles apportent aujourd’hui 1 900 visites par trimestre, en position moyenne 6,8. La refonte n’a rien coûté au référencement non plus : l’accueil français est passé de la position 10,8 à 5,4 avec 15 % de clics en plus, et les pages de connexion sont remontées aux positions 2,1 et 2,2 sur des URL entièrement neuves. Mesuré dans Search Console, en glissement annuel au 26 août 2026.',
          figures: [
            { value: '79', label: 'Pages sectorielles, parties de zéro' },
            { value: '0', label: 'Recrutement' },
            { value: '+5,4', label: 'Places, accueil' },
          ],
        },
        {
          client: 'Radiology Partners Europe',
          sector: 'Santé · pan-européen',
          problem:
            'Chaque cabinet voulait son site et sa voix. Le groupe avait besoin d’une marque, d’une architecture et d’un seul endroit où lire les chiffres.',
          outcome:
            'Un socle unique décliné sur le réseau : architecture, tracking et chaîne de déploiement partagés, langue, marque et contenu réglés cabinet par cabinet. Les sites ne sont pas des coquilles : un cabinet est passé de zéro à 992 visites de recherche sur ses quatre-vingt-dix premiers jours, un autre tient la position 4,3 sur sa ville, et le site du groupe est passé de 23 à 405 clics. Mesuré dans Search Console, 28 mai – 26 août 2026.',
          figures: [
            { value: '18', label: 'Sites en ligne' },
            { value: '5 200', label: 'Visites recherche / 90 j' },
            { value: '1', label: 'Interlocuteur' },
          ],
          href: 'https://radiologypartnerseurope.com/',
        },
        {
          client: 'Tapio',
          sector: 'SaaS B2B · carbon intelligence',
          problem:
            'Un site WordPress qui portait plus que ce pour quoi il avait été construit, et deux marchés linguistiques sans aucune présence en recherche.',
          outcome:
            'Sortie de WordPress vers un build statique et restructuration en trois langues. Les versions anglaise et néerlandaise n’existaient pas en recherche ; elles apportent aujourd’hui 220 visites par trimestre à elles seules. Sur le marché belge, le taux de clic est passé de 3,4 % à 6,0 %, et de 8,4 % à 26 % sur le site événementiel. Mesuré dans Search Console sur les quatre-vingt-dix jours au 26 août 2026.',
          figures: [
            { value: '×3', label: 'Taux de clic' },
            { value: '220', label: 'Visites via EN + NL' },
            { value: '3', label: 'Langues en ligne' },
          ],
          href: 'https://www.tapio.eco/',
        },
      ],
    },
    network: {
      mark: '03 / Le réseau',
      title: 'À quoi ressemble un socle unique.',
      lede:
        'Dix-huit sites de cabinets sur une architecture, un tracking et une chaîne de déploiement partagés. Langue, marque et contenu sont réglés cabinet par cabinet, pour que chacun ressorte dans sa ville au lieu de se concurrencer. Captures prises en production en août 2026.',
    },
    method: {
      mark: '04 / Déroulé',
      title: 'Périmètre fixe, livrables datés.',
      body: [
        'Ça commence par un appel de trente minutes. Vous décrivez le contexte, je vous dis si je suis la bonne personne. Si je ne le suis pas, vous l’entendez pendant l’appel plutôt que trois semaines plus tard dans une proposition.',
        'Ensuite vient un périmètre fixe, avec une date en face de chaque livrable. Semaine un : diagnostic et cartographie de conversion. Semaine deux : architecture, contenus et direction. Semaine trois : design et développement, avec le tracking intégré à la construction plutôt qu’ajouté après. Semaine quatre : recette, mise en ligne et passation.',
        'Vous avez un indicateur défini avec vous avant qu’on construise, et mesuré après la mise en ligne. Je réponds aux mails sous un jour ouvré. Il n’y a pas de couche commerciale entre nous, parce qu’il n’y a personne d’autre ici.',
      ],
    },
    voices: { mark: '05 / Paroles', title: 'De ceux qui ont signé.' },
    booking: {
      mark: '06 / Rendez-vous',
      title: 'Trente minutes, sans deck.',
      body: 'Vous décrivez la charge que porte votre équipe. Si je peux en prendre une partie, je cadre un sprint avec des dates. Sinon, vous le saurez avant la fin de l’appel.',
      cta: 'Réserver trente minutes',
      or: 'ou écrivez à',
    },
    footer: { legal: 'Foxyline est une marque de Moosly SRL', place: 'Bruxelles · Belgique' },
  },
};

// Attributed quotes, verbatim as supplied. The English is the original.
export const VOICES: Record<
  Lang,
  { quote: string; name: string; role: string; portrait: ImageMetadata }[]
> = {
  en: [
    {
      quote:
        'Foxyline immediately understood the specific needs of a radiology practice. The result is a clean, modern and reassuring website that inspires trust. Strong technical expertise, great taste, and zero unnecessary fluff. Highly recommended.',
      name: 'Dr Maxime Bersou',
      role: 'Radiologist · Brussels',
      portrait: maximeBersou,
    },
    {
      quote:
        'Foxyline combines strategic thinking with top-level execution. They truly understand healthcare, branding and scalability. More than a vendor, they are a long-term tech partner.',
      name: 'Francis Forton',
      role: 'Cofounder, Radiology Partners Europe',
      portrait: francisForton,
    },
  ],
  fr: [
    {
      quote:
        'Foxyline a immédiatement compris les besoins spécifiques d’un cabinet de radiologie. Le résultat est un site clair, moderne et rassurant, qui inspire confiance. Une vraie expertise technique, beaucoup de goût, et zéro superflu. Je recommande vivement.',
      name: 'Dr Maxime Bersou',
      role: 'Radiologue · Bruxelles',
      portrait: maximeBersou,
    },
    {
      quote:
        'Foxyline allie réflexion stratégique et exécution de haut niveau. Ils comprennent réellement la santé, la marque et le passage à l’échelle. Plus qu’un prestataire : un partenaire technologique de long terme.',
      name: 'Francis Forton',
      role: 'Cofondateur, Radiology Partners Europe',
      portrait: francisForton,
    },
  ],
};
