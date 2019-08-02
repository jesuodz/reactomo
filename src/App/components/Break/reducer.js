import { MOD_BREAK_LENGTH, SET_BREAK_LENGTH } from './types';
import { setLS, getLS } from '../../../utils/handLS';

export default (state = 5, action) => {
  switch(action.type) {
    case MOD_BREAK_LENGTH:
      return setLS("breakLength", state + action.payload);
    case SET_BREAK_LENGTH:
      return getLS("breakLength");
    default:
      return state;
  }
};
