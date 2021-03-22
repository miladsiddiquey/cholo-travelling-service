import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (

    <Container>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className="text-dark" style={{ fontSize: '30px' }} href="#home">Cholo</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <Link to="/home" className='p-3 text-dark'>Home</Link>
            <Link to="/destination/1" className=' p-3 text-dark'>Destination</Link>
            {/* <Link to="/login" className='text-dark'>Login</Link>  */}
            {loggedInUser.email ? <Link to="" className="text-dark">{loggedInUser.name}</Link> : <Link to="/login" className="p-3 text-dark">Login</Link>}

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </Container>

  );
};

export default Header;