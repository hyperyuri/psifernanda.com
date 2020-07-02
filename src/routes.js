import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe/";
import Office from "./pages/Office/";
import Contact from "./pages/Contact/";
import Blog from "./pages/Blog/";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/ambiente" component={Office} />
        <Route path="/contato" component={Contact} />
        {/* <Route path="/blog" component={Blog} /> */}
      </Switch>
    </BrowserRouter>
  );
}
