import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/index';

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      {userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error} </h2>
      ) : (
        <div>
          {userData.users.map(user => (
            <p>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
