import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.decrementScore = this.decrementScore.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }
  incrementScore() {
    this.setState({ score: this.state.score + 1 })
  }
  decrementScore() {
    if(this.state.score !== 0) {
      this.setState({ score: this.state.score - 1 })
    }
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}

export default Counter;