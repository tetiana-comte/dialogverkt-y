import { FC } from 'react';

interface LevelDisplayProps {
  level: number;
  categoryIndex: number;
  description: string;
}

const LevelDisplay: FC<LevelDisplayProps> = ({ level, categoryIndex, description }) => {
  const getColorScheme = () => {
    switch (categoryIndex) {
      case 0: // Bærekraft
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          text: 'text-emerald-800',
          badge: 'bg-emerald-100 text-emerald-700'
        };
      case 1: // Skjønnhet
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-800',
          badge: 'bg-orange-100 text-orange-700'
        };
      case 2: // Fellesskap
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-800',
          badge: 'bg-blue-100 text-blue-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-800',
          badge: 'bg-gray-100 text-gray-700'
        };
    }
  };

  const colors = getColorScheme();

  return (
    <div className={`${colors.bg} border ${colors.border} rounded-lg p-4 mb-4`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}>
          Nivå {level}
        </span>
      </div>
      <p className={`${colors.text} text-sm leading-relaxed`}>{description}</p>
    </div>
  );
};

export default LevelDisplay;