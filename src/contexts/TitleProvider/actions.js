import * as types from './types';

export const changeTitle = (dispatch, payload) => {
  if (payload !== '') {
    dispatch({ type: types.CHANGE_TITLE, payload });
  } else {
    console.log('payload cannot be empty');
  }
};

export const updateCounter = (dispatch, payload) => {
  dispatch({ type: types.UPDATE_COUNTER, payload });
};
