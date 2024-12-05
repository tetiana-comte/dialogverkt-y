import { Answer } from '../types';

const STORAGE_KEY = 'survey_results';

export const saveAnswers = (answers: Answer[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
};

export const loadAnswers = (): Answer[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const clearAnswers = () => {
  localStorage.removeItem(STORAGE_KEY);
};