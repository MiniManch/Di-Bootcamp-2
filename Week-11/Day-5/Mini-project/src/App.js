import React, { Component } from 'react';
import Box from './Components/Box'
import './colors.css';
import {getRandItem,colors} from './utils';
import quotes from './QuotesDatabase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color:getRandItem(colors,''),
      quote:getRandItem(quotes,'')
    }
  }

  change =() =>{
    this.setState({color:getRandItem(colors,this.state.color),quote:getRandItem(quotes,this.state.quote)})
  }

  render() {

    return (
      <div className={'box' + ' ' + this.state.color}>
          <Box color={this.state.color} quote={this.state.quote} change ={this.change} />
      </div>
    );
  }
}

export default App;
