import React from 'react';

const jumboStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(https://www.abc.net.au/radionational/image/7535918-4x3-700x525.jpg)",
  backgroundPosition: '50% 70%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}

const About = props => {

  return (
   <div>
    <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle}>
      <h1 className="display-4 text-secondary">What's in the Soil</h1>
    </div>
  <div className="mx-2">
  <p>
    As the name might suggest, <span className="text-success">DigFiction</span> is simply a community of fiction writers. There is no criteria for being a contributor other than being a writer who is interested in exploring the creative process with other writers. In other words, getting our hands dirty as we work to grow something beautiful together.
  </p>
  <p>
    When visiting the site as a guest, you can freely explore the fiction of all contributors. As a contributor, you can publish new stories, edit or branch your stories, and collaborate with other contributing writers. To become a contributor, simply visit our registration page. Already registered? Just login and add fiction to get started.
  </p>
  <p>
    <strong>A few words of caution: </strong>
    If you are concerned about intellectual property or copyright, then this may not be the site for you. This is an open source endeavor, and the site creator makes no claims on any of the writing contained herein.
  </p>
  <p>
    In general, there are no rules on content, but please keep in mind the good of the community when exploring sensitive subject matter. Perhaps include a trigger warning, if you are unsure. Outright hatespeech and similarly aggressive content will not be tolerated on this site.
  </p>
  <p>
    Writing is for everyone, creative writing even more so. While the hope is that a great deal of mutual learning and exchange of knowledge occurs, please resist the urge to lecture other users. That said, constructive feedback (including tips, tricks, resources and suggestions) are all very welcome when commenting on published content.
  </p>
  <p>
    We look forward to writing with you! DigFiction!
  </p>
  </div>
  </div> 
  )

}

export default About