import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
	 <Header/>
	 <Router>
		 <Switch>

			 <Route exact path="/" component={Home}/>
			 <Route exact path="/About" component={About}/>
			 <Route exact path="/cat" component={Category}/>

			 <Route exact path="/Cat/notebook"/>
			 <Route exact path="/Cat/monitor"/>
			 <Route exact path="/Cat/cellphone"/>

			 <Route component={Error}/>

		 </Switch>
		 <Route  path="/Cat/:categoryName" component={CategoryDescription}/>
	 </Router>
	 <Footer/>
	 </>
  );
}

export default App;
