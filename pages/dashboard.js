import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import { logoutUser } from '../utils/api'; // API function for logging out user
import { useRouter } from 'next/router'; // Import the useRouter hook

export default function Dashboard() {
  const router = useRouter(); // Initialize the router object
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
        router.push('/');
      //await logoutUser(); // Call the API function to log out
      console.log('User logged out.');
      
       // Redirect to home after logout
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  const handleTimeout = () => {
    // Handle inactivity timeout logic
    console.log('User logged out due to inactivity.');
    handleLogout(); // Logout user after inactivity
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleTimeout();
    }, 10000); // 10 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
      <Timer onTimeout={handleTimeout} />
    </div>
  );
}
