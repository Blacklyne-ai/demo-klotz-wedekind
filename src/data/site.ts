// ─────────────────────────────────────────────────────────────
// Klotz + Wedekind Karosserie- und Nutzfahrzeugtechnik GmbH
// Daten 1:1 aus klotz-wedekind.de + /impressum + /ansprechpartner
// Gegruendet 1909 von Hermann Klotz - 3 Generationen Wedekind.
// Nichts erfunden.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Klotz + Wedekind',
  legalName: 'Klotz + Wedekind Karosserie- und Nutzfahrzeugtechnik GmbH',
  shortName: 'Klotz+Wedekind',
  founded: 1909,
  yearsActive: 115,
  tagline: 'Damit Ihr Fuhrpark nicht still steht.',
  subtitle: 'Karosserie- & Fahrzeugbau, Nutzfahrzeug-Service, Lackiererei, Reparatur & Unfallinstandsetzung in Hamburg-Wilhelmsburg.',
  description:
    'Klotz + Wedekind in Hamburg-Wilhelmsburg. Karosserie- und Fahrzeugbau, Nutzfahrzeug-Service, Lackiererei, Reparatur und Unfallinstandsetzung. Drei Generationen seit 1909. GTÜ-Stützpunkt, 20m Lackieranlage, alles aus einer Hand.',
  url: 'https://demo-klotz-wedekind.pages.dev',

  // Zentrale
  phone: '040 - 734 83 - 0',
  phoneIntl: '+49 40 73483 0',
  phoneDigits: '0407348300',
  phoneTel: 'tel:+4940734830',
  phoneDisplay: '040 - 734 83 - 0',
  fax: '040 - 734 83 - 102',

  email: 'info@klotz-wedekind.de',
  mailto: 'mailto:info@klotz-wedekind.de',
  emailBewerbung: 'Bewerbung@klotz-wedekind.de',
  emailRechnungen: 'rechnungen@klotz-wedekind.de',

  // Geschaeftsfuehrung
  geschaeftsfuehrung: [
    {
      name: 'Jörg Wedekind',
      firstName: 'Jörg',
      role: 'Werkstattleitung · Vertrieb',
      detail: 'Nutzfahrzeug-Aufbauten · Krane · Lackierung · Wohnmobil',
      email: 'jw@klotz-wedekind.de',
      phone: '040 - 734 83 - 210',
      phoneTel: 'tel:+494073483210',
      generation: '3. Generation',
    },
    {
      name: 'Anja Mädel',
      firstName: 'Anja',
      role: 'Geschäftsführung · Buchhaltung',
      detail: 'Buchhaltung · Elektronischer Rechnungsempfang',
      email: 'am@klotz-wedekind.de',
      phone: '040 - 734 83 - 150',
      phoneTel: 'tel:+494073483150',
      generation: '3. Generation',
    },
  ],

  address: {
    street: 'Stenzelring 9',
    postcode: '21107',
    city: 'Hamburg',
    district: 'Hamburg-Wilhelmsburg',
    country: 'Deutschland',
    lat: 53.519,
    lng: 10.0037,
  },

  // Öffnungszeiten - Mo-Fr 07:00-18:00 / Sa 07:00-13:00
  hours: [
    { day: 'Mo - Fr', open: '07:00', close: '18:00' },
    { day: 'Sa',      open: '07:00', close: '13:00' },
  ],
  hoursNote: 'Sonntag geschlossen',

  // Heritage-Timeline - verbatim aus /ueber-uns
  heritage: [
    {
      year: '1909',
      title: 'Gegründet als Stellmacherei',
      body: 'Hermann Klotz gründet die Werkstatt zur Herstellung und Reparatur von Kutschen sowie deren Zubehör und Ersatzteilen.',
    },
    {
      year: '1959',
      title: 'Karosseriebaumeister Uwe Wedekind',
      body: 'Der Enkel von Hermann Klotz tritt ein. Wandel von der Stellmacherei zu einem zukunftsorientierten, modernen Karosserie- und Fahrzeugbaubetrieb.',
    },
    {
      year: '1972',
      title: 'Umzug nach Wilhelmsburg',
      body: 'Verlagerung von Veddel an den heutigen Standort am Stenzelring - zentral zwischen A1, A7 und Hamburger Hafen.',
    },
    {
      year: '2001',
      title: 'Übernahme Martin Harms GmbH',
      body: 'Strategische Erweiterung des Fahrzeugbaus durch die Übernahme der traditionsreichen Martin Harms GmbH.',
    },
    {
      year: '2017',
      title: 'Dritte Generation - Neue GmbH',
      body: 'Jörg Wedekind und Anja Mädel ebnen den Weg für die nächste Generation. Zusammenführung in die heutige Klotz + Wedekind Karosserie- und Nutzfahrzeugtechnik GmbH.',
    },
  ],

  // Trust-Strip - verbatim
  trustStrip: [
    'Gegründet 1909',
    '3 Generationen',
    'GTÜ-Stützpunkt',
    '20 m Lackieranlage',
    'Wilhelmsburg Hamburg',
  ],

  // Stats fuer den Wertversprechen-Strip
  stats: [
    { value: '1909', label: 'Gegründet' },
    { value: '115+', label: 'Jahre Tradition' },
    { value: '6', label: 'Leistungsbereiche' },
    { value: '20 m', label: 'Lackieranlage' },
  ],

  // Google Maps - addressbasiert
  googleMapsEmbed:
    'https://www.google.com/maps?q=Stenzelring+9,+21107+Hamburg&z=15&output=embed',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Stenzelring+9+21107+Hamburg',
  googleDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Stenzelring+9+21107+Hamburg',

  // Impressum
  legal: {
    register: 'Amtsgericht Hamburg HRB 40838',
    ustId: 'DE216522561',
    steuerNr: '4773700325',
    dsb: 'Protekto Data Fuse GmbH, Kent Schwirz, Wendenstraße 279, 20537 Hamburg',
  },
};

