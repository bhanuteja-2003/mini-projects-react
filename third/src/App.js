import Planet from './Planet';
import './App.css';

function App() {
  const planets = [
    {name:"Mars" ,isGasPlanet:false},
    {name:"Earth" ,isGasPlanet:true},
    {name:"Jupi" ,isGasPlanet:true},
    {name:"Sat" ,isGasPlanet:false},
    
    ]
  return (
    <>
    {planets.map((planet) => {
      if(planet.isGasPlanet){
        return <Planet name={planet.name} />
      }
      return <h3>No planet</h3>
    })}
    </>
  );
}

export default App;
