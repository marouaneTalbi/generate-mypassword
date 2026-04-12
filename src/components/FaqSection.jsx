import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Section FAQ interactive en accordéon
 */
export default function FaqSection({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Est-ce que mes mots de passe sont envoyés sur un serveur ?",
      a: "Non, absolument pas. Tout le processus de génération et de vérification se fait directement dans votre navigateur grâce à JavaScript. Aucune donnée n'est transmise à un serveur. Vous pouvez vérifier vous-même en utilisant les outils de développement de votre navigateur ou en déconnectant votre connexion internet après avoir chargé la page.",
    },
    {
      q: "Quelle longueur de mot de passe est recommandée ?",
      a: "Nous recommandons 16 caractères minimum pour les comptes importants (email, banque, gestionnaire de mots de passe). Pour les comptes moins sensibles, 12 caractères sont un minimum acceptable. Plus votre mot de passe est long, plus il est sécurisé.",
    },
    {
      q: "Dois-je inclure des symboles dans mon mot de passe ?",
      a: "Oui, l'ajout de symboles augmente considérablement la complexité de votre mot de passe. Cependant, certains sites ou anciens systèmes n'acceptent pas tous les symboles. Si vous avez des problèmes de compatibilité, privilégiez la longueur : un mot de passe de 20 caractères sans symboles est plus sûr qu'un mot de passe de 10 caractères avec symboles.",
    },
    {
      q: "Puis-je utiliser le même mot de passe sur plusieurs sites ?",
      a: "Non, jamais. Chaque compte doit avoir son propre mot de passe unique. Utilisez un gestionnaire de mots de passe pour gérer facilement des centaines de mots de passe différents sans avoir à les mémoriser.",
    },
    {
      q: "Comment dois-je stocker mes mots de passe ?",
      a: "La meilleure solution est un gestionnaire de mots de passe chiffré comme Bitwarden, 1Password ou KeePass. Ne les stockez jamais dans un fichier texte, dans un document Word, dans vos emails, ou dans votre navigateur sans protection par mot de passe maître.",
    },
    {
      q: "Est-ce que GeneratePassword est gratuit ?",
      a: "Oui, 100% gratuit, sans inscription, sans limite d'utilisation, sans filigrane et sans période d'essai. Vous pouvez générer autant de mots de passe que vous voulez.",
    },
    {
      q: "L'authentification à deux facteurs remplace-t-elle un mot de passe fort ?",
      a: "Non, elle le complète. Un mot de passe fort reste votre première ligne de défense, et l'authentification à deux facteurs ajoute une couche supplémentaire. Utilisez toujours les deux ensemble pour une sécurité maximale.",
    },
    {
      q: "Les questions de sécurité sont-elles fiables ?",
      a: "Pas du tout. Les réponses aux questions classiques (nom de jeune fille de votre mère, nom de votre premier animal) sont souvent trouvables sur les réseaux sociaux. Si un service vous impose des questions de sécurité, répondez avec des informations aléatoires que vous stockerez dans votre gestionnaire de mots de passe.",
    },
  ];

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section className="max-w-3xl mx-auto mt-16 px-4">
      <h2 className="text-xl font-bold text-white mb-6">Questions fréquentes</h2>
      <div className="bg-[#0a0f1c] border border-[#1f2937] rounded-xl overflow-hidden divide-y divide-[#1f2937]">
        {faqs.map((faq, i) => (
          <div key={i}>
            {/* Question */}
            <button
              onClick={() => toggle(i)}
              className="w-full p-4 flex justify-between items-center cursor-pointer hover:bg-[#0f1629] transition-colors text-left"
            >
              <span className="text-sm font-medium text-gray-200 pr-4">{faq.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Réponse animée */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-sm text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
