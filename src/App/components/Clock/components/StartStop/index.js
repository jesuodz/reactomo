import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toggleTimer } from './actions';
import { connect } from 'react-redux';

import './index.css';

class StartStop extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.toggleTimer();

    if (this.props.isRunning) this.props.stop();
    else this.props.start();
  }
  
  render() {
    const placeholder = this.props.isRunning ? 'Stop' : 'Start';

    return (
      <button
        onClick={this.onClick}
      >
        {placeholder}
      </button>
    );
  }
}

StartStop.propTypes = {
  toggleTimer: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isRunning: state.isRunning
});

export default connect(mapStateToProps, { toggleTimer })(StartStop);
