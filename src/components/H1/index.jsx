/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useRef } from 'react';
import { GlobalContext } from '../../store/contexts/AppContext';

export const H1 = () => {
  const { state, changeTitle } = useContext(GlobalContext);
  const inputRef = useRef();

  return (
    <>
      <h1>{state.title}</h1>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={() => changeTitle(inputRef.current.value)}>
        Change Title
      </button>
    </>
  );
};
