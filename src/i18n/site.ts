// =========================================================
// FOXYLINE · textes du site (DA « maison », octobre 2026).
//
// Voix : posée, prouvée, courte, signée. Le studio parle, Ludovic signe.
// Chaque chiffre vient de Search Console et porte sa date.
// On évite : formules choc, « plus qu'un X, un Y », trois adjectifs
// à la suite, tirets cadratins dans le texte courant, italique d'emphase.
// Un seul mot en renard par page : celui du titre principal.
// =========================================================

import type { ImageMetadata } from 'astro';

import maximeBersou from '../assets/voices/maxime-bersou.webp';
import francisForton from '../assets/voices/francis-forton.webp';

export type Lang = 'en' | 'fr';

export const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_bpA8BrPJisRUneWkbe3GbPBXSW4CNeiupI5iDeR61Sa2WCVmkD_VdzinkNYfxZYZwN6GzUpC?gv=true';

export const EMAIL = 'hi@foxyline.ai';

/** Préfixe de chemin par langue : l'anglais à la racine, le français sous /fr. */
export const base = (lang: Lang) => (lang === 'fr' ? '/fr' : '');

export const UI = {
  fr: {
    nav: { work: 'Travaux', method: 'Méthode', studio: 'Studio', contact: 'Contact', alt: 'EN', altLabel: 'English version' },
    skip: 'Aller au contenu',
    home: 'Foxyline, accueil',
    book: 'Prendre rendez-vous',
    footer: { legal: 'Foxyline est une marque de Moosly SRL', terms: 'Conditions', place: 'Bruxelles · Belgique' },
  },
  en: {
    nav: { work: 'Work', method: 'Method', studio: 'Studio', contact: 'Contact', alt: 'FR', altLabel: 'Version française' },
    skip: 'Skip to content',
    home: 'Foxyline, home',
    book: 'Book a call',
    footer: { legal: 'Foxyline is a brand of Moosly SRL', terms: 'Terms', place: 'Brussels · Belgium' },
  },
} as const;

