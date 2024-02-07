// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {initialNumber: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTime = () => {
    clearInterval(this.timeInterval)
    this.setState({initialNumber: 0, isTimerRunning: false})
  }

  stopTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      initialNumber: prevState.initialNumber + 1,
    }))
  }

  onStartTime = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {initialNumber} = this.state
    const seconds = Math.floor(initialNumber % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {initialNumber} = this.state
    const minutes = Math.floor(initialNumber / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="stop-watch">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer">
          <div className="image-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <h1 className="head">Timer</h1>
          </div>
          <h1 className="para">{time}</h1>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onStartTime}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button red"
              onClick={this.stopTime}
            >
              Stop
            </button>
            <button
              type="button"
              className="button orange"
              onClick={this.onResetTime}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
