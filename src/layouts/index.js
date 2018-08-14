import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import 'normalize.css'
import '../scss/main.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Dependabot"
      meta={[
        {
          name: 'description',
          content:
            'Automated dependency updates. Dependabot creates pull requests to keep your Ruby, Python, JavaScript, PHP, .NET, Go, Elixir, Rust and Java dependencies up-to-date.',
        },
        {
          name: 'keywords',
          content: 'dependencies, update, npm, yarn, bundler, pip, composer',
        },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
