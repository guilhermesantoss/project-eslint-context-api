/* eslint-disable default-case */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
export const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// AppContext
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) =>
    dispatch({ type: actions.CHANGE_TITLE, payload });

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const { state, changeTitle } = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => changeTitle(inputRef.current.value)}>{state.title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
