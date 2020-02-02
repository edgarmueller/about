import React from "react";

const noListStyle = { listStyle: 'none' }

const About = () => (
  <div>
    <h2><span role="img" aria-label="current status">👉</span>Current status</h2>
    <ul style={noListStyle}>
      <li>Munich</li>
      <li>Working @ <a href="https://coachhub.io">coachhub</a> <span role="img" aria-label="programming">💻</span></li>
      <li>Current topics: Microservices, NestJS, Typescript</li>
      <li>Past topics: Model driven development, (Web) Tooling, JSON Schema, Java, Scala, OSGI, Eclipse Platform</li>
    </ul>
  </div>
);

export default About;
