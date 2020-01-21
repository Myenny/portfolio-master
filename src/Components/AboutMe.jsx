import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <>
        <div>
          <div className="about-me">
            <p className="about-text-next">
              This website was designed, coded and styled using React.js and
              Sass. Please reach out to learn if I would make a good fit for
              your team at:{' '}
              <a
                className="about-contact"
                href="mailto:michaeljyenny@gmail.com"
              >
                {' '}
                michaeljyenny@gmail.com
              </a>
              .
            </p>
            <ul className="social-media">
              <li>
                <a
                  href="https://github.com/Myenny?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repo"
                >
                  <img
                    src="./images/github.png"
                    className="social-icon"
                    alt="github logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/michael-yenny/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Transport to my LinkedIn page"
                >
                  <img
                    src="./images/linkedin.png"
                    className="social-icon"
                    alt="linkedin logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/MichaelYenny/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="See all of my awesome photography skills.."
                >
                  <img
                    src="./images/instagram.png"
                    className="social-icon"
                    alt="instagram logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/MichaelYenny"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tweet Tweet"
                >
                  <img
                    src="./images/twitter.png"
                    className="social-icon"
                    alt="twitter logo"
                  />
                </a>
              </li>
              <li>
                <img
                  src="./images/slack.png"
                  className="social-icon"
                  alt="slack logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default AboutMe
