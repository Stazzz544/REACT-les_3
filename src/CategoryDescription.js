import { useParams } from "react-router-dom";

const CategoryDescription = () => {
	let {categoryName} = useParams();
	return(
		<>
			<h1>Category: {categoryName}</h1>
			<ul>
				<li><a href="/cat/nitebook">Ноутбуки</a></li>
				<li><a href="/cat/monitor">Мониторы</a></li>
				<li><a href="/cat/cellphone">Мобильные телефоны</a></li>
			</ul>
		</>
	)
}

export default CategoryDescription;