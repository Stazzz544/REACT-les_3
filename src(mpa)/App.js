import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Footer from './Footer';
import CategoryDescription from './CategoryDescription';
import Error from './Error';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
	 	<Header/>
		<Router>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/cat' component={Category}/>
				<Route path='/cat/:title' component={CategoryDescription}/>
				<Route exact path='/cat/notebook' />
				<Route exact path='/cat/monitor' />
				<Route exact path='/cat/cellphone' />
				<Route component={Error}/>
			</Switch>
		</Router>
		<Footer/>
	 </>
  );
}

export default App;
