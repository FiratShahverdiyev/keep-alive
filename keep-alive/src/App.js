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
    </div>
  );
}

export default App;