export const HOME = {
  fr: {
    meta: {
      title: 'Foxyline · Des sites pensés pour durer, livrés à date',
      description:
        'Studio web indépendant à Bruxelles. Sites de marque, multilingues ou multi-entités, dessinés et développés par la même personne, livrés à la date annoncée et mesurés dans Search Console.',
      ogAlt: 'Foxyline · Des sites pensés pour durer, livrés à date.',
    },
    kicker: 'Studio web indépendant · Bruxelles',
    title: ['Des', 'sites', 'pensés', 'pour', 'durer,'],
    titleAccent: ['livrés', 'à', 'date.'],
    sub: 'Sites de marque, multilingues ou multi-entités, dessinés et développés par la même personne, puis mesurés dans Search Console.',
    seeWork: 'Voir les travaux',
    figures: [
      { value: '18', label: 'sites en production sur un socle commun' },
      { value: '79', label: 'pages sectorielles créées, en deux langues' },
      { value: '×3', label: 'taux de clic du site événementiel Tapio, de 8,4 % à 26 %' },
      { value: '4', label: 'semaines, du brief à la mise en ligne', end: true },
    ],
    approach: {
      title: 'Un périmètre fixe, une date en face de chaque livrable.',
      body: [
        'Les équipes marketing portent aujourd’hui un site par entité, deux ou trois langues, un flux de contenu continu, et désormais une présence dans les réponses des moteurs IA.',
        'Foxyline prend en charge cette production sur un périmètre fixe : un diagnostic, une direction, un site livré à la date annoncée et mesuré après sa mise en ligne. Sans recrutement, sans abonnement mensuel.',
      ],
    },
    work: {
      title: 'Travaux choisis.',
      note: 'Mesuré dans Search Console, au 26 août 2026.',
      rpe: {
        meta: 'Radiology Partners Europe · Santé',
        title: 'Un socle unique pour dix-huit cabinets.',
        body: 'Architecture, tracking et déploiement partagés ; langue, marque et contenu réglés cabinet par cabinet. Un cabinet est passé de zéro à 992 visites de recherche sur ses quatre-vingt-dix premiers jours, et le site du groupe de 23 à 405 clics.',
        figures: [
          { value: '18', label: 'sites en ligne' },
          { value: '5 200', label: 'visites recherche / 90 j' },
        ],
        link: 'Voir le site du groupe',
        alt: 'Page d’accueil de radiologypartnerseurope.com',
      },
      tapio: {
        meta: 'Tapio · SaaS B2B',
        title: 'Trois langues, un nouveau public.',
        body: 'Sortie de WordPress vers un build statique et restructuration en trois langues. Les versions anglaise et néerlandaise apportent aujourd’hui 220 visites par trimestre ; sur la Belgique, le taux de clic est passé de 3,4 % à 6,0 %.',
        link: 'Voir tapio.eco',
        alt: 'Page d’accueil de tapio.eco',
      },
      fintech: {
        meta: 'Avantages salariés · Fintech belge',
        title: 'Dix fois plus de contenu, sans recruter.',
        body: 'Une chaîne de production IA branchée sur les outils de l’équipe, et une refonte complète. 79 pages sectorielles, une par commission paritaire, en français et en néerlandais ; l’accueil est passé de la position 10,8 à 5,4.',
        panel: 'pages sectorielles, parties de zéro',
        panelNote: 'Client anonymisé à sa demande',
      },
    },
    network: {
      title: 'Vingt sites en production.',
      body: 'Les dix-huit cabinets du réseau Radiology Partners Europe, Tapio et le site du groupe. Langue, marque et contenu réglés site par site. Captures prises en production en août 2026.',
      caseLabel: 'Étude de cas',
    },
    lacambre: {
      kicker: 'Étude de cas · Ixelles · 2025',
      title: 'Radiologie La Cambre, de zéro à la première page.',
      body: 'Premier site du réseau à recevoir le traitement complet : architecture, contenu local et présence dans les réponses des moteurs IA. Ce qui a marché ici est devenu le modèle des dix-sept autres cabinets.',
      figures: [
        { value: '+37 %', label: 'clics, en un an' },
        { value: '11,2', label: 'position moyenne, contre 14,2' },
        { value: '1 272', label: 'visites sur 90 jours' },
      ],
      link: 'Lire l’étude de cas',
      photoAlt: 'Salle d’attente vitrée de Radiologie La Cambre, avenue Louise, ouverte sur la verdure',
      shotAlt: 'Page d’accueil de radiologielacambre.be',
    },
    method: {
      title: 'Quatre semaines, de l’audit à la mise en ligne.',
      steps: [
        { when: 'Semaine 01', name: 'Diagnostic', body: 'Audit, cartographie de conversion, indicateur fixé avec vous.' },
        { when: 'Semaine 02', name: 'Direction', body: 'Architecture, contenus et direction visuelle validés.' },
        { when: 'Semaine 03', name: 'Construction', body: 'Design et développement, avec la mesure intégrée dès le départ.' },
        { when: 'Semaine 04', name: 'Mise en ligne', body: 'Recette, lancement, passation. Puis la mesure.' },
      ],
      after: 'L’indicateur est défini avec vous avant qu’on construise, et mesuré après la mise en ligne. Si le projet demande plus de quatre semaines, chaque livrable garde sa date.',
    },
    studio: {
      title: 'Le studio, c’est Ludovic.',
      body: [
        'Je cadre chaque projet, je le conçois et je le mets en ligne moi-même. Quand il faut une expertise de plus, je fais appel à des spécialistes que je connais, mais c’est toujours à moi que vous parlez.',
        'Je réponds à vos messages sous un jour ouvré.',
      ],
      alt: 'Ludovic Laffineur, fondateur de Foxyline, souriant, en polo marine',
    },
    voices: { title: 'Ce qu’en disent les clients.' },
    contact: {
      title: 'Un appel de trente minutes pour commencer.',
      body: 'Vous décrivez le contexte ; je vous dis si je suis la bonne personne. Si oui, vous recevez ensuite un périmètre daté. Sinon, vous le savez avant la fin de l’appel.',
      brief: 'Ou envoyer un brief écrit',
    },
  },
  en: {
    meta: {
      title: 'Foxyline · Websites built to last, delivered on date',
      description:
        'Independent web studio in Brussels. Brand websites, multilingual or multi-entity, designed and built by the same person, delivered on the agreed date and measured in Search Console.',
      ogAlt: 'Foxyline · Websites built to last, delivered on date.',
    },
    kicker: 'Independent web studio · Brussels',
    title: ['Websites', 'built', 'to', 'last,'],
    titleAccent: ['delivered', 'on', 'date.'],
    sub: 'Brand websites, multilingual or multi-entity, designed and built by the same person, then measured in Search Console.',
    seeWork: 'See the work',
    figures: [
      { value: '18', label: 'sites in production on a shared backbone' },
      { value: '79', label: 'sector pages created, in two languages' },
      { value: '×3', label: 'click-through rate on Tapio’s event site, from 8.4% to 26%' },
      { value: '4', label: 'weeks, from brief to launch', end: true },
    ],
    approach: {
      title: 'A fixed scope, a date against every deliverable.',
      body: [
        'Marketing teams now carry a site per entity, two or three languages, a constant flow of content, and a presence inside AI answers on top of it.',
        'Foxyline takes on that production within a fixed scope: a diagnostic, a direction, a site delivered on the date announced and measured after launch. No hiring, no monthly retainer.',
      ],
    },
    work: {
      title: 'Selected work.',
      note: 'Measured in Search Console, 26 Aug 2026.',
      rpe: {
        meta: 'Radiology Partners Europe · Healthcare',
        title: 'One backbone for eighteen practices.',
        body: 'Shared architecture, tracking and deployment; language, brand and content set practice by practice. One practice went from nothing to 992 search visits in its first ninety days, and the group site from 23 clicks to 405.',
        figures: [
          { value: '18', label: 'sites live' },
          { value: '5,200', label: 'search visits / 90 days' },
        ],
        link: 'Visit the group site',
        alt: 'Homepage of radiologypartnerseurope.com',
      },
      tapio: {
        meta: 'Tapio · B2B SaaS',
        title: 'Three languages, a new audience.',
        body: 'Moved off WordPress onto a static build and restructured into three languages. The English and Dutch versions now bring 220 visits a quarter; in Belgium the click-through rate went from 3.4% to 6.0%.',
        link: 'Visit tapio.eco',
        alt: 'Homepage of tapio.eco',
      },
      fintech: {
        meta: 'Employee benefits · Belgian fintech',
        title: 'Ten times the content, no new hires.',
        body: 'An AI content pipeline wired into the team’s own tools, and a full rebuild. 79 sector pages, one per joint committee, in French and Dutch; the homepage moved from position 10.8 to 5.4.',
        panel: 'sector pages, from zero',
        panelNote: 'Client anonymised at their request',
      },
    },
    network: {
      title: 'Twenty sites in production.',
      body: 'The eighteen practices of the Radiology Partners Europe network, Tapio and the group site. Language, brand and content set site by site. Captured in production in August 2026.',
      caseLabel: 'Case study',
    },
    lacambre: {
      kicker: 'Case study · Ixelles · 2025',
      title: 'Radiologie La Cambre, from zero to page one.',
      body: 'The first site in the network to get the full treatment: architecture, local content and a presence inside AI answers. What worked here became the template for the other seventeen practices.',
      figures: [
        { value: '+37%', label: 'clicks, year on year' },
        { value: '11.2', label: 'average position, from 14.2' },
        { value: '1,272', label: 'visits over 90 days' },
      ],
      link: 'Read the case study',
      photoAlt: 'Glass-walled waiting room at Radiologie La Cambre, avenue Louise, opening onto greenery',
      shotAlt: 'Homepage of radiologielacambre.be',
    },
    method: {
      title: 'Four weeks, from audit to launch.',
      steps: [
        { when: 'Week 01', name: 'Diagnostic', body: 'Audit, conversion mapping, an indicator agreed with you.' },
        { when: 'Week 02', name: 'Direction', body: 'Architecture, content and visual direction signed off.' },
        { when: 'Week 03', name: 'Build', body: 'Design and engineering, with measurement built in from the start.' },
        { when: 'Week 04', name: 'Launch', body: 'QA, launch, handover. Then the measurement.' },
      ],
      after: 'The indicator is agreed with you before anything is built, and measured after launch. If a project needs more than four weeks, every deliverable still keeps its date.',
    },
    studio: {
      title: 'The studio is Ludovic.',
      body: [
        'I scope every project, design it and put it live myself. When it needs more expertise, I bring in specialists I know, but you always talk to me.',
        'I answer messages within one working day.',
      ],
      alt: 'Ludovic Laffineur, founder of Foxyline, smiling, in a navy polo shirt',
    },
    voices: { title: 'What clients say.' },
    contact: {
      title: 'A thirty-minute call to start.',
      body: 'You describe the context; I tell you whether I am the right person. If I am, you then receive a dated scope. If not, you know before the call ends.',
      brief: 'Or send a written brief',
    },
  },
} as const;

