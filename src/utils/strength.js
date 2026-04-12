/**
 * Calcule la force d'un mot de passe basée sur l'entropie
 * @param {string} password
 * @returns {{ score: number, label: string, color: string, time: string, entropy: number }}
 */
export function calculateStrength(password) {
  if (!password) return { score: 0, label: 'Aucun', color: 'gray', time: '—', entropy: 0 };

  // Calcul de la taille du charset effectif
  let charset = 0;
  if (/[a-z]/.test(password)) charset += 26;
  if (/[A-Z]/.test(password)) charset += 26;
  if (/[0-9]/.test(password)) charset += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charset += 32;

  // Entropie en bits
  const entropy = password.length * Math.log2(charset || 1);

  // Hypothèse : 10 milliards de tentatives par seconde
  const seconds = Math.pow(2, entropy) / 10_000_000_000;

  let score, label, color;
  if (entropy < 28) { score = 1; label = 'Très faible'; color = 'red'; }
  else if (entropy < 40) { score = 2; label = 'Faible'; color = 'orange'; }
  else if (entropy < 60) { score = 3; label = 'Moyen'; color = 'yellow'; }
  else if (entropy < 80) { score = 4; label = 'Fort'; color = 'emerald'; }
  else { score = 5; label = 'Très fort'; color = 'emerald'; }

  const time = formatTime(seconds);

  return { score, label, color, time, entropy };
}

/**
 * Formate un nombre de secondes en texte lisible
 * @param {number} seconds
 * @returns {string}
 */
function formatTime(seconds) {
  if (seconds < 1) return 'Instantané';
  if (seconds < 60) return Math.round(seconds) + ' secondes';
  if (seconds < 3600) return Math.round(seconds / 60) + ' minutes';
  if (seconds < 86400) return Math.round(seconds / 3600) + ' heures';
  if (seconds < 31536000) return Math.round(seconds / 86400) + ' jours';
  if (seconds < 31536000 * 100) return Math.round(seconds / 31536000) + ' ans';
  if (seconds < 31536000 * 1_000_000) return Math.round(seconds / 31536000 / 1000) + ' millénaires';
  return "Des milliards d'années";
}
