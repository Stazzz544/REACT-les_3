import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Category from './Category'
import CategoryDescription from './CategoryDescription'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
	 <Header/>
	 <Router>
		 <Switch>
			 <Route exact path="/"><Home/></Route>
			 <Route path="/About"><About/></Route>
			 <Route path="/Cat"><Category/></Route>
			 <Route path="/Cat/:CategoryDescription"><CategoryDescription/></Route>
			 <Route path="/Cat/nitebook"></Route>
			 <Route path="/Cat/monitor"></Route>
			 <Route path="/Cat/cellphone"></Route>
		 </Switch>
	 </Router>
	 <Footer/>
	 </>
  );
}

export default App;
