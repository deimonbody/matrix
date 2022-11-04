import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { getPercentOfCell } from '../../../helper/matrix.helper';
import { useMatrixActions } from '../../../store/hooks';

interface IMatrixCell {
  id?:string;
  amount:number;
  isActiveCell:boolean;
  activeSum:number;
  isNearCell:boolean;
  mouseOverNearistHandler:(amount:number)=>void,
  mouseOutNearistHandler:()=>void
}

export const MatrixCell:React.FC<IMatrixCell> = ({
  id, amount, isActiveCell,
  activeSum,
  isNearCell,
  mouseOverNearistHandler, mouseOutNearistHandler,
}) => {
  const { addAmount } = useMatrixActions();
  const [percent, setPercent] = useState(0);
  const [onHovered, setOnHovered] = useState(false);
  useEffect(() => {
    if (isActiveCell && amount) setPercent(getPercentOfCell(activeSum, amount));
  }, [activeSum, amount, isActiveCell]);

  const clickHanlder = () => {
    if (onHovered) {
      mouseOutNearistHandler();
      mouseOverNearistHandler(amount);
    }
    addAmount(id as string);
  };
  const mouseOverHandler = () => {
    mouseOverNearistHandler(amount);
    setOnHovered(true);
  };
  const mouseOutHandler = () => {
    mouseOutNearistHandler();
    setOnHovered(false);
  };
  const cellClass = classNames('matrix__cell_pointer matrix__cell', { 'matrix__cell_near': isNearCell });
  return (
    <>
      {isActiveCell
        ? <div className="matrix__cell_percent matrix__cell">
          {percent}%
          <div className="matrix__cell_percent-back" style={{ height: `${percent}%` }} />
        </div>
        : <div
            className={cellClass}
            onClick={clickHanlder}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
        >{amount}</div>}
    </>

  );
};
