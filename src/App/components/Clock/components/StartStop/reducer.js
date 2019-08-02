import { TOGGLE_TIMER } from './types';

export default (state = false, action) => {
  switch(action.type) {
    case TOGGLE_TIMER:
      return !state;
    default:
      return state
  }
};
