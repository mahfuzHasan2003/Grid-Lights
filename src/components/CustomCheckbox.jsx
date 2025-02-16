import "./CustomCheckbox.css";
import PropTypes from "prop-types";

const CustomCheckbox = ({ index }) => {
  return (
    <div>
      <input type="checkbox" id={index} />
      <label htmlFor={index}>
        <span></span>
      </label>
    </div>
  );
};
CustomCheckbox.propTypes = {
  index: PropTypes.number.isRequired,
};
export default CustomCheckbox;
