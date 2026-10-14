// =========================================================
// RPE NETWORK — the deployed sites, with their live screenshots.
// Captured 2026-08-26 from production. Places are taken from each site's own
// title/content; nothing here is inferred.
// =========================================================
import type { ImageMetadata } from 'astro';

import lacambre from '../assets/portfolio/lacambre.webp';
import bloom from '../assets/portfolio/bloom.webp';
import drbersou from '../assets/portfolio/drbersou.webp';
import vanmieghem from '../assets/portfolio/vanmieghem.webp';
import imaginx from '../assets/portfolio/imaginx.webp';
import radiologiepraktijk from '../assets/portfolio/radiologiepraktijk.webp';
import rxgentzuid from '../assets/portfolio/rxgentzuid.webp';
import rxmariakerke from '../assets/portfolio/rxmariakerke.webp';
import rxaalter from '../assets/portfolio/rxaalter.webp';
import temse from '../assets/portfolio/temse.webp';
import wevelgem from '../assets/portfolio/wevelgem.webp';
import sintamandsberg from '../assets/portfolio/sintamandsberg.webp';
import nieuwevaart from '../assets/portfolio/nieuwevaart.webp';
import eeklo from '../assets/portfolio/eeklo.webp';
import aarschot from '../assets/portfolio/aarschot.webp';
import zelzate from '../assets/portfolio/zelzate.webp';
import willebroek from '../assets/portfolio/willebroek.webp';
import antwerpennoord from '../assets/portfolio/antwerpennoord.webp';

export interface NetworkSite {
  name: string;
  place: string;
  image: ImageMetadata;
  href: string;
  external: boolean;
}

export const NETWORK_SITES: NetworkSite[] = [
  { name: 'Radiologie La Cambre', place: 'Ixelles · Case study', image: lacambre, href: '/case-studies/radiologie-la-cambre', external: false },
  { name: 'Bloom CareGroup', place: 'Antwerp', image: bloom, href: 'https://www.bloom-caregroup.com/', external: true },
  { name: 'Dr Bersou', place: 'Brussels', image: drbersou, href: 'https://drbersou.be/', external: true },
  { name: 'Radiologie Van Mieghem', place: 'Hasselt', image: vanmieghem, href: 'https://radiologievanmieghem.be/', external: true },
  { name: 'Imaginx', place: 'Belgium', image: imaginx, href: 'https://www.imaginx.be/', external: true },
  { name: 'Radiologiepraktijk', place: 'Geel · Herentals', image: radiologiepraktijk, href: 'https://radiologiepraktijk.be/', external: true },
  { name: 'Radiologie Gent Zuid', place: 'Ghent', image: rxgentzuid, href: 'https://rxgentzuid.be/', external: true },
  { name: 'Radiologie Mariakerke', place: 'Mariakerke', image: rxmariakerke, href: 'https://rxmariakerke.be/', external: true },
  { name: 'Radiologie Aalter', place: 'Aalter', image: rxaalter, href: 'https://rxaalter.be/', external: true },
  { name: 'Radiologie Sint-Amandsberg', place: 'Sint-Amandsberg', image: sintamandsberg, href: 'https://radiologiesintamandsberg.be/', external: true },
  { name: 'Radiologie Nieuwevaart', place: 'Ghent', image: nieuwevaart, href: 'https://radiologienieuwevaart.be/', external: true },
  { name: 'Radiologie Temse', place: 'Temse', image: temse, href: 'https://radiologietemse.be/', external: true },
  { name: 'Radiologie Wevelgem', place: 'Wevelgem', image: wevelgem, href: 'https://radiologiewevelgem.be/', external: true },
  { name: 'Eeklo Radiologie', place: 'Eeklo', image: eeklo, href: 'https://eekloradiologie.be/', external: true },
  { name: 'Radiologie Aarschot', place: 'Aarschot', image: aarschot, href: 'https://radiologie-aarschot.be/', external: true },
  { name: 'Radiologie Zelzate', place: 'Zelzate', image: zelzate, href: 'https://radiologiezelzate.be/', external: true },
  { name: 'Radiologie Willebroek', place: 'Willebroek', image: willebroek, href: 'https://radiologiewillebroek.be/', external: true },
  { name: 'Radiologie Antwerpen-Noord', place: 'Antwerp', image: antwerpennoord, href: 'https://radiologieantwerpennoord.be/', external: true },
];

export const NETWORK_NOTE = {
  en: `${NETWORK_SITES.length} live sites on one backbone. Locale, brand and content are tuned per practice; the architecture, tracking and deployment pipeline are shared.`,
  fr: `${NETWORK_SITES.length} sites en ligne sur un même socle. Langue, marque et contenu sont ajustés par cabinet ; l'architecture, le tracking et la chaîne de déploiement sont mutualisés.`,
};
