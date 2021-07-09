import { useParams } from "react-router-dom";

function CategoryDescription () {
	let {title} = useParams();


	return(
		<>
			<h1>Category: {title}</h1>
		</>
	);
}

export default CategoryDescription;