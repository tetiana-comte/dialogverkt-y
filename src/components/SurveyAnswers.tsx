import { Answer } from '../types';
import { questions } from '../data/questions';

interface SurveyAnswersProps {
  answers: Answer[];
}

export default function SurveyAnswers({ answers }: SurveyAnswersProps) {
  const categories = [
    {
      name: 'Bærekraft',
      questions: questions.slice(0, 3),
      answers: answers.filter(a => questions.slice(0, 3).some(q => q.id === a.questionId))
    },
    {
      name: 'Skjønnhet',
      questions: questions.slice(3, 6),
      answers: answers.filter(a => questions.slice(3, 6).some(q => q.id === a.questionId))
    },
    {
      name: 'Fellesskap',
      questions: questions.slice(6, 9),
      answers: answers.filter(a => questions.slice(6, 9).some(q => q.id === a.questionId))
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-semibold mb-6">Dine svar</h2>
      
      {categories.map((category) => {
        const categoryScore = category.answers.reduce((sum, a) => sum + (a.value || 0), 0);
        const maxScore = category.questions.length * 3;

        return (
          <div key={category.name} className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <span className="text-gray-600 font-medium">
                {categoryScore} av {maxScore} poeng
              </span>
            </div>

            {category.questions.map((question) => {
              const answer = answers.find(a => a.questionId === question.id);
              
              if (!answer?.value) {
                return (
                  <div key={question.id} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">{question.title}</h4>
                    <p className="text-gray-500 italic">Ikke besvart</p>
                  </div>
                );
              }

              return (
                <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-2">{question.title}</h4>
                  <p className="text-gray-600 mb-4">{question.question}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="font-medium">Nivå {answer.value}</span>
                    </div>
                    <p className="text-gray-700">{question.levels[answer.value as 1 | 2 | 3]}</p>
                  </div>

                  {answer.comment && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">Din kommentar:</p>
                      <p className="text-gray-600">{answer.comment}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}