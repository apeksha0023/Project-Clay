import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DragDropWrapper = ({ field, index, moveField }) => {
  const [, ref] = useDrag({
    type: "FORM_FIELD",
    item: { index }
  });

  const [, drop] = useDrop({
    accept: "FORM_FIELD",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveField(draggedItem.index, index);
        draggedItem.index = index;
      }
    }
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      {field.label}
    </div>
  );
};

export default DragDropWrapper;
