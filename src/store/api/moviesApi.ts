import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieDto, SearchMovieByMovieIdParams, SearchMoviesByCinemaIdParams } from '../types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API}/api` }),
  endpoints: (build) => ({
    getMovies: build.query<MovieDto[], null>({
      query: () => ({
        url: `/movies`,
        method: 'GET',
      }),
    }),
    getMoviesByCinemaId: build.query<MovieDto[], Partial<SearchMoviesByCinemaIdParams>>({
      query: ({ ...params }) => ({
        url: `/movies`,
        method: 'GET',
        params,
      }),
    }),
    getMovieById: build.query<MovieDto, SearchMovieByMovieIdParams>({
      query: ({ ...params }) => ({
        url: `/movie`,
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMoviesByCinemaIdQuery, useGetMovieByIdQuery } = moviesApi;
