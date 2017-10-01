import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
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
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    )
  }
}


class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">
          {this.props.name}
        </div>
        <Counter />
      </div>
    )
  }  
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
}


class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let newPlayersArray = this.state.players.slice();  
    let newPlayer = { 
      name: this.state.value, 
      id: 3
    };
    newPlayersArray.push(newPlayer);   
    this.setState({
      players:newPlayersArray,
      value: '',
    });
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="scoreboard">
          <header className="header">
            <h1>Game Scoreboard</h1>
          </header>
          {
            this.state.players.map((player) => 
              <Player name={player.name} score={player.score} key={player.id} />
            )
          }
        </div>
      </div>  
    )
  }
}


class App extends Component {
  render() {
    return (
     <Scoreboard />
    );
  }
}


export default App;
