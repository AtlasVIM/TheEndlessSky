//import logo from './logo.svg';
import './App.css';
import React from 'react'
import Nordansk from './components/map-components/NordanskMapComponent.js'
import LeviathanUniversity from './components/map-components/LeviathanUniversityComponent.js';

function App() {
  return (
    <div className = "container">
      <div id="background-map">
        <Nordansk/>
        <LeviathanUniversity/>
      </div>
    </div>
  )
}




export default App;
