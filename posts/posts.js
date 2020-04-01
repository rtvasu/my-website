import React from 'react';
import { Link } from 'react-router-dom';

//edited this section from base code in https://reacttraining.com/react-router/web/example/basic
export default class Posts extends React.Component {
    render() {
      return (
        <div>
          <h1> Posts </h1>
          <li>
            <Link to="/live-clock">Live Clock</Link>
          </li>
        </div>
      )
    }
  }
