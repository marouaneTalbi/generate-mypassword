import { useLang } from './hooks/useLang';
import Header from './components/Header';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordChecker from './components/PasswordChecker';
import SeoContent from './components/SeoContent';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  const { lang, t, toggleLang } = useLang();

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Header t={t} lang={lang} toggleLang={toggleLang} />
      <PasswordGenerator t={t} />
      <PasswordChecker t={t} />
      <SeoContent />
      <FaqSection t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
