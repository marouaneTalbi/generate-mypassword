/**
 * Contenu SEO statique en français — critique pour Google AdSense
 * Minimum 2500 mots pour satisfaire les exigences de contenu AdSense
 */
export default function SeoContent() {
  return (
    <article className="max-w-3xl mx-auto px-4 mt-16 pt-12 border-t border-[#1f2937]">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Générateur de mots de passe sécurisés et gratuit en ligne
      </h1>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        GeneratePassword est un outil en ligne 100% gratuit qui vous permet de créer instantanément des mots de passe forts et aléatoires. Que ce soit pour sécuriser votre compte email, votre banque en ligne, votre compte professionnel, vos réseaux sociaux ou tout autre service numérique, un mot de passe robuste est la première ligne de défense contre les cyberattaques. Notre générateur utilise un algorithme cryptographique sécurisé directement dans votre navigateur — aucun mot de passe n'est envoyé sur un serveur, tout reste sur votre appareil.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Pourquoi utiliser un mot de passe fort ?
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Selon les rapports de cybersécurité les plus récents, plus de 80% des violations de données impliquent des mots de passe faibles, réutilisés ou volés. Chaque année, des milliards d'identifiants sont compromis dans le monde. Un pirate informatique équipé d'un ordinateur moderne peut tester des millions de combinaisons par seconde. Un mot de passe comme "motdepasse123" ou "azerty2024" est craqué en moins d'une seconde par les outils automatisés disponibles gratuitement sur internet.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Utiliser un mot de passe fort et unique pour chaque service en ligne est la mesure de sécurité la plus simple et la plus efficace que vous puissiez prendre. Un mot de passe de 16 caractères contenant des majuscules, des minuscules, des chiffres et des symboles est considéré comme hautement sécurisé — il faudrait des millions d'années pour le craquer avec les technologies actuelles.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Qu'est-ce qu'un mot de passe sécurisé ?
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Un mot de passe véritablement sécurisé repose sur plusieurs critères fondamentaux. La longueur est le facteur le plus important : chaque caractère supplémentaire augmente exponentiellement la complexité. Un mot de passe de 8 caractères peut être craqué en quelques heures, alors qu'un mot de passe de 16 caractères nécessite des milliards d'années avec les mêmes moyens.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        La diversité des caractères est également essentielle. Un mot de passe qui combine des lettres majuscules (A-Z), des lettres minuscules (a-z), des chiffres (0-9) et des symboles spéciaux (!@#$%^&*) est beaucoup plus difficile à deviner qu'un mot composé uniquement de lettres minuscules. Cette combinaison augmente ce qu'on appelle l'entropie du mot de passe, c'est-à-dire son niveau d'imprévisibilité.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        L'aléatoire est crucial : un mot de passe comme "P@ssw0rd2024!" peut sembler complexe mais il suit un schéma prévisible que les attaquants connaissent bien. Un vrai mot de passe sécurisé n'a aucun sens, aucune structure reconnaissable, et ne contient aucun mot du dictionnaire. C'est exactement ce que GeneratePassword produit : des séquences totalement aléatoires, impossibles à deviner.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Comment fonctionne notre générateur de mots de passe ?
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        GeneratePassword utilise l'API cryptographique native du navigateur (Web Crypto API) pour générer des séquences véritablement aléatoires. Contrairement aux fonctions Math.random() classiques qui peuvent être prévisibles, nous utilisons window.crypto.getRandomValues() qui garantit un niveau d'aléatoire cryptographiquement sûr. Cette méthode est la même que celle utilisée par les gestionnaires de mots de passe professionnels comme 1Password, LastPass ou Bitwarden.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Vous pouvez personnaliser votre mot de passe selon vos besoins : ajuster la longueur entre 4 et 64 caractères, activer ou désactiver les différents types de caractères (majuscules, minuscules, chiffres, symboles), et utiliser des options avancées comme l'exclusion des caractères ambigus (0, O, 1, l, I) pour faciliter la saisie manuelle, ou l'obligation de commencer par une lettre pour la compatibilité avec certains systèmes anciens.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Combien de temps faut-il pour cracker un mot de passe ?
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Le temps nécessaire pour cracker un mot de passe dépend de sa longueur, de la diversité des caractères utilisés et de la puissance de calcul de l'attaquant. Voici quelques exemples avec les capacités de calcul actuelles d'un ordinateur professionnel dédié :
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Un mot de passe de 6 caractères en minuscules uniquement : craqué en quelques secondes. Un mot de passe de 8 caractères alphanumériques : quelques heures. Un mot de passe de 10 caractères avec tous les types de caractères : plusieurs mois. Un mot de passe de 12 caractères avec tous les types : des centaines d'années. Un mot de passe de 16 caractères avec tous les types : des milliards d'années.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Notre indicateur de force en temps réel vous montre précisément l'entropie de votre mot de passe et l'estimation du temps nécessaire pour le craquer. Nous recommandons toujours une longueur minimale de 16 caractères pour les comptes sensibles comme votre email principal, vos comptes bancaires, ou votre gestionnaire de mots de passe.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Les erreurs à éviter absolument
      </h2>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Réutiliser le même mot de passe
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        C'est l'erreur la plus courante et la plus dangereuse. Si vous utilisez le même mot de passe sur plusieurs sites, une seule fuite de données compromet tous vos comptes. Les pirates testent systématiquement les identifiants volés sur des centaines d'autres services. Utilisez un mot de passe unique pour chaque compte.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Utiliser des informations personnelles
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Votre date de naissance, le prénom de votre enfant, le nom de votre animal, votre équipe de foot préférée — toutes ces informations sont facilement trouvables sur les réseaux sociaux. Un attaquant ciblant votre compte commencera par essayer ces combinaisons évidentes.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Les substitutions évidentes
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Remplacer le "a" par "@", le "e" par "3" ou le "i" par "1" ne rend pas votre mot de passe plus sécurisé. Les logiciels de crackage testent automatiquement toutes ces substitutions classiques. "P@ssw0rd" est à peine plus sûr que "password".
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Partager par email ou SMS
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Ne partagez jamais un mot de passe par email, SMS ou messagerie non chiffrée. Si vous devez absolument partager un accès, utilisez un gestionnaire de mots de passe qui propose le partage sécurisé.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Comment mémoriser des mots de passe complexes ?
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        La meilleure solution est d'utiliser un gestionnaire de mots de passe. Ces outils comme Bitwarden (gratuit et open source), 1Password, Dashlane ou LastPass vous permettent de ne mémoriser qu'un seul mot de passe maître — celui qui protège votre coffre-fort. Le gestionnaire génère et retient automatiquement tous vos autres mots de passe, les remplit sur les sites, et se synchronise entre vos appareils.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Pour votre mot de passe maître, qui doit être mémorisable ET ultra sécurisé, vous pouvez utiliser la méthode des phrases de passe : une suite de 4 à 6 mots aléatoires séparés par des symboles, par exemple : "Cheval-Volcan-Musique-42-Orange". Une phrase de passe de ce type est à la fois facile à retenir et extrêmement difficile à craquer.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Pourquoi choisir GeneratePassword ?
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Notre générateur présente plusieurs avantages majeurs par rapport aux autres outils disponibles en ligne. D'abord, la confidentialité absolue : tout le processus de génération se déroule dans votre navigateur. Aucun mot de passe n'est jamais transmis à un serveur, stocké dans une base de données, ou loggé dans des fichiers. Vous pouvez même utiliser notre outil hors ligne une fois la page chargée.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Ensuite, la qualité cryptographique : nous utilisons les fonctions aléatoires sécurisées natives du navigateur (crypto.getRandomValues), garantissant une entropie maximale. Les mots de passe générés sont véritablement imprévisibles, contrairement à de nombreux générateurs en ligne qui utilisent des algorithmes prévisibles.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Enfin, l'interface est pensée pour être rapide et pratique. Le mot de passe se régénère automatiquement à chaque changement d'option, vous pouvez copier en un clic, et l'indicateur de force vous aide à comprendre immédiatement la sécurité de votre mot de passe. Aucune inscription, aucune publicité intrusive, aucun suivi.
      </p>

      <h2 className="text-xl font-bold text-white mt-10 mb-3">
        Questions fréquentes
      </h2>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Est-ce que mes mots de passe sont envoyés sur un serveur ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Non, absolument pas. Tout le processus de génération et de vérification se fait directement dans votre navigateur grâce à JavaScript. Aucune donnée n'est transmise à un serveur. Vous pouvez vérifier vous-même en utilisant les outils de développement de votre navigateur ou en déconnectant votre connexion internet après avoir chargé la page.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Quelle longueur de mot de passe est recommandée ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Nous recommandons 16 caractères minimum pour les comptes importants (email, banque, gestionnaire de mots de passe). Pour les comptes moins sensibles, 12 caractères sont un minimum acceptable. Plus votre mot de passe est long, plus il est sécurisé.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Dois-je inclure des symboles dans mon mot de passe ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Oui, l'ajout de symboles augmente considérablement la complexité de votre mot de passe. Cependant, certains sites ou anciens systèmes n'acceptent pas tous les symboles. Si vous avez des problèmes de compatibilité, privilégiez la longueur : un mot de passe de 20 caractères sans symboles est plus sûr qu'un mot de passe de 10 caractères avec symboles.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Puis-je utiliser le même mot de passe sur plusieurs sites ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Non, jamais. Chaque compte doit avoir son propre mot de passe unique. Utilisez un gestionnaire de mots de passe pour gérer facilement des centaines de mots de passe différents sans avoir à les mémoriser.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Comment dois-je stocker mes mots de passe ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        La meilleure solution est un gestionnaire de mots de passe chiffré comme Bitwarden, 1Password ou KeePass. Ne les stockez jamais dans un fichier texte, dans un document Word, dans vos emails, ou dans votre navigateur sans protection par mot de passe maître.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Est-ce que GeneratePassword est gratuit ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Oui, 100% gratuit, sans inscription, sans limite d'utilisation, sans filigrane et sans période d'essai. Vous pouvez générer autant de mots de passe que vous voulez.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        L'authentification à deux facteurs remplace-t-elle un mot de passe fort ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Non, elle le complète. Un mot de passe fort reste votre première ligne de défense, et l'authentification à deux facteurs ajoute une couche supplémentaire. Utilisez toujours les deux ensemble pour une sécurité maximale.
      </p>

      <h3 className="text-base font-semibold text-gray-200 mt-6 mb-2">
        Les questions de sécurité sont-elles fiables ?
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        Pas du tout. Les réponses aux questions classiques (nom de jeune fille de votre mère, nom de votre premier animal) sont souvent trouvables sur les réseaux sociaux. Si un service vous impose des questions de sécurité, répondez avec des informations aléatoires que vous stockerez dans votre gestionnaire de mots de passe.
      </p>
    </article>
  );
}
