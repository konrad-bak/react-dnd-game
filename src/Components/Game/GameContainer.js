import { useState, useEffect } from "react";
import DragItem from "./drag-item";
import DropItem from "./drop-item";

import Zimg from "./letters/z.svg";
import Oimg from "./letters/o.svg";
import Vimg from "./letters/v.svg";
import Uimg from "./letters/u.svg";

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

const GameContainer = ({ onStart, onStop, penalty }) => {
  const [cardsVals, setCardsVals] = useState(cards);
  const [isDirty, setIsDirty] = useState(false);

  const onDrop = (state) => (id) => {
    const currentCard = { ...cardsVals[id], state };
    setCardsVals({ ...cardsVals, ...{ [id]: currentCard } });
    if (state !== "selectable" && state !== id) {
      penalty();
    }
  };

  useEffect(() => {
    if (isDirty) onStart();
  }, [isDirty, onStart]);

  useEffect(() => {
    const values = Object.values(cardsVals);
    const isSuccess = values.every((val) => {
      return val.expected.includes(val.state);
    });
    if (isSuccess) onStop();
  });

  return (
    <>
      <section
        className="game"
        style={{ overflow: "hidden", clear: "both", marginTop: "1.5rem" }}
      >
        <div
          className="cards"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <DropItem
            heading="Container"
            maxItems={5}
            onDrop={onDrop("selectable")}
          >
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "selectable")
              .map((card) => (
                <DragItem
                  id={card.id}
                  data={card}
                  key={`card ${card.id}`}
                  onTouch={() => {
                    if (!isDirty) setIsDirty(true);
                  }}
                />
              ))}
          </DropItem>
        </div>
        <div
          className="slots"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <DropItem className="solution" maxItems={1} onDrop={onDrop("1")}>
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "1")
              .map((card) => (
                <DragItem id={card.id} data={card} key={card.id} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("2")}>
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "2")
              .map((card) => (
                <DragItem id={card.id} data={card} key={card.id} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("3")}>
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "3")
              .map((card) => (
                <DragItem id={card.id} data={card} key={card.id} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("4")}>
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "4")
              .map((card) => (
                <DragItem id={card.id} data={card} key={card.id} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("5")}>
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "5")
              .map((card) => (
                <DragItem id={card.id} data={card} key={card.id} />
              ))}
          </DropItem>
        </div>
      </section>
    </>
  );
};

export default GameContainer;
