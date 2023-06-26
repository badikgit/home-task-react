export interface ReviewDto {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface SearchReviewsByMovieIdParams {
  movieId: string;
}
