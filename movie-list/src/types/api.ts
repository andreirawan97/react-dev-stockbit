// Based on http://www.omdbapi.com/

export type Rating = {
  Source: string;
  Value: string;
};

export type MovieType = "movie" | "series" | "episode";

export type MovieData = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster?: string;
};

export type MovieDetail = MovieData & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  Ratings: Array<Rating>;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type SearchResults = Array<MovieData>;

export type FetchSearchMovieData = {
  Search: SearchResults;
  totalResults: string;
  Response: string;
};

export type FetchMovieDetailData = MovieDetail;
