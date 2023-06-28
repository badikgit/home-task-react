import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDto } from '../types';

export type CartState = Record<string, MovieDto & { tickets: number }>;

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTicketInfo(state, { payload: newTicketInfo }: PayloadAction<MovieDto & { tickets: number }>): CartState {
      return {
        ...state,
        [`${newTicketInfo.id}`]: newTicketInfo,
      };
    },
    removeTicketbyId(state, { payload: ticketId }: PayloadAction<string>): CartState {
      const newState = { ...state };
      delete newState[ticketId];
      return { ...newState };
    },
  },
});

export const { setTicketInfo, removeTicketbyId } = cartSlice.actions;
