import React from 'react';
import moment from 'moment'

const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://cdn4.vectorstock.com/i/1000x1000/16/93/sketch-tree-planting-vector-19341693.jpg)",
  backgroundPosition: '0% 72%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}


const UserStories = props => {

  return (

    <div>
    <div className="jumbotron jumbotron-fluid text-center mb-0" style={jumboStyle}>
    <h1 className="display-4">Your Dig Plot</h1>
    </div>
  
    {props.stories.map((story, i) => {
    return (

      <div className="col-12 col-md-6 mb-2" key={story._id}>
        <div className="card">
          <div className="card-header">
            <h5>{story.title}</h5>
            <h6 className="font-italic font-weight-light"> Last revision: {moment(story.lastEdited).format('LLL')} </h6>
          </div>
          <img src={story.image} alt={story.title} className="card-img" />
          <div className="card-body">
            <h6 className="card-subtitle">By {story
              .author}</h6>
            <p>{story.storyBody}</p>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-btn btn-dark"
                onClick={() => props.reviseStory(i)}
              >
                Prune
        </button>
              <button
                type="button"
                className="btn btn-btn btn-dark"
                onClick={() => props.branchStory(i)}
              >
                Cut
        </button>
              <button
                type="button"
                className="btn btn-btn btn-dark"
                onClick={() => props.deleteStory(story._id)}
              >
                Uproot
        </button>
            </div>
          </div>
        </div>
      </div>
  

    )
  })}
  </div>
  )
}


export default UserStories;