import { css } from "@emotion/css";
import { Dispatch, useCallback, useEffect, useRef, useState } from "react";

import { TextInput, Button, MovieList, Modal } from "../components";
import { API_URL } from "../constants/api";
import { Row } from "../core-ui";
import { FetchSearchMovieData, MovieData } from "../types/api";
import useLazyFetch from "../helpers/useLazyFetch";
import { useHistory } from "react-router-dom";
import { SCENE_NAME } from "../constants/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MovieState } from "../types/state";
import { Action } from "../types/actions";

const TOTAL_PAGES = 10;

export default function HomeScene() {
  const observer = useRef();
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<Action>>();

  const movieData = useSelector<MovieState, MovieState["movieData"]>(
    (state) => state.movieData
  );
  const setMovieData = (movieData: Array<MovieData>) => {
    dispatch({
      type: "SET_MOVIE_DATA",
      payload: movieData,
    });
  };

  const [movieName, setMovieName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedMoviePoster, setSelectedMoviePoster] = useState("");
  const [showMoviePosterModal, setMoviePosterModal] = useState(false);

  const {
    fetchData: fetchSearchMovie,
    data: searchMovieData,
    loading,
  } = useLazyFetch<FetchSearchMovieData>();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      // @ts-ignore
      if (observer.current) observer.current.disconnect();

      // @ts-ignore
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (currentPage < TOTAL_PAGES) {
            fetchSearchMovie({
              url: `${API_URL}&s=${movieName}&page=${currentPage + 1}`,
            });
            setCurrentPage((currentPage) => currentPage + 1);
          } else {
            setHasMore(false);
          }
        }
      });

      // @ts-ignore
      if (node) observer.current.observe(node);
    },
    // Can cause inf render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, hasMore]
  );

  useEffect(() => {
    if (searchMovieData?.Search) {
      setMovieData([...movieData, ...searchMovieData.Search]);
    }
    // Can cause inf render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMovieData]);

  useEffect(() => {
    if (selectedMoviePoster) {
      setMoviePosterModal(true);
    }
  }, [selectedMoviePoster]);

  const searchMovie = () => {
    setMovieData([]);
    fetchSearchMovie({
      url: `${API_URL}&s=${movieName}&page=${currentPage}`,
    });
  };

  const onClickTitle = (data: MovieData) => {
    history.replace(`${SCENE_NAME.detail}${data.imdbID}`);
  };

  const onClickPoster = (data: MovieData) => {
    setSelectedMoviePoster(data.Poster ?? "");
  };

  return (
    <div
      className={
        showMoviePosterModal ? styles.containerOverflowHidden : styles.container
      }
    >
      <h1>Hello! 👋</h1>

      <Row className={styles.searchBarContainer}>
        <TextInput
          placeholder="Enter movie name..."
          value={movieName}
          onChangeText={setMovieName}
          containerClassName={styles.searchContainer}
        />
        <Button title="Search" onPress={searchMovie} />
      </Row>

      {movieData &&
        movieData.length > 0 &&
        movieData.map((data, i) =>
          i + 1 === movieData.length ? (
            <div ref={lastItemRef} key={i}>
              <MovieList
                data={data}
                onClickPoster={() => onClickPoster(data)}
                onClickTitle={() => onClickTitle(data)}
              />
            </div>
          ) : (
            <div key={i}>
              <MovieList
                data={data}
                onClickPoster={() => onClickPoster(data)}
                onClickTitle={() => onClickTitle(data)}
              />
            </div>
          )
        )}

      <Modal
        isShown={showMoviePosterModal}
        onDismiss={setMoviePosterModal}
        content={() => <img alt="" src={selectedMoviePoster} />}
      />
    </div>
  );
}

const styles = {
  container: css({
    padding: 12,
  }),
  containerOverflowHidden: css({
    padding: 12,
    height: "100vh",
    overflow: "hidden",
  }),
  searchContainer: css({
    marginRight: 12,
    width: 240,
  }),
  searchBarContainer: css({
    marginBottom: 32,
  }),
};
