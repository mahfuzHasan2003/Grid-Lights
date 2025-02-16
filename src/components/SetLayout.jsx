import CustomCheckbox from "./CustomCheckbox";

const SetLayout = () => {
  return (
    <div>
      {[...Array(6)].map((_, index) => (
        <CustomCheckbox key={index} index={index} />
      ))}
    </div>
  );
};

export default SetLayout;
