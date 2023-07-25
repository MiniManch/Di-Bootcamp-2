import {useState} from 'react';
import {isAllLetters} from '../utils';

const Forms = ()=>{

	let [name,setName] = useState('');
	let [age,setAge]   = useState(null);
	let [text,setText] = useState('The content of a textArea goes in the value attribute');
	let [select,setSelect] = useState('')

	let onChangeFunc = (e) => {
		let name = e.target.name;
		if (name == 'name'){
			setName(e.target.value)
		}
		if(name == 'age'){
			setAge(e.target.value);
		}
		if(name == 'select'){
			setSelect(e.target.value)
		}
	}

	let onSubmitFunc = (e) => {
		e.preventDefault();
		if (isAllLetters(name)){
			alert(name);
		}else{
			alert('Name must be only english letters');
		}
	}

	return(
		<form onSubmit={onSubmitFunc}>
			{name!= '' || age != null ? <h1>Hello {name} {age} </h1> : null} 
			<p>Enter your name:</p>
			<input onChange={onChangeFunc} type="text" name='name' /> <br/>
			<input onChange={onChangeFunc} type="number" name='age' /><br/>
			<textarea value={text}/><br/>
			<label htmlFor="mySelect">Select an option:</label>
		    <select name='select' value={select} onChange={onChangeFunc} >
		      <option value="">Select an option</option>
		      <option value="volvo">Volvo</option>
		      <option value="benz">Benz</option>
		    </select>
			<input type="submit" /><br/>
		</form>
	)
}

export default Forms;