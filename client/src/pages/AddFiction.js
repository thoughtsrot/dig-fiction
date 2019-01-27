// import form component, react and API.js from utils folder
import React, { Component } from 'react';
import API from '../utils/API';
import { Redirect } from "react-router-dom";

import Navbar2 from "../components/Navbar2";
import AddStoryForm from '../components/AddStoryForm';

const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://i1.wp.com/sierraseeds.org/wp-content/uploads/2013/11/seed-planting-drawing.jpg)",
  backgroundPosition: '50% 80%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}

class AddFiction extends Component {

// code for reseting state is not DRY, should be able to clear form without repeating
  initialState = {

    isLoggedIn: true,

    title: "",
    author: "",
    storyBody: "",
    notes: "",
    allowCollab: "",

  }
  
  state = {

    isLoggedIn: true,

    title: "",
    author: "",
    storyBody: "",
    notes: "",
    allowCollab: "",

  }

  componentDidMount() {

    this.checkLogin();
    this.getUsername();

  }

  checkLogin = () => {

    API.loginCheck()
      .then(({data}) => this.setState({isLoggedIn: data.isLoggedIn}))
      .catch(err => console.log(err));
  
  }

  getUsername = () => {

    API.loginCheck()
      .then(({data}) => this.setState({author: data.username}))
      .catch(err => console.log(err));

  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

      API
        .saveStory({
          title: this.state.title,
          author: this.state.author,
          storyBody: this.state.storyBody,
          notes: this.state.notes,
          allowCollab: this.state.allowCollab
        })
        .then(({ data }) => console.log(data))
        .catch(err => console.log(err));

      this.setState(this.initialState);
  

  }

  render() {

    if (!this.state.isLoggedIn) {
      return <Redirect to="/"/>
    }

    return (
    <div>
      <Navbar2/>
      <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
        <h1 className="display-4">Plant a Seed</h1>
      </div>
      <AddStoryForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={this.state}
      />

    </div>
    )
  }
    
}

export default AddFiction;

