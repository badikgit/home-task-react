import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import { cinemasApi, moviesApi, reviewsApi } from './api';
import { searchSlice } from '.';

const appReducer = combineReducers({
  [searchSlice.name]: searchSlice.reducer,
  [cinemasApi.reducerPath]: cinemasApi.reducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
});
export const setupStore = (preloadedState?: PreloadedState<AppState>) => {
  return configureStore({
    reducer: appReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cinemasApi.middleware, moviesApi.middleware, reviewsApi.middleware),
  });
};

export const store: AppStore = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;
