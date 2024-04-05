import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function mas() {
    if (count >= 200) {
      return;
    }
    setCount((count) => count + 1);
  }
  function menos() {
    if ((count) <= -200) return;

    setCount((count) => count - 1);
  }
  function masocho() {
    if (count + 8 > 200) {
      setCount(200);
      return;
    }

    setCount((count) => count + 8);
  }

  function menosocho() {
    if (count - 8 < -200) {
      setCount(-200);
      return;
    }
    setCount((count) => count - 8);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
         


        <button onClick={() => menos()}>Restar</button>

        <button onClick={() => menosocho()}>-8</button>
        
        <p> count is {count}</p>

        <button onClick={() => mas()}>Sumar</button>

        <button onClick={() => masocho()}>+8</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
