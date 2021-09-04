import React from "react";
import "./App.css"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import AboutUs from "./components/AboutUs";
import Navigation from "./components/Nav";
import Header from "./components/Header";
import SginIn from "./components/SignIn";
export default function App() {
      return (
        <Router>
          <div>
        <Header />

        <Navigation/>
       
            <Switch>
                   <Route path="/" exact component={Home}/>
                   <Route path="/Home" component={Home}/>
                   <Route path="/aboutUs" exact component={AboutUs}/>
                   <Route path="/footer" exact component={Footer}/>
                   <Route path="/Contact" component={Contact}/>
                   <Route path="/SginIn" exact component={SginIn}/>
            </Switch>
         
          </div>
        </Router>
      );
    }

