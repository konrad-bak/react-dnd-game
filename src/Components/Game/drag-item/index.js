import React, { useState, useRef } from "react";
import "../styles.css";
import useDrag from "../hooks/useDrag";
import View from "./view";

const DragItem = ({ dragEffect, data, id, onTouch }) => {
  const dragRef = useRef();
  const [classValue, setClassValue] = useState("grab");
  useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => {
      setClassValue("grabbing");
      if (onTouch) onTouch();
    },
    onDragEnd: () => {
      setClassValue("grab");
    },
  });
  return <View ref={dragRef} data={data} classValue={classValue} />;
};

export default DragItem;
