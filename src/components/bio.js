/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="md:flex mb-3 mx-5">
      <div className="md:flex-shrink-0">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div style={{ float: 'right' }}>
          Escrito por <strong>{author}</strong> <br />Informático, Emprendedor, Desarrollador y Curioso a tiempo completo.
        </div>
      </div>
      <div style={{ textAlign: 'right', width: '50%' }}>
        <a href={`https://twitter.com/${social.twitter}`} style={{ boxShadow: 'none' }}>
          <FontAwesomeIcon icon={ faTwitter }  size='2x' />
        </a>
        &nbsp;
        <a href={`https://github.com/${social.github}`} style={{ boxShadow: 'none' }}>
          <FontAwesomeIcon icon={ faGithub }  size='2x' />
        </a>
        &nbsp;
        <a href={`https://linkedin.com/in/${social.linkedin}`} style={{ boxShadow: 'none' }}>
          <FontAwesomeIcon icon={ faLinkedin }  size='2x' />
        </a>
      </div>
    </div>
  )
}

export default Bio
