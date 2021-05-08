import DragItem from "./drag-item";
import DropItem from "./drop-item";
import { useGame, useDispatchGame } from "./hooks/useGame";

const GameContainer = () => {
  const { cardsVals, isDirty } = useGame();
  const { increaseTime, setCardsVals, setIsDirty } = useDispatchGame();

  const onDrop = (state) => (id) => {
    const currentCard = { ...cardsVals[id], state };
    setCardsVals({ ...cardsVals, ...{ [id]: currentCard } });
    if (state !== "selectable" && state !== id) {
      increaseTime();
    }
  };

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
