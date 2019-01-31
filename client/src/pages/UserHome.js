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
import CollabForm from "../components/CollabForm";
import ReadStory from "../components/ReadStory"

class UserHome extends Component {

  state = {

    isLoggedIn: true,

    userStatus: "",

    author: [],
    stories: [],
    collabs: [],

    communityStories: [],

    currentEdit: {},

    currentBranch: {},

    currentDig: {},

    currentCollab: {},

    currentRead: {},


  }

  componentDidMount() {

    this.checkLogin();
    this.getUsername();
    this.getAllStories();
    ;

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
      .then(this.getUserCollabs)
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
      userStatus: "isBrowsing"

     })

  }

  readStory = (i) => {

    this.setState({
      userStatus: "isReading",

      currentRead: this.state.communityStories[i]
    })
  }

  readAbout = () => {

    this.setState({
      userStatus: "isAbout"

     })

  }

  sendUserHome = () => {

    this.setState({
      userStatus: ""

    })
  }

  getUserStories = () => {

    API.getUserStories(this.state.author)
      .then(({ data }) => {
      
      if(data.length === 0) {
        data = [{
          author: this.state.author,
          title: "Your Story Title",
          storyBody: "Try adding fiction to view your content."

        }]
      }
      
      this.setState({ stories: data })})
      .catch(err => console.log(err));

  }

  getUserCollabs = () => {

    API.getUserCollabs(this.state.author)
      .then(({ data }) => {
      
      if(data.length === 0) {
        data = [{
          collabAuthor: this.state.author,
          title: " Story Title",
          storyBody: "Try collaborating with another contributor. Then you can manage your content here."

        }]
      }
      
      this.setState({ collabs: data })})
      .catch(err => console.log(err));

  }

  startCollab = (i) => {

    this.setState({
      userStatus: "isCollaborating",

      currentCollab: this.state.communityStories[i]
    })

  }

  handleCollabChange = event => {
    const { name, value } = event.target;

    const currentCollab = {...this.state.currentCollab}

    currentCollab[name] = value

    this.setState({ currentCollab })

  }

  handleCollabSubmit = event => {
    event.preventDefault();

    API
    .updateStory(this.state.currentCollab._id, {
      collabAuthor: this.state.author,
      storyBody: this.state.currentCollab.storyBody,
      notes: this.state.currentCollab.notes,
      lastEdited: new Date().toISOString()
    })
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err));

  // ******** ADD MODAL TO CONFIRM SUCCESSFUL UPDATE ********
  this.setState({userStatus: ""})
  this.getAllStories();

  }

  readCommunityStory = (i) => {
  
    this.setState({
      userStatus: "isReading",

      currentRead: this.state.communityStories[i],
      
    })
    

  }

  startNewStory = () => {

    this.setState({
      userStatus: "isDigging"

    })

  }

  handleNewChange = event => {
    const { name, value } = event.target;

    const currentDig = {...this.state.currentDig}


    currentDig[name] = value


    this.setState({ currentDig });

  }

  handleNewSubmit = event => {
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

      this.setState({userStatus: ""});
      this.getUserStories();
  

  }

  // methods for story buttons to delete, revise, branch a story
  deleteStory = (storyId) => {
    API.deleteStory(storyId)
      .then(this.getUserStories)
      .catch(err => console.log(err));
  }

  // updates state when user selects "Prune" button
  startReviseStory = (i) => {

    this.setState({
      userStatus: "isEditing", 
      
      currentEdit: this.state.stories[i]
    });
  
  }

  // method to update state when editing a story
  handleReviseChange = event => {
    const { name, value } = event.target;

    const currentEdit = {...this.state.currentEdit}


    currentEdit[name] = value


    this.setState({ currentEdit });

  }
// method to save changes to DB when submitting edits
  handleReviseSubmit = event => {
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
  this.setState({userStatus: ""})
  this.getUserStories();

  }

// update state when user selects "Cut" button
  branchStory = (i) => {

    this.setState({
      userStatus: "isBranching", 
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
  handleBranchSubmit = event => {
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

    this.setState({userStatus: ""})
    this.getUserStories()

  }

// rendering for UserHome with ternary for each option
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
          goDig={this.startNewStory}
          goHome={this.sendUserHome}
          user={this.state.author}
        />

          <div className="container-fluid">
            {
              // check if user clicked "Prune" button on a story
              (this.state.userStatus === "isEditing")
              // then render story that was clicked in editable form
              ? <EditStory
                  story={this.state.currentEdit}
                  onChange={this.handleReviseChange}
                  onSubmit={this.handleReviseSubmit}
                />
              // else check if user clicked "Cut" button on a story
              : (this.state.userStatus === "isBranching")
              // then render story that was clicked in editable form
              ? <EditBranch
                  story={this.state.currentBranch}
                  rootTitle={this.state.currentEdit.title}
                  onChange={this.handleBranchChange}
                  onSubmit={this.handleBranchSubmit}
                />
              // else check if user clicked "DF Community" link
              : (this.state.userStatus === "isBrowsing")
              // then render all DF stories
              ? <BrowseStories
                  stories={this.state.communityStories}
                  onRead={this.readCommunityStory}
                  onCollab={this.startCollab}
                />
              // else check if user clicked "Add Fiction" link
              : (this.state.userStatus === "isDigging")
              // then render Add Fiction form
              ? <AddStoryForm
                  onChange={this.handleNewChange}
                  onSubmit={this.handleNewSubmit}
                  value={this.state.currentDig}
                />
              : (this.state.userStatus === "isAbout")
              // render About text
              ? <About/>
              // else check if user is Collaborating
              : (this.state.userStatus === "isCollaborating")
              // then render collaboration in Collaborate form
              ? <CollabForm
                  onChange={this.handleCollabChange}
                  onSubmit={this.handleCollabSubmit}
                  story={this.state.currentCollab}
                />
            // else check if user is reading
              : (this.state.userStatus === "isReading")
            // then if true, render
              ? <ReadStory
                  story={this.state.currentRead}       
                />
              // else check if user has stories
              : this.state.stories.length
              // then if true, render...
              ? <UserStories 
                  stories={this.state.stories}
                  deleteStory={this.deleteStory}
                  branchStory={this.branchStory}
                  reviseStory={this.startReviseStory}
                />
              // else say
              :(<h2>There's nothing in your plot just yet. Try adding some fiction!</h2>)
                    
            }

        
        </div>
      </div>
    )
  }
}

export default UserHome;