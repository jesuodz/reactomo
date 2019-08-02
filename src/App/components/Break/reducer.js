import { MOD_BREAK_LENGTH } from './types';

export default (state = 5, action) => {
  switch(action.type) {
    case MOD_BREAK_LENGTH:
      return state + action.payload
    default:
      return state;
  }
};
