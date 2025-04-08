import i18next from 'i18next';

export const languages = ['en', 'fr', 'nl'] as const;
export type Language = typeof languages[number];

export const defaultLanguage = 'en';

export const ui = {
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.quote': 'Free Quote',
    
    'hero.title': 'Your website won\'t just match your competitors.',
    'hero.subtitle': 'It will surpass them.',
    'hero.description': 'Smart web design that\'s fast, unique, and foxy.',
    'hero.cta.quote': 'Get your quote in 24h',
    'hero.cta.portfolio': 'View our work',

    'pain.title': 'Are you tired of...',
    'pain.subtitle': 'Websites that don\'t reflect who you are?',
    'pain.generic.title': 'Generic Websites',
    'pain.generic.description': 'Templates that don\'t reflect your uniqueness and fail to set you apart from competitors.',
    'pain.performance.title': 'Poor Performance',
    'pain.performance.description': 'Slow and poorly optimized sites that drive visitors away and hurt your SEO.',
    'pain.experience.title': 'Frustrating Experience',
    'pain.experience.description': 'Unintuitive design and poorly thought-out features that don\'t convert visitors.',
    'pain.cta': 'Discover a better approach',

    'solution.title': 'Our promise is simple',
    'solution.subtitle': 'A website that reflects you and performs.',
    'solution.design.title': 'Custom Design',
    'solution.design.description': 'A unique site that reflects your identity and stands out from the competition.',
    'solution.performance.title': 'Optimal Performance',
    'solution.performance.description': 'Ultra-fast loading times and a smooth experience on all devices.',
    'solution.visibility.title': 'Maximum Visibility',
    'solution.visibility.description': 'Built-in SEO optimization to be easily found by potential clients.',

    'process.title': 'Our approach',
    'process.subtitle': 'Unique and effective',
    'process.analysis.title': 'In-depth Analysis',
    'process.analysis.description': 'We study your industry, goals, and target audience to create a tailored strategy.',
    'process.design.title': 'Unique Design',
    'process.design.description': 'Creating a distinctive visual identity that reflects your brand and captivates visitors.',
    'process.development.title': 'Optimized Development',
    'process.development.description': 'Clean and performant code for ultra-fast and perfectly indexed sites.',

    'why.title': 'Why choose us?',
    'why.speed': 'Ultra-fast sites with the latest technologies',
    'why.design': 'Custom design adapted to your brand',
    'why.seo': 'Built-in SEO optimization from the start',
    'why.support': 'Responsive support and personalized guidance',
    'why.cta': 'Let\'s talk about your project',

    'cta.title': 'Ready to stand out?',
    'cta.description': 'Get a website that reflects you and converts visitors into customers.',
    'cta.quote': 'Request your free quote',
    'cta.portfolio': 'View our work',
    
    'footer.description': 'Smart web design that\'s fast, unique, and foxy.',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    // Services page
    'services.title': 'Websites that reflect who you are.',
    'services.subtitle': 'And perform beyond expectations.',
    'services.description': 'We create websites that reflect your identity and exceed your goals.',

    'services.showcase.title': 'Business Websites',
    'services.showcase.subtitle': 'Custom-made for your industry',
    'services.showcase.description': 'A showcase website that perfectly represents you, optimized to convert visitors into customers.',
    'services.showcase.features': ['Unique and personalized design', 'Optimization for all devices', 'Integration with your business tools', 'Optimized performance and SEO'],

    'services.landing.title': 'Landing Pages',
    'services.landing.subtitle': 'Clear, effective, conversion-focused',
    'services.landing.description': 'Landing pages that capture attention and convert visitors into customers.',
    'services.landing.features': ['Clear and impactful message', 'Strategic calls to action', 'A/B testing for optimization', 'Conversion analysis'],

    'services.redesign.title': 'Redesign',
    'services.redesign.subtitle': 'Start fresh with solid foundations',
    'services.redesign.description': 'A complete redesign of your site to make it more performant and effective.',
    'services.redesign.features': ['Complete audit of existing site', 'New optimized architecture', 'Data-safe migration', 'Training on your new tools'],

    'services.seo.title': 'SEO & Visibility',
    'services.seo.subtitle': 'Make you visible where people look for you',
    'services.seo.description': 'A complete SEO strategy to improve your online visibility and attract more customers.',
    'services.seo.features': ['In-depth SEO audit', 'Technical optimization', 'Content strategy', 'Performance tracking'],

    // Portfolio page
    'portfolio.title': 'Our Latest Work',
    'portfolio.subtitle': 'Websites that make a difference',
    'portfolio.description': 'Discover our recent projects and the results achieved for our clients.',

    // About page
    'about.title': 'A small team.',
    'about.subtitle': 'A big impact.',
    'about.description': 'We are a passionate team that believes in simplicity and efficiency.',
    'about.philosophy.title': 'Our Philosophy',
    'about.philosophy.speed': 'We move fast',
    'about.philosophy.quality': 'We do it well',
    'about.philosophy.focus': 'We keep it focused',
    'about.team.title': 'Our Team',
    'about.team.description': 'A close-knit team passionate about web and design.'
  },
  fr: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.quote': 'Devis gratuit',
    
    'hero.title': 'Votre site n\'aura rien à envier à vos concurrents.',
    'hero.subtitle': 'Il les dépassera.',
    'hero.description': 'Design web futé, rapide, unique et rusé.',
    'hero.cta.quote': 'Demandez votre devis en 24h',
    'hero.cta.portfolio': 'Voir nos réalisations',

    'pain.title': 'Vous en avez assez...',
    'pain.subtitle': 'Des sites qui ne vous ressemblent pas ?',
    'pain.generic.title': 'Sites génériques',
    'pain.generic.description': 'Les templates tout faits ne reflètent pas votre unicité et ne vous démarquent pas de vos concurrents.',
    'pain.performance.title': 'Performance médiocre',
    'pain.performance.description': 'Les sites lents et mal optimisés font fuir vos visiteurs et pénalisent votre référencement.',
    'pain.experience.title': 'Expérience frustrante',
    'pain.experience.description': 'Un design peu intuitif et des fonctionnalités mal pensées qui ne convertissent pas vos visiteurs.',
    'pain.cta': 'Découvrez une meilleure approche',

    'solution.title': 'Notre promesse est simple',
    'solution.subtitle': 'Un site qui vous ressemble et qui performe.',
    'solution.design.title': 'Design sur-mesure',
    'solution.design.description': 'Un site unique qui reflète votre identité et se démarque de la concurrence.',
    'solution.performance.title': 'Performance optimale',
    'solution.performance.description': 'Des temps de chargement ultra-rapides et une expérience fluide sur tous les appareils.',
    'solution.visibility.title': 'Visibilité maximale',
    'solution.visibility.description': 'Optimisation SEO intégrée pour être trouvé facilement par vos clients potentiels.',

    'process.title': 'Notre approche',
    'process.subtitle': 'Unique et efficace',
    'process.analysis.title': 'Analyse approfondie',
    'process.analysis.description': 'Nous étudions votre secteur, vos objectifs et votre public cible pour créer une stratégie sur mesure.',
    'process.design.title': 'Design unique',
    'process.design.description': 'Création d\'une identité visuelle distinctive qui reflète votre marque et captive vos visiteurs.',
    'process.development.title': 'Développement optimisé',
    'process.development.description': 'Un code propre et performant pour des sites ultra-rapides et parfaitement référencés.',

    'why.title': 'Pourquoi nous choisir ?',
    'why.speed': 'Sites ultra-rapides avec les dernières technologies',
    'why.design': 'Design sur-mesure adapté à votre marque',
    'why.seo': 'Optimisation SEO intégrée dès le début',
    'why.support': 'Support réactif et accompagnement personnalisé',
    'why.cta': 'Parlons de votre projet',

    'cta.title': 'Prêt à vous démarquer ?',
    'cta.description': 'Obtenez un site qui vous ressemble et qui convertit vos visiteurs en clients.',
    'cta.quote': 'Demandez votre devis gratuit',
    'cta.portfolio': 'Voir nos réalisations',
    
    'footer.description': 'Design web futé, rapide, unique et rusé.',
    'footer.services': 'Services',
    'footer.resources': 'Ressources',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',

    // Services page
    'services.title': 'Des sites qui vous ressemblent.',
    'services.subtitle': 'Et qui performent.',
    'services.description': 'Nous créons des sites web qui reflètent votre identité et dépassent vos objectifs.',

    'services.showcase.title': 'Sites vitrines',
    'services.showcase.subtitle': 'Sur-mesure, adaptés à votre métier',
    'services.showcase.description': 'Un site vitrine qui vous représente parfaitement, optimisé pour convertir vos visiteurs en clients.',
    'services.showcase.features': ['Design unique et personnalisé', 'Optimisation pour tous les appareils', 'Intégration de vos outils métier', 'Performance et SEO optimisés'],

    'services.landing.title': 'Landing Pages',
    'services.landing.subtitle': 'Claires, efficaces, orientées conversion',
    'services.landing.description': 'Des pages d\'atterrissage qui captent l\'attention et convertissent vos visiteurs en clients.',
    'services.landing.features': ['Message clair et impactant', 'Appels à l\'action stratégiques', 'Tests A/B pour optimisation', 'Analyse des conversions'],

    'services.redesign.title': 'Refonte',
    'services.redesign.subtitle': 'Repartir sur de bonnes bases',
    'services.redesign.description': 'Une refonte complète de votre site pour le rendre plus performant et plus efficace.',
    'services.redesign.features': ['Audit complet de l\'existant', 'Nouvelle architecture optimisée', 'Migration sans perte de données', 'Formation à vos nouveaux outils'],

    'services.seo.title': 'SEO & Visibilité',
    'services.seo.subtitle': 'Vous rendre visible là où on vous cherche',
    'services.seo.description': 'Une stratégie SEO complète pour améliorer votre visibilité en ligne et attirer plus de clients.',
    'services.seo.features': ['Audit SEO approfondi', 'Optimisation technique', 'Stratégie de contenu', 'Suivi des performances'],

    // Portfolio page
    'portfolio.title': 'Nos dernières créations',
    'portfolio.subtitle': 'Des sites qui font la différence',
    'portfolio.description': 'Découvrez nos réalisations récentes et les résultats obtenus pour nos clients.',

    // About page
    'about.title': 'Une petite équipe.',
    'about.subtitle': 'Un grand impact.',
    'about.description': 'Nous sommes une équipe passionnée qui croit en la simplicité et l\'efficacité.',
    'about.philosophy.title': 'Notre philosophie',
    'about.philosophy.speed': 'On va vite',
    'about.philosophy.quality': 'On fait bien',
    'about.philosophy.focus': 'On fait juste',
    'about.team.title': 'Notre équipe',
    'about.team.description': 'Une équipe soudée, passionnée par le web et le design.'
  },
  nl: {
    'nav.services': 'Diensten',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Over ons',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.quote': 'Gratis offerte',
    
    'hero.title': 'Uw website zal niet alleen uw concurrenten evenaren.',
    'hero.subtitle': 'Het zal ze overtreffen.',
    'hero.description': 'Op maat gemaakte, snelle en elegante websites ontworpen voor uw online zichtbaarheid.',
    'hero.cta.quote': 'Krijg uw offerte binnen 24u',
    'hero.cta.portfolio': 'Bekijk ons werk',

    'pain.title': 'Bent u het beu...',
    'pain.subtitle': 'Websites die niet weerspiegelen wie u bent?',
    'pain.generic.title': 'Generieke Websites',
    'pain.generic.description': 'Templates die uw uniekheid niet weerspiegelen en u niet onderscheiden van concurrenten.',
    'pain.performance.title': 'Slechte Prestaties',
    'pain.performance.description': 'Trage en slecht geoptimaliseerde sites die bezoekers wegjagen en uw SEO schaden.',
    'pain.experience.title': 'Frustrerende Ervaring',
    'pain.experience.description': 'Niet-intuïtief ontwerp en slecht doordachte functies die bezoekers niet converteren.',
    'pain.cta': 'Ontdek een betere aanpak',

    'solution.title': 'Onze belofte is eenvoudig',
    'solution.subtitle': 'Een website die u weerspiegelt en presteert.',
    'solution.design.title': 'Maatwerk Design',
    'solution.design.description': 'Een unieke site die uw identiteit weerspiegelt en zich onderscheidt van de concurrentie.',
    'solution.performance.title': 'Optimale Prestaties',
    'solution.performance.description': 'Ultrasnelle laadtijden en een soepele ervaring op alle apparaten.',
    'solution.visibility.title': 'Maximale Zichtbaarheid',
    'solution.visibility.description': 'Ingebouwde SEO-optimalisatie om gemakkelijk gevonden te worden door potentiële klanten.',

    'process.title': 'Onze aanpak',
    'process.subtitle': 'Uniek en effectief',
    'process.analysis.title': 'Diepgaande Analyse',
    'process.analysis.description': 'We bestuderen uw sector, doelen en doelgroep om een strategie op maat te creëren.',
    'process.design.title': 'Uniek Ontwerp',
    'process.design.description': 'Het creëren van een onderscheidende visuele identiteit die uw merk weerspiegelt en bezoekers boeit.',
    'process.development.title': 'Geoptimaliseerde Ontwikkeling',
    'process.development.description': 'Schone en presterende code voor ultrasnelle en perfect geïndexeerde sites.',

    'why.title': 'Waarom voor ons kiezen?',
    'why.speed': 'Ultrasnelle sites met de nieuwste technologieën',
    'why.design': 'Maatwerk design aangepast aan uw merk',
    'why.seo': 'Ingebouwde SEO-optimalisatie vanaf het begin',
    'why.support': 'Responsieve ondersteuning en persoonlijke begeleiding',
    'why.cta': 'Laten we over uw project praten',

    'cta.title': 'Klaar om op te vallen?',
    'cta.description': 'Krijg een website die u weerspiegelt en bezoekers omzet in klanten.',
    'cta.quote': 'Vraag uw gratis offerte aan',
    'cta.portfolio': 'Bekijk ons werk',
    
    'footer.description': 'Op maat gemaakte, snelle en elegante websites voor uw online zichtbaarheid.',
    'footer.services': 'Diensten',
    'footer.resources': 'Middelen',
    'footer.contact': 'Contact',
    'footer.rights': 'Alle rechten voorbehouden.',

    // Services page
    'services.title': 'Websites die weerspiegelen wie u bent.',
    'services.subtitle': 'En die boven verwachting presteren.',
    'services.description': 'Wij creëren websites die uw identiteit weerspiegelen en uw doelen overtreffen.',

    'services.showcase.title': 'Bedrijfswebsites',
    'services.showcase.subtitle': 'Op maat gemaakt voor uw sector',
    'services.showcase.description': 'Een showcase website die u perfect vertegenwoordigt, geoptimaliseerd om bezoekers om te zetten in klanten.',
    'services.showcase.features': ['Uniek en gepersonaliseerd design', 'Optimalisatie voor alle apparaten', 'Integratie met uw bedrijfstools', 'Geoptimaliseerde prestaties en SEO'],

    'services.landing.title': 'Landing Pages',
    'services.landing.subtitle': 'Helder, effectief, conversiegericht',
    'services.landing.description': 'Landingspagina\'s die aandacht trekken en bezoekers omzetten in klanten.',
    'services.landing.features': ['Heldere en impactvolle boodschap', 'Strategische calls-to-action', 'A/B-testen voor optimalisatie', 'Conversie-analyse'],

    'services.redesign.title': 'Herontwerp',
    'services.redesign.subtitle': 'Een frisse start met solide basis',
    'services.redesign.description': 'Een complete herontwerp van uw site om deze effectiever en beter presterend te maken.',
    'services.redesign.features': ['Complete audit van bestaande site', 'Nieuwe geoptimaliseerde architectuur', 'Veilige datamigratie', 'Training voor uw nieuwe tools'],

    'services.seo.title': 'SEO & Zichtbaarheid',
    'services.seo.subtitle': 'U zichtbaar maken waar men zoekt',
    'services.seo.description': 'Een complete SEO-strategie om uw online zichtbaarheid te verbeteren en meer klanten aan te trekken.',
    'services.seo.features': ['Diepgaande SEO-audit', 'Technische optimalisatie', 'Contentstrategie', 'Prestatiemonitoring'],

    // Portfolio page
    'portfolio.title': 'Ons Laatste Werk',
    'portfolio.subtitle': 'Websites die het verschil maken',
    'portfolio.description': 'Ontdek onze recente projecten en de resultaten die we voor onze klanten hebben bereikt.',

    // About page
    'about.title': 'Een klein team.',
    'about.subtitle': 'Een grote impact.',
    'about.description': 'Wij zijn een gepassioneerd team dat gelooft in eenvoud en efficiëntie.',
    'about.philosophy.title': 'Onze Filosofie',
    'about.philosophy.speed': 'We werken snel',
    'about.philosophy.quality': 'We doen het goed',
    'about.philosophy.focus': 'We blijven gefocust',
    'about.team.title': 'Ons Team',
    'about.team.description': 'Een hecht team met passie voor web en design.'
  }
} as const;

type TranslationKey = keyof typeof ui.en;

i18next.init({
  lng: defaultLanguage,
  resources: Object.fromEntries(
    Object.entries(ui).map(([lang, translation]) => [
      lang,
      { translation }
    ])
  ),
});

export const t = (key: TranslationKey, lang = defaultLanguage) => {
  return i18next.t(key, { lng: lang }) as string | string[];
};