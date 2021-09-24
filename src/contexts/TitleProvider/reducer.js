import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
    case types.UPDATE_COUNTER: {
      return { ...state, counter: action.payload };
    }
    default: {
      console.log('não encontrei a action', action.type);
      return { ...state };
    }
  }
};
