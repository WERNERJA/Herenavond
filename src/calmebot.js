// CalMeBot WhatsApp API – stuur klassement via WhatsApp
// Setup: stuur "I allow callmebot to send me messages" naar +34 644 25 90 15
// Je krijgt dan een apikey terug. Stel in als CALMEBOT_PHONE en CALMEBOT_APIKEY.

const CALMEBOT_PHONE = process.env.CALMEBOT_PHONE;
const CALMEBOT_APIKEY = process.env.CALMEBOT_APIKEY;

async function sendWhatsApp(message) {
  if (!CALMEBOT_PHONE || !CALMEBOT_APIKEY) {
    console.log('[CalMeBot] Credentials ontbreken – bericht wordt NIET verstuurd.');
    console.log('[CalMeBot] Bericht inhoud:');
    console.log(message);
    return null;
  }
  const url = `https://api.callmebot.com/whatsapp.php?phone=${CALMEBOT_PHONE}&text=${encodeURIComponent(message)}&apikey=${CALMEBOT_APIKEY}`;
  const response = await fetch(url);
  const text = await response.text();
  if (!response.ok) throw new Error(`CalMeBot fout (${response.status}): ${text}`);
  console.log('[CalMeBot] Bericht verstuurd:', text.substring(0, 80));
  return text;
}

function formatStandings(standings, sessionCount, lastDate) {
  const medal = ['🥇', '🥈', '🥉'];
  const lines = [
    `⛳ HERENAVOND 2026 – Klassement`,
    `Na ${sessionCount} gespeelde avonden (laatste: ${lastDate})`,
    ``,
  ];

  standings.slice(0, 15).forEach((p, i) => {
    const pos = medal[i] || `${i + 1}.`;
    const detail = `(${p.positionPoints}+${p.birdiePoints}+${p.bijzonderePoints})`;
    lines.push(`${pos} ${p.name}: *${p.total} pts* ${detail}`);
  });

  lines.push('');
  lines.push('_pos+birdie+bijzonder_');
  return lines.join('\n');
}

module.exports = { sendWhatsApp, formatStandings };
