import { UPDATE_TIMER } from './types';

const initialState = {
  minutes: 25,
  seconds: 0,
  total: 1500
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
