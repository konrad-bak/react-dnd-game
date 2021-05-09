import GameContainer from "./GameContainer";
import { useGame, useDispatchGame } from "./hooks/useGame";

export const Game = (props) => {
  const { timer, lastScore, difficulty } = useGame();
  const { setDifficulty } = useDispatchGame();

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
            Your score: {timer}s
          </h1>
          <h2>Your last score: {lastScore}s</h2>
          <h2>Be as quick as possible!</h2>
        </div>
      </section>
      <section className={`difficulty ${difficulty}`}>
        <h2>Choose difficulty:</h2>
        <button
          className="normal mdc-button mdc-button--outlined"
          onClick={() => setDifficulty("normal")}
        >
          Normal
        </button>
        <button
          className="hard mdc-button mdc-button--outlined"
          onClick={() => setDifficulty("hard")}
        >
          Hard
        </button>
        <button
          className="veteran mdc-button mdc-button--outlined"
          onClick={() => setDifficulty("veteran")}
        >
          Veteran
        </button>
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
        </div>
      </section>
      <GameContainer />
    </div>
  );
};
