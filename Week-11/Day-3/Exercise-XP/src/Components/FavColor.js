import React, { Component } from 'react';
import Show from './Show';

export default class FavColor extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
      show:true
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    if (this.state.color !== 'yellow') {
      setTimeout(() => {
        this.setState({ color: 'yellow' });
        console.log('after update');
      }, 2000);
    }
  }

  getSnapshotBeforeUpdate(){
  	console.log('in getSnapshotBeforeUpdate')
  }

  handleClick = () => {
    this.setState({ color: 'blue' });
    console.log(this.state.color);
  };

  handleDelete = () =>{
  	this.setState({show:false});
  }

  render() {
    return (
    	<div>	
      		<h1 onClick={this.handleClick}>My Fav Color is {this.state.color}</h1>
      		{this.state.show ? <Show/> : null}
      		<button onClick={this.handleDelete}> Delete	</button>

    	</div>
    );
  }
}
