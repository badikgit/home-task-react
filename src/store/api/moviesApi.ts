import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieDto, SearchMoviesByCinemaIdParams, SearchMovieByMovieIdParams } from '../types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API}/api` }),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    getMovies: build.query<MovieDto[], null>({
      query: () => ({
        url: `/movies`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Movie' as const, id })), { type: 'Movie', id: 'LIST' }] : [{ type: 'Movie', id: 'LIST' }],
    }),
    getMoviesByCinemaId: build.query<MovieDto[], Partial<SearchMoviesByCinemaIdParams>>({
      query: ({ ...params }) => ({
        url: `/movies`,
        method: 'GET',
        params,
      }),
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Movie' as const, id })), { type: 'Movie', id: 'LIST' }] : [{ type: 'Movie', id: 'LIST' }],
    }),
    getMovieById: build.query<MovieDto, SearchMovieByMovieIdParams>({
      query: ({ ...params }) => ({
        url: `/movie`,
        method: 'GET',
        params,
      }),
      providesTags: (result) => (result ? [{ type: 'Movie' as const, id: result.id }, 'Movie'] : ['Movie']),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMoviesByCinemaIdQuery, useGetMovieByIdQuery } = moviesApi;
