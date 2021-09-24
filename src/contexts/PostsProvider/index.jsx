import P from 'prop-types';
import { useReducer } from 'react';
import { PostsContext } from './context';
import { reducer } from './reducer';
import { data } from './data';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);
  const value = {
    postsState,
    postsDispatch,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
