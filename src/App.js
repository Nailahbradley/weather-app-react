import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Chicago,IL</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
