import React from 'react';
import styles from './Avatar.module.css';

export const Avatar = ({ hasBorder = true, src }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWhithBorder : styles.avatar}
      src={src}
    />
  );
};
