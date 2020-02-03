import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import '../css/layout.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
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
      )
    } else {
      header = (
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
      )
    }
    return (
      <div className="container mx-auto px-4 lg:px-0 py-8">
        <header>{header}</header>
        <main>{children}</main>
        <footer className='bg-gray-800 mt-8 p-4 text-white'>
          © {new Date().getFullYear()}, Hecho con <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
