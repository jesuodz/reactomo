import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartStop from './components/StartStop';
import ResetTimer from './components/Reset';

import './index.css';
import StartStop from './components/StartStop';

class Clock extends Component {
  render() {
    return(
          <StartStop />
          <ResetTimer />
      </div>
    );
  }
}

export default Clock;
