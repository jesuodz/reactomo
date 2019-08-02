import { MOD_BREAK_LENGTH } from './types';

export const modBreakLength = mins => {
  return {
    type: MOD_BREAK_LENGTH,
    payload: mins
  }
};
