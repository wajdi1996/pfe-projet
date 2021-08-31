import React from "react";
import "./App.css"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cars from "./components/Cars";
import AboutUs from "./components/AboutUs";
import Navigation from "./components/Nav";
import Header from "./components/Header";
import  Naving  from "./components/Nav1";
export default function App() {
      return (
        <Router>
          <div>
        <Header />

        <Navigation/>
        <Naving />
            <Switch>
                   <Route path="/" exact component={Home}/>
                   <Route path="/Home" component={Home}/>
                   <Route path="/about" exact component={AboutUs}/>
                   <Route path="/Cars" component={Cars}/>
                   <Route path="/Contact" component={Contact}/>
            </Switch>
         
          </div>
        </Router>
      );
    }

