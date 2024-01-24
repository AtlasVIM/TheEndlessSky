//import logo from './logo.svg';
import './App.css';
import React from 'react'
import Nordansk from './components/map-components/NordanskMapComponent.js'


function App() {
  return (
    <div className = "container">
      <div id="background-map">
        <Nordansk/>
      </div>
    </div>
  )
}




export default App;
