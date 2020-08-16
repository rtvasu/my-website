import React from 'react';
import { NavLink } from 'react-router-dom';

//edited this section from base code in https://reacttraining.com/react-router/web/example/basic
export default class Posts extends React.Component {
    render() {
      return (
        <div>
          <h1> Posts </h1>
          <li>
            <NavLink to="/live-clock">Live Clock</NavLink>
          </li>
        </div>
      )
    }
  }
