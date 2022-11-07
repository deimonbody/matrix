import React from 'react';
import { getAvarageOfColumn } from '../../../helper/matrix.helper';
import styles from '../style.module.scss';

interface IAvarageColumns {
  columns:number[][]
  sumOfEveryRows:number[]
}
export const AvarageColumns:React.FC<IAvarageColumns> = ({ columns, sumOfEveryRows }) => (
  <div className={styles.matrixRow}>
    <div className={`${styles.matrixCell} ${styles.matrixCellInfo} ff-rob-bold`}>Avg</div>
    {columns.map((row, index) => {
      const avg = getAvarageOfColumn(row);
      return (<div
        className={`${styles.matrixCell} ${styles.matrixСellTotal}`}
        key={index}
      >
        {avg || 0}</div>);
    })}
    <div className={`${styles.matrixCell} ${styles.matrixСellTotal}`}>{getAvarageOfColumn(sumOfEveryRows) || 0}</div>
  </div>
);
