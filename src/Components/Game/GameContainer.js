import DragItem from "./drag-item";
import DropItem from "./drop-item";
import { useGame, useDispatchGame } from "./hooks/useGame";

const GameContainer = () => {
  const { cardsVals, isDirty, difficulty } = useGame();
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
      return card.id === id;
    });

    if (state !== "selectable" && !droppedItem.expected.includes(state)) {
      increaseTime();
    }
  };

  return (
    <>
      <section className="game" style={{ clear: "both", marginTop: "1.5rem" }}>
        <div
          className={`cards ${difficulty}`}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <DropItem maxItems={5} onDrop={onDrop("selectable")}>
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
          {cardsVals.map(({ id }, index) => {
            return (
              <DropItem
                className="solution"
                maxItems={1}
                onDrop={onDrop(index)}
                key={id}
              >
                {cardsVals
                  .filter((card) => card.state === index)
                  .map((card) => (
                    <DragItem
                      id={card.id}
                      data={card}
                      key={`card ${card.id}`}
                    />
                  ))}
              </DropItem>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default GameContainer;
