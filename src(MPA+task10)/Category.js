import {useRouteMatch} from 'react-router-dom';

const Category = (props) => {
	let match = useRouteMatch();

	const links = props.linkData.map(e => {
	return <li key ={`${match.url}${e.link}`} ><a href={`${match.url}${e.link}`}>{e.text}</a></li>;
	})

	return(
		<>
			<h1>Category</h1>
			<ul>
				{links}
			</ul>
		</>
	)
}

export default Category;