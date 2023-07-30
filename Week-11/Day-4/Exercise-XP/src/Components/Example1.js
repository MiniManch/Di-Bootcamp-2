import {someData} from '../utils';
import genID from '../utils'


const Example1 = () =>{
	return(
		<div>
			<ul>
				{someData['SocialMedias'].map((item)=>(
					<li key={genID()}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default Example1;