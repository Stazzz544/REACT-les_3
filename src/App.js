import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Footer from './Footer';
import CategoryDescription from './CategoryDescription';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
	 	<Header/>
		<CategoryDescription/>
		<Router>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/About' component={About}/>
				<Route exact path='/cat' component={Category}/>
			</Switch>
		</Router>
		<Footer/>
	 </>
  );
}

export default App;
