import { Answer, Category } from '../types';
import { questions } from '../data/questions';

export function calculateCategories(answers: Answer[]): Category[] {
  return [
    {
      name: 'Bærekraft',
      answers: questions.slice(0, 3).map(q => {
        const answer = answers.find(a => a.questionId === q.id);
        return answer || { questionId: q.id, value: 0, comment: '' };
      }),
      score: questions.slice(0, 3).reduce((sum, q) => {
        const answer = answers.find(a => a.questionId === q.id);
        return sum + (answer?.value || 0);
      }, 0),
      maxScore: 9
    },
    {
      name: 'Skjønnhet',
      answers: questions.slice(3, 6).map(q => {
        const answer = answers.find(a => a.questionId === q.id);
        return answer || { questionId: q.id, value: 0, comment: '' };
      }),
      score: questions.slice(3, 6).reduce((sum, q) => {
        const answer = answers.find(a => a.questionId === q.id);
        return sum + (answer?.value || 0);
      }, 0),
      maxScore: 9
    },
    {
      name: 'Fellesskap',
      answers: questions.slice(6, 9).map(q => {
        const answer = answers.find(a => a.questionId === q.id);
        return answer || { questionId: q.id, value: 0, comment: '' };
      }),
      score: questions.slice(6, 9).reduce((sum, q) => {
        const answer = answers.find(a => a.questionId === q.id);
        return sum + (answer?.value || 0);
      }, 0),
      maxScore: 9
    }
  ];
}