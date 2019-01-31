// import axios
import axios from 'axios';

// export axios CRUD to talk to back end
// import axios

export default {

  // get all stories
  getStories: function() {
    return axios.get('/api/story')
  },
  // get all stories by username/author
  getUserStories: function(author) {
    return axios.get(`/api/story/${author}`)
  },
  // get all stories by username/collabAuthor
  getUserCollabs: function(collabAuthor) {
    return axios.get(`/api/story/${collabAuthor}`)
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
  updateStory: function(storyId, revisedStory) {
    return axios.put(`/api/story/${storyId}`, revisedStory)
  },
  // delete saved story
  deleteStory: function(storyId) {
    return axios.delete(`/api/story/${storyId}`)
  },

    /* 
    loginCreds = {username: "alex", "password": 12345Password!}
  */
 login: function(loginCreds) {
  return axios.post('/api/users/login', loginCreds)
},
/* 
  Path to check if user is logged in
*/
loginCheck: function() {
  return axios.get('/api/users/login')
},
/* 
  Path to log out
*/
logout: function() {
  return axios.get('/api/users/logout')
},
/* 
  Path to register new user, you can have more fields than this but "username" and "password" must exist
  userInfo = {
    username: "alex",
    password: 12345Password!
  }
*/
register: function(userInfo) {
  return axios.post("/api/users/register", userInfo)
}

}