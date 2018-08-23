import React from 'react'
import Link from 'gatsby-link'
import Header from '../layouts/header'
import Footer from '../components/footer'
import customerPlatedLogo from '../images/customer-plated.svg'
import customerMojLogo from '../images/customer-moj.svg'
import customerThoughbotLogo from '../images/customer-thoughtbot.svg'
import customerFundingCircleLogo from '../images/customer-funding-circle.svg'
import customerOptimizelyLogo from '../images/customer-optimizely.svg'
import customerZurbLogo from '../images/customer-zurb.svg'
import customerRubyTogetherLogo from '../images/customer-ruby-together.svg'
import customerGoCardlessLogo from '../images/customer-gocardless.svg'
import customerCheckrLogo from '../images/customer-checkr.svg'
import customerGithubLogo from '../images/customer-github.svg'
import customerGitPrimeLogo from '../images/customer-gitprime.svg'
import customerWireLogo from '../images/customer-wire.svg'
import iconRuby from '../images/icon-ruby.svg'
import iconJs from '../images/icon-js.svg'
import iconPython from '../images/icon-python.svg'
import iconPhp from '../images/icon-php.svg'
import iconElixir from '../images/icon-elixir.svg'
import iconRust from '../images/icon-rust.svg'
import iconJava from '../images/icon-java.svg'
import iconGradle from '../images/icon-gradle.svg'
import iconDotnet from '../images/icon-dotnet.svg'
import iconGo from '../images/icon-go.svg'
import iconElm from '../images/icon-elm.svg'
import iconTerraform from '../images/icon-terraform.svg'
import iconGit from '../images/icon-git.svg'
import iconDocker from '../images/icon-docker.svg'
import iconStackTick from '../images/icon-stack-tick.svg'
import iconSecurity from '../images/icon-security.svg'
import iconReview from '../images/icon-review.svg'
import iconTick from '../images/icon-tick.svg'
import iconAutomerge from '../images/icon-automerge.svg'
import iconCalendar from '../images/icon-calendar.svg'
import iconCheckForUpdates from '../images/icon-check-for-updates.svg'
import iconOpenPrs from '../images/icon-open-prs.svg'
import iconReviewAndMerge from '../images/icon-review-and-merge.svg'
import screenshot from '../images/screenshot.png'

