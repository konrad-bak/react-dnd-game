import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ data, classValue }, ref) => {
  return (
    <div className={`item ${classValue}`} ref={ref}>
      <img src={data.img} alt="card" />
    </div>
  );
});
