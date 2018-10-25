import React, { Component } from 'react'

class Languages extends Component {
  render() {
    return (
      <>
        <section className="skills-section">
          <p className="skills">
            <strong>My current tool-set includes:</strong>
          </p>
          <div className="language-container">
            <img
              className="language"
              alt="React logo"
              src="./images/react.png"
            />
            <img className="language" alt="C#" src="./images/c.png" />
            <img
              className="language"
              alt="JavaScript logo"
              src="./images/javascript.png"
            />
            <img className="language" alt="SCSS logo" src="./images/sass.png" />
            <img className="language" alt="HTML logo" src="./images/html.png" />
            <img className="language" alt="CSS logo" src="./images/css.png" />
            <img
              className="language"
              alt="Phaser logo"
              src="./images/phaser.png"
            />
          </div>
          <p className="skills-lang">
            React, C#, .NET, JavaScript, SASS, HTML5, CSS3 and Phaser
          </p>
        </section>
      </>
    )
  }
}

export default Languages
