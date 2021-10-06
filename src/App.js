import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Table from './components/Table';
import ThanksLinks from './components/ThanksLinks';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Table />
        <ThanksLinks />
    </div>
  );
}

export default App;
