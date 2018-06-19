import React, { Component } from "react";
import { LoginPage } from "../../Components/Login";
import { auth } from "../../Lib/Firebase";
import { Container, Row, Col } from "reactstrap";
import * as routes from "../../Constants/routes";
import { withRouter, Route } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  error: false
};
const Login = withRouter(({ history }) => {
  return <LoginForm history={history} />;
});
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  handleEmail = e => {
    this.setState(byPropKey("email", e.target.value));
  };
  handlePassword = e => {
    this.setState(byPropKey("passwordOne", e.target.value));
  };

  handleSubmit = e => {
    const { email, passwordOne } = this.state;
    const { history } = this.props;
    auth
      .doSignInWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
        console.log(this.state);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    const { email, passwordOne, error } = this.state;

    const isInvalid = passwordOne === "" || email === "";
    return (
      <div className="LoginMain">
        <Container>
          <LoginPage
            value={email}
            email={this.handleEmail}
            value1={passwordOne}
            password={this.handlePassword}
            onKeyPress={event => {
              if (event.key === "Enter") {
                event.preventDefault();
                this.handleSubmit();
              }
            }}
          />
          {error && <p>{error.message}</p>}
          <Row>
            <Col>
              <button
                className="loginBtn"
                disabled={isInvalid}
                onClick={this.handleSubmit}
              >
                로그인
              </button>
            </Col>
          </Row>
        </Container>
        <Route path={routes.SIGN_IN} component={Login} />
      </div>
    );
  }
}

export { LoginForm };
export default Login;
