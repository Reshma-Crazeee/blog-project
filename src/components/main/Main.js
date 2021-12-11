import React from "react";
import Logo from "../logo/Logo";
import { Switch, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Container from "../container/Container";
import Single from "../singleBox/single/Single";
import Login from "../menu/login/Login";
import SignUp from "../menu/signup/SignUp";
import Choose from "../sameContent/bolly/BollywoodContent";

export default function Main() {
  return (
    <div>
      <Logo />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Container} />
        <Route path="/blog-project" exact component={Container} />
        <Route path="/home" exact component={Container} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/:category" exact component={Choose} />
        <Route path="/posts/:id" exact component={Single} />
      </Switch>
    </div>
  );
}
