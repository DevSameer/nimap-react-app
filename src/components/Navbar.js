import React from "react";
import { Container } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Jobs from "../components/Pages/Jobs";
import Inbox from "../components/Pages/Inbox";
import Calender from "../components/Pages/Calender";
import Career from "../components/Pages/Career";
import Report from "../components/Pages/Report";

function Navbar() {
  return (
    <Container fluid>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
            <li>
              <Link to="/calenders">Calenders</Link>
            </li>
            <li>
              <Link to="/career">Career Page</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Jobs} />
            <Route path="/inbox" exact component={Inbox} />
            <Route path="/calenders" exact component={Calender} />
            <Route path="/career" exact component={Career} />
            <Route path="/reports" exact component={Report} />
          </Switch>
        </nav>
      </div>
    </Container>
  );
}

export default Navbar;
