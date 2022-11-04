import React from 'react';
import { getAvarageOfColumn } from '../../../helper/matrix.helper';

interface IAvarageColumns {
  columns:number[][]
  sumOfEveryRows:number[]
}
export const AvarageColumns:React.FC<IAvarageColumns> = ({ columns, sumOfEveryRows }) => (
  <div className="matrix__row">
    <div className="matrix__cell matrix__cell_info ff-rob-bold">Avg</div>
    {columns.map((row, index) => {
      const avg = getAvarageOfColumn(row);
      return (<div className="matrix__cell matrix__cell-total" key={index}>{avg || 0}</div>);
    })}
    <div className="matrix__cell matrix__cell-total">{getAvarageOfColumn(sumOfEveryRows) || 0}</div>
  </div>
);
