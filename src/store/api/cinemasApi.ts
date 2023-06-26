import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CinemaDto } from '../types';

export const cinemasApi = createApi({
  reducerPath: 'cinemasApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API}/api/cinemas` }),
  endpoints: (build) => ({
    getCinemas: build.query<CinemaDto[], null>({
      query: () => ({
        url: ``,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;
