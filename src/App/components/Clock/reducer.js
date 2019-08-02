import { UPDATE_TIMER } from './types';

const initialState = {
  minutes: 0,
  seconds: 0,
  total: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        minutes: action.payload.minutes,
        seconds: action.payload.seconds,
        total: action.payload.total
      }
    default:
      return state;
  }
};
