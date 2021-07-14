import {useParams} from 'react-router-dom';

const CategoryDescription = () => {
	
	let {categoryName} = useParams();
	const catList = ['notebook', 'monitor', 'cellphone']
	if (!catList.includes(categoryName)) window.location.href="/404";
	
	return(
		<>
			<h1>Category: {categoryName}</h1>
			<a href="/cat">Назад</a>
		</>
	)
}

export default CategoryDescription;