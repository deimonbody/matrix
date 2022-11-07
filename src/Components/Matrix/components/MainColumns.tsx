import React, { useEffect, useState } from 'react';
import { IMatrixElement } from '../../../common/interfaces';
import { getNearistIds, getSumOfRows } from '../../../helper/matrix.helper';
import { useMatrixActions } from '../../../store/hooks';
import { MatrixCell } from './MatrixCell';
import styles from '../style.module.scss';

interface IMainColumns {
  matrix:IMatrixElement[][];
  numOfCells:number;
  numbOfCols:number;
  numOfRows:number;
  setColumnsHandler:(val:number[][])=>void;
  setSumOfEveryRowsHandler:(val:number[])=>void;
  sumOfEveryRows:number[]
}

export const MainColumns:React.FC<IMainColumns> = ({
  matrix, numOfCells, numOfRows, numbOfCols, setColumnsHandler,
  setSumOfEveryRowsHandler, sumOfEveryRows,
}) => {
  const [activeSumIds, setActiveSumIds] = useState<string[]>([]);
  const [activeSum, setActiveSum] = useState(0);
  const [activeNearistIds, setActiveNearistIds] = useState<string[]>([]);
  const { deleteRow } = useMatrixActions();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (matrix && matrix.length) {
      const newColumns = [];
      for (let i = 0; i < numbOfCols; i += 1) {
        const column = [];
        for (let j = 0; j < numOfRows; j += 1) {
          column.push(matrix[j][i].amount);
        }
        newColumns.push(column);
      }
      setColumnsHandler(newColumns);
      setSumOfEveryRowsHandler(getSumOfRows(matrix));
      setIsLoading(false);
    }
  }, [numOfRows]);

  const mouseOverSumHandler = (idOfRow:number, totalSumOfRow:number) => {
    setActiveSum(totalSumOfRow);
    setActiveSumIds(matrix[idOfRow].map((el) => el.id));
  };
  const mouseOutSumHandler = () => {
    setActiveSumIds([]);
    setActiveSum(0);
  };

  const mouseOverNearistHandler = (amount:number) => {
    const result = getNearistIds(matrix, amount, numOfCells);
    setActiveNearistIds(result.map((el) => el.id));
  };
  const mouseOutNearistHandler = () => {
    setActiveNearistIds([]);
  };

  return (
    <>
      {!isLoading ? <>
        {
        matrix!.map((row, index) => (<div className={styles.matrixRow} key={index}>
          <div className={`${styles.matrixCell} ${styles.matrixCellInfo} ff-rob-bold`}>{index + 1}</div>
          {row.map((cellInfo) => (<MatrixCell
            id={cellInfo.id}
            amount={cellInfo.amount}
            isActiveCell={activeSumIds.includes(cellInfo.id)}
            isNearCell={activeNearistIds.includes(cellInfo.id)}
            mouseOverNearistHandler={mouseOverNearistHandler}
            mouseOutNearistHandler={mouseOutNearistHandler}
            activeSum={activeSum}
            key={cellInfo.id}
          />))}
          <div
            className={`${styles.matrixCell} ${styles.matrixСellTotal}`}
            onMouseOut={mouseOutSumHandler}
            onMouseOver={() => { mouseOverSumHandler(index, sumOfEveryRows[index]); }}
          >{sumOfEveryRows[index]}</div>
          <div
            className={`${styles.matrixCellDelete} ff-rob-bold`}
            onClick={() => deleteRow(index)}
          >x</div>
        </div>))
}
      </>
        : <div>loading...</div>}
    </>
  );
};
