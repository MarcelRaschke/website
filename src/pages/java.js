import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import dependabotLogo from "../images/dependabot-logo-square.svg";
import iconJava from "../images/icon-java.svg";

const JavaPage = () => (
  <Layout>
    <div className="main-background">
      <Header>
        <div className="section hero">
          <div className="language-hero">
            <img src={dependabotLogo} alt="Dependabot" />
            <img src={iconJava} alt="Java" />
          </div>
          <h2>Dependabot for Java</h2>
          <p>
            Dependabot creates pull requests to keep your Java dependencies
            up-to-date.
          </p>
        </div>
      </Header>

      <div className="container">
        <div className="section">
          <a name="features" />
          <h2>Features</h2>
          <p>
            Java is one of Dependabot's newest languages. We're still rapidly
            improving it, but alongside Dependabot's{" "}
            <a href="/#features">core features</a> it already has:
          </p>
          <div className="feature-boxes">
            <div className="feature-box">
              <div className="feature-description">
                <h3>Support for custom repositories</h3>
                <p>
                  Dependabot can handle custom repository sources, as well as
                  The Central Repository. If you have a private repository you
                  need support for let us know.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-description">
                <h3>Full details of multi-dependency updates</h3>
                <p>
                  If updating a property affects multiple dependencies then
                  Dependabot will include details of all of the updates in the
                  pull request it creates.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-description">
                <h3>Flexible monorepo support</h3>
                <p>
                  Using a monorepo? No problem - you can specify one or many
                  directories within a repo for Dependabot to look for
                  dependency files in.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-description">
                <h3>Custom branches and labels</h3>
                <p>
                  By default, Dependabot will create PRs against your default
                  branch and label them with "dependencies". Want to use a
                  different branch or label? No problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
);

export default JavaPage;
