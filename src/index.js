import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page1 from './pages/page1';
import Form1 from './pages/form1';
import Form2 from './pages/form2';
import Api from './pages/api';
import Googlemap from './pages/googlemap';
import Notfound from './pages/notfound';
import Header from './pages/header';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Page1 />, document.getElementById('root'));

serviceWorker.unregister();

const routing = (
    <Router>
       <div>
          <Route component={Header} />
          <ul>
             <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
             <li><NavLink activeClassName="active" to="/page1/1">Page1</NavLink></li>
             <li><NavLink activeClassName="active" to="/form1">Form1</NavLink></li>
             <li><NavLink activeClassName="active" to="/form2">Form2</NavLink></li>
             <li><NavLink activeClassName="active" to="/api">Api</NavLink></li>
             <li><NavLink activeClassName="active" to="/googlemap">Googlemap</NavLink></li>
          </ul>     
          <Switch>    
             <Route exact path="/" component = {App}/>
             <Route exact path="/page1/:id" component={Page1}/>
             <Route exact path="/form1" component={Form1}/>
             <Route exact path="/form2" component={Form2}/>
             <Route exact path="/api" component={Api}/>
             <Route exact path="/googlemap" component={Googlemap}/>
             <Route component={Notfound} />
          </Switch>  
       </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
