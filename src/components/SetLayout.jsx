import { useRef, useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import PropTypes from "prop-types";
const SetLayout = ({ setLayoutConfig, layoutConfig }) => {
  const layoutRef = useRef(null);
  const [position, setPosition] = useState({ x: 128, y: 40 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const handleStart = (event) => {
    setDragging(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    setStartPos({ x: clientX, y: clientY });
  };

  const handleMove = (event) => {
    if (!dragging) return;

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    // Calculate movement delta
    const deltaX = clientX - startPos.x;
    const deltaY = clientY - startPos.y;

    setPosition((prev) => ({
      x: prev.x - deltaX, // Move rightward
      y: prev.y + deltaY, // Move downward
    }));

    // Update start position
    setStartPos({ x: clientX, y: clientY });
  };

  // Handle Mouse & Touch End
  const handleEnd = () => {
    setDragging(false);
  };
  const handleRemoveLayout = () => {
    layoutRef.current.className += " scale-0";
  };
  return (
    <div
      className="fixed border rounded-md cursor-move backdrop-blur-sm max-w-48 transition-transform"
      style={{
        top: `${position.y}px`,
        right: `${position.x}px`,
      }}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      ref={layoutRef}
    >
      <div className="relative p-5">
        <button
          className="absolute bg-red-500 rounded-full text-md w-8 aspect-square flex items-center justify-center -top-4 -right-4 cursor-pointer"
          onClick={handleRemoveLayout}
        >
          ×
        </button>
        <p>Drag me &amp; place where you want!!</p>
        <p className="font-mono mb-3 text-red-500 text-sm">
          2 ≤ checkedBox ≤ 9
        </p>
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
    </div>
  );
};
SetLayout.propTypes = {
  setLayoutConfig: PropTypes.func,
  layoutConfig: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default SetLayout;
