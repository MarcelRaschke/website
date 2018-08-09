import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/nav'

const Footer = () => (
  <div className="container">
    <div className="section footer">
      <div className="footer-left muted">&copy; Dependabot 2018</div>
      <div className="footer-right muted">
        <a href="/privacy.html">Privacy</a>
        <a href="/terms.html">Terms of service</a>
        <a href="https://twitter.com/dependabot">Twitter</a>
        <a href="https://github.com/dependabot">GitHub</a>
        <a href="mailto:support@dependabot.com">Contact us</a>
      </div>
    </div>
  </div>
)

export default Footer
