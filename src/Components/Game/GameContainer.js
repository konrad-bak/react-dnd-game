import { SourceBox } from "./SourceBox";
import { TargetBox } from "./TargetBox";
import Zimg from "./letters/z.svg";
import Oimg from "./letters/o.svg";
import Vimg from "./letters/v.svg";
import Uimg from "./letters/u.svg";

const GameContainer = () => {
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
          <SourceBox src={Vimg} />
          <SourceBox src={Oimg} />
          <SourceBox src={Zimg} />
          <SourceBox src={Oimg} />
          <SourceBox src={Uimg} />
        </div>
        <div className="slots" style={{ display: "flex" }}>
          <TargetBox />
          <TargetBox />
          <TargetBox />
          <TargetBox />
          <TargetBox />
        </div>
      </section>
    </>
  );
};

export default GameContainer;
