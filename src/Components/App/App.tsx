import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { MainForm } from '../MainForm/MainForm';
import { Matrix } from '../Matrix/Matrix';
import './style.scss';

export const App: React.FC = () => {
  const { matrix } = useAppSelector((store) => store.matrix);
  return (
    <div className="app">
      {matrix && matrix.length ? <Matrix matrix={matrix} />
        : <MainForm />}
    </div>
  );
};
