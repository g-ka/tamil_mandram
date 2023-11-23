import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/home/footer/logo.png';

const Footer = () => {
  return (
    <footer className='foot'>
      <img src={logo} className='foot_logo'/>
      <div className='foot_contact'>
        <p className='foot_contact_head'><span>HEAD</span> : 9735627789</p>
        <p className='foot_contact_co_head'><span>CO-HEAD</span> : 6534223229</p>
        <p className='foot_contact_email'><span>EMAIL</span> : tamilmandramnitt@gmail.com</p>
      </div>
      <div className='foot_links'>
        <div className='foot_links_nav'>
          <p className='foot_links_nav_head'>Navigation</p>
          <Link to='/'  className='foot_links_nav_link' >
            <p className='top'>Home</p>
            <p className='bottom'>Home</p>
          </Link>
          <Link to='/announcement' className='foot_links_nav_link' >
            <p className='top'>Announcement</p>
            <p className='bottom'>Announcement</p>
          </Link>
          <Link to='/admin_reg' className='foot_links_nav_link' >
            <p className='top'>Admin Reg</p>
            <p className='bottom'>Admin Reg</p>
          </Link>
          <Link to='/admin_log' className='foot_links_nav_link' >
            <p className='top'>Admin Log</p>
            <p className='bottom'>Admin Log</p>
          </Link>
          <Link to='/admin' className='foot_links_nav_link' >
            <p className='top'>Admin</p>
            <p className='bottom'>Admin</p>            
          </Link>
        </div>
        <div className='foot_links_sm'>
          <p className='foot_links_sm_head'>Connect with us</p>
          <a href='https://www.instagram.com/tamilmandram.nitt/channel/' target='_blanck'>
            <p className='top'>Instagram</p>
            <p className='bottom'>Instagram</p>
          </a>
          <a href='https://www.threads.net/@tamilmandram.nitt' target='_blanck'>
            <p className='top'>Thread</p>
            <p className='bottom'>Thread</p>
          </a>
          <a href='https://www.linkedin.com/company/tamil-mandram-nit-tiruchirappalli/?originalSubdomain=in' target='_blanck'>
            <p className='top'>Linkedin</p>
            <p className='bottom'>Linkedin</p>
          </a>
          <a href='https://www.facebook.com/tm.nitt/' target='_blanck'>
            <p className='top'>Facebook</p>
            <p className='bottom'>Facebook</p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer