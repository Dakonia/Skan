import React from 'react';
import './Style/Header.css'
import { useSelector } from 'react-redux';
import Text from './Text'
import logo from './Media/Logo.svg';
import Headerlogout from './Header.status/Header.logout';
import MainLogin from './Header.status/MainLogin'
import MobileHeader from './MobileHeader/MobileHeader'


function Header() {
  const accountInfo = useSelector((state)=>state.profile.companyInfo);
  const AccountElement = accountInfo ? MainLogin : Headerlogout
  return (
    <header className='NewHeader'> 
      <div className='NewHeaderWrapper'> 
        <div className='NewLogo'> 
          <img src={logo} alt='logo' />
        </div>
        <Text />
        <AccountElement />
        <MobileHeader />
      </div>
    </header>
  );
}

export default Header;