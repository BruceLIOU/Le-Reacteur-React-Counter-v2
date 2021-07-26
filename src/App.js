import "./assets/css/App.css";

import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

const App = () => {
  const [counters, setCounters] = useState([0]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        {counters.length < 3 && (
          <div
            className="add-counter"
            onClick={() => {
              const newCounter = [...counters];
              newCounter.push(0);
              setCounters(newCounter);
            }}
          >
            Add counter
          </div>
        )}

        <div className="line">
          {counters.slice(0, 3).map((item, index) => {
            return (
              <Counter
                key={index}
                counters={counters}
                setCounters={setCounters}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
