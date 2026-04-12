import { useState, useCallback, useEffect } from 'react';
import { generatePassword } from '../utils/generator';

/**
 * Hook principal gérant la génération de mots de passe et l'historique de session
 */
const usePasswordGen = () => {
  const [options, setOptions] = useState({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeAmbiguous: false,
    noRepeat: false,
    startWithLetter: false,
  });

  const [password, setPassword] = useState('');
  const [history, setHistory] = useState([]);

  // Génère un nouveau mot de passe et le pousse dans l'historique
  const generate = useCallback(() => {
    const pwd = generatePassword(options);
    setPassword(pwd);
    setHistory(prev => {
      // Éviter les doublons consécutifs dans l'historique
      if (prev[0] === pwd) return prev;
      return [pwd, ...prev].slice(0, 5);
    });
  }, [options]);

  // Régénération automatique à chaque changement d'option
  useEffect(() => {
    generate();
  }, [options]); // eslint-disable-line react-hooks/exhaustive-deps

  // Met à jour une option et déclenche la régénération automatique
  const updateOption = (key, value) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  return { options, password, history, generate, updateOption };
};

export default usePasswordGen;
