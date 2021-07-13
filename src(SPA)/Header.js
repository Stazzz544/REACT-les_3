
import {BrowserRouter as Router, Link,} from 'react-router-dom';

const Header = () => {
	return(
		<Nav/>
	)
}

export default Header;

const Nav = () => {
	return(
		<ul>
			<li><Link to="/">Главная</Link></li>
			<li><Link to="/about">О сайте</Link></li>
			<li><Link to="/cat">Категории</Link></li>
		</ul>
	)
}