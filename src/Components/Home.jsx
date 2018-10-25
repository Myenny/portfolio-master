import React, { Component } from 'react'

import Header from './Header'
import Headshot from './Headshot'
import AboutMe from './AboutMe'
import Languages from './Languages'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Headshot />
        <AboutMe />
        <Languages />
        <Footer />
      </>
    )
  }
}

export default Home
