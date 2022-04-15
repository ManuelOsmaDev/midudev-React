import './App.css';
import Mensaje from './Mensaje'
import Description from './Description'
function App() {

  return (
    <div className="App">
      <Mensaje color="#ff7229" msg="estamos trabajando"/>
      <Mensaje color="#08e8ff" msg=" en un curso de react"/>
      <Description msg="esta es la descripcion con props"/>
    </div>
  );
}

export default App;
