import {someData} from '../utils';
import genID from '../utils';

const Example3 = () =>{
	return(
		<div>
			{someData['Experiences'].map((item)=>(
				<div key={genID()}>
					<a href={item['url']}>{item['companyName']}</a>
					<h4>{item['roles'][0]['title']}</h4>
					<p>{item['roles'][0]['startDate']} - {item['roles'][0]['location']}</p>
					<p>item{item['roles'][0]['description']}</p>
				</div>
			))}
		</div>
	)
}


export default Example3;