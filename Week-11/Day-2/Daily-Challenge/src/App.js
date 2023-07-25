import './App.css';
import {Component} from 'react';
import {cards} from './utils';
import CardsList from './CardsList';

class App extends Component {

  constructor(){
    super()
    this.state = {
      cards:cards
    }
  }

  onClickFunc = (e) => {
    let cardElem = e.target.parentElement;
    let cardId   = cardElem.id;

    let data = this.state.cards;

    for (let card of data){
      if(card.id == cardId){
        card.votes +=1;
      }
    }
    this.setState({cards:data})
  }

  render(){
    let data = {cards:cards,onClickFunc:this.onClickFunc}
    return (
      <div className="App tc">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload. {4+5}
          </p>
          <CardsList data={data}/>
        </header>
      </div>
    );
  }
}

export default App;
