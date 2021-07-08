import { Action } from "../types/actions";
import { MovieData } from "../types/api";

export const setMovieData = (payload: Array<MovieData>): Action => {
  return {
    type: "SET_MOVIE_DATA",
    payload,
  };
};

export const getMovieData = (): Action => {
  return {
    type: "GET_MOVIE_DATA",
  };
};
