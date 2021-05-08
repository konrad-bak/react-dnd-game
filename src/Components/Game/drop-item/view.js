import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ children, heading, className }, ref) => {
  return (
    <div className={`container ${className}`} ref={ref}>
      <h3>{heading}</h3>
      <div className={`body ${className}`}>{children}</div>
    </div>
  );
});
