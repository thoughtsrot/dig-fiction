import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Navbar2 from "../components/Navbar2"

class UserHome extends Component {

  state = {

    recentFiction: [],
    storyCount: [],
    collabCount: []

  }

  render () {

    return (
      <div>
        <Navbar2/>
        <div className="jumbotron jumbotron-fluid text-center">
        <h1 className="display-4">Your Community Plot</h1>
        </div>
      </div>
    )
  }
}

export default UserHome;