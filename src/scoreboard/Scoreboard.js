import React, { Component } from 'react';
import Player from '../player/Player.js';
import './Scoreboard.css';

class Scoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearScoreboard = this.clearScoreboard.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value !== '') {
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
      document.getElementById('no-players').style.display = "none";
    } else {
      document.getElementById('error').classList.add('flash-error');
      setTimeout(function() {
        document.getElementById('error').classList.remove('flash-error');
      }, 1000);
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  clearScoreboard() {
    this.setState({
      players: [],
      value: '',
    });
    document.getElementById('no-players').style.display = "block";
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>
                    Add Player:
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
                  </label>
                  <button type="submit" className="btn btn-default">submit</button>
                </div>  
              </form>
              <div className="text-danger" id="error"><strong>Field is empty!</strong></div>
            </div>
            <div>
              <button type="submit" className="btn btn-danger" onClick={this.clearScoreboard}>Clear Scoreboard</button>
            </div>  
          </div>
          <div className="col-xs-12 col-md-8">  
            <div className="scoreboard">
              <header className="header">
                <h1>Game Scoreboard</h1>
              </header>
              <div id="no-players">There are No Players</div>
              {
                this.state.players.map((player) => 
                  <Player name={player.name} score={player.score} key={player.id} />
                )
              }
            </div>
          </div>  
        </div>  
      </div>  
    )
  }
  
}

export default Scoreboard;