// Avis clients, tels que fournis. L'anglais est l'original.
// `excerpt` est un passage exact de `quote`, choisi pour sa précision.
export const VOICES: Record<
  Lang,
  { quote: string; excerpt: string; name: string; role: string; portrait: ImageMetadata }[]
> = {
  en: [
    {
      quote:
        'Foxyline immediately understood the specific needs of a radiology practice. The result is a clean, modern and reassuring website that inspires trust. Strong technical expertise, great taste, and zero unnecessary fluff. Highly recommended.',
      excerpt: 'Foxyline immediately understood the specific needs of a radiology practice.',
      name: 'Dr Maxime Bersou',
      role: 'Radiologist, Brussels',
      portrait: maximeBersou,
    },
    {
      quote:
        'Foxyline combines strategic thinking with top-level execution. They truly understand healthcare, branding and scalability. More than a vendor, they are a long-term tech partner.',
      excerpt: 'They truly understand healthcare, branding and scalability.',
      name: 'Francis Forton',
      role: 'Cofounder, Radiology Partners Europe',
      portrait: francisForton,
    },
  ],
  fr: [
    {
      quote:
        'Foxyline a immédiatement compris les besoins spécifiques d’un cabinet de radiologie. Le résultat est un site clair, moderne et rassurant, qui inspire confiance. Une vraie expertise technique, beaucoup de goût, et zéro superflu. Je recommande vivement.',
      excerpt: 'Foxyline a immédiatement compris les besoins spécifiques d’un cabinet de radiologie.',
      name: 'Dr Maxime Bersou',
      role: 'Radiologue, Bruxelles',
      portrait: maximeBersou,
    },
    {
      quote:
        'Foxyline allie réflexion stratégique et exécution de haut niveau. Ils comprennent réellement la santé, la marque et le passage à l’échelle. Plus qu’un prestataire : un partenaire technologique de long terme.',
      excerpt: 'Ils comprennent réellement la santé, la marque et le passage à l’échelle.',
      name: 'Francis Forton',
      role: 'Cofondateur, Radiology Partners Europe',
      portrait: francisForton,
    },
  ],
};
