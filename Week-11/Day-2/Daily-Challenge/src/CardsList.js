import {Component} from 'react';
import Card from './Card';

export default class CardList extends Component{
	render(){
		let {data} = this.props;

		return(
			<div className='flex flex-column'>
				{data.cards.map((card,index)=>(
					<Card data={{item:card,onClickFunc:data.onClickFunc}} key={index+1} />
				))}
			</div>
		)
	}
}