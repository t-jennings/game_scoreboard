import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Score from '../score/Score.js';
import './Player.css';

class Player extends Component {
  render() {
    return (
      <div className="player clearfix">
        <div className="player-name">
          {this.props.name}
        </div>
        <Score />
      </div>
    )
  }  
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Player;