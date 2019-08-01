import {
  INC_BREAK_LENGTH,
  DEC_BREAK_LENGTH
} from './types';

export default (state = 5, action) => {
  switch(action.type) {
    case INC_BREAK_LENGTH:
      return state + 1
    case DEC_BREAK_LENGTH:
      return state -1
    default:
      return state;
  }
};
