import {Component} from 'react';

export default class Form extends Component{
	constructor(){
		super();
		this.state = {
			fname:'',
			lname:'',
			age:'',
			gender:'',
			destination:'',
			diet:[]
		}
	}

	handleGenderChange = (e) => {
		let genderChosen = e.target.value;
		this.setState({gender:genderChosen})
	}

	handleInputChange = (e) =>{
		let inputName = e.target.name;

		if(inputName == 'fname'){
			this.setState({fname:e.target.value});
		}
		if(inputName == 'lname'){
			this.setState({lname:e.target.value});
		}
		if(inputName == 'age'){
			this.setState({age:e.target.value});
		}
	}

	handleSelectChange = (e) =>{
		this.setState({destination:e.target.value})
	}


	handleCheckboxChange = (e) =>{
		let option = e.target.value;

		if(!this.state.diet.includes(option)){
			this.setState({diet:[...this.state.diet,option]})
		}else{
			this.setState({diet:this.state.diet.filter((item)=> item!=option)})
		}
	}

	onSubmitFunc = (e) =>{

	}

	render(){

		return(
			<>
			<form action="/" method='get' onSubmit={this.onSubmitFunc} >
				<input
				 	type="text"
				 	name='fname'
				 	className='ma3'
				 	placeholder='First Name'
				 	onChange={this.handleInputChange}/> 
				<br/>
				<input
					type="text"
					name='lname'
					className='ma3'
					placeholder='Last Name'
					onChange={this.handleInputChange} />
				<br/>
				<input
					type="number"
					name='age'
					className='ma3'
					placeholder='Age'
					onChange={this.handleInputChange} />
				<br/>
				<label>
			        <input
			          type="radio"
			          name="gender"
			          value="male"
			          defaultChecked
			          className='ma3'
			          onClick={this.handleGenderChange}
			        />
			        Male
			    </label>
				<br/>
		      	<label>
			        <input
			          type="radio"
			          name="gender"
			          value="female"
			          defaultChecked
			          className='ma3'
			          onClick={this.handleGenderChange}
			        />
			        Female
		        </label>
		        <br/>
		        <label htmlFor="mySelect">Select a Destination:</label>
		        <br/>
		        <select className='ma3' id="mySelect" name='dest' value={this.state.destination} 
		        onChange={this.handleSelectChange}
		        >
		          <option value="">Select an option</option>
		          <option value="thailand">Thailand</option>
		          <option value="brazil">Brazil</option>
		          <option value="japan">Japan</option>
		        </select>
	            <br/>

		        <label htmlFor="checkbox1">
	               <input
	                 type="checkbox"
	                 id="checkbox1"
	                 className='ma3'
	                 value='Nut Free'
	                 name='nut'
	                 onChange={this.handleCheckboxChange}
	               />
	               Nut Free
	            </label>
	            <br/>
	            <label htmlFor="checkbox2">
	               <input
	                 type="checkbox"
	                 id="checkbox2"
	                 className='ma3'
	                 value='Vegan'
	                 name='veg'
 					 onChange={this.handleCheckboxChange}
	               />
	               Vegan
	            </label>
	            <br/>

	            <label htmlFor="checkbox3">
	                <input
	                 type="checkbox"
	                 id="checkbox3"
	                 className='ma3'
	                 value='Lactose Free'
	                 name='lac'
  					 onChange={this.handleCheckboxChange}

	               />
	               Lactose Free
	            </label>
	            <br/>

	          	<input type="submit" />
			</form>
			<div>
				<p>
					<strong>Your name: </strong> {this.state.fname} {this.state.lname}
					<br/>
					<strong>Your age: </strong> {this.state.age}
					<br/>
					<strong>Your gender: </strong> {this.state.gender}
					<br/>
					<strong>Your destination: </strong> {this.state.destination}
					<br/>
					<strong>Your dietray Restrictions: </strong> 
					<br/>
					**Nuts Free: {this.state.diet.includes('Nut Free') ? 'Yes' : 'No'}
					<br/>
					**Lactose Free: {this.state.diet.includes('Lactose Free') ? 'Yes' : 'No'}
					<br/>
					**Vegan: {this.state.diet.includes('Vegan') ? 'Yes' : 'No'}
				</p>
			</div>
			</>
		)
	}
}