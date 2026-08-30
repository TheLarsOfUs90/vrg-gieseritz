/**
 * Club facts, contact, and photo paths.
 * Edit this file when numbers, people, or images change.
 * Then commit and push — GitHub Pages rebuilds the site.
 */
export const site = {
  shortName: 'VRG Gieseritz',
  legalName: 'Voltigier- und Reitgemeinschaft Gieseritz e. V.',
  url: 'https://www.vrg-gieseritz.de',
  description:
    'Voltigier- und Reitgemeinschaft Gieseritz e. V. — Voltigieren ab vier Jahren, Pferdetag und Vereinsleben in der Altmark.',
  founded: 1974,
  members: 55,
  children: 15,
  volunteers: 20,
  vaultingFromAge: 4,
  privacyUpdated: 'August 2026',
  address: {
    street: 'An der Kirche 3',
    zip: '29413',
    city: 'Wallstawe',
    district: 'OT Gieseritz',
    lat: 52.7767,
    lon: 11.0133
  },
  register: {
    court: 'Amtsgericht Stendal',
    number: 'VR 53047'
  },
  tax: {
    office: 'Finanzamt Salzwedel',
    number: '106/143/02351'
  },
  bank: {
    name: 'Sparkasse Altmark West',
    iban: 'DE17 8105 5555 3000 0117 21',
    bic: 'NOLADE21SAW'
  },
  chair: {
    role: 'Vorsitzender',
    name: 'Volker Zipperling',
    phone: '0171 8470720',
    tel: 'tel:+491718470720',
    email: 'info.zipp@t-online.de'
  },
  trainers: [
    {
      role: 'Übungsleiterin',
      name: 'Verena Mellotat',
      phone: '0151 73048719',
      tel: 'tel:+4915173048719'
    },
    {
      role: 'Übungsleiterin',
      name: 'Ute Pelka',
      phone: '0170 6578742',
      tel: 'tel:+491706578742'
    }
  ],
  photos: {
    hero: { src: '/images/arena.jpg', alt: 'Reitplatz in Gieseritz' },
    vaulting: { src: '/images/volti-platz.jpg', alt: 'Voltigieren auf dem Reitplatz in Gieseritz' },
    horse: { src: '/images/pferd-cesar.jpg', alt: 'Voltigierpferd in Gieseritz' },
    connar: { src: '/images/connar.jpg', alt: 'Connar, Hannoveraner der VRG Gieseritz' },
    pferdetag: { src: '/images/jagd.jpg', alt: 'Geländeritt zum Gieseritzer Pferdetag' },
    pferdetagPortrait: { src: '/images/pferdetag-1.jpg', alt: 'Impression vom Pferdetag' },
    pferdetagFeld: { src: '/images/pferdetag-feld.jpg', alt: 'Feld und Reiter am Pferdetag' },
    richterwagen: { src: '/images/richterwagen.jpg', alt: 'Richterwagen auf dem Turnierplatz' },
    maibaum: { src: '/images/maibaum.jpg', alt: 'Maibaum auf dem Reitplatz' },
    archive: { src: '/images/geschichte-1.jpg', alt: 'Historische Aufnahme des Reitsports in Gieseritz' },
    certificate: { src: '/images/urkunde.jpg', alt: 'Urkunde der VRG Gieseritz' }
  }
} as const;

export const addressLine = `${site.address.street} · ${site.address.zip} ${site.address.city} ${site.address.district}`;

export const mapUrl = `https://www.openstreetmap.org/?mlat=${site.address.lat}&mlon=${site.address.lon}#map=15/${site.address.lat}/${site.address.lon}`;

/** Prefix paths with the GitHub Pages base (`/vrg-gieseritz/` in the test deploy). */
export function withBase(path: string) {
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  if (!clean) return `${base}/`;
  return `${base}/${clean}`;
}
