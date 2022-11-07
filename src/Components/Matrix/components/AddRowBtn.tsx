import React from 'react';
import { getRandomMatrix } from '../../../helper/matrix.helper';
import { useMatrixActions } from '../../../store/hooks';
import styles from '../style.module.scss';

interface IAddRowBtn {
  numbOfCols:number;
}

export const AddRowBtn:React.FC<IAddRowBtn> = ({ numbOfCols }) => {
  const { addNewRow } = useMatrixActions();
  const addRowHandler = () => {
    const newRow = getRandomMatrix(1, numbOfCols);
    addNewRow(newRow[0]);
  };
  return (
    <button type="button" className={styles.matrixAddBtn} onClick={addRowHandler}>AddRowBtn</button>
  );
};
