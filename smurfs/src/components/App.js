import React, { Component } from "react";
import "./App.css";
import SmurfListview from "../view/SmurfListview";
import { BrowserRouter, Route, Link } from "react-router-dom";

import EditSmurf from "./EditSmurfs";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "3%",
          marginBottom:'4%'
        }}
        className="ui contianer cards two column centered grid"
      >
        <BrowserRouter>
          <nav>
            <Link to="/">
              {" "}
              <div className="ui clearing segment blue">
                <h3 className="ui left floated header blue">HOME</h3>
              </div>
            </Link>
          </nav>
          <Route
            exact
            path="/"
            render={props => <SmurfListview {...props} />}
          />
          <Route
            exact
            path={`/smurfs/:id`}
            render={props => <EditSmurf {...props} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
