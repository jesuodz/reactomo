import React, { Component } from 'react';
import { modBreakLength, setBreakLength } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Break extends Component {
  componentDidMount() {
    if (localStorage.getItem("breakLength")) this.props.setBreak();
  }

  onClick = e => {
    let target = e.target.id;

    if (target === 'break-increment') this.props.changeBreak(1);
    else this.props.changeBreak(-1);
  }

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
          onClick={this.onClick}
        >
          Increment break
        </button>
        <button
          id="break-decrement"
          onClick={this.onClick}
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

const mapDispatchToProps = dispatch => ({
  changeBreak: (minutes) => dispatch(modBreakLength(minutes)),
  setBreak: () => dispatch(setBreakLength())
});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
