import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Navbar1 from '../components/Navbar1'
import About from "../components/About"
import GuestBrowse from "../components/GuestBrowse"
import ReadStory from "../components/ReadStory"

const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://static.boredpanda.com/blog/wp-content/uploads/2014/12/book-sculpture-cutting-paper-art-19__880.jpg)",
  backgroundPosition: '50% 90%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}

class Home extends Component {

  state = {
    isLoggedIn: false,
    username: "",
    password: "",

    viewAbout: false,
    isBrowsing: false,
    isReading: false,

    communityStories: [],
    currentRead: {}
  }

  componentDidMount() {

    this.checkLogin();
    this.getAllStories();

  }

  getAllStories = () => {

    API.getStories()
      .then(({ data }) => {
        if (data.length === 0) {
          data = [{

          }]
        }
        this.setState({ communityStories: data })
      })
      .catch(err => console.log(err));

  }


  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  readAbout = () => {

    this.setState({
      isBrowsing: false,
      isReading: false,
      viewAbout: true

    })

  }

  browseCommunityStories = () => {

    this.setState({
      isBrowsing: true,
      isReading: false,
      viewAbout: false

    })

  }

  readStory = (i) => {

    this.setState({
      isReading: true,
      isBrowsing: false,
      viewAbout: false,

      currentRead: this.state.communityStories[i]
    })
  }

  sendUserHome = () => {

    this.setState({
      isBrowsing: false,
      isReading: false,
      viewAbout: false
    })
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

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        this.setState({ isLoggedIn: res.data })

      })
      .catch(err => console.log(err.response));
  }

  render() {

    if (this.state.isLoggedIn) {
      return <Redirect to="/UserHome" />
    }

    return (
      <div>
        <Navbar1
          goAbout={this.readAbout}
          goBrowse={this.browseCommunityStories}
          goLogin={this.sendUserHome}
        />

        {this.state.isBrowsing

          ? <GuestBrowse
            stories={this.state.communityStories}
            onRead={this.readStory}
            />

          : this.state.viewAbout

          ? <About />
          
          :this.state.isReading
          
          ? <ReadStory
            story={this.state.currentRead}
            />
          
          :(<div> 
            <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
              <h1 className="display-4">Welcome to DigFiction</h1>
            </div>
            <div className="container my-5">
              <div className="row justify-content-center">
                <form>
                  <h3>Please Login</h3>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      className="form-control"
                      placeholder="Username" />
                    <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <button type="submit" className="btn btn-success" onClick={this.login}>DigFiction!</button>
                </form>

              </div>
            </div>
        </div>)
      }

      </div>)

  }

}


export default Home;