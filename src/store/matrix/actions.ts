import { IMatrixElement } from '../../common/interfaces';
import {
  ISetCell, ISetMatrixAction, MatrixActionTypes,
  IAddAmout, IAddNewRow, IDeleteRow,
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
export const addNewRow = (newRow:IMatrixElement[]):IAddNewRow => ({
  type: MatrixActionTypes.ADD_NEW_ROW,
  payload: newRow,
});
export const deleteRow = (rowId:number):IDeleteRow => ({
  type: MatrixActionTypes.DELET_ROW,
  payload: rowId,
});
