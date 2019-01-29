// *********** CREATE FORM FOR EDITING NEW BRANCH *************

import React from 'react';

const EditBranch = ({ onSubmit, onChange, story, rootTitle }) => {

  return (
      
      <div>
        <h3>You are now editing a branch of {rootTitle}</h3>
        <div className="container my-3">
      <form className="form-horizontal" onSubmit={onSubmit}>
        <label className="control-label" htmlFor="title">Title:</label>
        <input
          name="title"
          id="title"
          placeholder="My Short Story"
          className="form-control border-success mb-2"
          type="text"
          onChange={onChange}
          value={story.title}
        />
        <label className="control-label" htmlFor="storyBody">Change content here</label>
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
        <label className="control-label" htmlFor="notes">Add branch notes here</label>
        <input
          name="notes"
          id="notes"
          placeholder="(e.g new ending, major restructuring...)"
          className="form-control border-success mb-2"
          type="text"
          onChange={onChange}
          value={story.notes}
        />
        <label className="control-label" htmlFor="allowCollab">Update collaboration settings?</label>
        <div className="btn-group btn-group-toggle mx-2" data-toggle="buttons">
          <label className="btn btn-secondary active">
                <input 
                  type="radio" 
                  name="allowCollab" 
                  id="option1" 
                  autoComplete="off" 
                  onChange={onChange} 
                  value="Yes" 
                  /> Allow
          </label>
          <label className="btn btn-secondary">
                <input 
                  type="radio" 
                  name="allowCollab" 
                  id="option2" 
                  autoComplete="off" 
                  onChange={onChange} 
                  value="No"/> Don't Allow
          </label>
          </div>
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


export default EditBranch;