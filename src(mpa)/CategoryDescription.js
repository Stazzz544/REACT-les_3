import { useParams } from "react-router-dom";

const CategoryDescription = () => {
	let {categoryName} = useParams();
	return(
		<>
			<h1>Category: {categoryName}</h1>
			<a href="/cat">Назад</a>
		</>
	)
}

export default CategoryDescription;