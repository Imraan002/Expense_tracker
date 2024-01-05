import React from 'react';

const RoleBasedAccessControl = ({ userRole, children }) => {
  console.log("RoleBasedAccessControl - User Role:", userRole); // Add this line for debugging

  // Implement role-based logic as needed
  // For simplicity, assume only 'employee' role can access
  if (userRole === 'employee') {
    return <div>{children}</div>;
  } else {
    return (
    
    
    <div>Unauthorized access.. You are an admin....Refresh the Page</div>);
  }
};

export default RoleBasedAccessControl;
