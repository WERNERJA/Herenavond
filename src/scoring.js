const POSITION_POINTS = { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 };
const BIRDIE_POINTS = 2;
const BIJZONDERE_POINTS = 2;

function calculateStandings(sessions) {
  const players = {};

  for (const session of sessions) {
    for (const player of session.top5) {
      const pts = POSITION_POINTS[player.rank];
      addPoints(players, player.name, session.date, 'position', pts);
    }
    for (const birdie of session.birdies) {
      addPoints(players, birdie.name, session.date, 'birdie', BIRDIE_POINTS);
    }
    for (const bij of session.bijzondere) {
      addPoints(players, bij.name, session.date, 'bijzondere', BIJZONDERE_POINTS);
    }
  }

  return Object.values(players).sort((a, b) => b.total - a.total);
}

function addPoints(players, name, date, category, pts) {
  if (!players[name]) {
    players[name] = {
      name,
      total: 0,
      positionPoints: 0,
      birdiePoints: 0,
      bijzonderePoints: 0,
      sessions: {}
    };
  }
  const p = players[name];
  p.total += pts;
  if (category === 'position') p.positionPoints += pts;
  else if (category === 'birdie') p.birdiePoints += pts;
  else if (category === 'bijzondere') p.bijzonderePoints += pts;
  p.sessions[date] = (p.sessions[date] || 0) + pts;
}

function normalizeName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

module.exports = { calculateStandings, normalizeName };
