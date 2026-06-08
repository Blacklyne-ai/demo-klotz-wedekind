# Judgement Calls - Klotz + Wedekind Redesign

## Brand-Farben aus Logo-Pixel-Analyse

Das Original-Logo (`Logo_Klotz.png`) wurde direkt geprüft. Die Schriftzüge
"Klotz" und "Wedekind" sind in einem kräftigen industriellen Rot. Das zentrale
"+" als schwarzer Kreis sowie der Untertitel "Karosserie- und Fahrzeugbau ·
Autoservice · Anhänger" sind in tiefem Anthrazit.

**Entscheidung:**
- Brand-Rot `#D62027` - klassisches deutsches Karosserie-Rot
- Anthrazit `#171717` aus Logo-"+"
- Paper-Cream `#FAF7F2` - warm und industriell (passend zur Heritage)
- Accent-Bronze `#B8924A` - dezenter Heritage-Akzent für besondere Details

Bewusst KEIN Anthrazit/Grün-Design (das wäre Werkstatt-Standard ohne Bezug
zum Logo). Bewusst KEIN Startup-Orange. Die Heritage seit 1909 verdient die
authentische rote Industrie-CI.

## Typografie

Original-Site nutzt Websitebutler-Generator-Fonts ohne klare CSS-Definition.
Wir wählen **Manrope Variable** als moderne Helvetica-Successor mit warmem
geometrischen Charakter - industriell, humanist, perfekt für Heritage-Handwerk.
Gleicher Charakter wie astonservicehamburg.de.

## Headline-Hero

Die Original-Headline "Wenn Maßarbeit gefordert und die Zeit knapp ist, müssen
Profis ans Werk." wurde 1:1 übernommen - sie ist stark, direkt und perfekt für
die B2B-Zielgruppe. Letzter Teil mit Brand-Rot betont.

## Heritage als Hauptthema

Klotz + Wedekind ist 115 Jahre alt - das ist GOLD. Die Heritage-Timeline mit
5 Stationen (1909/1959/1972/2001/2017) bekommt eine eigene große Sektion
direkt nach dem Hero. Auf jeder Service-Detailseite ein "Heritage-Band"-Strip
(1909/115+/2017) als Trust-Anker.

## Kein Kontaktformular

Memory-Note `feedback_kontaktformulare`: Statt Formular werden Telefon, E-Mail,
WhatsApp (hier nicht relevant), Anfahrt und Öffnungszeiten als direkte Tiles
angeboten. B2B-Kunden rufen sowieso lieber an.

## Team-Section: 4 statt 5

Das offizielle Team hat 5 Personen (inkl. Klaus Stelzer/Lager). Für die Homepage
zeigen wir die 4 mit Schwerpunkt Werkstatt + Geschäftsführung (Jörg Wedekind,
Markus Wähling, Dennis Engellenner, Anja Mädel). Klaus Stelzer ist vollständig
auf `/ansprechpartner` mit eigener Card.

Begründung: Symmetrisches 4er-Grid (Memory `feedback_grid_symmetry`) statt
asymmetrisches 5er. Vollständiges Team wird auf der Ansprechpartner-Seite
abgebildet.

## Sechs Leistungen als 3x2 Grid

Die 6 Leistungsbereiche sind ein perfekt symmetrisches 3x2-Grid auf Desktop -
nicht 2x3, nicht 4+2. Memory `feedback_grid_symmetry`.

## Partner ohne externe Links

Original-Site listet Partner mit Funktion aber ohne klare URLs zu den
Hersteller-Websites. Wir bilden die 11 Partner als Branded Tiles mit
"Funktions-Beschreibung" ab. Statt Links zu Drittparteien zeigen wir die
UVV-Service-Reichweite als USP.

## Stenzelring 9 (Hausnummer)

Original-Site nennt nur "Stenzelring" auf der Hauptseite, aber im Impressum
und Kontakt steht "Stenzelring 9, 21107 Hamburg". Wir nutzen die vollständige
Adresse durchgängig - ist offiziell und korrekt.

## Bewerbungs-Email mit großem B

Original-Site nutzt "Bewerbung@klotz-wedekind.de" (großes B). Wir übernehmen
das 1:1 - SMTP-Adressen sind case-insensitive aber die Schreibweise zeigt,
dass das eine echte spezifische Adresse ist.

## Anti-Cringe

Vermieden:
- ❌ "Premium Fleet Experience"
- ❌ "Wo Lkw auf Leidenschaft trifft"
- ❌ Allgemeine Marketing-Phrasen

Eingesetzt:
- ✅ "Damit Ihr Fuhrpark nicht still steht" (Slogan)
- ✅ "Geht nicht - gibt's nicht" (verbatim)
- ✅ "Widerstand ist zwecklos!" (verbatim, Rahmenrichtstand)
- ✅ "Nicht kleckern, sondern Klotz(en)" (verbatim, Lackiererei)
- ✅ §-Nummern als Expertise-Signal (§29 StVZO, §57b, §47a)

## Was NICHT umgesetzt wurde

- **Lighthouse-Audit:** Kein automatischer Run im Demo-Build. Statisches
  Astro 5 + Sharp-Optimierung der Bilder sollte 95+ liefern, ist aber nicht
  formal verifiziert.
- **Google Reviews Embed:** Place-ID nicht gepullt, da Google API-Key benötigt.
  Place-Karte ist verlinkt.
- **Echte Stockfotos für jede Sektion:** Heritage-Sektionen nutzen die zwei
  echten Fotos der alten Site (transport-fleet-02.jpg + blauer-lkw-oldtimer.jpg).
  Weitere Hero-Bilder auf Subpages wären ein Add-on für Phase 2.
