import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';

const Hamburger_nav_bar = () => {

  const { is_open } = useData();

  return (
    <nav 
      className='ham_nav'
      style={{ opacity: is_open ? '1' : '0' }}
    >
      <Link to='/' className='ham_nav_home ham_nav_link'>HOME</Link>
      <Link to='/announcement' className='ham_nav_announcement ham_nav_link'>ANNOUNCEMENT</Link>
      <Link to='/admin' className='ham_nav_admin ham_nav_link'>ADMIN</Link>  
    </nav>
  )
}

export default Hamburger_nav_bar