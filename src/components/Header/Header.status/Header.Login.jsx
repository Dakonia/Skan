import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Style/Header.Login.css';
import { getCompanyInfo } from '../../Requests/profile';
import Whait from '../Media/whait.svg'

const Login = () => {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!companyQuantityInfo) {
      dispatch(getCompanyInfo());
    }
  }, [companyQuantityInfo, dispatch]);

  if (!companyQuantityInfo) {
    return <div className='Load'><img src={Whait} alt='Load' /></div>; 
  }

  console.log('Использовано компаний:', companyQuantityInfo.eventFiltersInfo.usedCompanyCount);
  console.log('Лимит по компаниям:', companyQuantityInfo.eventFiltersInfo.companyLimit);


  return (
    <div className='NewCompanyBox'> 
      <div>
        <span className='NewCompanyBox__usedCompany'>Использовано компаний</span>
        <span className='NewCompanyBox__black'>{companyQuantityInfo.eventFiltersInfo.usedCompanyCount}</span>
      </div>
      <div>
        <span className='NewCompanyBox__usedCompany'>Лимит по компаниям</span> 
        <span className='NewCompanyBox__green'>{companyQuantityInfo.eventFiltersInfo.companyLimit}</span>
      </div>
    </div>
  );
}

export default Login;