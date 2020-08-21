import React from 'react';
import './App.css';
import DrumNav from './components/DrumNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

      <div>
        <DrumNav
          items={[
            {
              label: 'Home',
              value: 'home',
            },
            {
              label: 'Tile',
              value: 'tile',
            },
            {
              label: 'Swipe',
              value: 'swipe',
            },
            {
              label: 'List',
              value: 'list',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
