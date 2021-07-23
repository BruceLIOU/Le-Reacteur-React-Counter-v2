import "./assets/css/App.css";

import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

const App = () => {
  const [counters, setCounter] = useState([2, 3, 6]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div
          className="add-counter"
          onClick={() => {
            const newCounter = [...counters];
            newCounter.push(1);
            setCounter(newCounter);
          }}
        >
          Add counter
        </div>
        <div className="line">
          {counters.map((counter, index) => {
            return (
              <Counter key={index} counters={index} setCounter={setCounter} />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
