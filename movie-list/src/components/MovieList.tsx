import { css } from "@emotion/css";
import { HTMLAttributes } from "react";
import { colors } from "../constants/colors";

import { Row } from "../core-ui";
import { MovieData } from "../types/api";

type Props = {
  data: MovieData;
  onClickTitle?: () => void;
  onClickPoster?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export default function MovieList(props: Props) {
  const { data, className, onClickTitle, onClickPoster } = props;

  return (
    <Row {...props} className={`${styles.container} ${className}`}>
      <img
        className={styles.imagePoster}
        alt=""
        src={data.Poster}
        width={80}
        height={80}
        onClick={onClickPoster}
      />

      <Row className={styles.titleContainer} onClick={onClickTitle}>
        <p className={styles.title}>{data.Title}</p>
        <p className={styles.year}>({data.Year})</p>
      </Row>
    </Row>
  );
}

const styles = {
  container: css({
    marginBottom: 12,
  }),
  imagePoster: css({
    marginRight: 12,
  }),
  title: css({
    color: colors.slateBlue,
    fontWeight: "bold",
    marginRight: 4,
  }),
  year: css({
    color: colors.slateBlue,
  }),
  titleContainer: css({
    cursor: "pointer",
  }),
};
