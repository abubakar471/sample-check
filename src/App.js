import logo from './logo.svg';
import './App.css';
import ChatButton from "i-talks"
// import ChatButton from "crx-twenty"
function App() {
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

      {/* <div style={{ backgroundColor: "red", width: "100%", height: "50vh" }}>
        <h1>Hello programmer</h1>
      </div> */}

      <ChatButton />
    </div>
  );
}

export default App;
