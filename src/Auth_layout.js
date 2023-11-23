import React from 'react';
import { Outlet, useLocation, Navigate, useNavigate } from 'react-router-dom';
import useData from './hooks/useData';

const Auth_layout = () => {

  const { auth } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <div className='admin'>
        <div className='admin_switches'>
          <button onClick={() => navigate('/admin/')} >Edit</button>
          <button onClick={() => navigate('/admin/messages')}>Messages</button>
          <button onClick={() => navigate('/admin/visits')}>Views</button>
        </div>
        {
          auth?.username ? 
          <Outlet /> : 
            <Navigate to='/admin_log' state={{ from: location }} replace />
        } 
    </div>           
    </>    
  )
}

export default Auth_layout