import React from 'react';
import { getRandomMatrix } from '../../../helper/matrix.helper';
import { useAppSelector, useMatrixActions } from '../../../store/hooks';

export const AddRowBtn = () => {
  const { numbOfCols } = useAppSelector((store) => store.matrix);
  const { addNewRow } = useMatrixActions();
  const addRowHandler = () => {
    const newRow = getRandomMatrix(1, numbOfCols);
    addNewRow(newRow[0]);
  };
  return (
    <button type="button" className="matrix__add-btn" onClick={addRowHandler}>AddRowBtn</button>
  );
};
