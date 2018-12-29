import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    id: PropTypes.number,
    score: PropTypes.number.isRequired,
    scoreChange: PropTypes.func,
    removePlayer: PropTypes.func
  }

  render() {
      const { name, index, id, score, scoreChange, removePlayer } = this.props;
      return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter 
          score={score}
          scoreChange={scoreChange}
          index={index}
        />
      </div>
    );
  }  
}

export default Player;