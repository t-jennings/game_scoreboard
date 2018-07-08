import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from '../counter/Counter.js';
import './Player.css';

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

export default Player;