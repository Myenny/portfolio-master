import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

class Resume extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="resume-section">
          <main className="resume-container">
            <h3 className="pdf-header">
              <a
                title="Fancy Resume. Click it, Read it, Love it!"
                className="pdf"
                href="https://drive.google.com/open?id=1Tsktu0OPGqfio9mM1lc0j07_ZxWLgaVB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to view PDF
              </a>
            </h3>
            <a
              title="Hire me!"
              href="https://drive.google.com/open?id=1Tsktu0OPGqfio9mM1lc0j07_ZxWLgaVB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="resume" src="./images/resume.png" alt="resume" />
            </a>
          </main>
        </section>
        <Footer />
      </>
    )
  }
}

export default Resume
