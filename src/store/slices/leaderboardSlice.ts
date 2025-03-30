import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeaderboardEntry {
  id: string;
  username: string;
  score: number;
  rank: number;
  achievements: string[];
}

interface LeaderboardState {
  entries: LeaderboardEntry[];
  loading: boolean;
  error: string | null;
}

const initialState: LeaderboardState = {
  entries: [],
  loading: false,
  error: null,
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    setEntries: (state, action: PayloadAction<LeaderboardEntry[]>) => {
      state.entries = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addEntry: (state, action: PayloadAction<LeaderboardEntry>) => {
      state.entries.push(action.payload);
      // Sort entries by score in descending order
      state.entries.sort((a, b) => b.score - a.score);
      // Update ranks
      state.entries.forEach((entry, index) => {
        entry.rank = index + 1;
      });
    },
    updateEntry: (state, action: PayloadAction<LeaderboardEntry>) => {
      const index = state.entries.findIndex(entry => entry.id === action.payload.id);
      if (index !== -1) {
        state.entries[index] = action.payload;
        // Sort and update ranks
        state.entries.sort((a, b) => b.score - a.score);
        state.entries.forEach((entry, index) => {
          entry.rank = index + 1;
        });
      }
    },
  },
});

export const { setEntries, setLoading, setError, addEntry, updateEntry } = leaderboardSlice.actions;
export default leaderboardSlice.reducer; 