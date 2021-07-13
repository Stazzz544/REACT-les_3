import {BrowserRouter as Router, Link, useParams} from 'react-router-dom';

const CategoryDescription = () => {

	let {categoryName} = useParams();
	
	if (categoryName === 'notebook' || 
		 categoryName === 'monitor'  || 
		 categoryName === 'cellphone') 

	{
		return(
			<>
				<h1>Category: {categoryName}</h1>
				<Link to="/cat">Назад</Link>
			</>
		)

	} else {
		return <Link to="/404"></Link>
	}
}

export default CategoryDescription;