/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author
      social {
        twitter
        github
        linkedin
        anchor
      }
    }
  }
}
`)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 my-5">
      <div className="flex justfy-start my-4">
        <GatsbyImage
          image={data.avatar.childImageSharp.gatsbyImageData}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }} />
        <div style={{ float: 'right' }}>
          Escrito por <strong>{author}</strong> <br />Informático, Emprendedor, Desarrollador y Curioso a tiempo completo.
        </div>
      </div>
      <div className='flex justify-around md:justify-end my-4'>
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
        &nbsp;
        <a href={`https://anchor.fm/${social.anchor}`} style={{ boxShadow: 'none' }}>
          <FontAwesomeIcon icon={ faPodcast }  size='2x' />
        </a>
      </div>
    </div>
  );
}

export default Bio
