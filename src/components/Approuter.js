import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
