import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Navbar2 from "../components/Navbar2";
import UserStories from "../components/UserStories";
import EditStory from "../components/EditStory";
import EditBranch from "../components/EditBranch";
import BrowseStories from "../components/BrowseStories";
import AddStoryForm from "../components/AddStoryForm";
import About from "../components/About";

class UserHome extends Component {

  state = {

    isLoggedIn: true,

    goAbout: false,

    isEditing: false,
    currentEdit: {},

    isBranching: false,
    currentBranch: {},

    isDigging: false,
    currentDig: {},

    isBrowsing: false,
    communityStories: [],

    author: [],
    stories: [],
    collabs: []

  }

  componentDidMount() {

    this.checkLogin();
    this.getUsername();
    this.getAllStories();

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

  handleLogout = (e) => {
    e.preventDefault();
    API
      .logout({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        this.setState({ isLoggedIn: res.data })

      })
      .catch(err => console.log(err.response));
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

  browseCommunityStories = () => {

    this.setState({
      isBrowsing: true,
      isBranching: false,
      isEditing: false,
      isDigging: false,
      goAbout: false

     })

  }

  readAbout = () => {

    this.setState({
      isBrowsing: false,
      isBranching: false,
      isEditing: false,
      isDigging: false,
      goAbout: true

     })

  }

  sendUserHome = () => {

    this.setState({
      isBrowsing: false,
      isBranching: false,
      isEditing: false,
      isDigging: false,
      goAbout: false
    })
  }

  getUserStories = () => {

    API.getUserStories(this.state.author)
      .then(({ data }) => {
      
      if(data.length === 0) {
        data = [{
          author: "Your Name",
          title: "Your Story Title",
          storyBody: "Try adding fiction to view your content."

        }]
      }
      
      this.setState({ stories: data })})
      .catch(err => console.log(err));

  }

  addNewStory = () => {

    this.setState({
      isDigging: true,
      isBrowsing: false,
      isBranching: false,
      isEditing: false,
      goAbout: false
    })

  }

  handleNewChange = event => {
    const { name, value } = event.target;

    const currentDig = {...this.state.currentDig}


    currentDig[name] = value


    this.setState({ currentDig });

  }

  handleNewStory = event => {
    event.preventDefault();

      API
        .saveStory({
          title: this.state.currentDig.title,
          author: this.state.author,
          storyBody: this.state.currentDig.storyBody,
          notes: this.state.currentDig.notes,
          allowCollab: this.state.currentDig.allowCollab
        })
        .then(({ data }) => console.log(data))
        .catch(err => console.log(err));

      this.setState({isDigging: false});
      this.getUserStories();
  

  }

  // methods for story buttons to delete, revise, branch a story
  deleteStory = (storyId) => {
    API.deleteStory(storyId)
      .then(this.getUserStories)
      .catch(err => console.log(err));
  }

  // updates state when user selects "Prune" button
  reviseStory = (i) => {

    this.setState({
      isEditing: true, 
      isBranching: false,
      isBrowsing: false,
      isDigging: false,
      goAbout: false,
      
      currentEdit: this.state.stories[i]});
  
  }

  // method to update state when editing a story
  handleEditChange = event => {
    const { name, value } = event.target;

    const currentEdit = {...this.state.currentEdit}


    currentEdit[name] = value


    this.setState({ currentEdit });

  }
// method to save changes to DB when submitting edits
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

// update state when user selects "Cut" button
  branchStory = (i) => {

    this.setState({
      isBranching: true, 
      currentBranch: this.state.stories[i], 
      currentEdit: {title: this.state.stories[i].title}})

  }

  // method to update state when editing a branch
  handleBranchChange = event => {
    const { name, value } = event.target;

    const currentBranch = {...this.state.currentBranch}

    currentBranch[name] = value

    this.setState({ currentBranch })

  }

  // method to handle saving branch as new story
  handleBranching = event => {
    event.preventDefault();

    API
    .saveStory({
      title: this.state.currentBranch.title + "~branched~",
      author: this.state.author,
      storyBody: this.state.currentBranch.storyBody,
      notes: this.state.currentBranch.notes,
      allowCollab: this.state.currentBranch.allowCollab,
      isBranch: true,
      isBranchOf: this.state.currentEdit.title,
      branchedOn: new Date().toISOString()
    })

    this.setState({isBranching: false})
    this.getUserStories()

  }

  // methods for collaborations

  render() {

    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Navbar2
          goBrowse={this.browseCommunityStories}
          goAbout={this.readAbout}
          goLogout={this.handleLogout}
          goDig={this.addNewStory}
          goHome={this.sendUserHome}
          user={this.state.author}
        />

          <div className="container-fluid">
          <div className="row align-items-stretch">
            {/* Check if user has no stories*/}
            {
              // check if user clicked "Prune" button on a story
              this.state.isEditing
              // then render story that was clicked in editable form
              ? <EditStory
                  story={this.state.currentEdit}
                  onChange={this.handleEditChange}
                  onSubmit={this.handleRevisions}
                />
              // else check if user clicked "Cut" button on a story
              : this.state.isBranching
              // then render story that was clicked in editable form
              ? <EditBranch
                  story={this.state.currentBranch}
                  rootTitle={this.state.currentEdit.title}
                  onChange={this.handleBranchChange}
                  onSubmit={this.handleBranching}
                />
              // else check if user clicked "DF Community" link
              : this.state.isBrowsing
              // then render all DF stories
              ? <BrowseStories
                stories={this.state.communityStories}
                />
              // else check if user clicked "Add Fiction" link
              : this.state.isDigging
              // then render Add Fiction form
              ? <AddStoryForm
                onChange={this.handleNewChange}
                onSubmit={this.handleNewStory}
                value={this.state.currentDig}
                />
              :this.state.goAbout
              // render About text
              ? <About/>
              // else check if user has stories
              :this.state.stories.length
              // then if true, render...
              ? <UserStories 
              stories={this.state.stories}
              deleteStory={this.deleteStory}
              branchStory={this.branchStory}
              reviseStory={this.reviseStory}
              />
              // else say
              :(<h2>There's nothing in your plot just yet. Try adding some fiction!</h2>)
                    
            }

          </div>
        </div>
      </div>
    )
  }
}

export default UserHome;