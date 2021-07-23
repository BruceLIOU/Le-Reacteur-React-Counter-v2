const Counter = ({ counters, setCounter, item, index }) => {
  return (
    <div className="column">
      <div className="counter">
        <div
          className={`less ${counters === 0 ? "hidden" : ""}`}
          onClick={() => {
            const copyOfCounters = [...counters];
            copyOfCounters[index]--;
            setCounter(copyOfCounters);
          }}
        >
          <svg
            width="53"
            height="12"
            viewBox="0 0 53 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.75 0.375H3.75C1.6793 0.375 0 2.0543 0 4.125V7.875C0 9.9457 1.6793 11.625 3.75 11.625H48.75C50.8207 11.625 52.5 9.9457 52.5 7.875V4.125C52.5 2.0543 50.8207 0.375 48.75 0.375Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className="result"
          onClick={() => {
            const copyOfCounters = [...counters];
            console.log(copyOfCounters);
          }}
        >
          {counters}
        </div>
        <div
          className={`more ${counters === 10 ? "hidden" : ""}`}
          onClick={() => {
            const copyOfCounters = [...counters];
            copyOfCounters[index]++;
            setCounter(item);
          }}
        >
          <svg
            width="53"
            height="54"
            viewBox="0 0 53 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.75 21.375H31.875V4.5C31.875 2.4293 30.1957 0.75 28.125 0.75H24.375C22.3043 0.75 20.625 2.4293 20.625 4.5V21.375H3.75C1.6793 21.375 0 23.0543 0 25.125V28.875C0 30.9457 1.6793 32.625 3.75 32.625H20.625V49.5C20.625 51.5707 22.3043 53.25 24.375 53.25H28.125C30.1957 53.25 31.875 51.5707 31.875 49.5V32.625H48.75C50.8207 32.625 52.5 30.9457 52.5 28.875V25.125C52.5 23.0543 50.8207 21.375 48.75 21.375Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        className="reset"
        onClick={() => {
          const copyOfCounters = [...counters];
          copyOfCounters[index] = 0;
          setCounter(copyOfCounters);
        }}
      >
        <span>Reset</span>
      </div>
    </div>
  );
};

export default Counter;
