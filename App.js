import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
 
class App extends Component {
  render() {
    return (
       <HashRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
           </Switch>
        </div> 
      </HashRouter>
    );
  }
}
 
export default App;
