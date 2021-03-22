import React, { Component } from "react";
import { connect } from "react-redux";
// add any needed imports here
class Users extends Component {
  render() {
    const users = this.props.users.map((user) => {
      return (
        <li key={user.username}>
          Name: {user.username}, Hometown: {user.hometown}
        </li>
      );
    });

    return (
      <div>
        <ul>
          Users: {this.props.userCount}
          {users}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length,
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
