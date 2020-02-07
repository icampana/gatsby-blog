import React from "react";
import PropTypes from "prop-types";

// Components
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';

const Tags = ({ pageContext, data }) => {

  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const { title } = data.site.siteMetadata;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout location={'/tags'} title={title}>
      <div>
        <h1 className='text-blue-500'>{tagHeader}</h1>

        <p className="py-8">
          <ul>
            {edges.map(({ node }) => {

              const { slug } = node.fields
              const { title, path } = node.frontmatter
              return (
                <li key={slug}>
                  <Link to={path}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </p>

        <p className='py-8'>
          <Link to="/tags">All tags</Link>
        </p>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
            slug
          }
        }
      }
    }
  }
`