import { actions } from './actions';

export const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
    default: {
      console.log(`action type invalid: ${action.type}`);
      return { ...state };
    }
  }
};
