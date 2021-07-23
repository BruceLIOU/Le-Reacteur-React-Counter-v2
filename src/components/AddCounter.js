const AddCounter = ({ addCounter1, setAddCounter1 }) => {
  return (
    <div className="container">
      <div
        className="add-counter"
        onClick={() => {
          setAddCounter1(addCounter1 + 1);
        }}
      >
        <span>Add counter</span>
      </div>
    </div>
  );
};

export default AddCounter;
