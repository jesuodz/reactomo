import {
  INC_BREAK_LENGTH,
  DEC_BREAK_LENGTH
} from './types';

export const incrementBreakLength = () => {
  return {
    type: INC_BREAK_LENGTH
  }
};

export const decrementBreakLength = () => {
  return {
    type: DEC_BREAK_LENGTH
  }
};
