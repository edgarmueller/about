import React from "react";

const noListStyle = { listStyle: 'none' }

const About = () => (
  <div>
    <h2><span role="img" aria-label="current status">👉&nbsp;</span>Current status</h2>
    <ul style={noListStyle}>
      <li>Munich, DE</li>
      <li>Working remotely for <a href="https://coachhub.com">CoachHub</a> <span role="img" aria-label="programming">💻</span></li>
      <li><strong>Current topics</strong>: Cross-team enginnering support, Domain Modeling & DDD, Architecture, Internal Libraries & Guidelines</li>
      <li><strong>Current technology stack</strong>: NestJS, Typescript, Postgres, React</li>
      <li><strong>Past topics</strong>: Monolith migration, Model driven development, (Web) Tooling, JSON Schema, Java, Scala, OSGi, Eclipse Platform</li>
    </ul>
  </div>
);

export default About;
