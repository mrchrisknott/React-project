import './App.css';
import Name from "./Name/Name";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Name name="Leo">Green</Name>
        <h1>Hello world</h1>
      </header>
      <Name name="Leo">Gold</Name>
    </div>
  );
}

export default App;
