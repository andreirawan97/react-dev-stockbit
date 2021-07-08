import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";

import { colors } from "../constants/colors";
import { SCENE_NAME } from "../constants/navigation";

export default function NotFoundScene() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <p
        className={styles.back}
        onClick={() => history.replace(SCENE_NAME.home)}
      >
        Go Back
      </p>
      <h1>404 Not Found!</h1>
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
};
