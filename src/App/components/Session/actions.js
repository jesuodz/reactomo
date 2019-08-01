import {
  INC_SESSION_LENGTH,
  DEC_SESSION_LENGTH
} from './types';

export const incrementSessionLength = () => {
  return {
    type: INC_SESSION_LENGTH
  }
};

export const decrementSessionLength = () => {
  return {
    type: DEC_SESSION_LENGTH
  }
};
