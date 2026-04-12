import { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Affiche le mot de passe avec boutons copier et régénérer
 */
export default function PasswordDisplay({ password, onRegenerate }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback pour les navigateurs sans API Clipboard
      const ta = document.createElement('textarea');
      ta.value = password;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#030712] border-2 border-[#1f2937] rounded-xl p-5 md:p-6 relative">
      {/* Mot de passe animé */}
      <AnimatePresence mode="wait">
        <motion.p
          key={password}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="font-mono text-lg md:text-2xl text-emerald-400 break-all text-center tracking-wider select-all pr-16 min-h-[2rem]"
        >
          {password || '—'}
        </motion.p>
      </AnimatePresence>

      {/* Boutons d'action */}
      <div className="absolute top-3 right-3 flex gap-1.5">
        {/* Régénérer */}
        <button
          onClick={onRegenerate}
          title="Régénérer"
          className="p-2 bg-[#1f2937] rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-400 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        {/* Copier */}
        <button
          onClick={handleCopy}
          title={copied ? 'Copié !' : 'Copier'}
          className={`p-2 rounded-lg transition-colors ${
            copied
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-[#1f2937] text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400'
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
