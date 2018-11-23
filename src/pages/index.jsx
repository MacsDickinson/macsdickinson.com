import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  renderPosts(posts) {
    return posts.map(({node: post}) => (
      <article className="tile is-child" style={{
        padding: "2em"
      }}>
        <p className="title">
          <Link className="has-text-primary" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </p>
        <p className="subtitle">
          {post.frontmatter.date}
        </p>
        <div className="content">
          {post.excerpt}
        </div>
        <Link className="button is-small is-primary is-outlined" to={post.fields.slug}>
          Keep Reading →
        </Link>
      </article>
    ))
  }
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <Layout>
        <section class="hero is-medium is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Macs Dickinson
              </h1>
              <h2 class="subtitle">
                Software and other less interesting things.
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <div className="tile is-ancestor">
              {this.renderPosts(posts)}
            </div>
            <div className="content">
              <p>
                <Link className="button is-primary is-outlined" to="/blog">Read more on the blog</Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>

    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({edges: PropTypes.array})
  })
}

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" }
        draft: { ne: true } 
      }}
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
