import React, { Component } from 'react';
import { modSessionLength, setSessionLength } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Session extends Component {
  componentDidMount() {
    if (localStorage.getItem("sessionLength")) this.props.setSession();
  }

  onClick = e => {
    let target = e.target.id;

    if (target === 'session-increment') this.props.changeSession(1);
    else this.props.changeSession(-1);
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
          Increment break
        </button>
        <button
          id="session-decrement"
          onClick={this.onClick}
        >
          Decrement break
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
