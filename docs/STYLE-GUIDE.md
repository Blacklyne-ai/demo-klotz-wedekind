# Style Guide - Mr. Wash Hamburg Wandsbek

Dieser Style Guide ist die **Source of Truth** für die Brand-Identitaet dieser Standort-Landing-Page. Alle Werte sind aus dem echten Mr. Wash Markenauftritt extrahiert - nicht erfunden, nicht interpoliert.

## Brand-Farben (Pixel-extrahiert aus offiziellem Logo)

Das Mr. Wash Logo (480x200 PNG, von img.dmstr.net heruntergeladen) wurde mit Sharp ausgelesen. Die hier gelisteten Werte sind die **echten** Farbwerte des Markenzeichens, nicht aus dem Briefing geraten.

| Token             | Hex       | RGB              | Verwendung                                   |
|-------------------|-----------|------------------|----------------------------------------------|
| `brand` (Primary) | `#FF391B` | rgb(255, 57, 27) | Wappen-Rot - alle CTAs, Accent-Pills         |
| `brand-deep`      | `#D62A12` | rgb(214, 42, 18) | Hover-State, Gradient-Tiefe                  |
| `brand-soft`      | `#FF6648` | rgb(255, 102, 72)| Highlights, sanfte Glow-Effekte              |
| `accent` (Yellow) | `#FFE608` | rgb(255, 230, 8) | Mr.Wash-Schriftzug-Gelb - Goldene-Stunden-USP|
| `accent-deep`     | `#E6C800` | rgb(230, 200, 0) | Hover-Yellow                                 |
| `ink`             | `#171717` | rgb(23, 23, 23)  | Headlines, Primary Text                      |
| `ink-soft`        | `#2B2B2B` | rgb(43, 43, 43)  | Body-Text                                    |
| `paper`           | `#FEFCF8` | rgb(254,252,248) | Page-BG (warm Cream, passt zu Orange-Rot)    |
| `paper-50`        | `#F8F5EF` | rgb(248,245,239) | Subtle Layer                                 |
| `paper-100`       | `#F0EBE0` | rgb(240,235,224) | Card Layer                                   |
| `anthracite`      | `#171717` | rgb(23, 23, 23)  | Dark Sections (Services-Block)               |
| `anthracite-deep` | `#0D0D0D` | rgb(13, 13, 13)  | Footer-Tone                                  |

