# VRG Gieseritz

Website der Voltigier- und Reitgemeinschaft Gieseritz e. V.

Aktuell ein **Teststand**: Design steht, Fotos und Vereinsdaten werden noch ersetzt.

- **Eigentümer:** GitHub-Account [TheLarsOfUs90](https://github.com/TheLarsOfUs90)
- **Repository:** [github.com/TheLarsOfUs90/vrg-gieseritz](https://github.com/TheLarsOfUs90/vrg-gieseritz)
- **Test-URL (GitHub Pages):** https://thelarsofus90.github.io/vrg-gieseritz/
- **Später dieselbe Domain:** https://www.vrg-gieseritz.de (Wix erst abschalten, wenn der Inhalt sitzt)

## Lokal

```powershell
cd C:\Users\keule\Documents\Projekte\vrg-gieseritz
npm install
npm run dev
```

[http://localhost:4321/vrg-gieseritz/](http://localhost:4321/vrg-gieseritz/)

(Der Pfad `/vrg-gieseritz/` ist der Test-Basispfad für GitHub Pages.)

## Daten und Fotos ändern

1. **Kontakte, Anschrift, Zahlen, Impressum**  
   Nur [`src/data/site.ts`](src/data/site.ts) bearbeiten.

2. **Fotos**  
   Dateien in [`public/images/`](public/images/) **gleichen Namens** überschreiben. Liste: [`public/images/README.md`](public/images/README.md).

3. Committen und auf `main` pushen. GitHub Pages baut automatisch neu.

## GitHub Pages

Jeder Push auf `main` löst [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) aus.

### Domain umstellen, wenn der Inhalt fertig ist

1. In `astro.config.mjs`:
   - `site: 'https://www.vrg-gieseritz.de'`
   - `base: '/'`
2. Datei `public/CNAME` anlegen, Inhalt eine Zeile: `www.vrg-gieseritz.de`
3. `public/robots.txt` Sitemap auf `https://www.vrg-gieseritz.de/sitemap-index.xml` setzen
4. Pushen
5. DNS **bei Wix / Registrar** (Domain behalten, nur Einträge ändern):

**www**

| Typ | Name | Ziel |
| --- | --- | --- |
| CNAME | `www` | `thelarsofus90.github.io` |

**Apex (`vrg-gieseritz.de`)**

| Typ | Name | Ziel |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

6. GitHub → Settings → Pages → Custom domain `www.vrg-gieseritz.de` → Enforce HTTPS.

Wix-A/CNAME-Einträge der alten Website löschen, sonst bleibt Wix live.

## Datenschutz

Keine Cookies, keine Analytics, Schriften lokal. Host während des Tests: GitHub Pages (USA, Data Privacy Framework) — in der Datenschutzerklärung genannt.
