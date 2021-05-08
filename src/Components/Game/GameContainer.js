import { useState } from "react";
import DragItem from "./drag-item";
import DropItem from "./drop-item";

import Zimg from "./letters/z.svg";
import Oimg from "./letters/o.svg";
import Vimg from "./letters/v.svg";
import Uimg from "./letters/u.svg";

const states = ["selectable", "1", "2", "3", "4", "5"];
let cards = {
  1: {
    img: Zimg,
    value: "Z",
    state: "selectable",
  },
  2: {
    img: Oimg,
    value: "O",
    state: "selectable",
  },
  3: {
    img: Oimg,
    value: "O",
    state: "selectable",
  },
  4: {
    img: Vimg,
    value: "V",
    state: "selectable",
  },
  5: {
    img: Uimg,
    value: "U",
    state: "selectable",
  },
};

const GameContainer = () => {
  const [cardsVals, setCardsVals] = useState(cards);
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
            onDrop={(id) => {
              const currentCard = { ...cardsVals[id], state: "selectable" };
              setCardsVals({ ...cardsVals, ...{ [id]: currentCard } });
            }}
          >
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "selectable")
              .map((card) => (
                <DragItem id={card.id} data={card} key={`card ${card.id}`} />
              ))}
          </DropItem>
        </div>
        <div
          className="slots"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <DropItem
            className="solution"
            maxItems={1}
            onDrop={(id) => {
              const currentCard = { ...cardsVals[id], state: "1" };
              setCardsVals({ ...cardsVals, ...{ [id]: currentCard } });
            }}
          >
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "1")
              .map((card) => (
                <DragItem id={card.id} data={card} key={card.id} />
              ))}
          </DropItem>
          <DropItem
            className="solution"
            maxItems={1}
            onDrop={(id) => {
              const currentCard = { ...cardsVals[id], state: "2" };
              setCardsVals({ ...cardsVals, ...{ [id]: currentCard } });
            }}
          >
            {Object.keys(cardsVals)
              .map((key) => ({ id: key, ...cardsVals[key] }))
              .filter((card) => card.state === "2")
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
