import { FC } from 'react';
import RadarChart from './RadarChart';
import { Category } from '../types';

export function getAmbitionColor(score: number, maxScore: number) {
  const percentage = (score / maxScore) * 100;
  
  if (percentage <= 18.5) {
    return {
      level: 'Svært få ambisjoner',
      color: 'red',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      barColor: '#EF4444'
    };
  } else if (percentage <= 33.3) {
    return {
      level: 'Få ambisjoner',
      color: 'orange',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      barColor: '#F97316'
    };
  } else if (percentage <= 51.8) {
    return {
      level: 'Noen ambisjoner',
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      barColor: '#EAB308'
    };
  } else if (percentage <= 66.7) {
    return {
      level: 'Ganske høye ambisjoner',
      color: 'blue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      barColor: '#3B82F6'
    };
  } else if (percentage <= 81.5) {
    return {
      level: 'Veldig høye ambisjoner',
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      barColor: '#6366F1'
    };
  } else {
    return {
      level: 'Ekstremt høye ambisjoner',
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      barColor: '#10B981'
    };
  }
}

interface DetailedOverviewProps {
  categories: Category[];
}

export const DetailedOverview: FC<DetailedOverviewProps> = ({ categories }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Detaljert oversikt</h3>
      <RadarChart categories={categories} />
      <div className="mt-4 flex items-center justify-center">
        <p className="text-sm bg-red-50 text-red-700 px-4 py-2 rounded-lg">
          Merk: Det røde området indikerer lav ambisjon
        </p>
      </div>
    </div>
  );
};