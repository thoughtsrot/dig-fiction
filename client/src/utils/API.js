// import axios
import axios from 'axios';

// export axios CRUD to talk to back end
// import axios

export default {

  // get all stories
  getStories: function() {
    return axios.get('/api/story')
  },
  // get one story by ID
  getStoryById: function(storyId) {
    return axios.get(`/api/story/${storyId}`)
  },
  // add story to DB
  saveStory: function(storyData) {
    return axios.post('/api/story', storyData)
  },
  // edit saved story
  updateStory: function(storyId) {
    return axios.put(`/api/story/${storyId}`)
  },
  // delete saved story
  deleteStory: function(storyId) {
    return axios.delete(`/api/story/${storyId}`)
  },

}