import DragItem from "./drag-item";
import DropItem from "./drop-item";
import { useGame, useDispatchGame } from "./hooks/useGame";

const GameContainer = () => {
  const { cardsVals, isDirty } = useGame();
  const { increaseTime, setCardsVals, setIsDirty } = useDispatchGame();

  const onDrop = (state) => (id) => {
    setCardsVals(
      cardsVals.map((card) => {
        if (card.id === id) {
          return { ...card, state };
        }
        return card;
      })
    );
    const droppedItem = cardsVals.find((card) => {
      if (card.id === id) {
        return card;
      }
    });

    if (state !== "selectable" && !droppedItem.expected.includes(state)) {
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
            {cardsVals
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
            {cardsVals
              .filter((card) => card.state === "1")
              .map((card) => (
                <DragItem id={card.id} data={card} key={`card ${card.id}`} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("2")}>
            {cardsVals
              .filter((card) => card.state === "2")
              .map((card) => (
                <DragItem id={card.id} data={card} key={`card ${card.id}`} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("3")}>
            {cardsVals
              .filter((card) => card.state === "3")
              .map((card) => (
                <DragItem id={card.id} data={card} key={`card ${card.id}`} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("4")}>
            {cardsVals
              .filter((card) => card.state === "4")
              .map((card) => (
                <DragItem id={card.id} data={card} key={`card ${card.id}`} />
              ))}
          </DropItem>
          <DropItem className="solution" maxItems={1} onDrop={onDrop("5")}>
            {cardsVals
              .filter((card) => card.state === "5")
              .map((card) => (
                <DragItem id={card.id} data={card} key={`card ${card.id}`} />
              ))}
          </DropItem>
        </div>
      </section>
    </>
  );
};

export default GameContainer;
