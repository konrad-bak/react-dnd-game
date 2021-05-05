import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1rem",
  marginBottom: "1rem",
  cursor: "move",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const SourceBox = ({ src }) => {
  const [{ opacity }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    // options: {
    //   dropEffect: showCopyIcon ? "copy" : "move",
    // },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      <img src={src} alt="letter" />
    </div>
  );
};
