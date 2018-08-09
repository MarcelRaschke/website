import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/dependabot-logo-full.svg'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navMenuOpen: false }
  }

  navToggle() {
    this.setState(prevState => ({
      navMenuOpen: !prevState.navMenuOpen,
    }))
  }

  hideNav() {
    this.setState({ navMenuOpen: false })
  }

  render() {
    const navClasses = ['nav']
    if (this.state.navMenuOpen) {
      navClasses.push('menu-open')
    }

    return (
      <nav className={navClasses.join(' ')}>
        <div className="nav-left">
          <a className="nav-item">
            <img className="nav-logo" src={logo} alt="Dependabot" />
          </a>
          <div className="nav-menu-wrapper">
            <div className="nav-menu-container">
              <a
                className="nav-item"
                href="#how-it-works"
                onClick={() => this.hideNav()}
              >
                How it works
              </a>
              <a className="nav-item" href="#features">
                Features
              </a>
              <a className="nav-item" href="#languages">
                Languages
              </a>
              <a className="nav-item" href="#customers">
                Customers
              </a>
              <a className="nav-item" href="#pricing">
                Pricing
              </a>
              <a className="nav-item" href="/blog">
                Blog
              </a>
            </div>
          </div>
        </div>

        <div className="nav-right large-screen-only">
          <div className="nav-item">
            <a
              className="button compact"
              href="//app.dependabot.com/auth/sign-in?immediate=true"
            >
              <span>Log in</span>
            </a>
          </div>
        </div>

        {/* This "nav-toggle" hamburger menu is only visible on mobile */}
        {/* You need JavaScript to toggle the "is-active" className on "nav-menu" */}
        <div className="nav-right small-screen-only">
          <a className="nav-toggle" onClick={() => this.navToggle()}>
            <span />
            <span />
            <span />
          </a>
        </div>
      </nav>
    )
  }
}
