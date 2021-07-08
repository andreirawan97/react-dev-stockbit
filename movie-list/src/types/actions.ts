import { MovieData } from "./api";

export type Action = {
  type: "SET_MOVIE_DATA";
  payload: Array<MovieData>;
};
