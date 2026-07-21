const { sessions } = require('./sessions');
const { calculateStandings, normalizeName } = require('./scoring');
const { writeToFirebase, readFromFirebase } = require('./firebase');
const { sendWhatsApp, formatStandings } = require('./calmebot');

async function main() {
  console.log(`\n=== Herenavond 2026 Update – ${new Date().toISOString()} ===`);
  console.log(`Totaal gespeelde avonden: ${sessions.length}`);

  const standings = calculateStandings(sessions);
  const lastSession = sessions[sessions.length - 1];

  // Print volledig klassement naar console
  console.log('\nKlassement:');
  standings.forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.name}: ${p.total} pts (positie:${p.positionPoints} birdie:${p.birdiePoints} bijzonder:${p.bijzonderePoints})`);
  });

  // Bouw Firebase data structuur
  const firebaseData = {
    lastUpdated: new Date().toISOString(),
    totalSessions: sessions.length,
    lastSessionDate: lastSession.date,
    lastEmailId: lastSession.emailId,
    sessions: {},
    standings: {}
  };

  for (const session of sessions) {
    const key = session.date.replace(/-/g, '');
    firebaseData.sessions[key] = {
      date: session.date,
      subject: session.subject,
      participants: session.participants,
      top5: session.top5,
      birdies: session.birdies,
      bijzondere: session.bijzondere
    };
  }

  for (const player of standings) {
    const key = normalizeName(player.name);
    firebaseData.standings[key] = {
      name: player.name,
      total: player.total,
      positionPoints: player.positionPoints,
      birdiePoints: player.birdiePoints,
      bijzonderePoints: player.bijzonderePoints,
      sessions: player.sessions
    };
  }

  // Schrijf naar Firebase
  try {
    const result = await writeToFirebase('herenavond2026', firebaseData);
    if (result !== null) console.log('\n[Firebase] Data succesvol opgeslagen.');
  } catch (err) {
    console.error('\n[Firebase] FOUT:', err.message);
  }

  // Stuur klassement naar CalMeBot
  const message = formatStandings(standings, sessions.length, lastSession.date);
  try {
    const result = await sendWhatsApp(message);
    if (result !== null) console.log('\n[CalMeBot] Klassement verstuurd via WhatsApp.');
  } catch (err) {
    console.error('\n[CalMeBot] FOUT:', err.message);
  }

  console.log('\n=== Klaar ===\n');
}

main().catch(err => {
  console.error('Fatale fout:', err);
  process.exit(1);
});
