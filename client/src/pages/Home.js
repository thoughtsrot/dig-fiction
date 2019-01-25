import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Navbar1 from '../components/Navbar1'

const jumboStyle = {
  width: "100%",
  height: "300px",
  backgroundImage: "url(https://static.boredpanda.com/blog/wp-content/uploads/2014/12/book-sculpture-cutting-paper-art-19__880.jpg)",
  backgroundPosition: '50% 90%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}

class Home extends Component {

  state = {

    isLoggedIn: false

  }

componentDidMount() {

  this.checkLogin();

}

checkLogin = () => {

  API.loginCheck()
    .then(({data}) => this.setState({isLoggedIn: data.isLoggedIn}))
    .catch(err => console.log(err));

  console.log(this.state.isLoggedIn)
}

render () {

  if (this.state.isLoggedIn) {
    return <Redirect to="/UserHome"/>
  }
  
  return (
    <div>
      <Navbar1/>
      <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
        <h1 className="display-4">Welcome to DigFiction</h1>
      </div>

    </div>
    )

}

}


export default Home;