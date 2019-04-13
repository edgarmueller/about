import React from "react";

const noListStyle = { listStyle: 'none' }

const About = () => (
  <div>
    <h2>👉 Current status</h2>
    <ul style={noListStyle}>
      <li>Munich  </li>
      <li>Working @ EclipseSource 💻</li>
      <li>Topics: JS, TS, React-stack, Web tooling</li>
    </ul>

    <h2>Past</h2>
    <ul style={noListStyle}>
      <li>EMFStore Project Lead</li>
      <li>Eclipse Commiter for EMFStore, ECP</li>
      <li>Topics: EMF, Java, OSGi, Scala</li>
    </ul>
  </div>
);

export default About;
