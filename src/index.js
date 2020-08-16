import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App'
import { HashRouter, Route } from 'react-router-dom';
import Clock from './posts/liveClock'

//the program itself is allowed one render()
// ReactDOM.render(<App />, document.getElementById('root'));

//picked HashRouter over Router since former has in-built hashHistory prop
ReactDOM.render((
    <HashRouter>
      <Route path="/" component={App}/>
      <Route path="/live-clock" component={Clock}/>
    </HashRouter>
  ), document.getElementById('root'));
//credits end here

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();