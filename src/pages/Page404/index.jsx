import { useContext } from 'react';
import { TitleContext } from '../../contexts/TitleProvider/context';

export const Page404 = () => {
  const titleContext = useContext(TitleContext);
  const { titleState } = titleContext;

  return (
    <>
      <h1>Page not found - 404</h1>
      <p>{titleState.body}</p>
    </>
  );
};
