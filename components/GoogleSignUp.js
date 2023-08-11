import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useRouter } from 'next/router'; 

const GoogleSignUp = ({ onSuccess }) => {
//   const responseGoogle = (response) => {
//     onSuccess(response.profileObj);
//   };

const router = useRouter(); // Initialize the router object

  const responseGoogle = (response) => {
    if (response.profileObj) {
      // Successful Google sign-up
      console.log('Google Sign-Up Response:', response.profileObj);

      // Redirect to dashboard upon successful sign-up
      router.push('/dashboard');
    } else {
      // Error in Google sign-up
      console.log('Google Sign-Up Error:', response.error);
    }
  };

  return (
    <GoogleLogin
      clientId="1092704681677-7ng9meaqk1grp7kurdaubrqiuii6p697.apps.googleusercontent.com"
      buttonText="Sign Up with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignUp;
