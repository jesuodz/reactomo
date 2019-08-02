import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { resetTimer } from './actions';
import { connect } from 'react-redux';

import './index.css';

class ResetTimer extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.resetTimer();
  };
  render() {
    return (
      <button onClick={this.onClick}>
        Reset
      </button>
    );
  }
}

ResetTimer.propTypes = {
  resetTimer: PropTypes.func.isRequired
}

export default connect(null, { resetTimer })(ResetTimer);
