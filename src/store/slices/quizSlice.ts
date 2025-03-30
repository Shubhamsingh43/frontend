import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  isQuizComplete: boolean;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isQuizComplete: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isQuizComplete = false;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isQuizComplete = true;
      }
    },
    updateScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isQuizComplete = false;
    },
  },
});

export const { setQuestions, nextQuestion, updateScore, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer; 