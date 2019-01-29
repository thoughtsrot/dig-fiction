// import mongoose and setup Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// set up Story Schema

const storySchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  collabAuthor: {
    type: String,
  },
  image: {
    type: String,
    default: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  storyBody: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  submitDate: {
    type: Date,
    default: Date.now
  },
  lastEdited: {
    type: Date,
    default: Date.now
  },
  publishDate: {
    type: Date,
  },
  reviewStatus: {
    type: String,
    default: "pending"
  },
  allowCollab: {
    type: String,
    default: "No"
  },
  allowComments: {
    type: Boolean,
    default: false
  },
  isBranch: {
    type: Boolean,
    default: false
  },
  isBranchOf: {
    type: String,
  },
  branchedOn: {
    type: Date,
  }

})

// create Story model using schema

const Story = mongoose.model("Story", storySchema);

// export model
module.exports = Story;