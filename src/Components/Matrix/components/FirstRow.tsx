import React, { useEffect, useState } from 'react';

interface IFirstRow {
  numberOfColumns:number
}
export const FirstRow:React.FC<IFirstRow> = ({ numberOfColumns }) => {
  const [counter, setCounter] = useState<number>(0);
  const [numbersOfColumns, setNumberOfColumns] = useState<number[]>([]);
  useEffect(() => {
    setCounter(numberOfColumns);
  }, [numberOfColumns]);
  useEffect(() => {
    if (counter) {
      let iterator = counter;
      const result = [];
      while (iterator > 0) {
        result.push(iterator);
        iterator -= 1;
      }
      setNumberOfColumns(result.reverse());
    }
  }, [counter]);
  return (
    <div className="matrix__row">
      <p className="matrix__cell matrix__cell_info ff-rob-bold">№</p>
      {numbersOfColumns.map((number, index) => <p className="matrix__cell matrix__cell_info ff-rob-bold" key={index}>{number}</p>)}
      <p className="matrix__cell matrix__cell_info ff-rob-bold">Sum</p>
    </div>
  );
};
