import { FC } from 'react';

interface AmbitionScoreProps {
  level: string;
  percentage: number;
  bgColor: string;
  textColor: string;
  barColor: string;
}

const AmbitionScore: FC<AmbitionScoreProps> = ({ 
  level, 
  percentage, 
  bgColor, 
  textColor, 
  barColor 
}) => {
  return (
    <div className={`p-6 rounded-lg ${bgColor} ${textColor} mb-8`}>
      <h3 className="text-lg font-medium mb-2">Samlet ambisjonsnivå</h3>
      <p className="mb-4">
        Basert på dine svar har prosjektet {level.toLowerCase()} ({Math.round(percentage)}% score)
      </p>
      <div className="w-full bg-white rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: barColor
          }}
        ></div>
      </div>
    </div>
  );
};

export default AmbitionScore;