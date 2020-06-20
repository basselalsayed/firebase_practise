import React from 'react';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import { Navbar, Nav } from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Firebase Template</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <>
    <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>

    <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>

    <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>

    <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>

    <SignOutButton />
  </>
);

const NavigationNonAuth = () => (
  <>
    <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>

    <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
  </>
);

export default Navigation;
