// Firebase Realtime Database REST API
// Vereist: FIREBASE_DB_URL en FIREBASE_SECRET als omgevingsvariabelen
// Maak een Firebase project aan op https://console.firebase.google.com
// Ga naar Project Settings > Service Accounts > Database Secrets voor FIREBASE_SECRET

const FIREBASE_DB_URL = process.env.FIREBASE_DB_URL;
const FIREBASE_SECRET = process.env.FIREBASE_SECRET;

async function writeToFirebase(path, data) {
  if (!FIREBASE_DB_URL || !FIREBASE_SECRET) {
    console.log('[Firebase] Credentials ontbreken – data wordt NIET geschreven.');
    console.log('[Firebase] Stel FIREBASE_DB_URL en FIREBASE_SECRET in.');
    return null;
  }
  const url = `${FIREBASE_DB_URL}/${path}.json?auth=${FIREBASE_SECRET}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Firebase schrijffout (${response.status}): ${text}`);
  }
  return response.json();
}

async function readFromFirebase(path) {
  if (!FIREBASE_DB_URL || !FIREBASE_SECRET) return null;
  const url = `${FIREBASE_DB_URL}/${path}.json?auth=${FIREBASE_SECRET}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Firebase leesfout (${response.status})`);
  return response.json();
}

module.exports = { writeToFirebase, readFromFirebase };
