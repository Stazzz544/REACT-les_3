import { useParams } from "react-router-dom";

function CategoryDescription () {
	let {title} = useParams();
	return(
		<>
			<h1>Category: {title}</h1>
			<a href="/cat">Назад</a>
		</>
	);
}

export default CategoryDescription;