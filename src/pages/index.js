import React, { Component } from "react";
import { graphql } from 'gatsby';

import { siteMetadata } from "../../gatsby-config";
import ProfilePic from "../assets/avatar.jpg";

import About from "../components/About";
import Projects from "../components/Project";
import Footer from "../components/Footer";


class IndexPage extends Component {
  render() {
    const projectEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "row-reverse wrap",
            margin: "auto"
          }}
        >
          <div className="avatar" style={{ flexDirection: "column" }}>
            {<img
              style={{
                width: "300px",
                borderStyle: "solid",
                borderColor: "#dfdbe5",
                borderRadius: "50%"
              }}
              src={ProfilePic}
              alt="avatar"
            />}
          </div>
          <div style={{ flexDirection: "column" }}>
            <h1 style={{ backgroundColor: 'yellow'}}>{siteMetadata.author}</h1>
            <h3>{siteMetadata.description}</h3>
            <About />
            <Projects projectEdges={projectEdges} />
            <h2><span role="img" aria-label="get in touch">🙏</span> Get in Touch</h2>
            <ul>
              <li><a href="https://github.com/edgarmueller">github</a></li>
              <li><a href="https://stackoverflow.com/users/3567830/edi">StackOverflow</a></li>
              <li><a href="https://www.linkedin.com/in/edgar-mueller-8155a180">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export const rootQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            URL
          }
        }
      }
    }
  }
`;

export default IndexPage;
