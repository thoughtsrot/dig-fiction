import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Navbar2 from "../components/Navbar2"
import UserStories from "../components/UserStories"
import EditStory from "../components/EditStory"

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
    currentEdit: {},
    isBranching: false,
    currentBranch: {},

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

  // methods for story buttons to delete, revise, branch a story
  deleteStory = (storyId) => {
    API.deleteStory(storyId)
      .then(this.getUserStories)
      .catch(err => console.log(err));
  }

  branchStory = (i) => {

    this.setState({isEditing: true, currentBranch: this.state.stories[i]})

  }

  reviseStory = (i) => {

    this.setState({isEditing: true, currentEdit: this.state.stories[i]});
  
  }

  handleChange = event => {
    const { name, value } = event.target;

    const currentEdit = {...this.state.currentEdit}

    currentEdit[name] = value

    this.setState({ currentEdit });
  }

  handleRevisions = event => {
    event.preventDefault();

    API
    .updateStory(this.state.currentEdit._id, {
      title: this.state.currentEdit.title,
      storyBody: this.state.currentEdit.storyBody,
      notes: this.state.currentEdit.notes,
      allowCollab: this.state.currentEdit.allowCollab,
      lastEdited: new Date().toISOString()
    })
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err));

  // ******** ADD MODAL TO CONFIRM SUCCESSFUL UPDATE ********
  this.setState({isEditing: false})
  this.getUserStories();

  }
// ********ADD POST REQUEST TO THE HANDLEBRANCHING METHOD AND ADD 'isBranch' AND/OR 'isBranchOf' FIELD TO STORY MODEL*********
  handleBranching = event => {

    // POST METHOD HERE

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
            {/* Check if user has no stories*/}
            {!this.state.stories.length
            // then if true, say...
              ? (<h2>There's nothing to view just yet. Try adding some fiction!</h2>)
              // else check if user clicked "Prune" button on a story
              : this.state.isEditing
              // then render story that was clicked in editable form
              ? <EditStory
                  story={this.state.currentEdit}
                  onChange={this.handleChange}
                  onSubmit={this.handleRevisions}
                />
              // else check if user clicked "Cut" button on a story
              : this.state.isBranching
              // then render story that was clicked in editable form
              ? <EditBranch
                  story={this.state.currentBranch}
                  onChange={this.handleChange}
                  onSubmit={this.handleBranching}
                />
                // else render all user stories
              : <UserStories 
                  stories={this.state.stories}
                  deleteStory={this.deleteStory}
                  branchStory={this.branchStory}
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