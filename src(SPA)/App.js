import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';

import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {


  return (
    <>
	 <Router>
		 <Header/>
		 <Switch>
		 	 
			 <Route exact path="/" component={Home}/>
			 <Route path="/about" component={About}/>
			 <Route exact path="/cat" component={Category}/>
			 
			 <Route exact path="/cat/notebook"/>
			 <Route exact path="/cat/monitor"/>
			 <Route exact path="/cat/cellphone"/>

			 <Route component={Error}/>

		 </Switch>
		 <Route  path="/Cat/:categoryName" component={CategoryDescription}/>
		 
	 </Router>
	 <Footer/>
	 </>
  );
}

export default App;
