import React from "react";

import Modal from "./Modal";

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

import CircularProgress from "@material-ui/core/CircularProgress";
// or
// import { CircularProgress } from '@material-ui/core';

const Loading = props => (
  <Modal>
    <CircularProgress color="inherit" size={100} thickness={5} />
  </Modal>
);

export default Loading;
