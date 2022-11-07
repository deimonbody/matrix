import React from 'react';
import styles from '../style.module.scss';

interface IFirstRow {
  numberOfColumns:number
}
export const FirstRow:React.FC<IFirstRow> = ({ numberOfColumns }) => (
  <div className={styles.matrixRow}>
    <p className={`${styles.matrixCell} ${styles.matrixCellInfo} ff-rob-bold`}>№</p>
    {new Array(numberOfColumns).fill(null).map((_, index) => (<p
      className={`${styles.matrixCell} ${styles.matrixCellInfo} ff-rob-bold`}
      key={index}
    >{index + 1}</p>))}
    <p className={`${styles.matrixCell} ${styles.matrixCellInfo} ff-rob-bold`}>Sum</p>
  </div>
);
