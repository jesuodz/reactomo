import { UPDATE_TIMER } from './types';

export default (state = 1500, action) => {
  switch(action.type) {
    case UPDATE_TIMER:
      return action.total;
    default:
      return state;
  }
};
