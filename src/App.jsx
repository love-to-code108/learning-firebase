
import './App.css';
import { Planets } from './planetComponent';
import { Counter } from './couterIncreaseComponent';
import { TextInput } from './components/textComponent';
import { Hider } from './components/hideUnhide';

function App() {

  const planets = [
    {name:"Mercury", isGasPlanet: true},
    {name:"Venus", isGasPlanet: false},
    {name:"Earth", isGasPlanet: false},
    {name:"Mars", isGasPlanet: true},
    {name:"Jupyter", isGasPlanet: false},
    {name:"Saturn", isGasPlanet: false},
    {name:"Uranus", isGasPlanet: true},
    {name:"Neptune", isGasPlanet: false},
  ]
  return (
    <div className="App">
      {/* <Employe salary={10000} position="Senior SDE " company="Amazon" />
      <br /> <br />
      <Employe salary={910000} position="Junior SDE " company="Google" />
      <br /> <br />
      <Employe salary={5610000} position="Project Manager " company="Netflix" /> */}



      {/* understanding arrays and array opertations */}

      {/* {planets.map((value,key) =>{
        return (
          <Planets name={value.name} isGasPlanet={value.isGasPlanet} />
        );
      })} */}


      <Counter />

      <TextInput/>

      <Hider/>

    </div>
  );

}


// this is a component . component name should always start with a CAPS letter

// const Employe = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );


// }

export default App;
