// Alle gespeelde avonden Herenavond 2026 – geparsed uit emails van rudybracke@zeelandnet.nl
// Puntensysteem: 1e=5, 2e=4, 3e=3, 4e=2, 5e=1 | birdie=2 | bijzondere prijs=2
// BROOD-prijs en hammetje tellen NIET mee

const sessions = [
  {
    date: "2026-03-24",
    emailId: "19d217a01c151910",
    subject: "Uitslag Herenavond 24 maart 2026",
    participants: 67,
    top5: [
      { rank: 1, name: "Christophe Huighe" },
      { rank: 2, name: "Gokhan Serifoglu" },
      { rank: 3, name: "Roger Hermans" },
      { rank: 4, name: "Arno Hente" },
      { rank: 5, name: "Dirk van Goethem" }
    ],
    birdies: [
      { hole: 2, name: "Eric van Bochove" },
      { hole: 2, name: "Alex Boerbooms" },
      { hole: 5, name: "Conny Nonneman" },
      { hole: 7, name: "Cees Delzenne" },
      { hole: 16, name: "Gokhan Serifoglu" },
      { hole: 18, name: "Bjorn Henderyckx" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Harold van Waterschoot" },
      { type: "Neary", hole: 11, name: "Wim van Remortele" },
      { type: "Longest", hole: 6, name: "Rene de Bakker" },
      { type: "Longest", hole: 13, name: "Sil van Hecke" }
    ]
  },
  {
    date: "2026-03-31",
    emailId: "19d4533fe24beabb",
    subject: "Uitslag Herenavond 31 maart 2026",
    participants: 60,
    top5: [
      { rank: 1, name: "Donavan Lombard" },
      { rank: 2, name: "Jos Goossen" },
      { rank: 3, name: "Peter Andriessen" },
      { rank: 4, name: "Tim Stevens" },
      { rank: 5, name: "Harold van Waterschoot" }
    ],
    birdies: [
      { hole: 7, name: "Donavan Lombard" },
      { hole: 11, name: "Bas van Groenestijn" },
      { hole: 11, name: "Peter van den Eynde" },
      { hole: 13, name: "Ronald Blijenberg" },
      { hole: 13, name: "Maurits Tichelman" },
      { hole: 14, name: "Sil van Hecke" },
      { hole: 15, name: "Tim Stevens" },
      { hole: 17, name: "Joop Lauret" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Ronald van den Hemel" },
      { type: "Neary", hole: 17, name: "Roger Hermans" },
      { type: "Longest", hole: 6, name: "Eric Neve" },
      { type: "Longest", hole: 16, name: "Sil van Hecke" }
    ]
  },
  {
    date: "2026-04-07",
    emailId: "19d694a0ac669f20",
    subject: "Uitslag Herenavond 07 april 2026",
    participants: 65,
    top5: [
      { rank: 1, name: "Sil van Hecke" },
      { rank: 2, name: "Marcel Bedee" },
      { rank: 3, name: "Alex Boerbooms" },
      { rank: 4, name: "Jan Links" },
      { rank: 5, name: "Peter Andriessen" }
    ],
    birdies: [
      { hole: 10, name: "Sil van Hecke" },
      { hole: 17, name: "Sil van Hecke" },
      { hole: 18, name: "Sil van Hecke" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Luc Missiaen" },
      { type: "Neary", hole: 11, name: "Bart Gevaert" },
      { type: "Longest", hole: 3, name: "Harold van Waterschoot" },
      { type: "Longest", hole: 18, name: "Guido Debbaut" }
    ]
  },
  {
    date: "2026-04-14",
    emailId: "19d8d7d80d09fd25",
    subject: "Uitslag Herenavond 14 april 2026",
    participants: 73,
    top5: [
      { rank: 1, name: "Vic Seurynk" },
      { rank: 2, name: "Kristof van de Voorde" },
      { rank: 3, name: "Eric van Bochove" },
      { rank: 4, name: "Eric Dieleman" },
      { rank: 5, name: "Franklin van Hove" }
    ],
    birdies: [
      { hole: 8, name: "Eric Dieleman" },
      { hole: 8, name: "Conny Nonneman" },
      { hole: 10, name: "Leendert Muller" },
      { hole: 14, name: "Jan Boerbooms" },
      { hole: 17, name: "Patrick van Beeck" },
      { hole: 17, name: "Hessel Wieles" },
      { hole: 18, name: "Patrick van Beeck" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Rick Motet" },
      { type: "Neary", hole: 17, name: "Dominique van der Walle" },
      { type: "Longest", hole: 9, name: "Danny Elve" },
      { type: "Longest", hole: 14, name: "Jos Goossen" }
    ]
  },
  {
    date: "2026-04-21",
    emailId: "19db17a360830a2f",
    subject: "Uitslag Herenavond 21 april 2026",
    participants: 68,
    top5: [
      { rank: 1, name: "Andre Verschueren" },
      { rank: 2, name: "Han Blokland" },
      { rank: 3, name: "Marcel Bedee" },
      { rank: 4, name: "Franklin van Hove" },
      { rank: 5, name: "Alex Boerbooms" }
    ],
    birdies: [
      { hole: 3, name: "Michael Dooms" },
      { hole: 7, name: "Danny Elve" },
      { hole: 7, name: "Werner Janssens" },
      { hole: 7, name: "Sil van Hecke" },
      { hole: 10, name: "Danny van de Velde" },
      { hole: 10, name: "Marcel Bedee" },
      { hole: 11, name: "Han Blokland" },
      { hole: 11, name: "Jos Goossen" },
      { hole: 11, name: "Wim van Remortele" },
      { hole: 14, name: "Paul Koorevaar" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Jan Links" },
      { type: "Neary", hole: 11, name: "Jos Goossen" },
      { type: "Longest", hole: 6, name: "Alex Boerbooms" },
      { type: "Longest", hole: 13, name: "Jos Goossen" }
    ]
  },
  {
    date: "2026-04-28",
    emailId: "19dd58a7b5767340",
    subject: "Uitslag Herenavond van 28 april 2026",
    participants: 63,
    top5: [
      { rank: 1, name: "Jos Goossen" },
      { rank: 2, name: "Werner Janssens" },
      { rank: 3, name: "Conny Nonneman" },
      { rank: 4, name: "Bjorn Henderyckx" },
      { rank: 5, name: "Eric van Bochove" }
    ],
    birdies: [
      { hole: 2, name: "Hendrik van Hoeve" },
      { hole: 2, name: "Alain Wullaert" },
      { hole: 7, name: "Werner Janssens" },
      { hole: 9, name: "Michael Dooms" },
      { hole: 10, name: "Jos Goossen" },
      { hole: 10, name: "Roger Hermans" },
      { hole: 17, name: "Rick Motet" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Michael Dooms" },
      { type: "Neary", hole: 17, name: "Rick Motet" },
      { type: "Longest", hole: 5, name: "Bas van Groenestijn" },
      { type: "Longest", hole: 13, name: "Patrick van Beeck" }
    ]
  },
  {
    date: "2026-05-05",
    emailId: "19df96faea15f742",
    subject: "Uitslag Herenavond 5 mei 2026",
    participants: 58,
    top5: [
      { rank: 1, name: "Hendrik van Hoeve" },
      { rank: 2, name: "Maurits Tichelman" },
      { rank: 3, name: "Jos Goossen" },
      { rank: 4, name: "Bart Wens" },
      { rank: 5, name: "Phil Jepson" }
    ],
    birdies: [
      { hole: 2, name: "Johnny Smet" },
      { hole: 3, name: "Sil van Hecke" },
      { hole: 9, name: "Phil Jepson" },
      { hole: 10, name: "Maurits Tichelman" },
      { hole: 11, name: "Rudy de Muynck" },
      { hole: 14, name: "Maurits Tichelman" },
      { hole: 17, name: "Kristof van de Voorde" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Bart Wens" },
      { type: "Neary", hole: 11, name: "Werner Janssens" },
      { type: "Longest", hole: 4, name: "Phil Jepson" },
      { type: "Longest", hole: 18, name: "Ronald van den Hemel" }
    ]
  },
  {
    date: "2026-05-12",
    emailId: "19e1d8ce821a1801",
    subject: "Uitslag Herenavond 12 mei 2026",
    participants: 72,
    top5: [
      { rank: 1, name: "Werner Janssens" },
      { rank: 2, name: "Arno Hente" },
      { rank: 3, name: "Joop Lauret" },
      { rank: 4, name: "Adrie Pieters" },
      { rank: 5, name: "Eric Dieleman" }
    ],
    birdies: [
      { hole: 4, name: "Tim Stevens" },
      { hole: 14, name: "Joop Lauret" },
      { hole: 17, name: "Jos Goossen" },
      { hole: 17, name: "Arno Hente" },
      { hole: 17, name: "John Smet" },
      { hole: 18, name: "Bjorn Henderyckx" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Hans Nanninga" },
      { type: "Neary", hole: 17, name: "Arno Hente" },
      { type: "Longest", hole: 6, name: "Phil Jepson" },
      { type: "Longest", hole: 13, name: "Guido Debbaudt" }
    ]
  },
  {
    date: "2026-05-19",
    emailId: "19e41d05a0f8f242",
    subject: "Uitslag Herenavond 18 mei 2026",
    participants: 43,
    top5: [
      { rank: 1, name: "Dirk van Goethem" },
      { rank: 2, name: "Werner Janssens" },
      { rank: 3, name: "Marcel Bedee" },
      { rank: 4, name: "Jos Goossen" },
      { rank: 5, name: "Bjorn Henderyckx" }
    ],
    birdies: [
      { hole: 18, name: "Patrick van Beeck" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Michael Dooms" },
      { type: "Neary", hole: 11, name: "Arno Al" },
      { type: "Longest", hole: 4, name: "Tim Stevens" },
      { type: "Longest", hole: 16, name: "Marcel Bedee" }
    ]
  },
  {
    date: "2026-05-26",
    emailId: "19e65b9a502ec906",
    subject: "Uitslag Herenavond 26 mei 2026",
    participants: 42,
    top5: [
      { rank: 1, name: "Gerrit Hommersom" },
      { rank: 2, name: "Joop Lauret" },
      { rank: 3, name: "Sil van Hecke" },
      { rank: 4, name: "Bjorn Henderyckx" },
      { rank: 5, name: "Jos Goossen" }
    ],
    birdies: [
      { hole: 6, name: "Sil van Hecke" },
      { hole: 11, name: "Jos Goossen" },
      { hole: 11, name: "Roger Hermans" }
    ],
    bijzondere: [
      // Neary hole 8: geen score – geen winnaar
      { type: "Neary", hole: 11, name: "Roger Hermans" },
      // Leary hole 9: bordje niet geplaatst – geen winnaar
      { type: "Leary", hole: 16, name: "David Criel" }
    ]
  },
  {
    date: "2026-06-02",
    emailId: "19e89a1ebd28924c",
    subject: "Uitslag Herenavond 2 juni 2026",
    participants: 46,
    top5: [
      { rank: 1, name: "Marcel Bedee" },
      { rank: 2, name: "Arno Al" },
      { rank: 3, name: "Jaap Schueler" },
      { rank: 4, name: "Angelo Suzanna" },
      { rank: 5, name: "Tim Stevens" }
    ],
    birdies: [
      { hole: 14, name: "Marcel Bedee" },
      { hole: 18, name: "Tim Stevens" },
      { hole: 18, name: "Wim van Remortele" },
      { hole: 18, name: "Johan Devalez" },
      { hole: 18, name: "Sil van Hecke" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Donavan Lombard" },
      { type: "Neary", hole: 17, name: "Kristof van de Voorde" },
      { type: "Longest", hole: 6, name: "Ronald van den Hemel" },
      { type: "Longest", hole: 13, name: "Tim Stevens" }
    ]
  },
  {
    date: "2026-06-09",
    emailId: "19eadbb354c2387c",
    subject: "Uitslag Herenavond 9 juni 2026",
    participants: 55,
    top5: [
      { rank: 1, name: "Rudy de Moor" },
      { rank: 2, name: "Hessel Wieles" },
      { rank: 3, name: "Jos Kerckhaert" },
      { rank: 4, name: "Arno Al" },
      { rank: 5, name: "Gerrit Hommersom" }
    ],
    birdies: [
      { hole: 8, name: "Peter Loof" },
      { hole: 17, name: "Peter de Jonge" },
      { hole: 18, name: "Tim Stevens" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Peter Loof" },
      { type: "Neary", hole: 11, name: "Cees Delzenne" },
      { type: "Longest", hole: 4, name: "Rudy de Muynck" },
      { type: "Longest", hole: 15, name: "Jos Kerckhaert" }
    ]
  },
  {
    date: "2026-06-16",
    emailId: "19ed1e82ecd2958f",
    subject: "Uitslag Herenavond 16 juni 2026",
    participants: 60,
    top5: [
      { rank: 1, name: "Tim Stevens" },
      { rank: 2, name: "Bas van Groenestijn" },
      { rank: 3, name: "Jan Boerbooms" },
      { rank: 4, name: "Guy de Mey" },
      { rank: 5, name: "Kristof van de Voorde" }
    ],
    birdies: [
      { hole: 6, name: "Tim Stevens" },
      { hole: 17, name: "Jan Boerbooms" },
      { hole: 17, name: "Patrick van Beeck" },
      { hole: 18, name: "Bjorn Henderyckx" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Tim Stevens" },
      { type: "Neary", hole: 17, name: "Jan Boerbooms" },
      { type: "Longest", hole: 6, name: "Tim Stevens" },
      { type: "Longest", hole: 13, name: "Hessel Wieles" }
    ]
  },
  {
    date: "2026-06-23",
    emailId: "19ef5fe50286ce0b",
    subject: "Uitslag Herenavond 23 juni 2026",
    participants: 41,
    top5: [
      { rank: 1, name: "Sil van Hecke" },
      { rank: 2, name: "Bert Brijs" },
      { rank: 3, name: "Ruud dHondt" },
      { rank: 4, name: "Philipe Huighe" },
      { rank: 5, name: "Alex Boerbooms" }
    ],
    birdies: [
      { hole: 1, name: "Sil van Hecke" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Jan Links" },
      { type: "Longest", hole: 4, name: "Guido Debbaut" }
    ]
  },
  {
    date: "2026-06-30",
    emailId: "19f1a0d04b6c8d39",
    subject: "Uitslag Herenavond 30 juni 2026",
    participants: 45,
    top5: [
      { rank: 1, name: "Werner Janssens" },
      { rank: 2, name: "Adrie Boddaert" },
      { rank: 3, name: "Bjorn Henderyckx" },
      { rank: 4, name: "Bas van Groenestijn" },
      { rank: 5, name: "Maurits Tichelman" }
    ],
    birdies: [
      { hole: 2, name: "Hessel Wieles" },
      { hole: 12, name: "Jos Kerckhaert" },
      { hole: 12, name: "Tim Stevens" },
      { hole: 12, name: "Marcel Bedee" },
      { hole: 18, name: "Bjorn Henderyckx" },
      { hole: 18, name: "Maurits Tichelman" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Hessel Wieles" },
      { type: "Neary", hole: 11, name: "Werner Janssens" },
      { type: "Longest", hole: 6, name: "Bas van Groenestijn" },
      { type: "Longest", hole: 18, name: "Maurits Tichelman" }
    ]
  },
  {
    // BBQ-avond: FBBB teamformule, uitslag per koppel - beide spelers krijgen de rangpunten
    date: "2026-07-07",
    emailId: "19f3e650b93d5188",
    subject: "Uitslag Herenavond/BBQ 7 juli 2026",
    participants: 66,
    top5: [
      { rank: 1, name: "Gokhan Serigoflu" },
      { rank: 1, name: "Werner Janssens" },
      { rank: 2, name: "Dennis Hermans" },
      { rank: 2, name: "Michael Dooms" },
      { rank: 3, name: "Danny van de Velde" },
      { rank: 3, name: "Mark Smallegang" },
      { rank: 4, name: "Hendrik van Hoeve" },
      { rank: 4, name: "Marti Allander" },
      { rank: 5, name: "Marc Bulkmans" },
      { rank: 5, name: "Jan Baeyens" }
    ],
    birdies: [],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Tim Stevens" },
      { type: "Neary", hole: 11, name: "Mark Smallegang" },
      { type: "Close to the line", hole: 4, name: "Peter van der Bilt" },
      { type: "Close to the line", hole: 13, name: "Herman Huygens" }
    ]
  },
  {
    date: "2026-07-14",
    emailId: "19f628fddd3d2a67",
    subject: "Uitslag Herenavond 14 juli 2026",
    participants: 21,
    top5: [
      { rank: 1, name: "Jos Goossen" },
      { rank: 2, name: "Maurits Tichelman" },
      { rank: 3, name: "Geoffry Molders" },
      { rank: 4, name: "Ronald van den Hemel" },
      { rank: 5, name: "Han Blokland" }
    ],
    birdies: [
      { hole: 18, name: "Maurits Tichelman" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Peter Loof" },
      { type: "Neary", hole: 17, name: "Tim Stevens" },
      { type: "Longest", hole: 4, name: "Franklin van Hove" },
      { type: "Longest", hole: 18, name: "Ronald Bleijenberg" }
    ]
  },
  {
    date: "2026-07-28",
    emailId: "19faa23e3659f0d9",
    subject: "Uitslag Herenavond 28 juli 2026",
    participants: 51,
    top5: [
      { rank: 1, name: "Luc Missiaen" },
      { rank: 2, name: "Frank Berkhof" },
      { rank: 3, name: "Bas van Groenestijn" },
      { rank: 4, name: "Peter van der Bilt" },
      { rank: 5, name: "Franklin van Hove" }
    ],
    birdies: [
      // Danny Elve's EAGLE op hole 18 telt niet mee (geen birdie, niet in puntensysteem)
      { hole: 2, name: "Stijn Maesen" },
      { hole: 3, name: "Hessel Wieles" },
      { hole: 14, name: "Luc Missiaen" },
      { hole: 14, name: "Alex Boerbooms" },
      { hole: 18, name: "Kristof van de Voorde" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Marc Engelbeen" },
      { type: "Neary", hole: 11, name: "Michael Dooms" },
      { type: "Longest", hole: 6, name: "Geoffry Molders" },
      { type: "Longest", hole: 13, name: "Frank Berkhof" }
    ]
  },
  {
    date: "2026-08-04",
    emailId: "19fce0e99176daec",
    subject: "Uitslag Herenavond 4 augustus 2026",
    participants: 42,
    top5: [
      { rank: 1, name: "Leendert Muller" },
      { rank: 2, name: "Rick Motet" },
      { rank: 3, name: "Paul Koorevaar" },
      { rank: 4, name: "Adrie Pieters" },
      { rank: 5, name: "Danny van de Velde" }
    ],
    birdies: [
      { hole: 2, name: "John Smet" },
      { hole: 3, name: "Rick Motet" },
      { hole: 8, name: "Tim Stevens" },
      { hole: 8, name: "Phil Jepson" },
      { hole: 9, name: "Tim Stevens" },
      { hole: 14, name: "Hessel Wieles" }
    ],
    bijzondere: [
      { type: "Neary", hole: 8, name: "Phil Jepson" },
      { type: "Neary", hole: 17, name: "Harold van Waterschoot" },
      { type: "Longest", hole: 3, name: "Tim Stevens" },
      { type: "Longest", hole: 18, name: "Harold van Waterschoot" }
    ]
  },
  {
    date: "2026-08-11",
    emailId: "19ff2ac95fb0ef7f",
    subject: "Uitslag Herenavond 11 augustus 2026",
    participants: 42,
    top5: [
      { rank: 1, name: "Jan Boerbooms" },
      { rank: 2, name: "Hessel Wieles" },
      { rank: 3, name: "Johnny Smet" },
      { rank: 4, name: "Bas van Groenstijn" },
      { rank: 5, name: "Kristof van de Voorde" }
    ],
    birdies: [
      { hole: 1, name: "Kristof van de Voorde" },
      { hole: 5, name: "Danny Elve" },
      { hole: 14, name: "Harold van Waterschoot" },
      { hole: 14, name: "Patrick van Beeck" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Paul Koorevaar" },
      { type: "Neary", hole: 11, name: "Jos Kerckhaert" },
      { type: "Longest", hole: 4, name: "Marcel Bedee" },
      { type: "Longest", hole: 13, name: "Cedric Foubert" }
    ]
  },
  {
    date: "2026-08-18",
    emailId: "1a0164590fc55dd6",
    subject: "Uitslag Herenavond 18 augustus 2026",
    participants: 50,
    top5: [
      { rank: 1, name: "Ronald Bleijenberg" },
      { rank: 2, name: "Sil van Hecke" },
      { rank: 3, name: "Wim van Remortele" },
      { rank: 4, name: "Jos Goossen" },
      { rank: 5, name: "Alex Boerbooms" }
    ],
    birdies: [
      { hole: 10, name: "Sil van Hecke" },
      { hole: 11, name: "Alex Boerbooms" },
      { hole: 11, name: "Wim van Remortele" },
      { hole: 16, name: "Sil van Hecke" },
      { hole: 16, name: "Wim van Remortele" },
      { hole: 17, name: "Alex Boerbooms" },
      { hole: 18, name: "Marcel Bedee" },
      { hole: 18, name: "Wim van Remortele" }
    ],
    bijzondere: [
      // Neary hole 8: geen score - geen winnaar
      { type: "Neary", hole: 17, name: "Alex Boerbooms" },
      { type: "Leary", hole: 9, name: "Hessel Wieles" },
      { type: "Leary", hole: 16, name: "Guido Debbaudt" }
    ]
  },
  {
    date: "2026-09-08",
    emailId: "1a08243a8d567bb9",
    subject: "Uitslag Herenavond 8 september 2026",
    participants: 17,
    top5: [
      { rank: 1, name: "Sil van Hecke" },
      { rank: 2, name: "Joop Lauret" },
      { rank: 3, name: "Eric Dieleman" },
      { rank: 4, name: "John Smet" },
      { rank: 5, name: "Marcel Bedee" }
    ],
    birdies: [
      { hole: 2, name: "Marcel Bedee" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Jos van Bree" },
      { type: "Longest", hole: 6, name: "Donavan Lombard" }
    ]
  },
  {
    date: "2026-09-22",
    emailId: "1a0ca7b23d04c3c2",
    subject: "Uitslag Herenavond 22 september 2026",
    participants: 52,
    top5: [
      { rank: 1, name: "Johnny Smet" },
      { rank: 2, name: "Bert Bonne" },
      { rank: 3, name: "Gerard Puylaert" },
      { rank: 4, name: "Ronald Bleijenberg" },
      { rank: 5, name: "Marc Bulkmans" }
    ],
    birdies: [
      { hole: 13, name: "Johnny Smet" },
      { hole: 14, name: "Harold van Waterschoot" },
      { hole: 14, name: "Sil van Hecke" },
      { hole: 17, name: "Gokhan Serigoflu" }
    ],
    bijzondere: [
      { type: "Neary", hole: 2, name: "Donavan Lombard" },
      { type: "Neary", hole: 17, name: "Gokhan Serigoflu" },
      { type: "Longest", hole: 3, name: "Roger Hermans" },
      { type: "Longest", hole: 13, name: "Jos Goossen" }
    ]
  }
];

module.exports = { sessions };
