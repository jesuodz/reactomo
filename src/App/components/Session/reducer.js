import { MOD_SESSION_LENGTH, SET_SESSION_LENGTH } from './types';
import { setLS, getLS } from '../../../utils/handLS';

export default (state = 25, action) => {
  switch(action.type) {
    case MOD_SESSION_LENGTH:
      return setLS("sessionLength", state + action.payload);
    case SET_SESSION_LENGTH:
      return getLS("sessionLength");
    default:
      return state;
  }
};
