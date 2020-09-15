import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
            <NavLink to="/live-clock"></NavLink>
            <NavLink to="/" style={{textDecoration: 'none'}}>
                <h1> HOME </h1>
            </NavLink>
       </div>
    );
}
 
export default Navigation;