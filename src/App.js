import logo from "./logo.svg";
import { useState } from "react";
import "./app.scss";

function App() {
  const [first, setFirst] = useState(5);
  const [second, setSecond] = useState(15);

  const runTimer = () => {
    console.log("starting!");
    setTimeout(() => {
      console.log("Focus Done");
      setTimeout(() => {
        console.log("Meditation Done");
      }, second * 60000);
    }, first * 60000);
  };
  const inMillis = (minutes) => minutes;

  return (
    <div className="App">
      <div className="app-main">
        <div className="display-row">
          <Display number={first} cb={setFirst} subTitle={"warm up"} />
          <div className="separator">:</div>
          <Display number={second} cb={setSecond} subTitle={"warm up"} />
        </div>
        <button id="start" onClick={runTimer}>
          Start
        </button>
      </div>
    </div>
  );
}
const Display = ({ number, cb, subTitle }) => {
  const fmtD = (number) => (number < 10 ? `0${number}` : number);
  return (
    <div class="display">
      <div className={"number"}>{fmtD(number)}</div>
      <TimeControl stateRef={number} cb={cb} />
    </div>
  );
};
const TimeControl = ({ stateRef, cb }) => {
  const clickHandler = (e) => {
    cb(stateRef + parseInt(e.target.dataset.value));
  };

  return (
    <div onClick={(e) => clickHandler(e)} className="control-buttons">
      <div data-value="1">+</div>
      <div data-value="-1">-</div>
    </div>
  );
};

export default App;
