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
import { shuffleObject } from "../../../helpers/shuffleObject";

const GameStateContext = createContext(undefined);
const GameDispatchContext = createContext(undefined);

let cards = {
  1: {
    img: Zimg,
    value: "Z",
    state: "selectable",
    expected: ["1"],
  },
  2: {
    img: Oimg,
    value: "O",
    state: "selectable",
    expected: ["2", "3"],
  },
  3: {
    img: Oimg,
    value: "O",
    state: "selectable",
    expected: ["2", "3"],
  },
  4: {
    img: Vimg,
    value: "V",
    state: "selectable",
    expected: ["4"],
  },
  5: {
    img: Uimg,
    value: "U",
    state: "selectable",
    expected: ["5"],
  },
};

export const GameProvider = ({ children }) => {
  const [cardsVals, setCardsVals] = useState(shuffleObject(cards));
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
    setCardsVals(shuffleObject(cards));
    setIsDirty(false);
    setTimer(0);
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
    return () => {
      stopTimer();
    };
  }, [isDirty, startTimer, stopTimer]);

  useEffect(() => {
    const values = Object.values(cardsVals);
    const isSuccess = values.every((val) => {
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
