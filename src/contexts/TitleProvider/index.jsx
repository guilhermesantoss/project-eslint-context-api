import P from 'prop-types';
import { useReducer } from 'react';
import { TitleContext } from './context';
import { reducer } from './reducer';
import { data } from './data';

export const TitleProvider = ({ children }) => {
  const [titleState, titleDispatch] = useReducer(reducer, data);
  const value = {
    titleState,
    titleDispatch,
  };

  return (
    <TitleContext.Provider value={value}>{children}</TitleContext.Provider>
  );
};

TitleProvider.propTypes = {
  children: P.node.isRequired,
};
