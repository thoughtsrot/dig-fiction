import React from 'react';
// import components from react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// import components and pages to use
import AddFiction from './pages/AddFiction';
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/" component={AddFiction}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />

          <Route
            render={() => <h1 className="text-center">Did we lose you?
          </h1>}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
