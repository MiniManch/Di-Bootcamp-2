import {Component} from 'react';

export default class Events extends Component{
	constructor(){
		super();
		this.state = {
			isToggleOn:true
		}
	}

	clickFunc = (e) => {
		alert('i was Clicked!')
	}

	keyDownFunc = (e) =>{
		let elem = e.target;

		if (e.key === 'Enter' || e.keyCode === 13) {
        	if(elem.value == ''){
        		alert('The input is empty!')
        	}
        	else{
        		alert(`The input contains : \n ${elem.value}`)
        	}
      	}
	}

	togglerFunc = (e) =>{
		this.setState({isToggleOn : !this.state.isToggleOn})
	}

	render(){
		return(
			<div>
				<button onClick={this.clickFunc}>
					Click me!
				</button>
				<input 
					style= {{display:'block'}}
					onKeyDown={this.keyDownFunc}
					type="text"
					placeholder='press Enter!'
				/>
				<button onClick={this.togglerFunc}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		)
	}
}