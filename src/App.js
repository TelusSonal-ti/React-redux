import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./ReactMenu/Home";
import About from "./ReactMenu/About";
import Services from "./ReactMenu/Services";
import Contact from "./ReactMenu/Contact";
import Navbar from "./ReactMenu/Navbar";
import Footer from "./ReactMenu/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
