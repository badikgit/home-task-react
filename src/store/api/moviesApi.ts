import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieDto, SearchMoviesByCinemaIdParams } from '../types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API}/api/movies` }),
  endpoints: (build) => ({
    getMovies: build.query<MovieDto[], null>({
      query: () => ({
        url: ``,
        method: 'GET',
      }),
    }),
    getMoviesByCinemaId: build.query<MovieDto[], Partial<SearchMoviesByCinemaIdParams>>({
      query: ({ ...params }) => ({
        url: ``,
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMoviesByCinemaIdQuery } = moviesApi;
