import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import "./styles.css";
import Header from "./component/header";
import routes from "./routes/routes";
import Home from "./pages/home";
import BookRoom from "./pages/bookRoom";
import CreateRoom from "./pages/createRoom";
import ListRoom from "./pages/listRoom";
import Bookings from "./pages/bookings";
import SignUp from "./pages/signUp";

export default function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/home");
    }
  });

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.home} component={Home} />
        <Route path={routes.bookRoom} component={BookRoom} />
        <Route path="/list-room">
          <ListRoom />
        </Route>
        <Route path="/create-room">
          <CreateRoom />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}
