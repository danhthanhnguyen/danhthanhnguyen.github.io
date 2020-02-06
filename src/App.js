import React from 'react';
import Header from './component/header/header.js';
import Main from './component/main/main.js';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className="App-main">
        <Main/>
      </main>
    </div>
  );
}

export default App;
