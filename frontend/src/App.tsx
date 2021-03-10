import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/assets/scss/app.scss";
import Home from "./pages/Home";
import Design from "./pages/Design";

function App() {
  return (
    <div className={"App"}>
        <Router>
            <div className={"app-content"}>
                <Switch>
                    <Route path= '/' exact={true} component={Home}/>
                    <Route path='/design/:designId' component={Design}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
