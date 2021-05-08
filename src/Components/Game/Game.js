import { useState, useRef } from "react";
import GameContainer from "./GameContainer";

export const Game = (props) => {
  const [timer, setTimer] = useState(0);
  let intervalId = useRef(null);

  // const restartGame = () => {

  //   setTimer(0);

  // }

  const increaseTime = () => {
    setTimer((prev) => prev + 10);
  };

  const startTimer = () => {
    if (timer > 0) return;
    intervalId.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    setTimeout(() => {
      restartGame();
    }, 10000);
  };

  const restartGame = () => {
    setTimer(0);
  };

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
          <button onClick={startTimer}>Start</button>
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
      <GameContainer
        onStart={startTimer}
        onStop={stopTimer}
        penalty={increaseTime}
      />
    </div>
  );
};
