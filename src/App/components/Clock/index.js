import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartStop from './components/StartStop';
import ResetTimer from './components/Reset';

import './index.css';

class Clock extends Component {
  render() {
    return(
      <div className="Clock">
        <StartStop />
        <ResetTimer />
      </div>
    );
  }
}

export default connect()(Clock);
