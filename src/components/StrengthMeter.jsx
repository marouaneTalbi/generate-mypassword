/**
 * Indicateur visuel de force du mot de passe
 * Affiche 5 segments colorés + label + temps estimé pour craquer
 */
export default function StrengthMeter({ strength, t }) {
  // Mapping couleur → classes Tailwind
  const colorMap = {
    gray: { bar: 'bg-gray-600', text: 'text-gray-500' },
    red: { bar: 'bg-red-500', text: 'text-red-400' },
    orange: { bar: 'bg-orange-500', text: 'text-orange-400' },
    yellow: { bar: 'bg-yellow-500', text: 'text-yellow-400' },
    emerald: { bar: 'bg-emerald-500', text: 'text-emerald-400' },
  };

  const { score, label, color, time } = strength;
  const colors = colorMap[color] || colorMap.gray;

  return (
    <div className="mt-4">
      {/* En-tête : label + valeur */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">{t('generator.strength')}</span>
        <span className={`text-xs font-semibold ${colors.text}`}>{label}</span>
      </div>

      {/* Barre 5 segments */}
      <div className="flex gap-[3px]">
        {[1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            className={`h-[6px] flex-1 rounded-full transition-colors duration-300 ${
              i <= score ? colors.bar : 'bg-[#1f2937]'
            }`}
          />
        ))}
      </div>

      {/* Temps estimé */}
      {time && time !== '—' && (
        <p className="text-xs text-gray-500 mt-1.5">
          {t('generator.crackTime')} : <span className="text-gray-400">{time}</span>
        </p>
      )}
    </div>
  );
}
