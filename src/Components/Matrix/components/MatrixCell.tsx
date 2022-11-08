import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { getPercentOfCell } from '../../../helper/matrix.helper';
import { useMatrixActions } from '../../../store/hooks';
import styles from '../style.module.scss';

interface IMatrixCell {
  id?:string;
  amount:number;
  isActiveCell:boolean;
  activeSum:number;
  isNearCell:boolean;
  mouseOverNearistHandler:(amount:number, id:string)=>void,
  mouseOutNearistHandler:()=>void;
}

export const MatrixCell:React.FC<IMatrixCell> = ({
  id, amount, isActiveCell,
  activeSum,
  isNearCell,
  mouseOverNearistHandler, mouseOutNearistHandler,
}) => {
  const { addAmount } = useMatrixActions();
  const [percent, setPercent] = useState('0');
  const [onHovered, setOnHovered] = useState(false);
  useEffect(() => {
    if (isActiveCell && amount) setPercent(getPercentOfCell(activeSum, amount));
  }, [activeSum, amount, isActiveCell]);

  useEffect(() => {
    if (onHovered) {
      mouseOutNearistHandler();
      mouseOverNearistHandler(amount, id as string);
    }
  }, [amount]);
  const clickHanlder = () => {
    addAmount(id as string);
  };
  const mouseOverHandler = () => {
    mouseOverNearistHandler(amount, id as string);
    setOnHovered(true);
  };
  const mouseOutHandler = () => {
    mouseOutNearistHandler();
    setOnHovered(false);
  };
  return (
    <>
      {isActiveCell
        ? <div className={`${styles.matrixCell} ${styles.matrixCellPercent}`}>
          {percent}%
          <div className={styles.matrixCellPercentBack} style={{ height: `${percent}%` }} />
        </div>
        : <div
            className={cx(styles.matrixCellPointer, styles.matrixCell, { [styles.matrixCellNear]: isNearCell })}
            onClick={clickHanlder}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
        >{amount}</div>}
    </>

  );
};
