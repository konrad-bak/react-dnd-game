import React from "react";
import logo from "./../logo.svg";

export const Welcome = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(event);
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Wanna play a game?</p>
      <form onSubmit={handleSubmit}>
        <input type="name" value={props.name} onChange={handleChange} />
        <button type="submit" className="mdc-button mdc-button--outlined">
          <div className="mdc-button__ripple"></div>
          <span className="mdc-button__label" style={{ color: "#fff" }}>
            Let's go!
          </span>
        </button>
      </form>
    </header>
  );
};
