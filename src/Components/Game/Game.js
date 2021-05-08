import GameContainer from "./GameContainer";
import { useGame } from "./hooks/useGame";

export const Game = (props) => {
  const { timer } = useGame();

  return (
    <div>
      <section
        className="head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 30px",
        }}
      >
        <div className="left">
          <h1>Good luck, {props.name}!</h1>
          <h2>Pick the cards in the correct order!</h2>
        </div>
        <div className="right">
          <h1>
            <i className="material-icons mdc-button__icon" aria-hidden="true">
              timer
            </i>
            Your last score: {timer}s
          </h1>
          <h2>Be as quick as possible!</h2>
        </div>
      </section>
      <section className="difficulty">
        <h2>Choose difficulty:</h2>
        <button className="normal mdc-button mdc-button--outlined">
          Normal
        </button>
        <button className="hard mdc-button mdc-button--outlined">Hard</button>
        <button className="veteran mdc-button mdc-button--outlined">
          Veteran
        </button>
      </section>
      <GameContainer />
    </div>
  );
};
