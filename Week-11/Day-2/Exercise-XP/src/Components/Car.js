import {Component,useState} from 'react';
import {getRandomRgbColor} from '../utils';


const Car = (props) => { 
	

	function changeColor(){
		setColor(getRandomRgbColor())
	}
	
	const [color,setColor] = useState('')
	return(
		<header style={{backgroundColor:color}} onClick={()=>changeColor()}>
			This car is a {props.data.car.model}
		</header>
	)
}

export default Car;