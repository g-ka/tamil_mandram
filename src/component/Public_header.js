import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger_nav_bar from './Hamburger_nav_bar';
import { faLock , faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useData from '../hooks/useData';

const Header = () => {
  
  const { set_is_open } = useData();

  return (
    <header className='head'>
      <Link to='/' className='head_title'>
        nitt_clubs        
      </Link>           
      <Link to='/admin' className='head_admin'>
        <FontAwesomeIcon icon={faLock}/>
      </Link>              
      <button 
        className='head_menu'        
      >
        <FontAwesomeIcon className='head_menu_icon' icon={faBars} onClick={(e) => set_is_open(prev => !prev)} />
        <Hamburger_nav_bar />  
      </button>                    
    </header>
  )
}

export default Header