import React from 'react'
import Link from 'gatsby-link'
import queryString from 'query-string'
import Footer from '../components/footer'
import SpecificUpdate from '../components/compatibility-score/specific-update'
import SpecificTarget from '../components/compatibility-score/specific-target'
import AllUpdates from '../components/compatibility-score/all-updates'
import HowItWorks from '../components/compatibility-score/how-it-works'
import dependabotLogo from '../images/dependabot-logo-square.svg'

class CompatibilityScorePage extends React.Component {
  state = { params: {}, data: null }

  componentDidMount() {
    const { location } = this.props
    const queryParams = queryString.parse(location.search)
    const params = {
      dependencyName: queryParams['dependency-name'],
      packageManager: queryParams['package-manager'],
      versionScheme: queryParams['version-scheme'],
      previousVersion: queryParams['previous-version'],
      newVersion: queryParams['new-version'],
    }
    this.setState({ params })

    const apiUrl =
      'https://api.dependabot.com/compatibility_scores?' +
      queryString.stringify({
        'dependency-name': params.dependencyName,
        'package-manager': params.packageManager,
        'version-scheme': 'semver',
      })

    //const XXXapiUrl =
    //  'https://cors-anywhere.herokuapp.com/' + apiUrl.replace('https://', '')
    //const response = await fetch(XXXapiUrl)
    fetch(apiUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ data })
      })
  }

  render() {
    return (
      <div className="main-background">
        {this.mainSection()}
        <HowItWorks />
        <Footer />
      </div>
    )
  }

  mainSection() {
    const { params, data } = this.state

    if (params.previousVersion && params.newVersion) {
      return <SpecificUpdate {...params} data={data} />
    }

    if (params.newVersion) {
      return <SpecificTarget {...params} data={data} />
    }

    return <AllUpdates {...params} data={data} />
  }
}

export default CompatibilityScorePage
