import React, { useState } from 'react';
import GoogleSignUp from '../components/GoogleSignUp';
import SignUpForm from '../components/SignUpForm';
import Timer from '../components/Timer';
import { registerUser } from '../utils/api'; // API function for registering user
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Initialize the router object

  const handleGoogleSignUp = (profileObj) => {
    // Handle Google sign-up logic
    console.log('Google Sign-Up:', profileObj);
    
  };

  const handleSignUp = async (userData) => {
    try {
      
      const response = await registerUser(userData);
      console.log('Sign-Up Response:', response);
  
      // Redirect to dashboard on successful sign-up
      
      if (response && response.id) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Sign-Up Error:', error);
    }
  };

  const handleTimeout = () => {
    // Handle inactivity timeout logic
    console.log('User logged out due to inactivity.');
  };

  return (
    <div>
      {user ? (
        <div>
          Welcome, {user.name}!
          <button>Logout</button>
          <Timer onTimeout={handleTimeout} />
        </div>
      ) : (
        <div>
          <GoogleSignUp onSuccess={handleGoogleSignUp} />
          <SignUpForm onSignUp={handleSignUp} />
        </div>
      )}
    </div>
  );
}
