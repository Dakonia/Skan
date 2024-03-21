import React from 'react';
import Login from './Header.Login';
import Profile from './Profile/Profile'
import './Style/Main.login.css'

const AccountAfterAuthorization = () => {
  return (
    <div className='NewAccountPanel'> 
      <Login />
      <Profile />
    </div>
  );
}

export default AccountAfterAuthorization;
