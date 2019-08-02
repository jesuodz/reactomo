import { RESET_TIMER } from './types';

export default (state, action) => {
  switch(action.type) {
    case RESET_TIMER:
      return action.payload;
    default:
      return state
  }
};
