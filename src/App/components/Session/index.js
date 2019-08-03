import React, { Component } from 'react';
import { modSessionLength, setSessionLength } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Session extends Component {
  onClick = e => {
    let target = e.target.id === 'session-increment' ? true : false;
    if ((target) && (this.props.length < 60)) {
      this.props.changeSession(1);
    } else if (!(target) && (this.props.length > 1)) {
      this.props.changeSession(-1);
    }
  }
  
  componentDidMount() {
    if (localStorage.getItem("sessionLength")) this.props.setSession();
  }

  render() {
    return (
      <div className="session-wrapper">
        <div
          id="session-label"
        >
          Session length: 
          {this.props.length}
        </div>
        <button
          id="session-increment"
          onClick={this.onClick}
        >
          Increment session
        </button>
        <button
          id="session-decrement"
          onClick={this.onClick}
        >
          Decrement session
        </button>
      </div>
    );
  }
}

Session.propTypes = {
  length: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  length: state.sessionLength
});

const mapDispatchToProps = dispatch => ({
  changeSession: (minutes) => dispatch(modSessionLength(minutes)),
  setSession: () => dispatch(setSessionLength())
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
