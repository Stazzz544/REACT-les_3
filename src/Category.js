import CategoryDescription from "./CategoryDescription";

import {BrowserRouter as Router, Link, useRouteMatch} from 'react-router-dom';

const Category = () => {
	let match = useRouteMatch();

	return(
		<>
			<h1>Category</h1>
			<ul>
				<li><Link to={`${match.url}/notebook`}>Ноутбуки</Link></li>
				<li><Link to={`${match.url}/monitor`}>Мониторы</Link></li>
				<li><Link to={`${match.url}/cellphone`}>Мобильные телефоны</Link></li>
			</ul>
		</>
	)
}

export default Category;