import React, {PureComponent} from 'react';
import Counter from './Counter';

class Player extends PureComponent {
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