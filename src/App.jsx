import React from 'react';
import './App.scss';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Search />
      <Results />
    </div>
  );
}

export default App;
