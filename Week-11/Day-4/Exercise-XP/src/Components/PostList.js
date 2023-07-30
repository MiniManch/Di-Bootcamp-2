import {posts} from '../utils';

const PostList = () =>{
	return(
		<div>
		{posts.map((item)=>(
			<div key={item.id}>
				<h1>{item.title}</h1>
				<p>{item.content}></p>
			</div>
		))}
		</div>
	)
}
export default PostList;