import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Dashboard/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
      <Carousel/>
      </header>
    </div>
  );
}

export default App;
