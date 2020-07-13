import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import loginRequest from "../services/loginRequest";
import routes from "../routes/routes";
import useUserProvider from "../store/UserProvider/useUserProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { setUserLoggedIn, setAdminUser, setNotAdminUser } = useUserProvider();

  const onEmailChange = event => setEmail(event.target.value);
  const onPasswordChange = event => setPassword(event.target.value);

  const loginSubmit = async event => {
    event.preventDefault();

    try {
      const url = "https://e1pct.sse.codesandbox.io/user/login";
      const loginData = { email, password };
      const response = await loginRequest(url, "POST", loginData);
      if (response.status === "SUCCESS") {
        setUserLoggedIn();
        if (response.admin) {
          setAdminUser();
        } else {
          setNotAdminUser();
        }
        window.localStorage.setItem("jwtToken", response.jwtToken);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("name", response.name);
        alert("Successfully Logged In");
        history.push(routes.home);
      } else {
        alert("Invalid User");
      }
    } catch (e) {
      console.error(e);
      alert("Something Went Wrong");
    }
  };

  return (
    <Fragment>
      <br />
      <div className="container" align="center">
        <Form>
          <Form.Group align="left" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={onEmailChange}
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group align="left" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={onPasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button onClick={loginSubmit} variant="dark" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Login;
