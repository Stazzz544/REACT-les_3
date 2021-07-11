import Error from './Error';
import CategoryDescription from './CategoryDescription';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function Category () {
	return(
		<>
			<h1>Category</h1>
			<Router>
				<ul>
					<li><Link to='/cat/notebook'>Ноутбуки</Link></li>
					<li><Link to='/cat/monitor'>Мониторы</Link></li>
					<li><Link to='/cat/cellphone'>Мобильные телефоны</Link></li>
				</ul>
			<Switch>
				<Route exact path='/cat/notebook' />
				<Route exact path='/cat/monitor' />
				<Route exact path='/cat/cellphone' />
				<Route path='/cat/:title' component={CategoryDescription}/>

			</Switch>
		</Router>

		</>
	);
}

export default Category;