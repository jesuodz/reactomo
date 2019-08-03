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
    this.state = { minutes: 0, seconds: 0, display: '' }
  }

  startTimer = () => {
    this.makeInterval = setInterval(() => {
      let { minutes, seconds } = this.state;
      let total = this.props.total;

      total -= 1;
      minutes = Math.trunc(total / 60);
      seconds = total % 60;
      
      this.props.updateTimer(total);
      this.setState({ minutes: minutes, seconds: seconds });
      this.renderDisplay();

      if (total === 0)  clearInterval(this.makeInterval) 
    }, 1000);
  }

  stopTimer = () => ( clearInterval(this.makeInterval) );

  resetTimer = () => {
    this.stopTimer();
    this.setState({ minutes: 25, seconds: 0, display: "25:00" });
  }

  renderDisplay = () => {
    let { minutes, seconds } = this.state;

    if (String(seconds).length < 2) seconds = "0" + seconds;
    if (String(minutes).length < 2) minutes = "0" + minutes;

    this.setState({display: `${minutes}:${seconds}`});
  }
  
  componentDidMount() {
    this.renderDisplay();
  }

  render() {
    return(
      <div className="Clock">
        <div>
          <p>{this.state.display}</p>
        </div>
        <StartStop start={this.startTimer} stop={this.stopTimer}/>
        <ResetTimer stop={this.resetTimer}/>
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

export default connect(mapStateToProps, { updateTimer})(Clock);
