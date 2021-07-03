import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Error  from './404';
import Home from './Home';
import Itemdetails from './Itemdetails';
import Register from './register';
import Navbar  from './partials/Navbar';
import Footer from './partials/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
     
        <Switch>
              {/* //cause router concept is to search if path is within also not  on match only so it render always home  so we use exact to inform that use this path / only if it matches not within */}
              <Route exact path="/"> <Home /></Route>
              <Route   exact path="/Dashboard"><Dashboard/></Route>
              <Route   exact path = "/Login">  <Login/> </Route>
              <Route   exact path = "/register">  <Register/> </Route>
              <Route    exact path="/Dashboard/:id"><Itemdetails /></Route>
                {/* //if doesn't match any of the above then everything else */}
              <Route path="*"> <Error/></Route>
              {/* // use switch to sure that only one path is uses otherwise it render many pages at same time  */}
        </Switch> 
       
        <Footer/>                
      </div>  
    </Router>  
  );
}
export default App;
