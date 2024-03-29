import * as React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { AddSession } from "./sessions/AddSession";
import { Sessions } from "./sessions/Sessions";
import { Session } from "./sessions/Session";
import "./style-sessions.css";
import { Speakers, Speaker } from "./Speakers";
import ErrorBoundary from "./ErrorBoundary";
import {AboutUs} from "./AboutUs";
import {Navigation} from "./Navigation";

export function Conference() {
  const { path, url } = useRouteMatch();

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={`${path}/sessions/new`}>
          <AddSession />
        </Route>
        <Route path={`${path}/sessions/:session_id`}>
          <Session />
        </Route>
        <Route path={`${path}/speakers/:speaker_id`}>
          <Speaker />
        </Route>
        <Route path={`${path}/speakers`}>
          <Speakers />
        </Route>
        <Route path={`${path}/sessions`}>
          <Sessions />
        </Route>
        <Route path={`${path}/about`}>
          <AboutUs />
        </Route>
        <Route path={`${path}`}>
          <Navigation />
        </Route>


        <Route path={`${path}`}>
          <section className="banner">
            <img src="images/banner3.png" alt="" />
            <div className="inner-content col-md-12">
              <div className="container jumboContainer">
                <div className="col-md-8 middle">
                  <HeroLinkButton to={`${url}/speakers`}>
                    View Speakers
                  </HeroLinkButton>
                  <HeroLinkButton to={`${url}/sessions`}>
                    View Sessions
                  </HeroLinkButton>
                </div>
              </div>
            </div>
          </section>
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}

function HeroLinkButton({ children, to }) {
  return (
    <h1>
      <Link
        style={{
          border: "solid 1px white",
          borderRadius: 20,
          padding: 20,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#0D1424",
        }}
        to={to}
      >
        {children}
      </Link>
    </h1>
  );
}
