import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import { rhythm, scale } from "../utils/typography";

class PageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    let metaImage = this.props.data.site.siteMetadata.image;

    if (post.frontmatter.featuredImage) {
      metaImage = this.props.data.site.siteMetadata.siteUrl + post.frontmatter.featuredImage.publicURL;
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SeoComponent
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={ metaImage }
        />
        <article>
          <header>
            <h1 className="font-sans mt-1 mb-5 text-xl text-blue-600">
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                marginBottom: rhythm(1),
              }}
            >
              <small className='mt-1 border-solid border-red-500 border-b-2'>{post.frontmatter.date}</small>
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    )
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        image
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          publicURL
        }
      }
    }
  }
`
