import React from 'react';

const AddStoryForm = ({ onSubmit, onChange, value: { title, author, storyBody, notes, allowCollab } }) => {

  return (
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
          value={title}
        />
        <label className="control-label" htmlFor="storyBody">Paste in your story!</label>
        <textarea
          name="storyBody"
          id="storyBody"
          placeholder="Story text goes here"
          className="form-control border-success mb-2"
          type="text"
          rows="10"
          onChange={onChange}
          value={storyBody}
        />
        <label className="control-label" htmlFor="notes">Any notes on this writing?</label>
        <input
          name="notes"
          id="notes"
          placeholder="(e.g just getting started..., fresh from the archives!, experimenting with a framing device, thesis project)"
          className="form-control border-success mb-2"
          type="text"
          onChange={onChange}
          value={notes}
        />
        <label className="control-label" htmlFor="allowCollab">Allow others to collaborate on this story?</label>
        <div className="btn-group btn-group-toggle mx-2" data-toggle="buttons">
          <label className="btn btn-secondary active">
                <input 
                  type="radio" 
                  name="allowCollab" 
                  id="option1" 
                  autoComplete="off" 
                  onChange={onChange} 
                  value="Yes" 
                  /> Yes
          </label>
          <label className="btn btn-secondary">
                <input 
                  type="radio" 
                  name="allowCollab" 
                  id="option2" 
                  autoComplete="off" 
                  onChange={onChange} 
                  value="No"/> No
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
          )
        }
        
export default AddStoryForm;