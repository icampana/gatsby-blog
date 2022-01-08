import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SeoComponent from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';

class BlogIndex extends React.Component {

  renderImage(featuredImage) {
    if (typeof featuredImage !== 'undefined' &&
        featuredImage !== null &&
        featuredImage.childImageSharp !== null &&
        typeof featuredImage.childImageSharp !== 'undefined') {
      return (
        <div className='shadow-md'>
          <Img key={featuredImage.childImageSharp.fluid.src} fluid={featuredImage.childImageSharp.fluid} />
        </div>
      );
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SeoComponent
          title={siteTitle}
          description={siteDescription}
          keywords={[`blog`, 'Ecuador', 'informatica', 'pensamientos',`gatsby`, `javascript`, `react`, 'vuejs', 'web engineer', 'development']}
          image={data.site.siteMetadata.image}
        />
        <Bio />

        <div className="">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const articleLink = (node.frontmatter.path) ? node.frontmatter.path : node.fields.slug;

          return (
            <div key={node.fields.slug} className="blog-post-box">
              <h3 className="text-title">
                <Link style={{ boxShadow: 'none' }} to={articleLink}>
                  {title}
                </Link>
              </h3>
              <small className='text-date'>{node.frontmatter.date}</small>

              <Link style={{ boxShadow: 'none' }} to={articleLink}>
                { this.renderImage(node.frontmatter.featuredImage) }
              </Link>

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
                ← Página Anterior
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
                Siguiente P&aacute;gina →
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
        description
        image
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: { regex: "/content/posts/" }}
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
                fluid (maxWidth:900, maxHeight: 320){
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