import {Component} from 'react';
import {getRandomRgbColor} from '../utils';

export default class Phone extends Component{
	constructor(){
		super();
		this.state = {
			brand: "Samsung",
			model: "Galaxy S20",
			color: "black",
			year: 2020
		}
	}

	changeColor(){
		let newColor = getRandomRgbColor();
		this.setState({color:newColor})
		console.log(newColor)
	}
	
	render(){
		return(
			<div>
				<p>
					my phone is a <strong>{this.state.brand}</strong> <br/>
					its a {this.state.model}, its {this.state.color} <br/>
					from {this.state.year}
				</p>
				<button onClick={()=>this.changeColor()} >
					Click To Change Color!
				</button>
			</div>
		)
	}
}