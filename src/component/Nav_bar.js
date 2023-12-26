import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav_bar = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='nav_home nav_link'>HOME</Link>
      <Link to='/announcement' className='nav_announcement nav_link'>ANNOUNCEMENT</Link>
      <Link to='/admin' className='nav_admin nav_link'>ADMIN</Link>  
      <button 
        className='nav_top'
        onClick={() => window.scrollBy(0, -window.scrollY)}
      >
        <FontAwesomeIcon className='nav_top_icon' icon={faArrowUp}/>    
      </button>    
    </nav>
  )
}

export default Nav_bar