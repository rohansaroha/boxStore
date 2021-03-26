import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/assets/scss/app.scss";
import Home from "./pages/Home";
import Design from "./pages/Design";
import { ImgProvider } from "./hooks/ImgContext";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Account from "./pages/Account";
import { CanvasProvider } from "./hooks/CanvasContext";

function App() {
  return (
      <CanvasProvider>
          <ImgProvider>
              <div className={"App"}>
                  <Router>
                      <div className={"app-content"}>
                          <Switch>
                              <Route path= '/' exact={true} component={Home}/>
                              <Route path='/design/:designId' component={Design}/>
                              <Route path='/about' exact={true} component={About}/>
                              <Route path='/mission' exact={true} component={Mission}/>
                              <Route path='/products' exact={true} component={Products}/>
                              <Route path='/contact' exact={true} component={Contact}/>
                              <Route path='/services' exact={true} component={Services}/>
                              <Route path='/account' exact={true} component={Account}/>
                          </Switch>
                      </div>
                  </Router>
              </div>
          </ImgProvider>
      </CanvasProvider>
  );
}

export default App;
