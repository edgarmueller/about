import React from "react";

const noListStyle = { listStyle: 'none' }

const About = () => (
  <div>
    <h2><span role="img" aria-label="current status">👉</span> Current status</h2>
    <ul style={noListStyle}>
      <li>Munich </li>
      <li>Working @ EclipseSource <span role="img" aria-label="programming">💻</span></li>
      <li>Current topics: JS, TS, React-stack, Web tooling</li>
      <li>Past topics: Java, Eclipse, EMF, OSGi, Scala</li>
    </ul>
  </div>
);

export default About;
