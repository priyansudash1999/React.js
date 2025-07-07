import React from 'react'

const UserStatus = ({isAdmin, loggedIn}) => {
   return (
    <>
      {loggedIn && !isAdmin && <h3>Welcome User</h3>}
      {loggedIn && isAdmin && <h3>Welcome Admin</h3>}
    </>
  );
}

export default UserStatus