const IndexPage = () => (
  <div>
    <div className="main-background">
      <Header>
        <div className="section hero">
          <h2>Automated dependency updates</h2>
          <p>
            Dependabot creates pull requests to keep your dependencies secure
            and up-to-date.
          </p>
          <p>
            <a
              className="button primary"
              href="//app.dependabot.com/auth/sign-up"
            >
              Sign up
            </a>
            <a className="button" href="#how-it-works">
              Learn how it works
            </a>
          </p>
          <p>
            Over <strong>150,000 pull requests merged</strong>, and counting!
          </p>
        </div>
      </Header>

      <div className="small-hexagons">
        <div className="small-hexagons-gradient">
          <div className="container">
            <div className="section how-it-works">
              <a name="how-it-works" />
              <h2>How it works</h2>
              <div className="how-it-works-boxes">
                <div className="how-it-works-box">
                  <div className="how-it-works-icon">
                    <span className="floating-number">1</span>
                    <img src={iconCheckForUpdates} />
                  </div>
                  <div className="how-it-works-description">
                    <h3>Dependabot checks for updates</h3>
                    <p>
                      Dependabot pulls down your dependency files and looks for
                      any outdated or insecure requirements.
                    </p>
                  </div>
                </div>
                <div className="how-it-works-box">
                  <div className="how-it-works-icon">
                    <span className="floating-number">2</span>
                    <img src={iconOpenPrs} />
                  </div>
                  <div className="how-it-works-description">
                    <h3>Dependabot opens pull requests</h3>
                    <p>
                      If any of your dependencies are out-of-date, Dependabot
                      opens individual pull requests to update each one.
                    </p>
                  </div>
                </div>
                <div className="how-it-works-box">
                  <div className="how-it-works-icon">
                    <span className="floating-number">3</span>
                    <img src={iconReviewAndMerge} />
                  </div>
                  <div className="how-it-works-description">
                    <h3>You review and merge</h3>
                    <p>
                      You check that your tests pass, scan the included
                      changelog and release notes, then hit merge with
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="clear-fix" />
              <div className="screenshot">
                <img
                  src={screenshot}
                  alt="Screenshot of a Dependabot pull request"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="features-bg">
      <div className="container">
        <div className="section">
          <a name="features" />
          <h2>Features</h2>
          <div className="feature-boxes">
            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconStackTick} />
              </div>
              <div className="feature-description">
                <h3>Simple, drip-feed getting started flow</h3>
                <p>
                  We'll update five of your dependencies each day, until you're
                  on the cutting edge. Request more PRs if you want, or close
                  them to ignore a dependency until the next release.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconSecurity} />
              </div>
              <div className="feature-description">
                <h3>Security advisories handled automatically</h3>
                <p>
                  Dependabot monitors security advisories for Ruby, Python,
                  JavaScript, PHP, Elixir and Rust. We create PRs immediately in
                  response to new advisories.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconReview} />
              </div>
              <div className="feature-description">
                <h3>Great pull requests that stay up-to-date</h3>
                <p>
                  Dependabot PRs include release notes, changelogs, commit links
                  and vulnerability details whenever they're available. They'll
                  also automatically keep themselves conflict-free.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconTick} />
              </div>
              <div className="feature-description">
                <h3>Compatibility scores for each update</h3>
                <p>
                  Dependabot aggregates everyone's test results into a
                  compatibility score, so you can be certain a dependency update
                  is backwards compatible and bug-free.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconAutomerge} />
              </div>
              <div className="feature-description">
                <h3>Automatic merge options</h3>
                <p>
                  Dependabot can be configured to automatically merge PRs if
                  your tests pass on them, based on the size of the change
                  (security/patch/minor/major) and the dependency type.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconCalendar} />
              </div>
              <div className="feature-description">
                <h3>Live, daily, weekly or monthly updates</h3>
                <p>
                  Choose to receive update PRs live, daily, weekly or monthly.
                  We make an exception for security patches, which you'll always
                  receive immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="small-hexagons-rotated">
      <div className="small-hexagons-rotated-gradient">
        <div className="container">
          <div className="section languages">
            <a name="languages" />
            <h2>Supported languages</h2>
            <div className="language-boxes">
              <div className="language-box-container">
                <a href="/ruby">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconRuby} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">Ruby</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/javascript">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconJs} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">JavaScript</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/python">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconPython} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">Python</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/php">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconPhp} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">PHP</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/elixir">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconElixir} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">Elixir</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/rust">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconRust} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">Rust</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/java">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconJava} />
                    </div>
                    <div className="language-caveat">BETA</div>
                    <div className="language-name">Java - Maven</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/java">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconGradle} />
                    </div>
                    <div className="language-caveat">ALPHA</div>
                    <div className="language-name">Java - Gradle</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/dotnet">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconDotnet} />
                    </div>
                    <div className="language-caveat">BETA</div>
                    <div className="language-name">.NET</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/go">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconGo} />
                    </div>
                    <div className="language-caveat">ALPHA</div>
                    <div className="language-name">Go - dep</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/elm">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconElm} />
                    </div>
                    <div className="language-caveat">ALPHA</div>
                    <div className="language-name">Elm</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/submodules">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconGit} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">Submodules</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/docker">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconDocker} />
                    </div>
                    <div className="language-caveat" />
                    <div className="language-name">Docker</div>
                  </div>
                </a>
              </div>
              <div className="language-box-container">
                <a href="/terraform">
                  <div className="language-box">
                    <div className="language-icon">
                      <img src={iconTerraform} />
                    </div>
                    <div className="language-caveat">ALPHA</div>
                    <div className="language-name">Terraform</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="customers-bg">
      <div className="container">
        <div className="section customers">
          <a name="customers" />
          <h2>Trusted by</h2>
          <div className="customer-logos">
            <div className="customer-logo">
              <a href="https://www.plated.com">
                <img src={customerPlatedLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://github.com/pulls?q=is%3Apr+author%3Aapp%2Fdependabot+org%3Aalphagov">
                <img src={customerMojLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://github.com/pulls?q=is%3Apr+author%3Aapp%2Fdependabot+org%3Athoughtbot">
                <img src={customerThoughbotLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://www.fundingcircle.com">
                <img src={customerFundingCircleLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://www.optimizely.com/">
                <img src={customerOptimizelyLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://zurb.com/">
                <img src={customerZurbLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://github.com/pulls?q=is%3Apr+author%3Aapp%2Fdependabot+org%3Arubytogether">
                <img src={customerRubyTogetherLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://gocardless.com">
                <img src={customerGoCardlessLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://www.checkr.com">
                <img src={customerCheckrLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://github.com/pulls?page=1&q=is%3Apr+author%3Aapp%2Fdependabot+org%3Agithub">
                <img src={customerGithubLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://gitprime.com">
                <img src={customerGitPrimeLogo} />
              </a>
            </div>
            <div className="customer-logo">
              <a href="https://github.com/pulls?q=is%3Apr+author%3Aapp%2Fdependabot+org%3Awireapp">
                <img src={customerWireLogo} />
              </a>
            </div>
          </div>
          <p>
            ... plus <span id="active-accounts">2,000</span> more, who have
            merged over <span id="merged-prs">150,000</span> Dependabot pull
            requests.
          </p>
        </div>
      </div>
    </div>

    <div className="pricing-bg">
      <div className="container">
        <div className="section pricing">
          <a name="pricing" />
          <h2>Pricing</h2>
          <div className="pricing-boxes">
            <div className="pricing-box">
              <div className="pricing-box-main">
                <div className="plan-details">
                  <div className="plan-name">
                    <h3>Open Source / Personal&nbsp;Account</h3>
                  </div>
                  <p>Public repos and personal account repos are free</p>
                </div>
                <div className="price">
                  $0 <span className="month">per month</span>
                </div>
              </div>
            </div>
            <div className="pricing-box">
              <div className="pricing-box-main">
                <div className="plan-details">
                  <div className="plan-name">
                    <h3>Small Organization</h3>
                  </div>
                  <p>Up to 5 private projects on an organization account</p>
                </div>
                <div className="price">
                  $15 <span className="month">per month</span>
                </div>
              </div>
              <div className="pricing-box-offer">
                <p>Free trial for 14 days!</p>
              </div>
            </div>
            <div className="pricing-box">
              <div className="pricing-box-main">
                <div className="plan-details">
                  <div className="plan-name">
                    <h3>Unlimited</h3>
                  </div>
                  <p>Unlimited private projects on an organization account</p>
                </div>
                <div className="price">
                  $50 <span className="month">per month</span>
                </div>
              </div>
              <div className="pricing-box-offer">
                <p>Free trial for 14 days!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="get-started-bg">
      <div className="container">
        <div className="section get-started">
          <h2>Get started</h2>
          <p>
            Dependabot is a GitHub integration, so you can try it on a single
            repository.
            <br />
            Set up takes less than a minute.
          </p>
          <a
            className="button primary"
            href="//app.dependabot.com/auth/sign-up"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default IndexPage
