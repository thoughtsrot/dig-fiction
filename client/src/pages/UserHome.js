import React, { Component } from "react";
import moment from "moment";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Navbar2 from "../components/Navbar2"
import UserStories from "../components/UserStories"

const jumboStyle = {
  width: "100%",
  height: "300px",
  backgroundImage: "url(https://cdn4.vectorstock.com/i/1000x1000/16/93/sketch-tree-planting-vector-19341693.jpg)",
  backgroundPosition: '0% 75%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}

class UserHome extends Component {

  state = {

    isLoggedIn: true,
    isEditing: false,

    author: [],
    stories: [],
    collabs: []

  }

  componentDidMount() {

    this.checkLogin();
    this.getUsername();
    // this.getRecent();
    // this.getUserCollabs();

  }

  checkLogin = () => {

    API.loginCheck()
      .then(({ data }) => {
        console.log(data);
        this.setState({ isLoggedIn: data.isLoggedIn })
      })
      .catch(err => console.log(err));

    console.log(this.state.isLoggedIn)
  }

  getUsername = () => {

    API.loginCheck()
      .then(({ data }) => this.setState({ author: data.username }))
      .then(this.getUserStories)
      .catch(err => console.log(err));

  }

  getUserStories = () => {

    API.getUserStories(this.state.author)
      .then(({ data }) => this.setState({ stories: data }))
      .catch(err => console.log(err));

  }

  deleteStory = (storyId) => {
    API.deleteStory(storyId)
      .then(this.getUserStories)
      .catch(err => console.log(err));
  }

  reviseStory = (i) => {
    this.setState({isEditing: true});


  }

  render() {

    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Navbar2 />
        <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
          <h1 className="display-4">Your Community Plot</h1>
        </div>
        <div className="container-fluid">
          <div className="row align-items-stretch">

            {!this.state.stories.length
              ? (<h2>There's nothing to view just yet. Try adding some fiction!</h2>)
              : 
              this.state.isEditing
              ? <EditStory
                  stories={this.state.stories}
                  submitRevision={this.submitRevision}
                />
              : <UserStories 
                  stories={this.state.stories}
                  deleteStory={this.deleteStory}
                  reviseStory={this.reviseStory}
                />
                    
            }

          </div>
        </div>
      </div>
    )
  }
}

export default UserHome;