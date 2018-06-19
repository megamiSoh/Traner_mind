import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ShowAuth } from "../../Lib/Auth";
import { firebase } from "../../Lib/Firebase";
import { connect } from "react-redux";
import * as authAction from "../../Modules/authUser";

class MainMenu extends Component {
  componentWillMount() {
    const { onSetAuthUser } = this.props;
    firebase.auth.onAuthStateChanged(authUser => {
      authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
    });
  }

  render() {
    return (
      <Router>
        <ShowAuth authUser={this.props.authUser} />
      </Router>
    );
  }
}
export default connect(
  ({ auth }) => ({
    authUser: auth.get("authUser"),
    isLoading: auth.get("isLoading")
  }),
  dispatch => ({
    onSetAuthUser: authUser => dispatch(authAction.authUser(authUser))
  })
)(MainMenu);
