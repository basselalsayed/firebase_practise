import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { Card } from 'react-bootstrap';
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Card>
        <Card.Title>Account: {authUser.email}</Card.Title>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </Card>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
