import './App.css';
import {Component} from 'react';
import Forms from './Components/Forms';

class App extends Component {

  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    return (
      <div className="App tc">
        <Forms />
      </div>
    );
  }
}

export default App;
