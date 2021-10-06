import React from 'react';
import './App.css';
import Footer from './components/Footer';
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
        <Footer />
    </div>
  );
}

export default App;
