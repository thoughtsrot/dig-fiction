import React from 'react';

const CollabForm = ({ onSubmit, onChange, story }) => {

  return (
      
      <div>
        <h3>You are now collaborating with {story.author} on {story.title}</h3>
        <div className="container my-3">
      <form className="form-horizontal" onSubmit={onSubmit}>
        <label className="control-label" htmlFor="storyBody">Collaborate here</label>
        <textarea
          name="storyBody"
          id="storyBody"
          placeholder="Story text goes here"
          className="form-control border-success mb-2"
          type="text"
          rows="10"
          onChange={onChange}
          value={story.storyBody}
        />
        <label className="control-label" htmlFor="notes">Update notes here</label>
        <input
          name="notes"
          id="notes"
          placeholder="(e.g just getting started..., fresh from the archives!, experimenting with a framing device, thesis project)"
          className="form-control border-success mb-2"
          type="text"
          onChange={onChange}
          value={story.notes}
        />
          <div className="row">
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-btn btn-dark"
                onClick={onSubmit}
              >
                DigFiction!
              </button>
          </div>
          </div>  

    </form>
    </div>
      </div>

    

  )

}


export default CollabForm;