import { IMatrixElement } from '../../common/interfaces';

export interface IState {
  matrix:IMatrixElement[][] | null;
  numOfCells:number;
  numOfRows:number;
  numbOfCols:number;
}

export enum MatrixActionTypes {
  SET_MATRIX = 'SET_MATRIX',
  SET_CELL = 'SET_CELL',
  ADD_AMOUT = 'ADD_AMOUT',
  SET_NUMBER_OF_ROWS = 'SET_NUMBER_OF_ROWS',
  SET_NUMBER_OF_COLS = 'SET_NUMBER_OF_COLS',
  ADD_NEW_ROW = 'ADD_NEW_ROW',
  DELET_ROW = 'DELETE_ROW',
}
export interface ISetMatrixAction {
  type:MatrixActionTypes.SET_MATRIX;
  payload:IMatrixElement[][]
}
export interface ISetCell {
  type:MatrixActionTypes.SET_CELL,
  payload:number
}
export interface IAddAmout {
  type:MatrixActionTypes.ADD_AMOUT,
  payload:string
}
export interface ISetNumberOfRows {
  type:MatrixActionTypes.SET_NUMBER_OF_ROWS;
  payload:number;
}
export interface ISetNumberOfCols {
  type:MatrixActionTypes.SET_NUMBER_OF_COLS;
  payload:number;
}
export interface IAddNewRow {
  type:MatrixActionTypes.ADD_NEW_ROW
  payload:IMatrixElement[]
}
export interface IDeleteRow {
  type:MatrixActionTypes.DELET_ROW,
  payload:number
}
export type MatrixAction = (ISetMatrixAction
| ISetCell | IAddAmout | ISetNumberOfRows | ISetNumberOfCols | IAddNewRow | IDeleteRow);
