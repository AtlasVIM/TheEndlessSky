import React, {useState} from 'react'
import Island from '../IslandComponent.js'
export default function NordanskMapComponent() {

    
  const[showIsland, toggleIsland] = useState(false)
  const handleToggle = function() {
    toggleIsland(!showIsland);  
  }

    return <div>
     {showIsland && <Island islandID= 'nordansk' />}
    <div id="nordansk" className='map-component' data-toggle="tooltip" data-placement="bottom" title="Nordansk" onClick={handleToggle}></div>
        </div>
}