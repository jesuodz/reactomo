import {
  INC_SESSION_LENGTH,
  DEC_SESSION_LENGTH
} from './types';

export default (state = 25, action) => {
  switch(action.type) {
    case INC_SESSION_LENGTH:
      return state + 1
    case DEC_SESSION_LENGTH:
      return state -1
    default:
      return state;
  }
};
