import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Option {
  label: string;
  value: string;
}

export interface SearchState {
  cinema: Option;
  genre: Option;
  title: string;
}

const initialState: SearchState = {
  cinema: { value: 'null', label: 'Не выбран' },
  genre: { value: 'null', label: 'Не выбран' },
  title: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCinema(state, { payload: newCinema }: PayloadAction<Option>): SearchState {
      return {
        ...state,
        cinema: newCinema,
      };
    },
    setGenre(state, { payload: newGenre }: PayloadAction<Option>): SearchState {
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

export const { setCinema, setGenre, setTitle } = searchSlice.actions;
