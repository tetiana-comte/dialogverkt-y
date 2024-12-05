import { FC } from 'react';
import LevelDisplay from './LevelDisplay';
import { Question } from '../types';

interface QuestionResultProps {
  question: Question;
  answer: {
    value: number;
    comment: string;
  };
  categoryIndex: number;
}

const QuestionResult: FC<QuestionResultProps> = ({ question, answer, categoryIndex }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h4 className="text-lg font-semibold mb-4">{question.title}</h4>
      <p className="text-gray-600 mb-4">{question.question}</p>
      
      {answer.value > 0 ? (
        <LevelDisplay
          level={answer.value}
          categoryIndex={categoryIndex}
          description={question.levels[answer.value as 1 | 2 | 3]}
        />
      ) : (
        <p className="text-gray-500 italic mb-4">Ikke besvart</p>
      )}
      
      {answer.comment && (
        <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200">
          <p className="font-medium text-gray-900 mb-2">Din kommentar:</p>
          <p className="text-gray-600">{answer.comment}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionResult;