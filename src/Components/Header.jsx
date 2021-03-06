import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

class Header extends Component {
  state = {
    class: 'hide'
  }

  _openMenu = () => {
    this.setState({
      class: 'open'
    })
  }

  _hideMenu = () => {
    this.setState({
      class: 'hide'
    })
  }

  render() {
    return (
      <>
        <header className="header">
          <nav className="big-nav">
            <li>
              <NavLink to="/">
                <img className="logo" src="./images/logo.png" alt="logo" />
              </NavLink>
            </li>
            <div className="big-header-links">
              <li className="big-header">
                <NavLink className="link" title="Take Me Home!" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="big-header">
                <NavLink
                  className="link"
                  title="Check out my Portfolio"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="big-header">
                <NavLink className="link" title="View my Resume" to="/resume">
                  Resume
                </NavLink>
              </li>
              <li className="big-header">
                <a
                  className="link"
                  title="Blog Time!"
                  href="https://medium.com/@michaeljyenny"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </div>
            <li onClick={this._openMenu} className="hamburger">
              <div />
              <div />
              <div />
            </li>
          </nav>
        </header>
        <section className={`${this.state.class} menu`}>
          <p onClick={this._hideMenu} className="menu-x">
            X
          </p>
          <nav>
            <ul>
              <NavLink className="link" exact to="/">
                <li>Home</li>
              </NavLink>
              <NavLink className="link" to="/portfolio">
                <li>Portfolio</li>
              </NavLink>
              <NavLink className="link" to="/resume">
                <li>Résumé</li>
              </NavLink>
              <a
                className="link"
                href="https://medium.com/@michaeljyenny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Blog</li>
              </a>
              <a className="link contact" href="tel://19044650044">
                <li className="menu-contact">+1 (904) 465-0044</li>
              </a>
              <a className="link contact" href="mailto:michaeljyenny@gmail.com">
                <li className="menu-contact">michaeljyenny@gmail.com</li>
              </a>
            </ul>
          </nav>
        </section>
      </>
    )
  }
}

export default Header
