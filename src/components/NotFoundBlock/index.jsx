import React from 'react';
import styles from './NotFoundVlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h2>404 </h2>
      <p>YOU LOOK A LITTLE LOST</p>
      <p>SORRY, SOMETHING WENT WRONG.</p>
    </div>
  );
};

export default NotFoundBlock;
