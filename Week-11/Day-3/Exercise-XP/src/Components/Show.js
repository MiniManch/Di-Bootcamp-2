import {Component} from 'react';

export default class Show extends Component{
	constructor(){
		super();
		this.state = {

		}
	}		

	componentWillUnmount(){
		alert('unmounted');
	}

	render(){
		return(
			<header>Hello World</header>
		)
	}
}