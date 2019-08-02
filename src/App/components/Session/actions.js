import {
  MOD_SESSION_LENGTH,
  SET_SESSION_LENGTH
} from './types';

export const modSessionLength = mins => {
  return {
    type: MOD_SESSION_LENGTH,
    payload: mins
  }
};

export const setSessionLength = () => {
  return {
    type: SET_SESSION_LENGTH
  }
}
