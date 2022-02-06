import IPv4Addr from "./IPv4Addr";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Best CIDR Calculator in the universe.</div>
      </header>
      <IPv4Addr />
      <footer>
        <hr />
        If you find this tool useful, you will enjoy reading my blog:{" "}
        <a href="https://rderik.com">rderik.com</a>
      </footer>
    </div>
  );
}

export default App;
