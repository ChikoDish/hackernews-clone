import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import ShowStories from "./ShowStories";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!["top", "new", "best"].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
