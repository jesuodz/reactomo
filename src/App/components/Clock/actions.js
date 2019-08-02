import { UPDATE_TIMER } from './types';

export const updateTimer = total => {
  return {
    type: UPDATE_TIMER,
    total
  }
}
