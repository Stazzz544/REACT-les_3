import './App.css';
import Home from './Home';
import About from './About';
import Category from './Category';
import Footer from './Footer';
import Error from './Error';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
	 	
		<Router>
		<ul>
			<li><Link to='/'>Главная</Link></li>
			<li><Link to='/about'>О сайте</Link></li>
			<li><Link to='/cat'>Категории</Link></li>
		</ul>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/cat' component={Category}/>
				<Route component={Error}/>
				
			</Switch>
		</Router>
		<Footer/>
	 </>
  );
}

export default App;
