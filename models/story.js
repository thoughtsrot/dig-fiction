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
  image: {
    type: String,
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
  publishDate: {
    type: Date,
  },
  reviewStatus: {
    type: String,
    default: "pending"
  },
  allowCollab: {
    type: Boolean,
    default: false
  },
  allowComments: {
    type: Boolean,
    default: false
  }

})

// create Story model using schema

const Story = mongoose.model("Story", storySchema);

// export model
module.exports = Story;