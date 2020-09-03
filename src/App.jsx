import React from 'react';
import './App.scss';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Watchlist</h1>
      </header>
      <Search />
      <Results />
    </div>
  );
}

export default App;
