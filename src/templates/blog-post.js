import React from 'react'
import { format as formatDate } from 'date-fns'
import Blog from '../layouts/blog'

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data)
  return (
    <Blog>
      <article>
        <header>
          <h2>{post.frontmatter.title}</h2>
          <span className="post-date">
            <time dateTime={post.frontmatter.date}>
              {formatDate(post.frontmatter.date, 'MMM DD, YYYY')}
            </time>
          </span>
          <br />
        </header>

        <div
          className="entry"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="cta">
          <p>
            Dependabot helps keep your dependencies up-to-date. It's free for
            personal accounts and open source, and always will be.
          </p>
          <a className="button primary" href="//dependabot.com">
            Find out more
          </a>
          <a className="button" href="//app.dependabot.com/auth/sign-up">
            Take me to the app
          </a>
        </div>
      </article>
    </Blog>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
