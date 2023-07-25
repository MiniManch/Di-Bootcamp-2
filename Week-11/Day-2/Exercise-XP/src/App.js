import './App.css';
import {Component} from 'react';
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carInfo = {name: "Ford", model: "Mustang"};

class App extends Component {

  constructor(){
    super()
    this.state = {
      car:carInfo
    }
  }

  render(){
    return (
      <div className="App tc">
        <Garage size='small'/>
        <Car data={{car:carInfo}} />
        <Events />
        <Phone />
        <Color / >
      </div>
    );
  }
}

export default App;
