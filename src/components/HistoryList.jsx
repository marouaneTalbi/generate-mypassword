import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

/**
 * Historique des 5 derniers mots de passe générés (mémoire session)
 */
export default function HistoryList({ history, t }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Pas d'historique → ne rien afficher
  if (!history || history.length === 0) return null;

  const handleCopy = async (pwd, idx) => {
    try {
      await navigator.clipboard.writeText(pwd);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = pwd;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mt-6">
      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">
        {t('generator.history')}
      </p>
      <div className="space-y-2">
        {history.map((pwd, idx) => (
          <div
            key={idx}
            className="bg-[#030712] border border-[#1f2937] rounded-lg p-3 flex justify-between items-center"
          >
            <span className="font-mono text-xs text-gray-400 truncate flex-1 mr-3">
              {pwd}
            </span>
            <button
              onClick={() => handleCopy(pwd, idx)}
              title="Copier"
              className="flex-shrink-0 p-1.5 bg-[#1f2937] rounded text-gray-500 hover:text-emerald-400 transition-colors"
            >
              {copiedIndex === idx
                ? <Check className="w-3 h-3 text-emerald-400" />
                : <Copy className="w-3 h-3" />
              }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
