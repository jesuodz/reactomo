import React, { Component } from 'react';
import {
  incrementSessionLength,
  decrementSessionLength
} from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Break extends Component {
  render() {
    return (
      <div className="session-wrapper">
        <div
          id="session-label"
        >
          session length: 
          {this.props.length}
        </div>
        <button
          id="session-increment"
          onClick={this.props.increment}
        >
          Increment session
        </button>
        <button
          id="session-decrement"
          onClick={this.props.decrement}
        >
          Decrement break
        </button>
      </div>
    );
  }
}

Break.propTypes = {
  length: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  length: state.sessionLength
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementSessionLength()),
  decrement: () => dispatch(decrementSessionLength())
});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
