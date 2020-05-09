import React from "react";

const noListStyle = { listStyle: 'none' }

const About = () => (
  <div>
    <h2><span role="img" aria-label="current status">👉&nbsp;</span>Current status</h2>
    <ul style={noListStyle}>
      <li>Munich, DE</li>
      <li>Working remotely for <a href="https://coachhub.io">coachhub</a> <span role="img" aria-label="programming">💻</span></li>
      <li><strong>Currnt topics</strong>: Microservices Architecture, Domain modeling, Monolith migration</li>
      <li><strong>Current technologies</strong>: NestJS, Typescript, Postgres, React</li>
      <li><strong>Past topics</strong>: Model driven development, (Web) Tooling, JSON Schema, Java, Scala, OSGi, Eclipse Platform</li>
    </ul>
  </div>
);

export default About;
