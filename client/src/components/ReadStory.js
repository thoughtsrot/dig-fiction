import React from 'react';

const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://static.boredpanda.com/blog/wp-content/uploads/2014/12/book-sculpture-cutting-paper-art-19__880.jpg)",
  backgroundPosition: '50% 90%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}

const ReadStory = props => {

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
        <h1 className="display-4">{props.story.title}</h1>
        <h3 className="">by {props.story.author}</h3>
      </div>
      <div className="mx-2">
        <p>
          {props.story.storyBody}
        </p>
      </div>
    </div>
  )

}

export default ReadStory;