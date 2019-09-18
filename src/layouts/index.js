import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";
import { site, author, twitter, og } from "../../config/meta";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{site.title}</title>
      <meta name="author" content={author.name} />
      <meta name="description" content={author.description} />
      <meta name="Keywords" content={site.Keywords} />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
