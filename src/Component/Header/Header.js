import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
  
  return (
    <div>
      <div className="container">
        <div className="d-flex mt-5">
          <div className="navbar-brand">
            <h2>Cholo</h2>
          </div>
          <div className="menu navbar ml-auto">
            <Link to="/home" className='nav-link'>Home</Link>
            <Link to="/destination/1" className='nav-link'>Destination</Link>
            {/* <Link to="/login" className='nav-link'>Login</Link> */}

            {loggedInUser.email ? <Link to="" className="nav-link">{loggedInUser.name}</Link> : <Link to="/login" className="nav-link">Login</Link>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;