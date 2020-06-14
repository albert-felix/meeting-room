import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Header from "./component/header";
import routes from "./routes/routes";
import Home from "./pages/home";
import BookRoom from "./pages/bookRoom";
import CreateRoom from "./pages/createRoom";
import ListRoom from "./pages/listRoom";

export default function App() {
  return (
    <div className="App">
      <Router>
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
        </Switch>
      </Router>
    </div>
  );
}
