import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SingleCell from "./SingleCell";

const GridLayout = ({ layoutConfig }) => {
  const [activeCells, setActiveCells] = useState([]);
  const [isReversing, setIsReversing] = useState(false);
  // cell deactivation functionality
  const deactivateCells = () => {
    setIsReversing(true);
    const timer = setInterval(() => {
      setActiveCells((prev) => {
        const copiedActiveCells = prev.slice();
        copiedActiveCells.pop();
        if (copiedActiveCells.length === 0) {
          clearInterval(timer);
          setIsReversing(false);
        }
        return copiedActiveCells;
      });
    }, 300);
  };
  useEffect(() => {
    if (activeCells.length === layoutConfig.flat().filter(Boolean).length) {
      deactivateCells();
    }
  }, [activeCells]);
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 max-w-lg mx-auto p-3 lg:p-0">
      {layoutConfig
        .flat(1)
        .map((show, index) =>
          show ? (
            <SingleCell
              key={index}
              index={index}
              activeCells={activeCells}
              setActiveCells={setActiveCells}
              isReversing={isReversing}
            />
          ) : (
            <span key={index}></span>
          )
        )}
    </section>
  );
};
GridLayout.propTypes = {
  layoutConfig: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default GridLayout;
