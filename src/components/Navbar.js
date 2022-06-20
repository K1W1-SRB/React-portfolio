import logo from '../images/k1w1 logo illustator.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Home'
import Portfolio from '../Potfolio';
import Post from '../Post'
import React from 'react';
import Project1 from '../project1'
import Project2 from '../project2'

export default function Navbar(props) {


    return(
        <Router>
            <nav >
              <div className='logo_text'>
                <Link to="/React-portfolio"><img src={logo} className="logo" /></Link>
              </div>
            <ul>
              <li>
                  <Link to="/Portfolio">Work</Link>
              </li>
              <li>
                  <Link to="/post">Post</Link>
              </li>
              <li><a href='https://github.com/K1W1-SRB' target="_blank">GitHub</a></li>
            </ul>
              <button className='mode-btn'><FontAwesomeIcon icon={faLightbulb} /></button>
            </nav>

      <Switch>
            <Route exact path="/React-portfolio">
              <Home />
            </Route>
            <Route path="/Portfolio">
              <Portfolio  />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/project-1">
              <Project1 />
            </Route>
            <Route path="/project-2">
              <Project2 />
            </Route>
            <Route path="/project-3">
              <Post />
            </Route>
        </Switch>
    </Router>
    )
}