import React, { useState } from 'react';
import Login from './Login';
import ReimbursementForm from './ReimbursementForm';
import RoleBasedAccessControl from './RoleBasedAccessControl';

const App = () => {
  const [userRole, setUserRole] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (role) => {
    console.log("Logged in as:", role); // Add this line for debugging
    setUserRole(role);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUserRole('');
    setLoggedIn(false);
  };

  console.log("User Role:", userRole); // Add this line for debugging

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <RoleBasedAccessControl userRole={userRole}>
          <ReimbursementForm userRole={userRole} onLogout={handleLogout} />
        </RoleBasedAccessControl>
      )}
    </div>
  );
};

export default App;
