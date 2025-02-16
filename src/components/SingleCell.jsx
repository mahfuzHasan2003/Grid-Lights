import PropTypes from "prop-types";

const SingleCell = ({ index, activeCells, setActiveCells, isReversing }) => {
  const handleLightOn = () => {
    if (activeCells.includes(index)) {
      setActiveCells(activeCells.filter((cell) => cell !== index));
    } else {
      setActiveCells([...activeCells, index]);
    }
  };

  return (
    <button
      className={`border aspect-square rounded-md cursor-pointer disabled:cursor-not-allowed ${
        activeCells.includes(index) && "bg-orange-400 border-transparent"
      }`}
      onClick={handleLightOn}
      disabled={isReversing}
    ></button>
  );
};

SingleCell.propTypes = {
  index: PropTypes.number.isRequired,
  activeCells: PropTypes.arrayOf(PropTypes.number).isRequired,
  setActiveCells: PropTypes.func.isRequired,
  isReversing: PropTypes.bool.isRequired,
};
export default SingleCell;
