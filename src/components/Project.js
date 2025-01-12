import React, { Component } from "react";


class Projects extends Component {

  getData() {
    return this.props.projectEdges.map(projectEdge => ({
        title: projectEdge.node.frontmatter.title,
        date: projectEdge.node.frontmatter.date,
        excerpt: projectEdge.node.excerpt,
        URL: projectEdge.node.frontmatter.URL,
    }));
  }

  render() {
    return (
      <div>
        <h2><span role="img" aria-label="rocketship">🚀&nbsp;</span> Projects &amp; Apps</h2>
        <p>Here are a couple of projects I have been working on in the past.  You can find more at my <a href="https://github.com/edgarmueller">GitHub profile</a>.</p>
        {this.getData()
          .map(project => {
            return (
              <div key={project.title} style={{ padding: ".5rem" }}>
                <p style={{ fontWeight: "bold" }}>
                  {project.title}&nbsp;
                </p>
                <ul style={{ listStyle: "none" }}>
                  <li>{project.date}</li>
                  <li>{project.excerpt}</li>
                  <li><a href={project.URL}>{project.URL}</a></li>
                </ul>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Projects;
