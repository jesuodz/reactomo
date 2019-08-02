import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StartStop from './components/StartStop';
import ResetTimer from './components/Reset';
import { updateTimer } from './actions';

import './index.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0
    }
  }


  startTimer = () => {
    this.makeInterval = setInterval(() => {
      let { minutes, seconds } = this.state;
      let total = this.props.total;

      total -= 1;
      minutes = Math.trunc(total / 60);
      seconds = total % 60;
      
      this.props.updateTimer(total);
      
      this.setState({
        minutes: minutes,
        seconds: seconds
      });

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
          <p>{`${this.state.minutes} : ${this.state.seconds}`}</p>
        </div>
        <StartStop start={this.startTimer} stop={this.stopTimer}/>
        <ResetTimer stop={this.stopTimer}/>
      </div>
    );
  }
}

Clock.propTypes = {
  total: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  total: state.total
});

export default connect(mapStateToProps, { updateTimer })(Clock);
