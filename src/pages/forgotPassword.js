import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const onEmailChange = event => setEmail(event.target.value);

  const submit = async event => {
    event.preventDefault();

    try {
      const userData = {
        email: email
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
        "https://e1pct.sse.codesandbox.io/user/forgot-password",
        config
      );
      const data = await response.json();

      if (data.status === "SUCCESS") {
        alert("Reset password link sent to your mail id");
        history.push("/home");
      } else {
        console.error(data);
        alert("Something went wrong");
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="container" align="center">
        <Form>
          <Form.Group align="left" controlId="formBasicEmail">
            <Form.Label>Enter your Email</Form.Label>
            <Form.Control
              onChange={onEmailChange}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Button onClick={submit} variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
