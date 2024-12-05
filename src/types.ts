export interface Answer {
  questionId: string;
  value: number;
  comment: string;
}

export interface Question {
  id: string;
  title: string;
  question: string;
  levels: {
    [key: number]: string;
  };
}

export interface Category {
  name: string;
  answers: Answer[];
  score: number;
  maxScore: number;
}