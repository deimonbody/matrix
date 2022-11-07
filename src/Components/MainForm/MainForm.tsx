import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { getRandomMatrix } from '../../helper/matrix.helper';
import { useMatrixActions } from '../../store/hooks';
import styles from './style.module.scss';

interface IMainForm {
  numberOfRows:number;
  numberOfColumns:number;
  setNumberOfRows:React.Dispatch<React.SetStateAction<number>>
  setNumberOfColumns:React.Dispatch<React.SetStateAction<number>>
}

export const MainForm:React.FC<IMainForm> = ({
  numberOfRows, numberOfColumns, setNumberOfColumns, setNumberOfRows,
}) => {
  const { setMatrixAction, setCell } = useMatrixActions();
  const [numOfCells, setNumOfCells] = useState<number>(0);
  const [isNotVissible, setIsNotVissible] = useState(true);

  const hanlderChangeColumns = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfColumns(Number(e.target.value) > 0 ? Number(e.target.value) : 0);
  };
  const hanlderChangeRows = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfRows(Number(e.target.value) > 0 ? Number(e.target.value) : 0);
  };
  const hanlderChangeCells = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumOfCells(Number(e.target.value) > 0 ? Number(e.target.value) : 0);
  };

  useEffect(() => {
    if (numberOfColumns === 0 || numberOfRows === 0 || numOfCells === 0) setIsNotVissible(true);
    else setIsNotVissible(false);
  }, [numberOfColumns, numberOfRows, numOfCells]);

  const handleOnSubmit = () => {
    const matrix = getRandomMatrix(numberOfRows, numberOfColumns);
    setMatrixAction(matrix);
    setCell(numOfCells);
  };
  return (
    <div className={styles.mainForm}>
      <p className={`${styles.mainFormTitle} ff-rob-bold`}>Matrix Builder</p>
      <div>
        <div className={styles.mainFormInpContainer}>
          <p className={`${styles.mainFormInpLbl} ff-rob-reg`}>Enter the number of columns</p>
          <input className={styles.mainFormInp} type="number" value={numberOfColumns} onChange={hanlderChangeColumns} />
        </div>
        <div className={styles.mainFormInpContainer}>
          <p className={`${styles.mainFormInpLbl} ff-rob-reg`}>Enter the number of rows</p>
          <input className={styles.mainFormInp} type="number" value={numberOfRows} onChange={hanlderChangeRows} />
        </div>
        <div className={styles.mainFormInpContainer}>
          <p className={`${styles.mainFormInpLbl} ff-rob-reg`}>Enter the number of cells</p>
          <input className={styles.mainFormInp} type="number" value={numOfCells} onChange={hanlderChangeCells} />
        </div>

      </div>
      <button
        className={cx(styles.mainFormBtn, { [styles.mainFormBtnHidden]: isNotVissible })}
        type="button"
        onClick={handleOnSubmit}
      >Create matrix</button>
    </div>
  );
};
