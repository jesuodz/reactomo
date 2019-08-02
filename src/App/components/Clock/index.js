import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartStop from './components/StartStop';
import ResetTimer from './components/Reset';

import './index.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        minutes: 0,
        seconds: 0
      },
      timeTotal: 0
    };

    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.makeInterval = setInterval(() => {
      let { timeTotal } = this.state;
      let { time } = this.state;

      timeTotal += 1;
      let minutes = Math.trunc(timeTotal / 60);
      let seconds = timeTotal  % 60;

      this.setState({
        timeTotal: timeTotal
      });
      this.setState({
        time: {
          minutes: minutes,
          seconds: seconds
        }
      });

      // when reaching 0, clear the interval
      if (timeTotal === 0) {
        clearInterval(this.makeInterval);
      }
    }, 1000);
  }

  render() {
    return(
      <div className="Clock">
        <div>
          <p>Minutes:  {this.state.time.minutes}</p>
          <p>Seconds: {this.state.time.seconds}</p>
          <p>Total: {this.state.timeTotal}</p>
        </div>
        <StartStop />
        <ResetTimer />
        <button onClick={this.startTimer}>Start timer</button>
      </div>
    );
  }
}

export default connect()(Clock);
