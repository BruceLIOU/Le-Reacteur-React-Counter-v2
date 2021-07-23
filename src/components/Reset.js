const Reset = ({ setCounter }) => {
  return (
    <div className="container">
      <div
        className="reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        <span>Reset</span>
      </div>
    </div>
  );
};

export default Reset;
