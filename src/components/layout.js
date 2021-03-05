import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import '../css/layout.css';

const Layout = (Props) => {
  const { location, title, children } = Props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  const pageQuery = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC},
        limit: 10,
      filter: {fileAbsolutePath: { regex: "/content/pages/" }}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
    `
  );
  const pages = pageQuery.allMarkdownRemark.edges;
  const menuLinks = pages.map((item, index) => {
    if (typeof item.node.frontmatter !== 'undefined') {
      const info = item.node.frontmatter;

      // Skip the current page.
      if (location.pathname === info.path || location.pathname === `${info.path}/`) {
        return '';
      }
      return (
        <li key={index}>
          <Link to={info.path}>{info.title}</Link>
        </li>
      );
    }

    return '';
  });

    if (location.pathname === rootPath) {
      header = (
        <div>
          <ul className="pageLinks">{menuLinks}</ul>
          <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      </div>
      )
    } else {
      header = (
        <div>
          <ul className="pageLinks">{menuLinks}</ul>
          <h2 className="font-mono mt-1">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
          </h2>
        </div>
      );
    }
    return (
      <div className="container mx-auto px-4 lg:px-0 py-8">
        <header>{header}</header>
        <main>{children}</main>
        <footer className='bg-gray-800 mt-8 p-4 text-white'>
          © {new Date().getFullYear()}, Hecho con <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    )
}

export default Layout;
