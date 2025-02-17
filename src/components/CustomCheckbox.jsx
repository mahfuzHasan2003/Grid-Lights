import "./CustomCheckbox.css";
import PropTypes from "prop-types";

const CustomCheckbox = ({ index, setLayoutConfig, layoutConfig }) => {
  const handleUpdateConfig = () => {
    setLayoutConfig((prev) => {
      const copiedConfig = prev.map((subArray) => [...subArray]);
      const focusedArray = Math.floor(index / 3);
      const focusedSubArray = index % 3;
      const focusedCheckboxValue = copiedConfig[focusedArray][focusedSubArray];
      copiedConfig[focusedArray][focusedSubArray] = !focusedCheckboxValue;
      return copiedConfig;
    });
  };
  return (
    <>
      <input
        type="checkbox"
        id={index}
        onClick={handleUpdateConfig}
        defaultChecked={layoutConfig.flat()[index]}
        disabled={
          layoutConfig.flat()[index] &&
          layoutConfig.flat().filter(Boolean).length <= 2
        }
      />
      <label htmlFor={index}>
        <span className="cursor-pointer"></span>
      </label>
    </>
  );
};
CustomCheckbox.propTypes = {
  index: PropTypes.number.isRequired,
  setLayoutConfig: PropTypes.func,
  layoutConfig: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default CustomCheckbox;
