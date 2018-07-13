import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.decrementScore = this.decrementScore.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.editScore = this.editScore.bind(this);
    this.showEditScore = this.showEditScore.bind(this);
    this.hideEditScore = this.hideEditScore.bind(this);
    this.hideEditScoreOnEnter = this.hideEditScoreOnEnter.bind(this);
  }
  incrementScore() {
    this.setState({ score: this.state.score + 1 });
  }
  decrementScore() {
    if(this.state.score !== 0) {
      this.setState({ score: this.state.score - 1 });
    }
  }
  editScore(event) {
    if(event.target.value === "") {
        this.setState({score: 0});
    } else if(event.target.value < 0) {
        this.setState({score: 0});
    } else if(!isNaN(parseInt(event.target.value, 10))) {
        this.setState({score: parseInt(event.target.value, 10)});
    }
  }
  showEditScore(event) {
    event.target.style.display = "none";
    let editScore = event.target.nextSibling;
    editScore.style.display = "block";
    editScore.focus();
  }
  hideEditScore(event) {
    event.target.style.display = "none";
    event.target.previousSibling.style.display = "block";
  }
  hideEditScoreOnEnter(event) {
    if(event.keyCode === 13) {
      this.hideEditScore(event);
    }
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score" id="counterScore" onClick={this.showEditScore}> {this.state.score} 
        </div>
        <input 
          type="text" 
          maxLength="8"
          className="form-control edit-score" 
          value={this.state.score} 
          onChange={this.editScore} 
          onBlur={this.hideEditScore}
          onKeyUp={this.hideEditScoreOnEnter} 
        />
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}

export default Counter;