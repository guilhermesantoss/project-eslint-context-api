import React, { useContext } from 'react';
import { GlobalContext } from '../../store/contexts/GlobalContext';

export const Page404 = () => {
  const { state } = useContext(GlobalContext);
  const { body } = state;

  return (
    <>
      <h1>Page not found - 404</h1>
      <p>{body}</p>
    </>
  );
};
