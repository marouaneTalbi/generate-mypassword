// Jeux de caractères disponibles
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
// Caractères visuellement ambigus à exclure en option
const AMBIGUOUS = '0O1lI';

/**
 * Génère un mot de passe aléatoire sécurisé via window.crypto
 * @param {Object} options - Options de génération
 * @returns {string} Le mot de passe généré
 */
export function generatePassword(options) {
  const {
    length = 16,
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true,
    excludeAmbiguous = false,
    noRepeat = false,
    startWithLetter = false,
  } = options;

  // Construction du jeu de caractères
  let charset = '';
  if (uppercase) charset += UPPERCASE;
  if (lowercase) charset += LOWERCASE;
  if (numbers) charset += NUMBERS;
  if (symbols) charset += SYMBOLS;

  // Exclusion des caractères ambigus si demandé
  if (excludeAmbiguous) {
    charset = charset.split('').filter(c => !AMBIGUOUS.includes(c)).join('');
  }

  // Aucun charset disponible → retourner chaîne vide
  if (!charset) return '';

  // Génération cryptographiquement sécurisée
  const crypto = window.crypto || window.msCrypto;
  const values = new Uint32Array(length);
  crypto.getRandomValues(values);

  let password = '';
  for (let i = 0; i < length; i++) {
    let char = charset[values[i] % charset.length];
    // Éviter les répétitions consécutives si demandé
    if (noRepeat && password.length > 0 && password[password.length - 1] === char) {
      char = charset[(values[i] + 1) % charset.length];
    }
    password += char;
  }

  // Forcer le premier caractère à être une lettre si demandé
  if (startWithLetter && !/[a-zA-Z]/.test(password[0])) {
    const letters = (uppercase ? UPPERCASE : '') + (lowercase ? LOWERCASE : '');
    if (letters) {
      const v = new Uint32Array(1);
      crypto.getRandomValues(v);
      password = letters[v[0] % letters.length] + password.slice(1);
    }
  }

  return password;
}
