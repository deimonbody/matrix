import { IMatrixElement } from '../../common/interfaces';
import {
  ISetCell, ISetMatrixAction, MatrixActionTypes,
  IAddAmout, ISetNumberOfCols, ISetNumberOfRows, IAddNewRow, IDeleteRow,
} from './common';

export const setMatrixAction = (matrix:IMatrixElement[][]):ISetMatrixAction => ({
  type: MatrixActionTypes.SET_MATRIX,
  payload: matrix,
});

export const setCell = (val:number):ISetCell => ({
  type: MatrixActionTypes.SET_CELL,
  payload: val,
});

export const addAmount = (id:string):IAddAmout => ({
  type: MatrixActionTypes.ADD_AMOUT,
  payload: id,
});

export const setNumberOfRow = (num:number):ISetNumberOfRows => ({
  type: MatrixActionTypes.SET_NUMBER_OF_ROWS,
  payload: num,
});

export const setNumberOfCols = (num:number):ISetNumberOfCols => ({
  type: MatrixActionTypes.SET_NUMBER_OF_COLS,
  payload: num,
});
export const addNewRow = (newRow:IMatrixElement[]):IAddNewRow => ({
  type: MatrixActionTypes.ADD_NEW_ROW,
  payload: newRow,
});
export const deleteRow = (rowId:number):IDeleteRow => ({
  type: MatrixActionTypes.DELET_ROW,
  payload: rowId,
});
