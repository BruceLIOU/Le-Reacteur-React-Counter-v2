import "./assets/css/App.css";

import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

const App = () => {
  const [counter, setCounter] = useState([0]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div
          className="add-counter"
          onClick={() => {
            const newCounter = [...counter];
            newCounter.push(counter + 1);
            setCounter(newCounter);
          }}
        >
          Add counter
        </div>
        <div className="line">
          {counter.slice(0, 3).map((counter, index) => {
            return (
              <Counter key={index} counter={counter} setCounter={setCounter} />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
