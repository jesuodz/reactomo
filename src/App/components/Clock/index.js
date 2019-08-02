import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StartStop from './components/StartStop';
import ResetTimer from './components/Reset';
import { updateTimer } from './actions';

import './index.css';

class Clock extends Component {
  startTimer = () => {
    this.makeInterval = setInterval(() => {
      let { minutes, seconds, total } = this.props;
      total -= 1;
      minutes = Math.trunc(total / 60);
      seconds = total % 60;
      
      this.props.updateTimer({ total, minutes, seconds });

      if (total === 0)  clearInterval(this.makeInterval) 
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.makeInterval);
  }

  render() {
    return(
      <div className="Clock">
        <div>
          <p>{`${this.props.minutes} : ${this.props.seconds}`}</p>
        </div>
        <StartStop start={this.startTimer} stop={this.stopTimer}/>
        <ResetTimer/>
      </div>
    );
  }
}

Clock.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  minutes: state.time.minutes,
  seconds: state.time.seconds,
  total: state.time.total
});

export default connect(mapStateToProps, { updateTimer })(Clock);
