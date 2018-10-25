import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import PortfolioItems from './PortfolioItems'

class Portfolio extends Component {
  render() {
    return (
      <>
        <Header />
        <PortfolioItems />
        <Footer />
      </>
    )
  }
}

export default Portfolio
