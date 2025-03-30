import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';
import quizReducer from './slices/quizSlice';
import leaderboardReducer from './slices/leaderboardSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    quiz: quizReducer,
    leaderboard: leaderboardReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 