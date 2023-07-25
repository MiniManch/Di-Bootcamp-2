import './App.css';
import {Component} from 'react';
import Form from './Components/Form';
class App extends Component {

  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    return (
      <div className="App tc">
        <Form />
      </div>
    );
  }
}

export default App;
