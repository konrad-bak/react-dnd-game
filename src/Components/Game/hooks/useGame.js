import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";

import Zimg from "../letters/z.svg";
import Oimg from "../letters/o.svg";
import Vimg from "../letters/v.svg";
import Uimg from "../letters/u.svg";
import { shuffleArray } from "../../../helpers/shuffleArray";

const GameStateContext = createContext(undefined);
const GameDispatchContext = createContext(undefined);

let cards = [
  {
    img: Zimg,
    value: "Z",
    state: "selectable",
    expected: ["1"],
    id: "Z",
  },
  {
    img: Oimg,
    value: "O",
    state: "selectable",
    expected: ["2", "3"],
    id: "O1",
  },
  {
    img: Oimg,
    value: "O",
    state: "selectable",
    expected: ["2", "3"],
    id: "O2",
  },
  {
    img: Vimg,
    value: "V",
    state: "selectable",
    expected: ["4"],
    id: "V",
  },
  {
    img: Uimg,
    value: "U",
    state: "selectable",
    expected: ["5"],
    id: "U",
  },
];

export const GameProvider = ({ children }) => {
  const [cardsVals, setCardsVals] = useState(shuffleArray(cards));
  const [timer, setTimer] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  let intervalId = useRef(null);
  const increaseTime = () => {
    setTimer((prev) => prev + 10);
  };

  const startTimer = useCallback(() => {
    if (timer > 0) return;
    intervalId.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, [timer]);

  const stopTimer = useCallback(() => {
    clearInterval(intervalId.current);
  }, []);

  const restartGame = () => {
    setCardsVals(shuffleArray(cards));
    setIsDirty(false);
    setTimer(0);
    setIsSuccess(false);
  };

  const actions = {
    setCardsVals,
    increaseTime,
    startTimer,
    stopTimer,
    restartGame,
    setIsDirty,
  };
  const state = { cardsVals, timer, isDirty };

  useEffect(() => {
    if (isDirty) startTimer();
  }, [isDirty, startTimer, stopTimer]);

  useEffect(() => {
    const isSuccess = cardsVals.every((val) => {
      return val.expected.includes(val.state);
    });

    if (isSuccess) setIsSuccess(true);
  }, [cardsVals]);

  useEffect(() => {
    if (isSuccess) {
      stopTimer();
      setTimeout(() => {
        restartGame();
      }, 10000);
    }
  }, [isSuccess, stopTimer]);

  return (
    <GameDispatchContext.Provider value={actions}>
      <GameStateContext.Provider value={state}>
        {children}
      </GameStateContext.Provider>
    </GameDispatchContext.Provider>
  );
};

export const useGame = () => useContext(GameStateContext);
export const useDispatchGame = () => useContext(GameDispatchContext);
