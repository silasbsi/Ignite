/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";

const Avatar = ({ hasBorder = true, src }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
};

export default Avatar;
