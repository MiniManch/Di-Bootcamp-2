import {Component,useState,useEffect} from 'react';

const Color = () => {
	let [favColor,setFavColor] = useState('red');

	useEffect(()=>setFavColor('yellow'),[]);

	let colorChange = (e)=>{
		setFavColor('blue')
	}
	return(
		<div>
			<h1>My Fav Color is <em>{favColor}</em> </h1>
			<button onClick={colorChange}>
				change color
			</button>
		</div>
	)
}

export default Color;