import React, {useState} from 'react'
import Island from '../IslandComponent.js'
export default function NordanskMapComponent() {

    
  const[showIsland, toggleIsland] = useState(false)
  const handleToggle = function() {
    toggleIsland(!showIsland);  
  }

    return <div id="nordansk" data-toggle="tooltip" data-placement="bottom" title="Nordansk" onClick={handleToggle}>
      {showIsland && <Island islandID= 'nordansk' />}
        </div>
}