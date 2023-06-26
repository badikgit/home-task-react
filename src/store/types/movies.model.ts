export interface MovieDto {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface SearchMoviesByCinemaIdParams {
  cinemaId: string;
}

export interface SearchMovieByMovieIdParams {
  movieId: string;
}
