import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
  const history = useHistory();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onPasswordChange = event => setNewPassword(event.target.value);
  const onConfirmChange = event => setConfirmPassword(event.target.value);
  const url = window.location.href;
  const params = url.split("password/");
  const id = params[1];

  const submit = async event => {
    event.preventDefault();

    if (newPassword === confirmPassword) {
      try {
        const userData = {
          id: id,
          password: newPassword
        };

        const config = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/JSON"
          },
          body: JSON.stringify(userData)
        };

        const response = await fetch(
          "https://e1pct.sse.codesandbox.io/user/reset-password/",
          config
        );
        const data = await response.json();

        if (data.status === "SUCCESS") {
          alert("Password Successfully Changed");
          history.push("/home");
        } else {
          console.error(data);
          alert("Something went wrong");
        }
      } catch (e) {
        console.error(e);
        alert("Something went wrong");
      }
    } else {
      alert("Password didn't match");
    }
  };

  return (
    <>
      <div className="container" align="center">
        <Form>
          <Form.Group align="left" controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              onChange={onPasswordChange}
              type="password"
              placeholder="New Password"
            />
          </Form.Group>
          <Form.Group align="left" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={onConfirmChange}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button onClick={submit} variant="dark" type="submit">
            Reset Password
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ResetPassword;
