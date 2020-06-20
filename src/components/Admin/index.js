/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { withAuthorization } from '../Session';
import { FirebaseContext } from '../Firebase';
import _ from 'underscore';

const AdminPage = props => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { firebase } = props;

  useEffect(() => {
    setLoading(true);
    const unsubscribe = firebase.users.onSnapshot(
      userSnapshot => {
        let users = [];

        _.each(userSnapshot.docs, data => {
          users.push({ uid: data.id, ...data.data() });
        });
        setUsers(users);
        setLoading(false);
      },
      error => {
        console.log(error);
      },
    );
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      {loading && <div>Loading ...</div>}
      {!loading && console.log(users)}
      <UserList users={users} />
    </div>
  );
};

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(AdminPage);
