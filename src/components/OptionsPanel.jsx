import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Toggle switch animé
 */
function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-all duration-200 ${
        checked
          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500'
          : 'bg-[#1f2937]'
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
          checked ? 'left-6' : 'left-1'
        }`}
      />
    </button>
  );
}

/**
 * Panneau d'options : longueur, types de caractères, options avancées
 */
export default function OptionsPanel({ options, updateOption, t }) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Définition des 4 toggles principaux
  const toggles = [
    { key: 'uppercase', label: t('generator.upper'), example: 'ABCDEF' },
    { key: 'lowercase', label: t('generator.lower'), example: 'abcdef' },
    { key: 'numbers', label: t('generator.numbers'), example: '012345' },
    { key: 'symbols', label: t('generator.symbols'), example: '!@#$%^' },
  ];

  return (
    <div className="mt-6">
      {/* Longueur */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-300 block mb-3">
            {t('generator.length')}
          </label>
          <input
            type="range"
            min={4}
            max={64}
            value={options.length}
            onChange={e => updateOption('length', Number(e.target.value))}
            className="w-full"
          />
        </div>
        {/* Chiffre affiché en grand */}
        <span className="text-3xl font-bold text-emerald-400 font-mono w-14 text-center flex-shrink-0">
          {options.length}
        </span>
      </div>

      {/* Grille 4 toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {toggles.map(({ key, label, example }) => (
          <div
            key={key}
            onClick={() => updateOption(key, !options[key])}
            className="bg-[#030712] border border-[#1f2937] rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-emerald-500/30 transition-colors"
          >
            <div>
              <p className="text-sm font-medium text-gray-200">{label}</p>
              <p className="text-[10px] font-mono text-gray-500 mt-0.5">{example}</p>
            </div>
            <Toggle
              checked={options[key]}
              onChange={val => updateOption(key, val)}
            />
          </div>
        ))}
      </div>

      {/* Bouton options avancées */}
      <button
        onClick={() => setShowAdvanced(v => !v)}
        className="flex items-center gap-1.5 text-xs text-gray-500 mt-5 hover:text-gray-300 transition-colors"
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`}
        />
        {t('generator.advanced')}
      </button>

      {/* Section options avancées animée */}
      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2.5 bg-[#030712] border border-[#1f2937] rounded-xl p-4">
              {[
                { key: 'excludeAmbiguous', label: t('generator.excludeAmbiguous') },
                { key: 'noRepeat', label: t('generator.noRepeat') },
                { key: 'startWithLetter', label: t('generator.startWithLetter') },
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={e => updateOption(key, e.target.checked)}
                    className="w-4 h-4 rounded border-[#1f2937] bg-[#1f2937] accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-xs text-gray-400">{label}</span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
