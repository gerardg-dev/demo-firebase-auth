import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import "assets/app_starter/vendors/style";
import defaultTheme from "./themes/defaultTheme";
import AppLocale from "../../lngProvider";
import localStorageItems from "../../localStorage/app_starter";

import AppDemos from "app/app_demos/index";

import { setInitUrl } from "../../actions/app_starter/Auth";

import demosURLs from "../../appURLs/app_demos";

import RTL from "util/RTL";
import asyncComponent from "util/asyncComponent";

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentWillMount() {}

  render() {
    const { match, location, initURL, authUser, locale } = this.props;

    if (location.pathname === "/") {
      if (authUser === null) {
        // User is not Auth
        return <Redirect to={demosURLs.firebase.auth.home} />;
      } else {
        // User is Auth
        return <Redirect to={demosURLs.firebase.auth.home} />;
      }
    }

    const applyTheme = createMuiTheme(defaultTheme);
    const currentAppLocale = AppLocale[locale.locale];

    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <RTL>
              <div className="app-main">
                <Switch>
                  {/* DEMOS */}
                  <Route path={`${match.url}demos`} component={AppDemos} />
                </Switch>
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ auth, settings }) => {
  const { initURL, authUser } = auth;
  const { locale } = settings;
  return { initURL, authUser, locale };
};

export default connect(mapStateToProps, { setInitUrl })(App);
