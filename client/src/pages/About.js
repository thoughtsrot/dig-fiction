// import form component, react and API.js from utils folder
import React, { Component } from 'react';
import API from '../utils/API';

import Navbar2 from "../components/Navbar2";
import Navbar1 from '../components/Navbar1';

const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://www.abc.net.au/radionational/image/7535918-4x3-700x525.jpg)",
  backgroundPosition: '50% 70%',
  backgroundSize: 'stretch',
  backgroundRepeat: 'no-repeat'

}

class About extends Component {

  
  state = {

    isLoggedIn: true,

  }

  componentDidMount() {

    this.checkLogin();

  }

  checkLogin = () => {

    API.loginCheck()
      .then(({data}) => this.setState({isLoggedIn: data.isLoggedIn}))
      .catch(err => console.log(err));
  
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {

    if (!this.state.isLoggedIn) {
      return (
        <div>
          <Navbar1/>
          <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
        <h1 className="display-4">What's in the Soil</h1>
      </div>
        </div>
      )
    } else {
      return (
        <div>
          <Navbar2/>
          <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
        <h1 className="display-4">What's in the Soil</h1>
      </div>
        </div>
      )
    }

    

  }
    
}

export default About;