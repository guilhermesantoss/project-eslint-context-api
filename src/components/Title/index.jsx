import { useContext, useEffect, useRef } from 'react';
import {
  changeTitle,
  updateCounter,
} from '../../contexts/TitleProvider/actions';
import { TitleContext } from '../../contexts/TitleProvider/context';

export const Title = () => {
  const titleContext = useContext(TitleContext);
  const { titleState, titleDispatch } = titleContext;
  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      updateCounter(titleDispatch, titleState.counter + 1);
    }, 1000);
  }, [titleDispatch, titleState.counter]);

  return (
    <>
      <h1>{titleState.title}</h1>
      <input type="text" ref={inputRef} />
      <button
        type="button"
        onClick={() => changeTitle(titleDispatch, inputRef.current.value)}
      >
        Change Title
      </button>
      <p>
        <strong>Counter: {titleState.counter}</strong>
      </p>
    </>
  );
};
