import React, { Component } from "react";


class Projects extends Component {

  getData() {
    return this.props.projectEdges.map(projectEdge => ({
        title: projectEdge.node.frontmatter.title,
        date: projectEdge.node.frontmatter.date,
        excerpt: projectEdge.node.excerpt,
        URL: projectEdge.node.frontmatter.URL,
        type: projectEdge.node.frontmatter.type
    }));
  }

  render() {
    return (
      <div>
        <h2><span role="img" aria-label="rocketship">🚀 </span> Projects &amp; Apps</h2>
        Here a couple of professional and pet projects I have been working on:
        {this.getData()
          .map(project => {
            return (
              <div key={project.title} style={{ padding: ".5rem" }}>
                <p style={{ fontWeight: "bold" }}>
                  {project.title}&nbsp;
                  {project.type === "pet" ? (
                    <span role="img" aria-label="pet project">🐶</span>
                  ) : (
                    <span role="img" aria-label="professional project">💶</span>
                  )}
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
