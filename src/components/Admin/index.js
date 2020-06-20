import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import _ from 'underscore';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    // this.listener();
    this.unsubscribe = this.props.firebase.users.onSnapshot(
      userSnapshot => {
        let users = [];

        _.each(userSnapshot.docs, data => {
          users.push({ uid: data.id, ...data.data() });
        });
        this.setState({ users, loading: false });
      },
      error => {
        console.log(error);
      },
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}
        {!loading && console.log(users)}
        <UserList users={users} />
      </div>
    );
  }
}

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
export default withFirebase(AdminPage);
