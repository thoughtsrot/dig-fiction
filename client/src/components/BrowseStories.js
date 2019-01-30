import React from 'react';
import moment from 'moment'


const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://images.pexels.com/photos/6427/rucola-salad-plant-leaf.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
  backgroundPosition: '0% 50%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}

const BrowseStories = props => {

  return (

    <div>
      <div className="jumbotron jumbotron-fluid text-center mb-0" style={jumboStyle}>
        <h1 className="display-4 text-light">Community Digs</h1>
      </div>


      {props.stories.map((story, i) => {
        return (
          <div className="col-12 col-md-6 mb-2" key={story._id}>
            <div className="card">
              <div className="card-header">
                <h5>{story.title}</h5>
                <h6 className="font-italic font-weight-light"> Planted on {moment(story.submitDate).format('LLL')} </h6>
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
                    onClick={() => props.readStory(i)}
                  >
                    Open
                  </button>
                  <button
                    type="button"
                    className="btn btn-btn btn-dark"
                    onClick={() => props.collabStory(i)}
                  >
                    Collab
                  </button>
                  <button
                    type="button"
                    className="btn btn-btn btn-dark"
                    onClick={() => props.commentStory(i)}
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>

        )
      })
      }
    </div>
  )
}


export default BrowseStories;