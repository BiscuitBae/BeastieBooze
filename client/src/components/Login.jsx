import React, { useState, useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { UserContext } from '../userContext'

const clientId = '862811879315-ur20fqc030th5oure5vsmkdg8ll94o8r.apps.googleusercontent.com';

const Login = () => {

  const { loginUser, logoutUser} = useContext(UserContext);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);


    loginUser(res.profileObj);
  };

  const onLoginFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowLoginButton(true);
    setShowLogoutButton(false);
    logoutUser();
  }

  return (
    <div>
      {showLoginButton ?
        <GoogleLogin
          clientId={clientId}
          buttonText='Login'
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      /> : null}

      {showLogoutButton ?
        <GoogleLogout
          clientId={clientId}
          buttonText='Sign Out'
          onLogoutSuccess={onSignoutSuccess}
        >
        </GoogleLogout> : null
      }
    </div>
  )
}

export default Login;
