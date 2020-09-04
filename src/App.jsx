import React from 'react';
import './App.scss';
import Watchlist from './components/Watchlist';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <div className='leftColumn'>
        <Watchlist />
      </div>
      <div className='rightColumn'>
        <Search />
        <Results />
      </div>
    </div>
  );
}

export default App;
