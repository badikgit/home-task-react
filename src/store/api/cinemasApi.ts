import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CinemaDto } from '../types';

export const cinemasApi = createApi({
  reducerPath: 'cinemasApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API}/api/cinemas` }),
  tagTypes: ['Cinema'],
  endpoints: (build) => ({
    getCinemas: build.query<CinemaDto[], null>({
      query: () => ({
        url: ``,
        method: 'GET',
      }),
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Cinema' as const, id })), { type: 'Cinema', id: 'LIST' }] : [{ type: 'Cinema', id: 'LIST' }],
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;
