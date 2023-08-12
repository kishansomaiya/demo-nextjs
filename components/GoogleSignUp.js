import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignUp = ({ onSuccess }) => {
   const responseGoogle = (response) => {
     onSuccess(response.profileObj);
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
