import React, { Component } from "react";

class Projects extends Component {
  getData() {
    const Data = [];
    this.props.projectEdges.forEach(projectEdge => {
      console.log('edge', projectEdge)
      Data.push({
        title: projectEdge.node.frontmatter.title,
        date: projectEdge.node.frontmatter.date,
        excerpt: projectEdge.node.excerpt,
        ProductHuntLink: projectEdge.node.frontmatter.ProductHuntLink,
        URL: projectEdge.node.frontmatter.URL,
        ProductHuntVotes: projectEdge.node.frontmatter.ProductHuntVotes
      });
    });
    return Data;
  }

  render() {
    const Data = this.getData();

    return (
      <div>
        <h2>🚀 Projects/Apps</h2>
        {Data.map(project => {
          console.log(project)
          return (
            <div key={project.title} style={{ padding: ".5rem" }}>
              <p style={{ fontWeight: 'bold'}}>{project.title}</p>
              <ul style={{ listStyle: "none" }}>
                <li>- {project.excerpt}</li>
                <li>
                  - 📰 <a href={project.URL}>{project.URL}</a>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Projects;
