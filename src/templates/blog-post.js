import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import { rhythm, scale } from "../utils/typography";

class BlogPostTemplate extends React.Component {

  renderImage(featuredImage) {
    if (typeof featuredImage !== 'undefined' &&
        featuredImage !== null &&
        featuredImage.childImageSharp !== null &&
        typeof featuredImage.childImageSharp !== 'undefined') {
      return (
        <div className='w-24 min-w-full grid place-content-center'>
          <GatsbyImage
            className='my-10'
            aspectRatio={16/9}
            transformOptions={{fit: "cover", cropFocus: "attention"}}
            image={featuredImage.childImageSharp.gatsbyImageData}
            key={featuredImage.publicURL} />
        </div>
      );
    }

    return '';
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
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
            <h1 className="font-sans mt-1 mb-5 text-blue-600">
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
          <div>
            { this.renderImage(post.frontmatter.featuredImage) }
          </div>

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

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.frontmatter.path} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.frontmatter.path} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`query BlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author
      siteUrl
      image
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        publicURL
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  }
}
`
