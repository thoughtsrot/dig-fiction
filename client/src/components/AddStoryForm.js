import React from 'react';

const AddStoryForm = ({ onSubmit, onChange, value: {title, author, storyBody, notes, collab} }) => {

  return (
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
      <label className="control-label" htmlFor="author">Written by:</label>
      <input
        name="author"
        id="author"
        placeholder="Writey McWriter"
        className="form-control border-success mb-2"
        type="text"
        onChange={onChange}
        value={author}
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
      <label className="control-label" htmlFor="collab">Allow others to collaborate on this story?</label>
      <input
        name="collab"
        id="collab"
        placeholder="Y/N"
        className="form-control border-success mb-2"
        type="text"
        onChange={onChange}
        value={collab}
      />
      <button 
        className="btn btn-block btn-outline-dark"
        onClick={onSubmit}
        >
        Dig Fiction!
      </button>

    </form>
  )
}

export default AddStoryForm;