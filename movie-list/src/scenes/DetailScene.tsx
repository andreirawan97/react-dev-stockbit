import { css } from "@emotion/css";
import { useHistory, useParams } from "react-router-dom";

import { API_URL } from "../constants/api";
import { colors } from "../constants/colors";
import { SCENE_NAME } from "../constants/navigation";
import { Row } from "../core-ui";
import useFetch from "../helpers/useFetch";
import { FetchMovieDetailData } from "../types/api";
import { MovieDetailParam } from "../types/navigation";

export default function DetailScene() {
  const { searchQuery } = useParams<MovieDetailParam>();
  const history = useHistory();

  const { data, loading } = useFetch<FetchMovieDetailData>({
    url: `${API_URL}&i=${searchQuery}`,
  });

  return (
    <div className={styles.container}>
      <p
        className={styles.back}
        onClick={() => history.replace(SCENE_NAME.home)}
      >
        Go Back
      </p>

      {loading && <p>Loading...</p>}
      {data && (
        <div>
          {" "}
          <Row>
            <img
              className={styles.imagePoster}
              alt=""
              src={data?.Poster}
              width={180}
              height={270}
            />

            <div>
              <p className={styles.title}>
                {data?.Title} ({data?.Year})
              </p>
              <p>{data?.Genre}</p>
              <p>Language: {data?.Language}</p>
            </div>
          </Row>
          <p>{data?.Plot}</p>
          <p>Actors: {data?.Actors}</p>
          {data?.Ratings && (
            <div>
              <br />
              <p>Ratings: </p>
              {data.Ratings.map((rating) => (
                <p>
                  {rating.Source} - {rating.Value}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: css({
    padding: 12,
  }),
  back: css({
    cursor: "pointer",
    color: colors.slateBlue,
    fontSize: 20,
    fontWeight: "bold",
  }),
  imagePoster: css({
    marginRight: 12,
  }),
  title: css({
    fontWeight: "bold",
    fontSize: 20,
  }),
};
