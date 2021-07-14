const Header = (props) => {
	return(
		<Nav linkData = {props.linkData}/>
	)
}

export default Header;

const Nav = (props) => {

	const links = props.linkData.map(item => {
		return <li key={item.link}><a href={item.link}>{item.text}</a></li>
	})
	return(
		<ul>
			{links}
		</ul>
	)
}