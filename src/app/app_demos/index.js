import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { isIOS, isMobile } from "react-device-detect";
import asyncComponent from "util/asyncComponent";

import demosURLs from "../../appURLs/app_demos";

import FirebaseAuth from "./routes/firebase/auth";

import scssStyles from "../../styles/app_starter/scss/main.scss";

class App extends React.Component {
  render() {
    const {
      match,
      drawerType,
      navigationStyle,
      horizontalNavPosition
    } = this.props;

    return (
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={asyncComponent(() => import("./routes/index"))}
        />

        {/* FIREBASE AUTH */}

        <Route
          exact
          path={`${demosURLs.firebase.auth.home}`}
          component={FirebaseAuth}
        />

        {/* NOT FOUND */}

        <Route
          component={asyncComponent(() =>
            import("components/materialUI/Error404")
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { drawerType, navigationStyle, horizontalNavPosition } = settings;
  return { drawerType, navigationStyle, horizontalNavPosition };
};
export default withRouter(connect(mapStateToProps)(App));
