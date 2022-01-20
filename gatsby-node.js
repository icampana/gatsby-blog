const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("./src/templates/tags.js");
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const pageComponent = path.resolve(`./src/templates/page.js`);
  const genericQuery = (filterString) => `
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000,
      filter: {fileAbsolutePath: { regex: "/${filterString}/" }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 900
                  height: 320
                  placeholder: TRACED_SVG
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;
  const result = await graphql(genericQuery('content/posts'));
  const pagesResult = await graphql(genericQuery('content/pages'));

  if (result.errors) {
    throw result.errors;
  }

  if (pagesResult.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    // If it has a frontmatter defined path use it instead.
    const postPath = (post.node.frontmatter.path) ? post.node.frontmatter.path : post.node.fields.slug;

    createPage({
      path: postPath,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  // Create blog post list pages
  const postsPerPage = 12;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      },
    });
  });

  // Create blog posts pages.
  const pages = pagesResult.data.allMarkdownRemark.edges;
  pages.forEach((post, index) => {

    // If it has a frontmatter defined path use it instead.
    const pagePath = (post.node.frontmatter.path) ? post.node.frontmatter.path : post.node.fields.slug;

    createPage({
      path: pagePath,
      component: pageComponent,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
