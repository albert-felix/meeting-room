import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const VerifyUser = () => {
  const history = useHistory();

  const url = window.location.href;
  const params = url.split("user/");
  const id = params[1];

  const verification = () => {
    try {
      const userData = {
        id: id
      };

      const config = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/JSON"
        },
        body: JSON.stringify(userData)
      };

      fetch("https://meeting-room-backend.herokuapp.com/user/verify-user", config)
        .then(response => response.json())
        .then(data => {
          if (data.status === "SUCCESS") {
            alert("Email Successfully Verified");
            history.push("/login");
          } else {
            console.error();
            alert("Something went wrong");
            history.push("/home");
          }
        })
        .catch(console.error);
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="container" align="center">
        <Button onClick={verification}>Click to Confirm Email</Button>
      </div>
    </>
  );
};

export default VerifyUser;
