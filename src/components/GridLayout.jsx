import { useEffect, useState } from "react";
import SingleCell from "./SingleCell";

const GridLayout = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const layoutConfig = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const [activeCells, setActiveCells] = useState([]);
  const [isReversing, setIsReversing] = useState(false);
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
    }, 1000);
  };
  useEffect(() => {
    if (activeCells.length === layoutConfig.flat().filter(Boolean).length) {
      deactivateCells();
    }
  }, [activeCells]);
  return (
    <section className="grid grid-cols-3 gap-2 md:gap-4 max-w-lg mx-auto p-3 lg:p-0">
      {layoutConfig
        .flat()
        .map((isTrue, index) =>
          isTrue ? (
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

export default GridLayout;
