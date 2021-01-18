let playersArray = [
  {
    name: "Andrew",
    score: 33,
    id: 1,
  },
  {
    name: "John",
    score: 12,
    id: 2,
  },
  {
    name: "June",
    score: 65,
    id: 3,
  },
  {
    name: "Tiny",
    score: 26,
    id: 4,
  },
];

const Header = ({ title, totalPlayers }) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};

const Player = ({ playerName }) => {
  return (
    <div className="player">
      <span className="player-name">{playerName}</span>
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

const App = ({ players }) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />

      {/*Players list  */}
      {players.map((player) => (
        <Player playerName={player.name} key={player.id.toString()} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App players={playersArray} />,
  document.getElementById("root")
);
