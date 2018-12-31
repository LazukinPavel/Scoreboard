import React from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends React.Component {
  state = {
    players: [
      {
        name: "Pavel",
        score: 0,
        id: 1,
      },
      {
        name: "Natalia",
        score: 0,
        id: 2,
      },
      {
        name: "Alex",
        score: 0,
        id: 3,
      },
      {
        name: "James",
        score: 0,
        id: 4,
      }
    ]
  }

  prevPlayerId = 4

  handleAddPlayer = (name) => {
    this.setState( prevState => ({
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1,
          }
        ]
    }))
  }

// Another way to update players list
//   handleAddPlayer = (name) => {
//   let newPlayer = {
//     name,
//     score: 0,
//     id: this.prevPlayerId += 1
//   };
//   this.setState( prevState => ({
//     players: prevState.players.concat(newPlayer)
//   }));
// }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({     
      score: prevState.players[index].score += delta   
    }));
  }

  isHigherScore = () => {
      let scores = this.state.players.map(p => p.score);
      let higherScore = Math.max(...scores);
      if (higherScore) 
        return higherScore;
      else
        return null
  }

  render() {

    let higherScore = this.isHigherScore()

    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            index={index}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            scoreChange={this.handleScoreChange}
            isHigherScore={player.score === higherScore}           
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
