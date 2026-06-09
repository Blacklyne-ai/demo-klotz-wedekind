// ─────────────────────────────────────────────────────────────
// Klotz + Wedekind - 6 Leistungsbereiche
// Texte 1:1 aus klotz-wedekind.de/leistungen verbatim.
// iconName: @lucide/astro Component-Name
// ─────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  iconName: string;
  title: string;
  short: string;
  hero: string;
  cat: string;
  href: string;
  image: string;
  imageAlt: string;
  gallery?: string[];
  bullets: string[];
  quote?: string;
}

export const services: Service[] = [
  {
    slug: 'karosserie-fahrzeugbau',
    href: '/leistungen/karosserie-fahrzeugbau',
    iconName: 'Hammer',
    title: 'Karosserie & Fahrzeugbau',
    cat: 'Sonderanfertigung',
    image: '/images/werkstatt.jpg',
    imageAlt: 'Klotz + Wedekind Werkstatthalle mit Sprinter und LKW auf der Hebebühne',
    gallery: ['/images/werkstatt.jpg', '/images/hero-fleet.jpg', '/images/oldtimer-lkw.jpg'],
    short: 'Tradition seit fast 110 Jahren mit Blick für die Zukunft. Sonderanfertigungen, Kranaufbauten, Kofferaufbauten und mehr.',
    hero: 'Tradition seit fast 110 Jahren mit Blick für die Zukunft! Profitieren Sie von unserer langjährigen Erfahrung und innovativen Lösungen, wenn es um die Umsetzung Ihrer Ideen und Wünsche geht.',
    quote: '„Geht nicht - gibt’s nicht."',
    bullets: [
      'Sonderanfertigungen',
      'Kranaufbauten',
      'Abroll- und Absetzkipper',
      'Kühl- und Frischdienstaufbauten',
      'Kofferaufbauten',
      'Pritschen- und Planaufbauten',
      'Anhänger- und Auflieger',
      'Ladebordwände und Mitnahmestapler',
      'Kastenwagen-Innenausbauten',
    ],
  },
  {
    slug: 'nutzfahrzeug-service',
    href: '/leistungen/nutzfahrzeug-service',
    iconName: 'Settings',
    title: 'Nutzfahrzeug Service',
    cat: 'Wartung & Prüfung',
    image: '/images/mechanic-truck.jpg',
    imageAlt: 'Mechaniker bei der Bremsen-Reparatur an einem LKW',
    gallery: ['/images/mechanic-truck.jpg', '/images/werkstatt.jpg'],
    short: 'HU-Abnahme als GTÜ-Stützpunkt, SP-Prüfungen, Mechatronik, Hydraulik - amtlich anerkannt.',
    hero: 'Wir führen für Sie Wartungs- und Servicearbeiten an LKW, Anhängern und Aufliegern, Chassis, Wechselbrücken und Containern durch. Damit Ihr Fuhrpark nicht still steht.',
    bullets: [
      'SP-Abnahmen §29 StVZO',
      'Fahrtschreiberprüfungen §57b',
      'AU §47a',
      'HU-Abnahme (GTÜ-Stützpunkt) §29 StVZO',
      'Inbetriebnahme Krane inkl. Erstabnahme',
      'UVV-Prüfungen Krane und Ladebordwände',
      'Software- und Fehlerdiagnose',
      'Amtlich anerkannter Bremsendienst §29 StVZO',
      'Motor- und Getriebeinstandsetzung',
      'Fahrzeugelektrik und Mechatronik',
      'Hydraulikarbeiten',
      'Reparaturen und Wartungen',
      'Reifenservice',
    ],
  },
  {
    slug: 'reparatur-unfallinstandsetzung',
    href: '/leistungen/reparatur-unfallinstandsetzung',
    iconName: 'Wrench',
    title: 'Reparatur & Unfallinstandsetzung',
    cat: 'Schadensabwicklung',
    image: '/images/verkehrsunfall.jpg',
    imageAlt: 'Verkehrsunfall mit Transporter - Klotz + Wedekind Unfallinstandsetzung',
    gallery: ['/images/verkehrsunfall.jpg', '/images/unfall-schaden.jpg', '/images/mechanic-truck.jpg'],
    short: 'Von 3,5 Tonner bis 40 Tonner - schnell wieder auf der Straße. Inkl. Gutachten und Versicherungsabwicklung.',
    hero: 'Egal, ob 3,5 Tonner, Transporter oder Autokran, ob 40 Tonner, Auflieger oder Anhänger - das TEAM Klotz + Wedekind sorgt dafür, dass Ihr Fahrzeug schnell wieder im neuen Glanz auf die Straße kommt.',
    quote: '„Das ist tägliches Geschäft aus Leidenschaft."',
    bullets: [
      'Gutachtenerstellung',
      'Reparaturfreigabe',
      'Ersatzfahrzeugbeschaffung',
      'Karosseriereparaturen mit Lackierung',
      'Fahrerhaus-Instandsetzung',
      'Aufbau- und Kofferreparaturen',
      'Ladebordwand-Reparaturen',
      'Rahmen-Richtarbeiten',
      'Aluminium-Schweißarbeiten',
      'Schweißverträge auf Wunsch',
    ],
  },
  {
    slug: 'lackiererei',
    href: '/leistungen/lackiererei',
    iconName: 'Paintbrush2',
    title: 'Lackiererei',
    cat: '20 m Lackieranlage',
    image: '/images/lackieren.jpg',
    imageAlt: 'Lackierer beim Lackieren in der 20 m Lackieranlage von Klotz + Wedekind',
    gallery: ['/images/lackieren.jpg', '/images/unfall-schaden.jpg'],
    short: '20 m Lackieranlage mit 4 m Durchfahrthöhe. Busse, LKW mit Auflieger, Sonderfahrzeuge, Wohnmobile.',
    hero: 'Die in 2017 neu in Betrieb genommene Lackieranlage mit einer Länge von über 20 Metern und einer Durchfahrthöhe von über 4 Metern bietet großzügig Platz für: Busse, LKW mit Anhänger oder Auflieger, Kran- und Sonderfahrzeuge, Wohnmobile.',
    quote: '„Nicht kleckern, sondern Klotz(en)."',
    bullets: [
      'Vollständige und Teil-Lackierungen',
      'LKW-Beschriftungen',
      'Fahrzeug-Beschriftungen',
      'Sicherheitsfolien und Warnaufkleber',
      'Lackschutzfolien',
    ],
  },
  {
    slug: 'rahmenrichtstand',
    href: '/leistungen/rahmenrichtstand',
    iconName: 'ArrowLeftRight',
    title: 'Rahmenrichtstand',
    cat: 'Hydraulische Präzision',
    image: '/images/unfall-schaden.jpg',
    imageAlt: 'Unfallschaden am Fahrzeug - Rahmenrichten bei Klotz + Wedekind',
    gallery: ['/images/unfall-schaden.jpg', '/images/verkehrsunfall.jpg', '/images/mechanic-truck.jpg'],
    short: 'Spezialisierte Hydraulik-Power für präzise Rahmen-Reparaturen. Auch wenn es richtig schief gelaufen ist.',
    hero: 'Auch wenn’s mal so richtig schief gelaufen ist, biegt Klotz + Wedekind das für Sie wieder hin. Mit unserem hydraulischen Rahmenrichtstand und der Erfahrung aus drei Generationen Karosseriebau.',
    quote: '„Widerstand ist zwecklos!"',
    bullets: [
      'Rahmen-Richtarbeiten an LKW',
      'Hydraulische Präzisions-Anlage',
      'Vermessung vor und nach der Richtung',
      'Schweißarbeiten am Rahmen',
      'Aluminium-Schweißarbeiten',
      'Folge-Lackierung im Haus',
    ],
  },
  {
    slug: 'wohnmobil-caravan',
    href: '/leistungen/wohnmobil-caravan',
    iconName: 'Home',
    title: 'Wohnmobil & Caravan',
    cat: 'Alle Marken',
    image: '/images/wohnmobil.jpg',
    imageAlt: 'Wohnmobil bei Sonnenuntergang - Wohnmobil-Service bei Klotz + Wedekind',
    gallery: ['/images/wohnmobil.jpg', '/images/lackieren.jpg'],
    short: 'Unfallinstandsetzung, HU/AU, Gasprüfung, GFK-Arbeiten, Dachbeschichtung - alle Wohnmobil-Marken.',
    hero: 'Umfassender Service rund um Ihr Wohnmobil oder Caravan - markenoffen, vom Standschaden bis zur kompletten Hagelschutz-Dachbeschichtung.',
    bullets: [
      'Unfallinstandsetzung',
      'Um- und Anbauten',
      'Kupplungs-Einbauten',
      'HU, AU und Gasprüfung',
      'Lackierarbeiten',
      'Ersatzteilversorgung',
      'GFK-Arbeiten',
      'Dachbeschichtung als Hagelschutz',
      'Karosserie-, Mechanik- und Elektrik-Reparaturen',
    ],
  },
];

// Heritage-Highlights fuer Stats-Strip
export const heritageHighlights = [
  {
    icon: 'Clock',
    title: 'Seit 1909',
    text: '115+ Jahre Tradition - von der Stellmacherei zum modernen Nutzfahrzeug-Betrieb.',
  },
  {
    icon: 'ShieldCheck',
    title: 'GTÜ-Stützpunkt',
    text: 'HU-Abnahmen nach §29 StVZO direkt im Haus - amtlich anerkannt.',
  },
  {
    icon: 'Ruler',
    title: '20 m Lackieranlage',
    text: 'Großzügig dimensioniert für LKW mit Auflieger, Busse und Sonderfahrzeuge.',
  },
];
