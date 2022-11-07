import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { MainForm } from '../MainForm/MainForm';
import { Matrix } from '../Matrix/Matrix';
import styles from './style.module.scss';

export const App: React.FC = () => {
  const { matrix } = useAppSelector((store) => store.matrix);
  const [numberOfRows, setNumberOfRows] = useState(0);
  const [numberOfColumns, setNumberOfColumns] = useState(0);
  useEffect(() => {
    if (matrix?.length) {
      setNumberOfRows(matrix.length);
      setNumberOfColumns(matrix[0].length);
    }
  }, [matrix]);
  return (
    <div className={styles.app}>
      {matrix?.length && numberOfRows && numberOfColumns
        ? <Matrix matrix={matrix} numOfRows={numberOfRows} numbOfCols={numberOfColumns} />
        : <MainForm
            numberOfRows={numberOfRows}
            numberOfColumns={numberOfColumns}
            setNumberOfRows={setNumberOfRows}
            setNumberOfColumns={setNumberOfColumns}
        />}
    </div>
  );
};
