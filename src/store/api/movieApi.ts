import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieDto, SearchMovieByMovieIdParams } from '../types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API}/api/movie` }),
  endpoints: (build) => ({
    getMovieById: build.query<MovieDto, SearchMovieByMovieIdParams>({
      query: ({ ...params }) => ({
        url: ``,
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetMovieByIdQuery } = movieApi;
