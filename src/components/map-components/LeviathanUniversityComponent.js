import React, {useState} from 'react'
import Island from '../IslandComponent.js'

export default function LeviathanUniversity() {
  
    const[showIsland, toggleIsland] = useState(false)
  const handleToggle = function() {
    toggleIsland(!showIsland);
  }
    return (<div>
     {showIsland && <Island islandID= 'leviathanU' />}
        <div id="leviathan_university" className='map-component' onClick={handleToggle}></div>
    </div>)
}