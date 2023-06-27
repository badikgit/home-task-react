export interface MovieDto {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: GenreType;
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

export const Genre: Record<GenreType, string | undefined> = {
  action: 'Боевик',
  comedy: 'Комедия',
  horror: 'Ужасы',
  fantasy: 'Фэнтези',
  null: undefined,
};

export type GenreType = 'action' | 'comedy' | 'horror' | 'fantasy' | 'null';
