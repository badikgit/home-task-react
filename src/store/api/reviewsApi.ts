import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReviewDto, SearchReviewsByMovieIdParams } from '../types';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API}/api/reviews` }),
  tagTypes: ['Review'],
  endpoints: (build) => ({
    getReviews: build.query<ReviewDto[], null>({
      query: () => ({
        url: ``,
        method: 'GET',
      }),
    }),
    getReviewsByMovieId: build.query<ReviewDto[], SearchReviewsByMovieIdParams>({
      query: ({ ...params }) => ({
        url: ``,
        method: 'GET',
        params,
      }),
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Review' as const, id })), { type: 'Review', id: 'LIST' }] : [{ type: 'Review', id: 'LIST' }],
    }),
  }),
});

export const { useGetReviewsQuery, useGetReviewsByMovieIdQuery } = reviewsApi;
