import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Bio from '../components/Bio';
import Layout from '../components/Layout';

class BlogIndex extends React.Component {

  renderImage(featuredImage) {
    if (typeof featuredImage !== 'undefined' && featuredImage !== null ) {
      console.log(featuredImage.childImageSharp.fluid);
      return (
        <Img key={featuredImage.childImageSharp.fluid.src} fluid={featuredImage.childImageSharp.fluid} />
      );
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />

        <div className="">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className="blog-post-box">
              <h3 className="text-title">
                <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>

              { this.renderImage(node.frontmatter.featuredImage) }

              <p className="py-8" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        </div>

        <div style={{ clear: 'both' }}>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {/* {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0,
                }}
              >
                <Link
                  to={`/${i === 0 ? '' : i + 1}`}
                  style={{
                    padding: rhythm(1 / 4),
                    textDecoration: 'none',
                    color: i + 1 === currentPage ? '#ffffff' : '',
                    background: i + 1 === currentPage ? '#007acc' : '',
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))} */}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            path
            featuredImage {
              childImageSharp{
                fluid (maxWidth:700){
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`