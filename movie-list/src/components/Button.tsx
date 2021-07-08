import { css } from "@emotion/css";
import { colors } from "../constants/colors";

type Props = {
  title: string;
  onPress?: () => void;
};

export default function Button(props: Props) {
  const { onPress, title } = props;

  return (
    <div className={styles.container} onClick={onPress}>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

const styles = {
  container: css({
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.slateBlue,
    borderRadius: 12,
    cursor: "pointer",
  }),
  title: css({
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  }),
};
