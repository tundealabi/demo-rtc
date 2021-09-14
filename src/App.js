import { useEffect } from 'react';
import CentrifugeClient from 'centrifuge';
import logo from './logo.svg';
import './App.css';

function App() {
  const centrifugeConnect = new CentrifugeClient('wss://realtime.zuri.chat/connection/websocket');
  useEffect(() => {
    centrifugeConnect.on('connect', function (ctx) {
      console.log('connected', ctx);
    });

    centrifugeConnect.on('disconnect', function (ctx) {
      console.log('disconnected', ctx);
    });

    centrifugeConnect.subscribe('goalstest', function (ctx) {
      console.log('goalstest', ctx);
    });
    centrifugeConnect.subscribe('edit_vision', function (ctx) {
      console.log('edit_vision', ctx);
    });

    centrifugeConnect.connect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
