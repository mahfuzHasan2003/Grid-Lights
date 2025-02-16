import { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import PropTypes from "prop-types";
const SetLayout = ({ setLayoutConfig, layoutConfig }) => {
  const [position, setPosition] = useState({ x: 128, y: 40 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const handleMouseDown = (event) => {
    setDragging(true);
    setStartPos({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (!dragging) return;

    // Calculate movement delta
    const deltaX = event.clientX - startPos.x;
    const deltaY = event.clientY - startPos.y;

    setPosition((prev) => ({
      x: prev.x - deltaX, // Move rightward
      y: prev.y + deltaY, // Move downward
    }));

    // Update start position
    setStartPos({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };
  return (
    <div
      className="fixed border p-5 rounded-md cursor-move backdrop-blur-xs"
      style={{
        top: `${position.y}px`,
        right: `${position.x}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      // draggable
    >
      <div className="font-mono mb-3">2 ≤ checkedBox ≥ 9</div>
      <div className="grid grid-cols-3 max-w-fit gap-2 mx-auto">
        {[...Array(9)].map((_, index) => (
          <CustomCheckbox
            key={index}
            index={index}
            setLayoutConfig={setLayoutConfig}
            layoutConfig={layoutConfig}
          />
        ))}
      </div>
    </div>
  );
};
SetLayout.propTypes = {
  setLayoutConfig: PropTypes.func,
  layoutConfig: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default SetLayout;
