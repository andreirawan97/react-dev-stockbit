import { css } from "@emotion/css";
import { ChangeEvent, HTMLAttributes } from "react";

import { colors } from "../constants/colors";

import "./TextInput.css";

type Props = {
  value?: string;
  onChangeText?: (value: string) => void;
  containerClassName?: string;
} & HTMLAttributes<HTMLInputElement>;

export default function TextInput(props: Props) {
  const { value, onChangeText, className, containerClassName } = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText && onChangeText(e.target.value);
  };

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <input
        {...props}
        value={value}
        onChange={onChange}
        className={`text-field ${styles.inputContainer} ${className}`}
      />
    </div>
  );
}

const styles = {
  inputContainer: css({
    width: "100%",
  }),
  container: css({
    backgroundColor: colors.lightGrey,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 12,
  }),
};
