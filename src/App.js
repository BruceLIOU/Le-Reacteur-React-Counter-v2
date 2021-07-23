import "./assets/css/App.css";

import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

const App = () => {
  const [counters, setCounter] = useState([0, 0, 0]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div
          className="add-counter"
          onClick={() => {
            const newCounter = [...counters];
            newCounter.push(0);
            setCounter(newCounter);
          }}
        >
          Add counter
        </div>
        <div className="line">
          {counters.map((item, index) => {
            return (
              <Counter
                key={index}
                counters={counters}
                setCounter={setCounter}
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
