import { useState } from 'react';
import { Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';
import { calculateStrength } from '../utils/strength';
import StrengthMeter from './StrengthMeter';

/**
 * Outil de vérification de la force d'un mot de passe existant
 */
export default function PasswordChecker({ t }) {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const strength = calculateStrength(value);

  // Critères de sécurité
  const criteria = [
    { key: 'length', label: t('checker.criteria.length'), ok: value.length >= 12 },
    { key: 'upper', label: t('checker.criteria.upper'), ok: /[A-Z]/.test(value) },
    { key: 'numbers', label: t('checker.criteria.numbers'), ok: /[0-9]/.test(value) },
    { key: 'symbols', label: t('checker.criteria.symbols'), ok: /[^a-zA-Z0-9]/.test(value) },
  ];

  return (
    <section className="bg-[#0a0f1c] border border-[#1f2937] rounded-2xl p-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-bold text-white mb-1">
        {t('checker.title')}
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        {t('checker.subtitle')}
      </p>

      {/* Champ de saisie avec oeil */}
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={t('checker.placeholder')}
          className="w-full bg-[#030712] border border-[#1f2937] rounded-xl px-4 py-3 text-gray-200 font-mono text-sm focus:border-emerald-500/50 outline-none transition-colors pr-12"
        />
        <button
          onClick={() => setShow(v => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          aria-label={show ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>

      {/* Indicateur de force (affiché seulement si saisie) */}
      {value && (
        <>
          <StrengthMeter strength={strength} t={t} />

          {/* Grille des critères */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {criteria.map(({ key, label, ok }) => (
              <div key={key} className="flex items-center gap-2">
                {ok
                  ? <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  : <XCircle className="w-4 h-4 text-gray-600 flex-shrink-0" />
                }
                <span className={`text-xs ${ok ? 'text-gray-300' : 'text-gray-500'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
