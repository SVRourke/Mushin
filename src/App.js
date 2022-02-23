import { useState } from "react";
import useSound from "use-sound"
import singing_bell from "./media/singing_bell.mp3"
import Display from "./components/Display"
import "./app.scss";

function App() {
  const [first, setFirst] = useState(5);
  const [second, setSecond] = useState(15);
  const [play] = useSound(singing_bell)

  const decrementFirst = () => {
    setFirst(first - 1)
  }

  const runTimer = () => {
    play()
    console.log("starting!", first, second);
    setInterval(decrementFirst, 60000)
    setTimeout(() => {
      play(0, true, 2)
      clearInterval()
      setInterval(() => setSecond(second - 1), 60000)
      setTimeout(() => {
        play()
      }, second * 60000);
    }, first * 60000);
    clearInterval()
  };

  return (
    <div className="App">
      <div className="app-main">
        <div className="display-row">
          <Display number={first} cb={setFirst} subTitle={"phase 1"} />
          <div className="separator">:</div>
          <Display number={second} cb={setSecond} subTitle={"phase 2"} />
        </div>
        <button id="start" onClick={runTimer}>
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
