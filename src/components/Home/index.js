import React from 'react';
import { withAuthorization } from '../Session';
import { Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Card>
      <Card.Title>Signed in users only</Card.Title>
    </Card>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
