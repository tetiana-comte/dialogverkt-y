import { FC } from 'react';
import { Category } from '../types';

interface CategoryScoresProps {
  categories: Category[];
}

const CategoryScores: FC<CategoryScoresProps> = ({ categories }) => {
  const getCategoryColor = (index: number) => {
    switch (index) {
      case 0: return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 1: return 'bg-orange-50 border-orange-200 text-orange-700';
      case 2: return 'bg-blue-50 border-blue-200 text-blue-700';
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {categories.map((category, index) => (
        <div 
          key={category.name}
          className={`p-6 rounded-lg border ${getCategoryColor(index)}`}
        >
          <h4 className="text-lg font-semibold mb-2">{category.name}</h4>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold">{category.score}</span>
            <span className="text-sm opacity-75">/ {category.maxScore} poeng</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryScores;