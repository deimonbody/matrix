import { IMatrixElement } from '../../common/interfaces';
import {
  MatrixAction, IState, MatrixActionTypes,
} from './common';

const initialState:IState = {
  matrix: null,
  numOfCells: 0,
  numOfRows: 0,
  numbOfCols: 0,
};

export const matrixReducer = (state = initialState, action:MatrixAction):IState => {
  switch (action.type) {
    case (MatrixActionTypes.SET_MATRIX): {
      return {
        ...state,
        matrix: action.payload,
      };
    }
    case (MatrixActionTypes.SET_CELL): {
      return {
        ...state,
        numOfCells: action.payload,
      };
    }
    case (MatrixActionTypes.ADD_AMOUT): {
      const newMatrix = state.matrix?.map((row) => row.map((cell) => ({
        id: cell.id,
        amount: cell.id === action.payload ? cell.amount + 1 : cell.amount,
      }))) as IMatrixElement[][];
      return {
        ...state,
        matrix: newMatrix,
      };
    }
    case (MatrixActionTypes.SET_NUMBER_OF_COLS): {
      return {
        ...state,
        numbOfCols: action.payload,
      };
    }
    case (MatrixActionTypes.SET_NUMBER_OF_ROWS): {
      return {
        ...state,
        numOfRows: action.payload,
      };
    }
    case (MatrixActionTypes.ADD_NEW_ROW): {
      const newMatrix = [...state.matrix!];
      newMatrix.push(action.payload);
      return {
        ...state,
        matrix: newMatrix,
        numOfRows: state.numOfRows + 1,
      };
    }
    case (MatrixActionTypes.DELET_ROW): {
      const newMatrix = [...state.matrix!];
      newMatrix.splice(action.payload, 1);
      return {
        ...state,
        matrix: newMatrix,
        numOfRows: state.numOfRows - 1,
      };
    }
    default:
      return state;
  }
};
