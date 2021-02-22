import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BathTub from "./components/BathTub";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
        <div>
            <Route exact path="/" component={BathTub} />
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object
};

export default withStyles()(App);
