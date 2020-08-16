import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
            <NavLink to="/live-clock"></NavLink>
            <NavLink to="/">HOME</NavLink>
       </div>
    );
}
 
export default Navigation;