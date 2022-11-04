import React, { useState } from 'react';
import { IMatrixElement } from '../../common/interfaces';
import { useAppSelector } from '../../store/hooks';
import { AddRowBtn } from './components/AddRowBtn';
import { AvarageColumns } from './components/AvarageColumns';
import { FirstRow } from './components/FirstRow';
import { MainColumns } from './components/MainColumns';
import './style.scss';

interface IMatrix {
  matrix:IMatrixElement[][]
}

export const Matrix:React.FC<IMatrix> = ({ matrix }) => {
  const [columns, setColumns] = useState<number[][]>([]);
  const {
    numbOfCols, numOfRows, numOfCells,
  } = useAppSelector((store) => store.matrix);
  const [sumOfEveryRows, setSumOfEveryRows] = useState<number[]>([]);
  const setColumnsHandler = (val:number[][]) => {
    setColumns(val);
  };
  const setSumOfEveryRowsHandler = (val:number[]) => {
    setSumOfEveryRows(val);
  };
  return (
    <>
      <AddRowBtn />
      <div className="matrix">
        <FirstRow numberOfColumns={numbOfCols} />
        <MainColumns
          matrix={matrix as IMatrixElement[][]}
          numOfCells={numOfCells}
          numOfRows={numOfRows}
          numbOfCols={numbOfCols}
          sumOfEveryRows={sumOfEveryRows}
          setSumOfEveryRowsHandler={setSumOfEveryRowsHandler}
          setColumnsHandler={setColumnsHandler}
        />
        <AvarageColumns columns={columns} sumOfEveryRows={sumOfEveryRows} />
      </div>
    </>

  );
};
