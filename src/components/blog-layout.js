import React from "react";
import Footer from "../components/footer";
import dependabotLogo from "../images/dependabot-logo-full.svg";
import "../scss/main.scss";
import "../scss/blog.scss";

const BlogLayout = ({ children, data }) => (
  <div className="blog">
    <div className="container">
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" href="/">
            <img className="nav-logo" src={dependabotLogo} alt="Dependabot" />
          </a>
          <div className="nav-menu-wrapper">
            <div className="nav-menu-container" />
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-item">
            <a className="nav-item" href="/blog">
              All posts
            </a>
          </div>
        </div>
      </nav>

      <div className="page-wrapper">{children}</div>
    </div>
    <Footer />
  </div>
);

export default BlogLayout;
