import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import breakLengthReducer from './components/Break/reducer';
import sessionLengthReducer from './components/Session/reducer';
import timerStateReducer from './components/Clock/components/StartStop/reducer';

const rootReducer = combineReducers({
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  isRunning: timerStateReducer
});

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
       // Apply after updating redux-devtools extension package
      // applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}
