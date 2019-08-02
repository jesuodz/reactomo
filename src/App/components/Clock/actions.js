import { UPDATE_TIMER } from './types';

export const updateTimer = (times) => {
  return {
    type: UPDATE_TIMER,
    payload: times
  }
}
