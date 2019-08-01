import React, { Component } from 'react';
import {
  incrementBreakLength,
  decrementBreakLength
} from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Break extends Component {
  render() {
    return (
      <div className="break-wrapper">
        <div
          id="break-label"
        >
          Break length: 
          {this.props.length}
        </div>
        <button
          id="break-increment"
          onClick={this.props.increment}
        >
          Increment break
        </button>
        <button
          id="break-decrement"
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
  length: state.breakLength
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementBreakLength()),
  decrement: () => dispatch(decrementBreakLength())
});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
