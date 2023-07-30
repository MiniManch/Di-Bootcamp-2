import {someData} from '../utils';
import genID from '../utils'


const Example2 = () =>{
	return(
		<div>
			{someData['Skills'].map((item)=>(
				<div key={genID()}>
					<h1>{item.Area}</h1>
					<ul>
						{item['SkillSet'].map((skill)=>(
							<li key={genID()}>{skill['Name']}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}

export default Example2