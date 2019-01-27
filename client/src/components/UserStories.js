import React from 'react';
import moment from 'moment'


const UserStories = props => {

  return (
    props.stories.map((story, i) => {
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
  })
    
  )
}


export default UserStories;