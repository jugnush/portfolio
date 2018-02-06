import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

/** import components **/
/* main route */
import HomePage from './components/homepage/homepage';
import WorkPage from './components/workpage/workpage';
import ProjectPage from './components/projectpage/projectpage';
import ContactPage from './components/contactpage/contactpage';

/* sub route */
import Vzw from './components/projectpage/projects/vzw';
import Devry from './components/projectpage/projects/devry';
import Saks from './components/projectpage/projects/saks';
import Rl from './components/projectpage/projects/rl';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/work" component={WorkPage} />
        
          <Route path="/projects/rl" component={Rl} />
          <Route path="/projects/vzw" component={Vzw} />
          <Route path="/projects/devry" component={Devry} />
          <Route path="/projects/saks" component={Saks} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  ,document.getElementById('root')
)