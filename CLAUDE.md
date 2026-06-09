# Herenavond 2026 – Wekelijkse Routine

## Wat dit project doet
Bijhouden van de golfresultaten van de Herenavond 2026 op basis van emails van
rudybracke@zeelandnet.nl. Klassement wordt opgeslagen in Firebase Realtime Database
en wekelijks verstuurd via CalMeBot (WhatsApp).

## Puntensysteem
| Prestatie          | Punten |
|--------------------|--------|
| 1e plaats          | 5      |
| 2e plaats          | 4      |
| 3e plaats          | 3      |
| 4e plaats          | 2      |
| 5e plaats          | 1      |
| Birdie             | 2      |
| Bijzondere prijs*  | 2      |

*Bijzondere prijzen zijn: Neary, Longest, Leary (of andere vermelde bijzondere prijzen).
De BROOD-prijs en het hammetje van Etienne tellen NIET mee.

## Wekelijkse taak (elke dinsdag na ontvangst email)

### Stap 1 – Controleer nieuwe email
Zoek of er een nieuwe uitslag is die nog niet in `src/sessions.js` staat:
- Kijk naar `lastEmailId` in het laatste item van de `sessions` array
- Zoek Gmail: `from:rudybracke@zeelandnet.nl subject:"Uitslag Herenavond" after:2026/01/01`
- Als de meest recente email al verwerkt is → geen actie nodig

### Stap 2 – Parseer de nieuwe email
Extraheer uit de emailtekst:
- **date**: datum van de avond (niet de verzenddag)
- **emailId**: Gmail thread/message ID
- **participants**: aantal deelnemers
- **top5**: de 5 deelnemers met rang 1–5
- **birdies**: alle birdies met hole nummer en naam
- **bijzondere**: alle Neary/Longest/Leary met type, hole en naam
  - Sla records over met "geen score" of "bordje niet geplaatst"

### Stap 3 – Voeg toe aan sessions.js
Voeg het nieuwe sessie-object toe aan het einde van de `sessions` array in `src/sessions.js`.

**Naam-normalisatie regels:**
- "Bjorn Henderyckxs" → "Bjorn Henderyckx" (spelfout in emails)
- Namen altijd exact kopiëren zoals in de email (hoofdletters respecteren)

### Stap 4 – Commit en push
```bash
git add src/sessions.js
git commit -m "Voeg uitslag Herenavond [datum] toe"
git push -u origin claude/clever-maxwell-j26z0d
```

### Stap 5 – Update Firebase en stuur CalMeBot
```bash
node src/main.js
```

Dit doet automatisch:
1. Herberekent het volledige klassement
2. Schrijft alles naar Firebase (`herenavond2026/` node)
3. Stuurt het klassement via WhatsApp (CalMeBot)

## Omgevingsvariabelen
Zie `.env.example` voor de benodigde variabelen:
- `FIREBASE_DB_URL` – Firebase Realtime Database URL
- `FIREBASE_SECRET` – Firebase Database Secret
- `CALMEBOT_PHONE` – WhatsApp telefoonnummer (met landcode, bijv. 3247...)
- `CALMEBOT_APIKEY` – CalMeBot API key

## Firebase structuur
```
herenavond2026/
  lastUpdated: ISO timestamp
  totalSessions: number
  lastSessionDate: "YYYY-MM-DD"
  lastEmailId: string
  sessions/
    YYYYMMDD/
      date, subject, participants, top5[], birdies[], bijzondere[]
  standings/
    (genormaliseerde_naam)/
      name, total, positionPoints, birdiePoints, bijzonderePoints
      sessions/ { "YYYY-MM-DD": punten }
```

## Huidige stand (na 12 avonden, t/m 9 juni 2026)
Wordt automatisch berekend door `src/scoring.js`. Hardcode dit NIET.

## Bestandsstructuur
```
src/
  sessions.js   – alle sessiedata (wordt wekelijks uitgebreid)
  scoring.js    – puntberekening
  firebase.js   – Firebase REST API
  calmebot.js   – WhatsApp via CalMeBot
  main.js       – hoofdscript
```
