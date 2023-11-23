import React from 'react';
import { Link } from 'react-router-dom';
import { faLock , faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className='head'>
      <Link to='/' className='head_title'>
        nitt_clubs        
      </Link>           
      <Link to='/admin' className='head_admin'>
        <FontAwesomeIcon icon={faLock}/>
      </Link>              
      <FontAwesomeIcon className='head_menu' icon={faBars}/>      
    </header>
  )
}

export default Header