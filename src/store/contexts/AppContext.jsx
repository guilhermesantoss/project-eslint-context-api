/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import P from 'prop-types';
import { createContext, useReducer } from 'react';
import { globalState } from '../states/globalState';
import { actions } from '../reducers/actions';
import { globalReducer } from '../reducers/globalReducer';

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, globalState);

  const changeTitle = (payload) => {
    if (payload !== '') {
      dispatch({ type: actions.CHANGE_TITLE, payload });
    } else {
      console.log('payload cannot be empty');
    }
  };

  return (
    <GlobalContext.Provider value={{ state, changeTitle }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: P.node,
};
