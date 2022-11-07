import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reducer } from '..';
import * as matixActions from '../matrix/actions';

export type RootState = ReturnType<typeof reducer>;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useMatrixActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(matixActions, dispatch);
};
