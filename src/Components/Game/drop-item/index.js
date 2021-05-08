import React, { useRef } from "react";
import View from "./view";

import useDrop from "../hooks/useDrop";

const DropItem = ({ children, heading, onDrop, className, maxItems = 1 }) => {
  const dropRef = useRef();
  const checkMaxItems = (id) => {
    console.log(
      "DEBUGGING:  ~ file: index.js ~ line 10 ~ checkMaxItems ~ maxItems",
      maxItems
    );
    console.log(
      "DEBUGGING:  ~ file: index.js ~ line 11 ~ checkMaxItems ~ React.Children.count(children)",
      React.Children.count(children)
    );
    if (maxItems === React.Children.count(children)) return;
    onDrop(id);
  };
  const { droppedItem } = useDrop({
    ref: dropRef,
    onDrop: checkMaxItems,
  });

  return (
    <View
      ref={dropRef}
      heading={heading}
      droppedItem={droppedItem}
      className={className}
    >
      {children}
    </View>
  );
};

export default DropItem;
