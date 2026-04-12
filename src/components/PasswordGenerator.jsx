import { RefreshCw } from 'lucide-react';
import usePasswordGen from '../hooks/usePasswordGen';
import { calculateStrength } from '../utils/strength';
import PasswordDisplay from './PasswordDisplay';
import StrengthMeter from './StrengthMeter';
import OptionsPanel from './OptionsPanel';
import HistoryList from './HistoryList';

/**
 * Composant central : générateur de mots de passe complet
 */
export default function PasswordGenerator({ t }) {
  const { options, password, history, generate, updateOption } = usePasswordGen();
  const strength = calculateStrength(password);

  return (
    <section className="bg-[#0a0f1c] border border-[#1f2937] rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mt-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
        {t('generator.title')}
      </h2>

      {/* Affichage du mot de passe */}
      <PasswordDisplay password={password} onRegenerate={generate} />

      {/* Indicateur de force */}
      <StrengthMeter strength={strength} t={t} />

      {/* Options */}
      <OptionsPanel options={options} updateOption={updateOption} t={t} />

      {/* Bouton générer */}
      <button
        onClick={generate}
        className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.01] transition-all duration-200"
      >
        <RefreshCw className="w-4 h-4" />
        {t('generator.generate')}
      </button>

      {/* Historique session */}
      <HistoryList history={history} t={t} />
    </section>
  );
}
