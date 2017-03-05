import { EXAMPLE_ACTION } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
