import React, { useRef } from "react";
import View from "./view";

import useDrop from "../hooks/useDrop";

const DropItem = ({
  children,
  onDrop,
  className = "",
  maxItems = 1,
  onEmpty,
}) => {
  const dropRef = useRef();
  const checkMaxItems = (id) => {
    if (maxItems === React.Children.count(children)) return;
    onDrop(id);
  };
  const { droppedItem } = useDrop({
    ref: dropRef,
    onDrop: checkMaxItems,
  });

  return (
    <View ref={dropRef} droppedItem={droppedItem} className={className}>
      {children}
    </View>
  );
};

export default DropItem;
