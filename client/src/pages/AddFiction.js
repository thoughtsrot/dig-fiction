// import form component, react and API.js from utils folder
import React, { Component } from 'react';
import AddStoryForm from '../components/AddStoryForm';
import API from '../utils/API';

class AddFiction extends Component {

// code for reseting state is not DRY, should be able to clear form without repeating
  initialState = {

    title: "",
    author: "",
    storyBody: "",
    notes: "",
    collab: "",

  }
  
  state = {

    title: "",
    author: "",
    storyBody: "",
    notes: "",
    collab: "",

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
          collab: this.state.collab
        })
        .then(({ data }) => console.log(data))
        .catch(err => console.log(err));

      this.setState(this.initialState);
  

  }

  render() {

    console.log(AddStoryForm)

    return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center">
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

export default AddFiction

