import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { getRandomMatrix } from '../../helper/matrix.helper';
import { useMatrixActions } from '../../store/hooks';
import './style.scss';

export const MainForm:React.FC = () => {
  const {
    setMatrixAction, setCell, setNumberOfCols, setNumberOfRow,
  } = useMatrixActions();
  const [numOfColumns, setNumOfColumns] = useState<number>(0);
  const [numOfRows, setNumOfRows] = useState<number>(0);
  const [numOfCells, setNumOfCells] = useState<number>(0);
  const [isNotVissible, setIsNotVissible] = useState(true);

  const hanlderChangeColumns = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumOfColumns(Number(e.target.value) > 0 ? Number(e.target.value) : 0);
  };
  const hanlderChangeRows = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumOfRows(Number(e.target.value) > 0 ? Number(e.target.value) : 0);
  };
  const hanlderChangeCells = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumOfCells(Number(e.target.value) > 0 ? Number(e.target.value) : 0);
  };

  useEffect(() => {
    if (numOfColumns === 0 || numOfRows === 0 || numOfCells === 0) setIsNotVissible(true);
    else setIsNotVissible(false);
  }, [numOfColumns, numOfRows, numOfCells]);

  const handleOnSubmit = () => {
    const matrix = getRandomMatrix(numOfRows, numOfColumns);
    setMatrixAction(matrix);
    setCell(numOfCells);
    setNumberOfCols(numOfColumns);
    setNumberOfRow(numOfRows);
  };
  const btnClass = classNames('main-form__btn', { 'main-form__btn_hidden': isNotVissible });
  return (
    <div className="main-form">
      <p className="main-form__title ff-rob-bold">Matrix Builder</p>
      <div className="main-form__container">
        <div className="main-form__inp-container">
          <p className="main-form__inp-lbl ff-rob-reg">Enter the number of columns</p>
          <input className="main-form__inp" type="number" value={numOfColumns} onChange={hanlderChangeColumns} />
        </div>
        <div className="main-form__inp-container">
          <p className="main-form__inp-lbl ff-rob-reg">Enter the number of rows</p>
          <input className="main-form__inp" type="number" value={numOfRows} onChange={hanlderChangeRows} />
        </div>
        <div className="main-form__inp-container">
          <p className="main-form__inp-lbl ff-rob-reg">Enter the number of cells</p>
          <input className="main-form__inp" type="number" value={numOfCells} onChange={hanlderChangeCells} />
        </div>

      </div>
      <button className={btnClass} type="button" onClick={handleOnSubmit}>Create matrix</button>
    </div>
  );
};
