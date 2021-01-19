const Header = ({ title, totalPlayers }) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};

const Player = ({ playerName, remove }) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={remove}>
          ✖
        </button>
        {playerName}
      </span>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  state = {
    score: 0,
  };

  incrementScore = () => {
    this.setState((prevState) => {
      return {
        score: (prevState.score += 1),
      };
    });
  };

  decrementScore = () => {
    this.setState((prevState) => ({
      score: (prevState.score -= 1),
    }));
  };

  render() {
    let { score } = this.state;
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Andrew",
        id: 1,
      },
      {
        name: "John",
        id: 2,
      },
      {
        name: "June",
        id: 3,
      },
      {
        name: "Tiny",
        id: 4,
      },
    ],
  };
  handleRemovePlayer = (personID) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((person) => person.id !== personID),
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/*Players list  */}
        {this.state.players.map((player) => (
          <Player
            playerName={player.name}
            key={player.id.toString()}
            remove={() => this.handleRemovePlayer(player.id)}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
