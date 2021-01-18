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

const Player = ({ playerName, playerScore }) => {
  return (
    <div className="player">
      <span className="player-name">{playerName}</span>
      <Counter score={playerScore} />
    </div>
  );
};

class Counter extends React.Component {
  state = {};
  render() {
    let { score } = this.props;
    return (
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment">+</button>
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
        <Player
          playerName={player.name}
          playerScore={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App players={playersArray} />,
  document.getElementById("root")
);
