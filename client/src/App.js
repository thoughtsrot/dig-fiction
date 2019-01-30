import React from 'react';
// import components from react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// import components and pages to use

import Home from './pages/Home'
import UserHome from './pages/UserHome'
// import AddFiction from './pages/AddFiction';
// import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/Login" component={Login}/> */}
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/UserHome" component={UserHome}/>
          {/* <Route exact path="/AddFiction" component={AddFiction}/> */}
          <Route exact path="/About" component={About}/>
          <Route exact path="/Logout"/>

          <Route
            render={() => <h1 className="text-center">Did we lose you?
          </h1>}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