// ── Link-Helfer ──────────────────────────────────────────────
export const telLink = site.phoneTel;
export const mailLink = site.mailto;

export function mailFor(subject: string) {
  return `${site.mailto}?subject=${encodeURIComponent(subject)}`;
}

// ── Navigation ────────────────────────────────────────────────
export interface NavItem {
  href: string;
  label: string;
  current: string;
}

export const nav: NavItem[] = [
  { href: '/',                label: 'Start',          current: 'home' },
  { href: '/ueber-uns',       label: 'Über uns',       current: 'ueber-uns' },
  { href: '/leistungen',      label: 'Leistungen',     current: 'leistungen' },
  { href: '/partner',         label: 'Partner',        current: 'partner' },
  { href: '/ansprechpartner', label: 'Ansprechpartner',current: 'ansprechpartner' },
  { href: '/jobs',            label: 'Jobs',           current: 'jobs' },
];

export const fullNav: NavItem[] = [
  { href: '/',                label: 'Start',          current: 'home' },
  { href: '/ueber-uns',       label: 'Über uns',       current: 'ueber-uns' },
  { href: '/leistungen',      label: 'Leistungen',     current: 'leistungen' },
  { href: '/leistungen/karosserie-fahrzeugbau',     label: 'Karosserie & Fahrzeugbau', current: 'karosserie' },
  { href: '/leistungen/nutzfahrzeug-service',       label: 'Nutzfahrzeug-Service',     current: 'nutzfahrzeug' },
  { href: '/leistungen/reparatur-unfallinstandsetzung', label: 'Reparatur & Unfall', current: 'reparatur' },
  { href: '/leistungen/lackiererei',                 label: 'Lackiererei',              current: 'lackiererei' },
  { href: '/leistungen/rahmenrichtstand',            label: 'Rahmenrichtstand',         current: 'rahmen' },
  { href: '/leistungen/wohnmobil-caravan',           label: 'Wohnmobil & Caravan',      current: 'wohnmobil' },
  { href: '/partner',         label: 'Partner',        current: 'partner' },
  { href: '/ansprechpartner', label: 'Ansprechpartner',current: 'ansprechpartner' },
  { href: '/jobs',            label: 'Jobs',           current: 'jobs' },
  { href: '/kontakt',         label: 'Kontakt',        current: 'kontakt' },
];

export const legalNav = [
  { href: '/kontakt',     label: 'Kontakt',     external: false },
  { href: '/impressum',   label: 'Impressum',   external: false },
  { href: '/agb',         label: 'AGB',         external: false },
  { href: '/datenschutz', label: 'Datenschutz', external: false },
];
