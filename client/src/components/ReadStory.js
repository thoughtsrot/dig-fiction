import React from 'react';

const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://www.abc.net.au/radionational/image/7535918-4x3-700x525.jpg)",
  backgroundPosition: '50% 70%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}

const ReadStory = props => {

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
        <h1 className="display-4 text-secondary">Community Dig</h1>
      </div>
      <div className="mx-2">
        <p>

        </p>
      </div>
    </div>
  )

}

export default ReadStory;