import './App.scss';
import FirstPage from './Components/FirstPage';
import Donate from './Components/Donate';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Need from './Components/Need';
import AboutUs from './Components/AboutUs';
import Terms from './Components/Terms';
import NavBar from './Components/NavBar';

//import { useState } from 'react';

//import { Router, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div id='navbar'><NavBar/></div>
    <div>
      <Switch>
      <Route path="/Donate" exact component={Donate}/>
      <Route path="/Search"  component={Need}/>
      <Route path="/Aboutus"  component={AboutUs}/>
      <Route path="/Terms"  component={Terms}/>
      <Route path="/"  component={FirstPage}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
