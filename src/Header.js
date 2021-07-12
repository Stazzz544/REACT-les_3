const Header = () => {
	return(
		<>
		<Nav/>
		</>
	)
}

export default Header;

const Nav = () => {
	return(
		<ul>
			<li><a href="/">Главная</a></li>
			<li><a href="/about">О сайте</a></li>
			<li><a href="/cat">Категории</a></li>
		</ul>
	)
}