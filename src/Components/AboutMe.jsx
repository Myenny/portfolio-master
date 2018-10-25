import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <>
        <div>
          <div className="about-me">
            <p className="about-text">
              Located in the Tampa Bay Area and a former Financial Advisor, I
              have recently followed my passion of the Tech Industry and learned
              the skills that enable me to write full stack web applications. I
              am passionate about creating beautiful, modern websites and enjoy
              the challenges that come with writing computer programs.
            </p>
            <p className="about-text-next">
              This website was designed, coded and styled completely from
              scratch by myself using React.js and Sass. With most of my
              projects, I like to write all of the code myself from scratch,
              however I am familiar with and have implemented CSS frameworks
              like bootstrap and Bulma to create websites as well. I am
              extremely excited about where the tech industry is heading and
              look forward to the many challenges and breakthroughs that lie
              before us. When I'm not coding, I enjoy playing guitar, sports,
              cooking, traveling... and learning how to be a better Web
              Developer! Please reach out to learn if I would make a good fit
              for your team at:{' '}
              <a className="about-contact" href="tel://19044650044">
                904-465-0044
              </a>{' '}
              or
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
