import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import styled from 'styled-components';
import '../css/layout.css';

const H1 = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

const H2 = styled.div`
  font-weight: bold;
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const LinksContainer = styled.ul`
  list-style: none;
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: inline-block;

  li {
    display: inline-block;
    padding: 10px;
  }
`;

const NavMenu = styled.div`
  z-index: 2000;

  @media (max-width: 768px) {
    position: fixed;
    background: white;
    right: 10px;
    left: 0;
    padding: 10px;
    box-shadow: 5px 5px 5px grey;
  }
`;

const Layout = (Props) => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const { location, title, children } = Props;
  const rootPath = `${__PATH_PREFIX__}/`;

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
  const isHomepage = location.pathname === rootPath;
  const TitleComponent = (isHomepage) ? H1 : H2;
  const extraStyles = (isHomepage) ? scale(1.1) : scale(0.8);
  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuVisible(!menuVisible);
  }

    return (
      <div className="container mx-auto px-4 lg:px-0 py-8">
        <header>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
              <TitleComponent className="mt-1" style={{...extraStyles}}>
                <HeaderLink to={`/`}>
                  {title}
                </HeaderLink>
              </TitleComponent>
            </div>
            <div>
              <div class="flex justify-end lg:hidden">
                <div class="space-y-2" onClick={toggleMenu} role={'button'} tabIndex={0} aria-hidden="true" style={{width: 32, height: 32}}>
                  <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                  <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                  <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                </div>
              </div>
              <NavMenu className={`${ (!menuVisible) ? 'hidden' : ''} space-x-8 justify-end lg:flex`}>
                <LinksContainer>{menuLinks}</LinksContainer>
              </NavMenu>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className='bg-gray-800 mt-8 p-4 text-white'>
          © {new Date().getFullYear()}, Hecho con <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    )
}

export default Layout;
