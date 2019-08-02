import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toggleTimer } from './actions';
import { connect } from 'react-redux';

import './index.css';

class StartStop extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.toggleTimer();
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
  toggleTimer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isRunning: state.isRunning
});

export default connect(mapStateToProps, { toggleTimer })(StartStop);
