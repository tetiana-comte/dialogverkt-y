import { FC } from 'react';
import QuestionResult from './QuestionResult';
import { questions } from '../data/questions';
import { Category } from '../types';

interface CategoryResultsProps {
  category: Category;
  categoryIndex: number;
}

const CategoryResults: FC<CategoryResultsProps> = ({ category, categoryIndex }) => {
  const getCategoryColor = () => {
    switch (categoryIndex) {
      case 0: return 'border-emerald-200';
      case 1: return 'border-orange-200';
      case 2: return 'border-blue-200';
      default: return 'border-gray-200';
    }
  };

  return (
    <div className={`border-t ${getCategoryColor()} pt-8`}>
      <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
      <p className="text-gray-600 mb-6">
        Score: {category.score} av {category.maxScore} poeng
      </p>
      <div className="space-y-8">
        {category.answers.map((answer) => {
          const question = questions.find(q => q.questionId === answer.questionId);
          if (!question) return null;

          return (
            <QuestionResult
              key={answer.questionId}
              question={question}
              answer={answer}
              categoryIndex={categoryIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryResults;