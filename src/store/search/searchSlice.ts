import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GenreType } from '../types';

export interface SearchState {
  genre: GenreType | null;
  title: string;
}

const initialState: SearchState = {
  genre: null,
  title: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setGenre(state, { payload: newGenre }: PayloadAction<GenreType>): SearchState {
      return {
        ...state,
        genre: newGenre,
      };
    },
    setTitle(state, { payload: newTitle }: PayloadAction<string>): SearchState {
      return {
        ...state,
        title: newTitle,
      };
    },
  },
});

export const { setGenre, setTitle } = searchSlice.actions;
