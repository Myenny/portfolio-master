import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

class Headshot extends Component {
  render() {
    return (
      <>
        <section className="headshot-container">
          <img className="headshot" src="/images/square.jpg" alt="headshot" />
          <h1 className="headshot-title">Hello!</h1>
          <p className="headshot-aboutme">
            My name is Michael Yenny and I am a Full Stack Web Developer.
            <div className="view-work-button-section">
              <button className="view-work-button first">
                <Link
                  to="/portfolio"
                  title="View my Work!"
                  className="about-me-links"
                >
                  View my Portfolio
                </Link>{' '}
              </button>
              <button className="view-work-button second">
                <Link
                  to="/resume"
                  title="View my Résumé!"
                  className="about-me-links"
                >
                  View my Resume
                </Link>
              </button>
            </div>
          </p>
        </section>
      </>
    )
  }
}

export default Headshot
