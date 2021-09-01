import React from "react";
import "./App.css"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/footer";
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
                   <Route path="/aboutUs" exact component={AboutUs}/>
                   <Route path="/footer" exact component={Footer}/>
                   <Route path="/Contact" component={Contact}/>
            </Switch>
         
          </div>
        </Router>
      );
    }

