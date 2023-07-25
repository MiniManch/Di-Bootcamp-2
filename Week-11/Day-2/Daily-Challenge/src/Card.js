 import {Component} from 'react';

 export default class Card extends Component{
 	render(){
 		let {data} = this.props;
 		return(
 			<div id ={data.item.id} className='flex'>
 				<div className='w-25 pa5 mr3' id='name'>
 					{data.item.name}
 				</div>
 				<div className='w-25 pa5 mr3' id='votes'>
 					{data.item.votes}
 				</div>
 				<button className='w-25 pa5 mr3' onClick={data.onClickFunc}>
 					Add!
 				</button>
 			</div>
 		)
 	}
 }