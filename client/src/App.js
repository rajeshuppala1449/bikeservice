import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import RegisterAdmin from "./components/auth/RegisterAdmin";
import RegisterUser from "./components/auth/RegisterUser";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />

            <Route exact path="/registeruser" component={RegisterUser} />
            <Route exact path="/registeradmin" component={RegisterAdmin} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
