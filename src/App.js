import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./component/header";
import Home from "./pages/home";
import BookRoom from "./pages/bookRoom";
import CreateRoom from "./pages/createRoom";
import routes from "./routes/routes";
import ListRoom from "./pages/listRoom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.home} component={Home} />
        <Route path={routes.bookRoom} component={BookRoom} />
        <Route path={routes.createRoom} component={CreateRoom} />
        <Route path={routes.listRoom} component={ListRoom} />
      </Switch>
    </div>
  );
}
