import React from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import Clock from './components/Clock';
import Break from './components/Break';
import Session from './components/Session';

import './index.css';
const App = () => (
  <Provider store={configureStore()}>
    <div className="App">
      <Header />
      <Clock />
      <Break />
      <Session />
      <Footer />
    </div>
  </Provider>
);

export default App;
