/**
 * Pied de page avec mentions légales et liens vers les autres outils
 */
export default function Footer({ t }) {
  return (
    <footer className="text-center mt-16 mb-8 px-4">
      <p className="text-xs text-gray-600 mb-3">
        {t('footer.privacy')}
      </p>
      <p className="text-xs text-gray-600 mb-2">
        {t('footer.alsoCheck')} :{' '}
        <a
          href="https://clean-mytext.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-emerald-400 transition-colors underline underline-offset-2"
        >
          clean-mytext.com
        </a>
        {' '}({t('footer.textCleaner')}),{' '}
        <a
          href="https://compress-photos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-emerald-400 transition-colors underline underline-offset-2"
        >
          compress-photos.com
        </a>
        {' '}({t('footer.imageCompressor')})
      </p>
      <p className="text-xs text-gray-700 mt-4">
        © 2026 GeneratePassword
      </p>
    </footer>
  );
}
