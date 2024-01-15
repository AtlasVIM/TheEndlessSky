import logo from './logo.svg';
import './App.css';



function showNordansk() {
  alert('test');
}

function App() {
  return (
    <div class = "container">
      <div id="background-map"></div>
      <div class="tooltip" id="nordansk" onClick={showNordansk} border="0"><span class="tooltiptext">Nordansk</span></div>  
    </div>
  )
}




export default App;