**Begruendung der Cream-Page-BG:** Reines Weiss wirkt mit dem warmen Orange-Rot kalt-klinisch. Warmes Cream (#FEFCF8) traegt die Brand-Energie und wirkt einladend - passend zum Slogan "Sauberes Auto. Gute Laune."

## Typographie

Mr. Wash verwendet im Web aktuell den **Helvetica-Neue-System-Stack** (siehe assets/ce7d140f/less/app.css - `font-family: "Helvetica Neue", Helvetica, Arial, sans-serif`). Da das ein System-Font ohne klare Brand-Identitaet ist, wird zur Modernisierung eine zeitgemäße Sans-Serif gewählt.

**Wahl: Manrope Variable** (@fontsource-variable/manrope)
- Geometric-Humanist - im selben Lineage wie Helvetica, aber moderner gezeichnet
- Variable-Font (eine Datei, alle Weights 200-800) - schneller LCP als Multi-File Roboto Flex
- Warmer Charakter passend zu Mr. Wash freundlich-zugaenglich-Tonality
- Display-Sizes (Hero-Headline 5-6 rem) wirken kraftvoll ohne kuenstlich verzerrt

Drei Hierarchie-Faces (alle Manrope, nur Weight + Tracking unterschiedlich):
- display - Hero-Headline (clamp 2.6-5.8rem, 700, -0.012em)
- headline - Section-Headlines (clamp 2-3.6rem, 700, -0.008em)
- sans - Body Text (17px, 400-500, normal tracking)

## Logo-Verwendung

- **Original-PNG 1:1 verwendet.** Wird nicht durch Schriftzug ersetzt (Memory: feedback_original_logo).
- Original-Aspect-Ratio 480x200 (2.4:1) bleibt erhalten.
- Mindestgroesse Nav: 36px hoch, Hero/Footer: 56px hoch.
- Favicon: gleicher Logo-PNG resized.

## Tonalitaet

**Sie-Form, warm, einladend.** Carwash-Branche ist Service-Geschaeft - nicht Premium-Premium wie Aston Service, nicht Werkstatt-Technik wie AMF. Mr. Wash Charakter ist sympathisch-professionell.

**Slogan:** "Sauberes Auto. Gute Laune." - verbatim Original-Slogan, taucht in Hero + Final-CTA + Footer auf.

**Anti-Cringe** (Memory: feedback_dashes, feedback_no_duplicate_cta):
- Keine Premium Wash Experience - generisch.
- Keine Wo Sauberkeit auf Leidenschaft trifft - cringe.
- Keine em-dashes, keine en-dashes. Immer Bindestrich `-`.

**Echte USPs verwenden:**
- Goldene Stunden 8:30-10:30 - bis zu 10 Euro sparen
- Happy Hour ab 18:00 - wechselnde Tagesangebote
- Felgenfreundliches Förderband - technischer USP dieser Anlage
- Sauberes Auto. Gute Laune. - Original-Slogan

## Sektions-Rhythmus (Route66-AMF-Stil)

| Section                    | BG          | Charakter                          |
|----------------------------|-------------|------------------------------------|
| Hero                       | paper       | Light, Foto-rechts + Headline-links|
| Sonderangebote             | paper-50    | Zwei prominente Cards              |
| Services                   | anthracite  | DARK, Grid-Overlay, Glas-Cards     |
| Öffnungszeiten + Fahrzeug | paper       | Light, 2-Col                       |
| Standortleiter-Botschaft   | paper-50    | Light, persoenlich, Foto + Text    |
| Flatwash-Hinweis           | paper       | Editorial-Cross-Sell               |
| Service-Plan + Anfahrt     | paper-50    | Light, 2-Col (Map + Kontakt)       |
| Weitere Standorte          | paper       | Cards 3-Spalten                    |
| Final CTA-Band             | brand       | Brand-Rot Background, Slogan       |

## Visuelle Patterns

- **Floating Cards auf Hero-Foto** (Memory: glass-modern)
- **Eyebrow + Display-Headline + Lead** an jedem Section-Start
- **Hover-Microinteractions**: subtle translateY(-3px), Brand-Glow, Shimmer auf Buttons
- **Ghost-Watermark** MR.WASH dezent hinter Hero
- **Trust-Strip** mit Mittelpunkten zwischen Hero und Sonderangeboten

## Icons

Lucide-only (kein Emoji). Gemappt:

| Service / Konzept   | Lucide Icon |
|---------------------|-------------|
| Autowäsche         | Droplets    |
| Innenreinigung      | Sparkles    |
| Handwax             | HandMetal   |
| Staubsaugen         | Wind        |
| Tankstelle          | Fuel        |
| Goldene Stunden     | Sun         |
| Happy Hour          | Zap         |
| Felgenschutz        | CircleDot   |
| Öffnungszeiten     | Clock       |
| Route               | Navigation  |
| Standortleiter      | UserRound   |

## Build- + Deploy-Setup

- Astro 5 STATIC (kein SSR, kein @astrojs/cloudflare adapter)
- Tailwind v3.4 via @astrojs/tailwind, applyBaseStyles: false
- @lucide/astro 1.16+
- Cloudflare Pages: Framework Astro, Build `npm run build`, Output `dist`
- Domain: demo-mrwash-hamburg-wandsbek.pages.dev (initial)
- Repo: Blacklyne-ai/demo-mrwash-hamburg-wandsbek (public, per Brief explizit gewuenscht)
