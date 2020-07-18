import React from "react";

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

const Heading = props => (
  <div style={styleObjects.rowCentered}>
    <p style={styleObjects.heading}>{props.text}</p>
  </div>
);

export default Heading;
