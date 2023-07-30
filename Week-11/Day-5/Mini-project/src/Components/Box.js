import {Component} from 'react';

export default class Box extends Component{
	render(){
		let quote = this.props.quote;
		let color = this.props.color;

		return(
			<div className= 'container'>
			    <div className="row justify-content-center mt-5">
			      <div className="col-6 bg-white p-4 rounded">
			      	<h2>"{quote['quote']}."</h2>
			      	<p><em> - {quote['author'] !='' ? quote['author'] : 'Unknown'}</em></p>
			     	<button onClick={this.props.change}className={'btn' + ' ' + color}>Render</button>
			      </div>
			    </div>
		  </div>
		)
	}
}