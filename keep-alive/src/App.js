import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";

function App() {
  const pingData = async () => {
    try {
      const response = await fetch(
        "https://hr-portal-api.herokuapp.com/keep-alive"
      );
      const json = await response.json();
      console.log(json, "data");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      pingData();
    }, 120000);

    return () => clearInterval(interval);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
