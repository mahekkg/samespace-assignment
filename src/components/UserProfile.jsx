import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center justify-center py-4 bg-gray-700 text-white rounded-lg mb-4">
      <img src="user-avatar.png" alt="User Avatar" className="h-10 w-10 rounded-full mr-2" />
      <p>Your Name</p>
    </div>
  );
};

export default UserProfile;
