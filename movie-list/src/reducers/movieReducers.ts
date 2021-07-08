import { Action } from "../types/actions";
import { MovieState } from "../types/state";

const defaultMovieState: MovieState = {
  movieData: [],
};

export const movieReducers = (state = defaultMovieState, action: Action) => {
  switch (action.type) {
    case "SET_MOVIE_DATA": {
      return {
        ...state,
        movieData: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
