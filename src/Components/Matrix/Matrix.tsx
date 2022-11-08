import React, { useState } from 'react';
import { IMatrixElement } from '../../common/interfaces';
import { useAppSelector } from '../../store/hooks';
import { AddRowBtn } from './components/AddRowBtn';
import { AvarageColumns } from './components/AvarageColumns';
import { FirstRow } from './components/FirstRow';
import { MainColumns } from './components/MainColumns';
import styles from './style.module.scss';

interface IMatrix {
  matrix:IMatrixElement[][];
  numOfRows:number;
  numbOfCols:number;
  deleteRowHandler:()=>void;
}

export const Matrix:React.FC<IMatrix> = ({
  matrix, numOfRows, numbOfCols, deleteRowHandler,
}) => {
  const [columns, setColumns] = useState<number[][]>([]);
  const { numOfCells } = useAppSelector((store) => store.matrix);
  const [sumOfEveryRows, setSumOfEveryRows] = useState<number[]>([]);
  const setColumnsHandler = (val:number[][]) => {
    setColumns(val);
  };
  const setSumOfEveryRowsHandler = (val:number[]) => {
    setSumOfEveryRows(val);
  };
  return (
    <>
      <AddRowBtn numbOfCols={numbOfCols} />
      <div className={styles.matrix}>
        <FirstRow numberOfColumns={numbOfCols} />
        <MainColumns
          matrix={matrix as IMatrixElement[][]}
          numOfCells={numOfCells}
          numOfRows={numOfRows}
          numbOfCols={numbOfCols}
          sumOfEveryRows={sumOfEveryRows}
          setSumOfEveryRowsHandler={setSumOfEveryRowsHandler}
          setColumnsHandler={setColumnsHandler}
          deleteRowHandler={deleteRowHandler}
        />
        <AvarageColumns columns={columns} sumOfEveryRows={sumOfEveryRows} />
      </div>
    </>

  );
};
