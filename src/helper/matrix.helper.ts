import { v4 as uuidv4 } from 'uuid';
import { IMatrixElement } from '../common/interfaces';

export const getRandomMatrix = (m:number, n:number):IMatrixElement[][] => {
  const matrix = [];
  for (let i = 0; i < m; i += 1) {
    const row = [];
    for (let j = 0; j < n; j += 1) {
      const randomNumber = Math.floor(Math.random() * (999 - 100) + 100);
      row.push(randomNumber);
    }
    matrix.push(row);
  }
  return matrix.map((row) => row.map((amount) => ({
    id: uuidv4(),
    amount,
  })));
};
export const getSumOfRows = (matrix:IMatrixElement[][]) => matrix.map((row) => {
  const numbers = row.map((el) => el.amount);
  return numbers.reduce((prev, next) => prev + next, 0);
});

export const getAvarageOfColumn = (column:number[]) => (
  Math.floor(column.reduce((prev, next) => prev + next, 0) / column.length)
);

export const getPercentOfCell = (totalSum:number, amount:number) => (((amount * 100) / totalSum)).toFixed(1);
export const getNearistIds = (matrix:IMatrixElement[][], findNumber:number, idOfFindNumber:string, numberOfCell:number) => {
  let allItems:IMatrixElement[] = [];
  matrix.forEach((row) => {
    row.forEach((cell) => {
      allItems.push(cell);
    });
  });
  allItems = allItems.filter((cell) => cell.id !== idOfFindNumber);
  const biggerNumbers = allItems.filter((el) => el.amount >= findNumber);
  const lessNumbers = allItems.filter((el) => el.amount < findNumber);
  biggerNumbers.sort((a, b) => a.amount - b.amount);
  lessNumbers.sort((a, b) => b.amount - a.amount);
  let iterator = numberOfCell;
  const result = [];
  while (iterator > 0) {
    iterator -= 1;
    if (!biggerNumbers.length && !lessNumbers.length) break;
    if (!biggerNumbers.length) {
      result.push(lessNumbers.pop());
      continue;
    }
    if (!lessNumbers.length) {
      result.push(biggerNumbers.shift());
      continue;
    }
    const firstLessEl = lessNumbers[0];
    const firstBiggerEl = biggerNumbers[0];
    if ((findNumber - firstLessEl.amount) < (firstBiggerEl.amount - findNumber)) {
      result.push(firstLessEl);
      lessNumbers.shift();
    } else {
      result.push(firstBiggerEl);
      biggerNumbers.shift();
    }
  }
  return result;
};
