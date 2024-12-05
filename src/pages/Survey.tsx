import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { questions } from '../data/questions';
import Button from '../components/Button';
import { saveAnswers } from '../utils/storage';
import type { Answer } from '../App';

type Props = {
  answers: Answer[];
  setAnswers: (answers: Answer[]) => void;
};

export default function Survey({ answers, setAnswers }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const existingAnswer = answers.find(
      a => a.questionId === questions[currentQuestion].id
    );
    setComment(existingAnswer?.comment || '');
  }, [currentQuestion, answers]);

  const getBorderStyles = (isSelected: boolean) => {
    if (!isSelected) return 'border-gray-200 hover:border-gray-400';
    
    if (currentQuestion < 3) {
      return 'border-emerald-600 bg-emerald-50';
    } else if (currentQuestion < 6) {
      return 'border-orange-600 bg-orange-50';
    } else {
      return 'border-blue-600 bg-blue-50';
    }
  };

  const getRadioBorderStyles = (isSelected: boolean) => {
    if (!isSelected) return 'border-gray-300';
    
    if (currentQuestion < 3) {
      return 'border-emerald-600';
    } else if (currentQuestion < 6) {
      return 'border-orange-600';
    } else {
      return 'border-blue-600';
    }
  };

  const getRadioFillStyles = () => {
    if (currentQuestion < 3) {
      return 'bg-emerald-600';
    } else if (currentQuestion < 6) {
      return 'bg-orange-600';
    } else {
      return 'bg-blue-600';
    }
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = answers.findIndex(
      a => a.questionId === questions[currentQuestion].id
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = {
        ...newAnswers[existingAnswerIndex],
        value,
        comment
      };
    } else {
      newAnswers.push({
        questionId: questions[currentQuestion].id,
        value,
        comment
      });
    }

    setAnswers(newAnswers);
    saveAnswers(newAnswers);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    const existingAnswerIndex = answers.findIndex(
      a => a.questionId === questions[currentQuestion].id
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = {
        ...newAnswers[existingAnswerIndex],
        comment
      };
    } else if (comment.trim()) {
      newAnswers.push({
        questionId: questions[currentQuestion].id,
        value: 0,
        comment
      });
    }
    
    setAnswers(newAnswers);
    saveAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    const newAnswers = [...answers];
    const existingAnswerIndex = answers.findIndex(
      a => a.questionId === questions[currentQuestion].id
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = {
        ...newAnswers[existingAnswerIndex],
        comment
      };
    } else if (comment.trim()) {
      newAnswers.push({
        questionId: questions[currentQuestion].id,
        value: 0,
        comment
      });
    }

    setAnswers(newAnswers);
    saveAnswers(newAnswers);

    if (currentQuestion > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers.find(
    a => a.questionId === questions[currentQuestion].id
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{questions[currentQuestion].title}</h2>
          <p className="text-gray-600">{questions[currentQuestion].question}</p>
        </div>

        <div className="space-y-4 mb-8">
          {[1, 2, 3].map(level => (
            <div
              key={level}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                getBorderStyles(currentAnswer?.value === level)
              }`}
              onClick={() => handleAnswer(level)}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                    getRadioBorderStyles(currentAnswer?.value === level)
                  }`}
                >
                  {currentAnswer?.value === level && (
                    <div className={`h-2.5 w-2.5 rounded-full ${getRadioFillStyles()}`} />
                  )}
                </div>
                <span className="font-medium">Nivå {level}</span>
              </div>
              <p className="mt-2 text-gray-600 ml-8">
                {questions[currentQuestion].levels[level as 1 | 2 | 3]}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Utdyp etableringens grønne ambisjoner (valgfritt):
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
            placeholder="Beskriv dine ambisjoner her..."
          />
        </div>

        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="secondary"
            iconPosition="left"
            className={currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Forrige</span>
          </Button>
          <div className="text-sm text-gray-500">
            {currentQuestion + 1} av {questions.length}
          </div>
          <Button
            onClick={handleNext}
            variant="primary"
            iconPosition="right"
          >
            <span>{currentQuestion === questions.length - 1 ? 'Se resultater' : 'Neste'}</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}