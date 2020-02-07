import React, { Component } from "react";
import PropTypes from "prop-types";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';

class TagsPage extends Component {
    render() {

      const { group } = this.props.data.allMarkdownRemark;
      const { title } = this.props.data.site.siteMetadata;

      return (
        <Layout location={ this.props.location } title={title}>
          <div>
            <Helmet title={title} />
            <div>
              <h1 className='text-blue-500'>Tags</h1>

              <p className="py-8">
                <ul>
                  {group.map(tag => (
                    <li key={tag.fieldValue} className='inline-flex px-4 py-2'>
                      <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                        <em className='font-bold'>{tag.fieldValue}</em> ({tag.totalCount})
                      </Link>
                    </li>
                  ))}
                </ul>
              </p>

            </div>
          </div>
        </Layout>
      );
    }
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`